// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable } from '@angular/core';
import { CoreSites } from '@services/sites';
import { CoreSite, CoreSiteWSPreSets } from '@classes/site';
import { CoreApp } from '@services/app';
import { CoreTextUtils } from '@services/utils/text';
import { CoreTimeUtils } from '@services/utils/time';
import { CoreUrlUtils } from '@services/utils/url';
import { CoreUtils } from '@services/utils/utils';
import { CoreGroups } from '@services/groups';
import { CoreLocalNotifications } from '@services/local-notifications';
import { CoreConfig } from '@services/config';
import { ILocalNotification } from '@ionic-native/local-notifications';
import { AddonCalendarOffline } from './calendar-offline';
import { CoreUser } from '@features/user/services/user';
import { CoreWSExternalWarning, CoreWSDate } from '@services/ws';
import moment from 'moment';
import { AddonCalendarEventDBRecord, AddonCalendarReminderDBRecord, EVENTS_TABLE, REMINDERS_TABLE } from './database/calendar';
import { CoreCourses } from '@features/courses/services/courses';
import { ContextLevel, CoreConstants } from '@/core/constants';
import { CoreWSError } from '@classes/errors/wserror';
import { ApplicationInit, makeSingleton, Translate, Platform } from '@singletons';
import { AddonCalendarOfflineEventDBRecord } from './database/calendar-offline';
import { AddonCalendarMainMenuHandlerService } from './handlers/mainmenu';
import { SafeUrl } from '@angular/platform-browser';
import { CoreNavigator } from '@services/navigator';
import { AddonCalendarFilter } from './calendar-helper';
import { AddonCalendarSyncEvents, AddonCalendarSyncProvider } from './calendar-sync';

const ROOT_CACHE_KEY = 'mmaCalendar:';

/**
 * Context levels enumeration.
 */
export enum AddonCalendarEventType {
    SITE = 'site',
    CATEGORY = 'category',
    COURSE = 'course',
    GROUP = 'group',
    USER = 'user',
}

declare module '@singletons/events' {

    /**
     * Augment CoreEventsData interface with events specific to this service.
     *
     * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
     */
    export interface CoreEventsData {
        [AddonCalendarProvider.NEW_EVENT_EVENT]: AddonCalendarUpdatedEventEvent;
        [AddonCalendarProvider.EDIT_EVENT_EVENT]: AddonCalendarUpdatedEventEvent;
        [AddonCalendarProvider.DELETED_EVENT_EVENT]: AddonCalendarUpdatedEventEvent;
        [AddonCalendarProvider.UNDELETED_EVENT_EVENT]: AddonCalendarUpdatedEventEvent;
        [AddonCalendarProvider.FILTER_CHANGED_EVENT]: AddonCalendarFilter;
        [AddonCalendarSyncProvider.MANUAL_SYNCED]: AddonCalendarSyncEvents;
        [AddonCalendarSyncProvider.AUTO_SYNCED]: AddonCalendarSyncEvents;
    }

}

/**
 * Service to handle calendar events.
 */
@Injectable({ providedIn: 'root' })
export class AddonCalendarProvider {

    static readonly DAYS_INTERVAL = 30;
    static readonly COMPONENT = 'AddonCalendarEvents';
    static readonly DEFAULT_NOTIFICATION_TIME_CHANGED = 'AddonCalendarDefaultNotificationTimeChangedEvent';
    static readonly DEFAULT_NOTIFICATION_TIME_SETTING = 'mmaCalendarDefaultNotifTime';
    static readonly DEFAULT_NOTIFICATION_TIME = 60;
    static readonly STARTING_WEEK_DAY = 'addon_calendar_starting_week_day';
    static readonly NEW_EVENT_EVENT = 'addon_calendar_new_event';
    static readonly NEW_EVENT_DISCARDED_EVENT = 'addon_calendar_new_event_discarded';
    static readonly EDIT_EVENT_EVENT = 'addon_calendar_edit_event';
    static readonly DELETED_EVENT_EVENT = 'addon_calendar_deleted_event';
    static readonly UNDELETED_EVENT_EVENT = 'addon_calendar_undeleted_event';
    static readonly FILTER_CHANGED_EVENT = 'addon_calendar_filter_changed_event';

    static readonly CALENDAR_TF_24 = '%H:%M'; // Calendar time in 24 hours format.
    static readonly CALENDAR_TF_12 = '%I:%M %p'; // Calendar time in 12 hours format.

    protected weekDays: AddonCalendarWeekDaysTranslationKeys[] = [
        {
            shortname: 'addon.calendar.sun',
            fullname: 'addon.calendar.sunday',
        },
        {
            shortname: 'addon.calendar.mon',
            fullname: 'addon.calendar.monday',
        },
        {
            shortname: 'addon.calendar.tue',
            fullname: 'addon.calendar.tuesday',
        },
        {
            shortname: 'addon.calendar.wed',
            fullname: 'addon.calendar.wednesday',
        },
        {
            shortname: 'addon.calendar.thu',
            fullname: 'addon.calendar.thursday',
        },
        {
            shortname: 'addon.calendar.fri',
            fullname: 'addon.calendar.friday',
        },
        {
            shortname: 'addon.calendar.sat',
            fullname: 'addon.calendar.saturday',
        },
    ];

    /**
     * Check if a certain site allows deleting events.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved with true if can delete.
     * @since 3.3
     */
    async canDeleteEvents(siteId?: string): Promise<boolean> {
        try {
            const site = await CoreSites.getSite(siteId);

            return this.canDeleteEventsInSite(site);
        } catch {
            return false;
        }
    }

    /**
     * Check if a certain site allows deleting events.
     *
     * @param site Site. If not defined, use current site.
     * @return Whether events can be deleted.
     * @since 3.3
     */
    canDeleteEventsInSite(site?: CoreSite): boolean {
        site = site || CoreSites.getCurrentSite();

        return !!site?.wsAvailable('core_calendar_delete_calendar_events');
    }

    /**
     * Check if a certain site allows creating and editing events.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved with true if can create/edit.
     * @since 3.7.1
     */
    async canEditEvents(siteId?: string): Promise<boolean> {
        try {
            const site = await CoreSites.getSite(siteId);

            return this.canEditEventsInSite(site);
        } catch {
            return false;
        }
    }

    /**
     * Check if a certain site allows creating and editing events.
     *
     * @param site Site. If not defined, use current site.
     * @return Whether events can be created and edited.
     * @since 3.7.1
     */
    canEditEventsInSite(site?: CoreSite): boolean {
        site = site || CoreSites.getCurrentSite();

        // The WS to create/edit events requires a fix that was integrated in 3.7.1.
        return !!site?.isVersionGreaterEqualThan('3.7.1');
    }

    /**
     * Check if a certain site allows viewing events in monthly view.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved with true if monthly view is supported.
     * @since 3.4
     */
    async canViewMonth(siteId?: string): Promise<boolean> {
        try {
            const site = await CoreSites.getSite(siteId);

            return this.canViewMonthInSite(site);
        } catch {
            return false;
        }
    }

    /**
     * Check if a certain site allows viewing events in monthly view.
     *
     * @param site Site. If not defined, use current site.
     * @return Whether monthly view is supported.
     * @since 3.4
     */
    canViewMonthInSite(site?: CoreSite): boolean {
        site = site || CoreSites.getCurrentSite();

        return !!site?.wsAvailable('core_calendar_get_calendar_monthly_view');
    }

    /**
     * Gets the site main calendar page path.
     *
     * @param site Site. If not defined, use current site.
     * @return Main calendar page path of the site.
     */
    getMainCalendarPagePath(site?: CoreSite): string {
        return AddonCalendarMainMenuHandlerService.PAGE_NAME + (this.canViewMonthInSite(site) ? '' : '/list');
    }

    /**
     * Removes expired events from local DB.
     *
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved when done.
     */
    async cleanExpiredEvents(siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);
        if (this.canViewMonthInSite(site)) {
            // Site supports monthly view, don't clean expired events because user can see past events.
            return;
        }
        const events = await site.getDb().getRecordsSelect<AddonCalendarEventDBRecord>(
            EVENTS_TABLE,
            'timestart + timeduration < ?',
            [CoreTimeUtils.timestamp()],
        );

        await Promise.all(events.map((event) => this.deleteLocalEvent(event.id!, siteId)));
    }

    /**
     * Delete an event.
     *
     * @param eventId Event ID to delete.
     * @param name Name of the event to delete.
     * @param deleteAll If it's a repeated event. whether to delete all events of the series.
     * @param forceOffline True to always save it in offline.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved when done.
     */
    async deleteEvent(
        eventId: number,
        name: string,
        deleteAll = false,
        forceOffline = false,
        siteId?: string,
    ): Promise<boolean> {

        siteId = siteId || CoreSites.getCurrentSiteId();

        // Function to store the submission to be synchronized later.
        const storeOffline = (): Promise<boolean> =>
            AddonCalendarOffline.markDeleted(eventId, name, deleteAll, siteId).then(() => false);

        if (forceOffline || !CoreApp.isOnline()) {
            // App is offline, store the action.
            return storeOffline();
        }

        // If the event is already stored, discard it first.
        await AddonCalendarOffline.unmarkDeleted(eventId, siteId);
        try {
            await this.deleteEventOnline(eventId, deleteAll, siteId);

            return true;
        } catch (error) {
            if (error && !CoreUtils.isWebServiceError(error)) {
                // Couldn't connect to server, store in offline.
                return storeOffline();
            } else {
                // The WebService has thrown an error, reject.
                throw error;
            }
        }
    }

    /**
     * Delete an event. It will fail if offline or cannot connect.
     *
     * @param eventId Event ID to delete.
     * @param deleteAll If it's a repeated event. whether to delete all events of the series.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved when done.
     */
    async deleteEventOnline(eventId: number, deleteAll = false, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);
        const params: AddonCalendarDeleteCalendarEventsWSParams = {
            events: [
                {
                    eventid: eventId,
                    repeat: deleteAll,
                },
            ],
        };
        const preSets: CoreSiteWSPreSets = {
            responseExpected: false,
        };

        await site.write('core_calendar_delete_calendar_events', params, preSets);
    }

    /**
     * Delete a locally stored event cancelling all the reminders and notifications.
     *
     * @param eventId Event ID.
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Resolved when done.
     */
    protected async deleteLocalEvent(eventId: number, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);
        siteId = site.getId();

        const promises: Promise<unknown>[] = [];

        promises.push(site.getDb().deleteRecords(
            EVENTS_TABLE,
            { id: eventId },
        ));
        promises.push(site.getDb().getRecords<AddonCalendarReminderDBRecord>(
            REMINDERS_TABLE,
            { eventid: eventId },
        ).then((reminders) =>
            Promise.all(reminders.map((reminder) => this.deleteEventReminder(reminder.id!, siteId)))));

        try {
            await Promise.all(promises);
        } catch {
            // Ignore errors.
        }
    }

    /**
     * Initialize the service.
     *
     * @return Promise resolved when done.
     */
    async initialize(): Promise<void> {

        CoreLocalNotifications.registerClick<AddonCalendarPushNotificationData>(
            AddonCalendarProvider.COMPONENT,
            async (notification) => {
                if (notification.eventId) {
                    await ApplicationInit.donePromise;

                    const disabled = await this.isDisabled(notification.siteId);
                    if (disabled) {
                        // The calendar is disabled in the site, don't open it.
                        return;
                    }

                    // Check which page we should load.
                    const site = await CoreSites.getSite(notification.siteId);
                    const pageName = this.getMainCalendarPagePath(site);

                    CoreNavigator.navigateToSitePath(
                        pageName,
                        {
                            siteId: notification.siteId,
                            preferCurrentTab: false,
                            nextNavigation: {
                                path: `calendar/event/${notification.eventId}`,
                                isSitePath: true,
                            },
                        },
                    );
                }
            },
        );

    }

    /**
     * Format event time. Similar to calendar_format_event_time.
     *
     * @param event Event to format.
     * @param format Calendar time format (from getCalendarTimeFormat).
     * @param useCommonWords Whether to use common words like "Today", "Yesterday", etc.
     * @param seenDay Timestamp of day currently seen. If set, the function will not add links to this day.
     * @param showTime Determine the show time GMT timestamp.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved with the formatted event time.
     */
    async formatEventTime(
        event: AddonCalendarEventToDisplay,
        format: string,
        useCommonWords = true,
        seenDay?: number,
        showTime = 0,
        siteId?: string,
    ): Promise<string> {

        const start = event.timestart * 1000;
        const end = (event.timestart + event.timeduration) * 1000;
        let time: string;

        if (!event.timeduration) {

            if (moment(start).isSame(end, 'day')) {
                // Event starts and ends the same day.
                if (event.timeduration == CoreConstants.SECONDS_DAY) {
                    time = Translate.instant('addon.calendar.allday');
                } else {
                    time = CoreTimeUtils.userDate(start, format) + ' <strong>&raquo;</strong> ' +
                            CoreTimeUtils.userDate(end, format);
                }

            } else {
                // Event lasts more than one day.
                const timeStart = CoreTimeUtils.userDate(start, format);
                const timeEnd = CoreTimeUtils.userDate(end, format);
                const promises: Promise<void>[] = [];

                // Don't use common words when the event lasts more than one day.
                let dayStart = this.getDayRepresentation(start, false) + ', ';
                let dayEnd = this.getDayRepresentation(end, false) + ', ';

                // Add links to the days if needed.
                if (dayStart && (!seenDay || !moment(seenDay).isSame(start, 'day'))) {
                    promises.push(this.getViewUrl('day', event.timestart, undefined, siteId).then((url) => {
                        dayStart = CoreUrlUtils.buildLink(url, dayStart);

                        return;
                    }));
                }
                if (dayEnd && (!seenDay || !moment(seenDay).isSame(end, 'day'))) {
                    promises.push(this.getViewUrl('day', end / 1000, undefined, siteId).then((url) => {
                        dayEnd = CoreUrlUtils.buildLink(url, dayEnd);

                        return;
                    }));
                }

                await Promise.all(promises);

                return dayStart + timeStart + ' <strong>&raquo;</strong> ' + dayEnd + timeEnd;
            }
        } else {
            // There is no time duration.
            time = CoreTimeUtils.userDate(start, format);
        }

        if (showTime) {
            return time;
        }

        // Display day + time.
        if (seenDay && moment(seenDay).isSame(start, 'day')) {
            // This day is currently being displayed, don't add an link.
            return this.getDayRepresentation(start, useCommonWords) + ', ' + time;
        }

        // Add link to view the day.
        const url = await this.getViewUrl('day', event.timestart, undefined, siteId);

        return CoreUrlUtils.buildLink(url, this.getDayRepresentation(start, useCommonWords)) + ', ' + time;
    }

    /**
     * Get access information for a calendar (either course calendar or site calendar).
     *
     * @param courseId Course ID. If not defined, site calendar.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved with object with access information.
     * @since 3.7
     */
    async getAccessInformation(courseId?: number, siteId?: string): Promise<AddonCalendarGetCalendarAccessInformationWSResponse> {
        const site = await CoreSites.getSite(siteId);
        const params: AddonCalendarGetCalendarAccessInformationWSParams = {};
        const preSets: CoreSiteWSPreSets = {
            cacheKey: this.getAccessInformationCacheKey(courseId),
        };
        if (courseId) {
            params.courseid = courseId;
        }

        return site.read('core_calendar_get_calendar_access_information', params, preSets);
    }

    /**
     * Get cache key for calendar access information WS calls.
     *
     * @param courseId Course ID.
     * @return Cache key.
     */
    protected getAccessInformationCacheKey(courseId?: number): string {
        return ROOT_CACHE_KEY + 'accessInformation:' + (courseId || 0);
    }

    /**
     * Get all calendar events from local Db.
     *
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved with all the events.
     */
    async getAllEventsFromLocalDb(siteId?: string): Promise<AddonCalendarEventDBRecord[]> {
        const site = await CoreSites.getSite(siteId);

        return await site.getDb().getAllRecords(EVENTS_TABLE);
    }

    /**
     * Get the type of events a user can create (either course calendar or site calendar).
     *
     * @param courseId Course ID. If not defined, site calendar.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved with an object indicating the types.
     * @since 3.7
     */
    async getAllowedEventTypes(courseId?: number, siteId?: string): Promise<{[name: string]: boolean}> {
        const site = await CoreSites.getSite(siteId);
        const params: AddonCalendarGetAllowedEventTypesWSParams = {};
        const preSets: CoreSiteWSPreSets = {
            cacheKey: this.getAllowedEventTypesCacheKey(courseId),
        };
        if (courseId) {
            params.courseid = courseId;
        }
        const response: AddonCalendarGetAllowedEventTypesWSResponse =
            await site.read('core_calendar_get_allowed_event_types', params, preSets);

        // Convert the array to an object.
        const result = {};
        if (response.allowedeventtypes) {
            response.allowedeventtypes.map((type) => {
                result[type] = true;
            });
        }

        return result;
    }

    /**
     * Get cache key for calendar allowed event types WS calls.
     *
     * @param courseId Course ID.
     * @return Cache key.
     */
    protected getAllowedEventTypesCacheKey(courseId?: number): string {
        return ROOT_CACHE_KEY + 'allowedEventTypes:' + (courseId || 0);
    }

    /**
     * Get the "look ahead" for a certain user.
     *
     * @param siteId ID of the site. If not defined, use current site.
     * @return Promise resolved with the look ahead (number of days).
     */
    async getCalendarLookAhead(siteId?: string): Promise<number> {
        const site = await CoreSites.getSite(siteId);
        let value: string | undefined | null;
        try {
            value = await CoreUser.getUserPreference('calendar_lookahead');
        } catch {
            // Ignore errors.
        }

        if (typeof value == 'undefined' || value === null) {
            value = site.getStoredConfig('calendar_lookahead');
        }

        return parseInt(value as string, 10);
    }

    /**
     * Get the time format to use in calendar.
     *
     * @param siteId ID of the site. If not defined, use current site.
     * @return Promise resolved with the format.
     */
    async getCalendarTimeFormat(siteId?: string): Promise<string> {
        const site = await CoreSites.getSite(siteId);
        let format: string | undefined | null;

        try {
            format = await CoreUser.getUserPreference('calendar_timeformat');
        } catch {
            // Ignore errors.
        }

        if (!format || format === '0') {
            format = site.getStoredConfig('calendar_site_timeformat');
        }

        if (format === AddonCalendarProvider.CALENDAR_TF_12) {
            format = Translate.instant('core.strftimetime12');
        } else if (format === AddonCalendarProvider.CALENDAR_TF_24) {
            format = Translate.instant('core.strftimetime24');
        }

        return format && format !== '0' ? format : Translate.instant('core.strftimetime');
    }

    /**
     * Return the representation day. Equivalent to Moodle's calendar_day_representation.
     *
     * @param time Timestamp to get the day from.
     * @param useCommonWords Whether to use common words like "Today", "Yesterday", etc.
     * @return The formatted date/time.
     */
    getDayRepresentation(time: number, useCommonWords: boolean = true): string {

        if (!useCommonWords) {
            // We don't want words, just a date.
            return CoreTimeUtils.userDate(time, 'core.strftimedayshort');
        }

        const date = moment(time);
        const today = moment();

        if (date.isSame(today, 'day')) {
            return Translate.instant('addon.calendar.today');
        }
        if (date.isSame(today.clone().subtract(1, 'days'), 'day')) {
            return Translate.instant('addon.calendar.yesterday');
        }
        if (date.isSame(today.clone().add(1, 'days'), 'day')) {
            return Translate.instant('addon.calendar.tomorrow');
        }

        return CoreTimeUtils.userDate(time, 'core.strftimedayshort');
    }

    /**
     * Get the configured default notification time.
     *
     * @param siteId ID of the site. If not defined, use current site.
     * @return Promise resolved with the default time.
     */
    async getDefaultNotificationTime(siteId?: string): Promise<number> {
        siteId = siteId || CoreSites.getCurrentSiteId();

        const key = AddonCalendarProvider.DEFAULT_NOTIFICATION_TIME_SETTING + '#' + siteId;

        return CoreConfig.get(key, AddonCalendarProvider.DEFAULT_NOTIFICATION_TIME);
    }

    /**
     * Get a calendar event. If the server request fails and data is not cached, try to get it from local DB.
     *
     * @param id Event ID.
     * @param siteId ID of the site. If not defined, use current site.
     * @return Promise resolved when the event data is retrieved.
     */
    async getEvent(id: number, siteId?: string): Promise<AddonCalendarGetEventsEvent | AddonCalendarEventBase> {
        const site = await CoreSites.getSite(siteId);
        const preSets: CoreSiteWSPreSets = {
            cacheKey: this.getEventCacheKey(id),
            updateFrequency: CoreSite.FREQUENCY_RARELY,
        };
        const params: AddonCalendarGetCalendarEventsWSParams = {
            options: {
                userevents: false,
                siteevents: false,
            },
            events: {
                eventids: [
                    id,
                ],
            },
        };
        try {
            const response: AddonCalendarGetCalendarEventsWSResponse =
                await site.read('core_calendar_get_calendar_events', params, preSets);
            // The WebService returns all category events. Check the response to search for the event we want.
            const event = response.events.find((e) => e.id == id);

            return event || this.getEventFromLocalDb(id);
        } catch {
            return this.getEventFromLocalDb(id);
        }
    }

    /**
     * Get a calendar event by ID. This function returns more data than getEvent, but it isn't available in all Moodles.
     *
     * @param id Event ID.
     * @param siteId ID of the site. If not defined, use current site.
     * @return Promise resolved when the event data is retrieved.
     * @since 3.4
     */
    async getEventById(id: number, siteId?: string): Promise<AddonCalendarEvent> {
        const site = await CoreSites.getSite(siteId);
        const preSets: CoreSiteWSPreSets = {
            cacheKey: this.getEventCacheKey(id),
            updateFrequency: CoreSite.FREQUENCY_RARELY,
        };
        const params: AddonCalendarGetCalendarEventByIdWSParams = {
            eventid: id,
        };
        try {
            const response: AddonCalendarGetCalendarEventByIdWSResponse =
                await site.read('core_calendar_get_calendar_event_by_id', params, preSets);

            return response.event;
        } catch (error) {
            try {
                return (await this.getEventFromLocalDb(id)) as AddonCalendarEvent;
            } catch {
                throw error;
            }
        }
    }

    /**
     * Get cache key for a single event WS call.
     *
     * @param id Event ID.
     * @return Cache key.
     */
    protected getEventCacheKey(id: number): string {
        return ROOT_CACHE_KEY + 'events:' + id;
    }

    /**
     * Get a calendar event from local Db.
     *
     * @param id Event ID.
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved when the event data is retrieved.
     */
    async getEventFromLocalDb(id: number, siteId?: string): Promise<AddonCalendarGetEventsEvent | AddonCalendarEvent> {
        const site = await CoreSites.getSite(siteId);
        const record: AddonCalendarGetEventsEvent | AddonCalendarEvent | AddonCalendarEventDBRecord =
            await site.getDb().getRecord(EVENTS_TABLE, { id: id });

        if (!this.isGetEventByIdAvailableInSite(site)) {
            return record as AddonCalendarGetEventsEvent;
        }

        const eventConverted = record as AddonCalendarEvent;
        const originalEvent = record as AddonCalendarGetEventsEvent;
        const recordAsRecord = record as AddonCalendarEventDBRecord;

        // Calculate data to match the new WS.
        eventConverted.descriptionformat = originalEvent.format;
        eventConverted.iscourseevent = originalEvent.eventtype == AddonCalendarEventType.COURSE;
        eventConverted.iscategoryevent = originalEvent.eventtype == AddonCalendarEventType.CATEGORY;
        eventConverted.normalisedeventtype = this.getEventType(recordAsRecord);
        try {
            eventConverted.category = CoreTextUtils.parseJSON(recordAsRecord.category!);
        } catch {
            // Ignore errors.
        }

        try {
            eventConverted.course = CoreTextUtils.parseJSON(recordAsRecord.course!);
        } catch {
            // Ignore errors.
        }
        try {
            eventConverted.subscription = CoreTextUtils.parseJSON(recordAsRecord.subscription!);
        } catch {
            // Ignore errors.
        }

        return eventConverted;
    }

    /**
     * Adds an event reminder and schedule a new notification.
     *
     * @param event Event to update its notification time.
     * @param time New notification setting timestamp.
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved when the notification is updated.
     */
    async addEventReminder(
        event: { id: number; timestart: number; timeduration: number; name: string},
        time: number,
        siteId?: string,
    ): Promise<void> {
        const site = await CoreSites.getSite(siteId);
        const reminder: AddonCalendarReminderDBRecord = {
            eventid: event.id,
            time: time,
        };
        const reminderId = await site.getDb().insertRecord(REMINDERS_TABLE, reminder);

        await this.scheduleEventNotification(event, reminderId, time, site.getId());
    }

    /**
     * Return the normalised event type.
     * Activity events are normalised to be course events.
     *
     * @param event The event to get its type.
     * @return Event type.
     */
    getEventType(event: { modulename?: string; eventtype: AddonCalendarEventType}): string {
        if (event.modulename) {
            return 'course';
        }

        return event.eventtype;
    }

    /**
     * Remove an event reminder and cancel the notification.
     *
     * @param id Reminder ID.
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved when the notification is updated.
     */
    async deleteEventReminder(id: number, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        if (CoreLocalNotifications.isAvailable()) {
            CoreLocalNotifications.cancel(id, AddonCalendarProvider.COMPONENT, site.getId());
        }

        await site.getDb().deleteRecords(REMINDERS_TABLE, { id: id });
    }

    /**
     * Get calendar events for a certain day.
     *
     * @param year Year to get.
     * @param month Month to get.
     * @param day Day to get.
     * @param courseId Course to get.
     * @param categoryId Category to get.
     * @param ignoreCache True if it should ignore cached data (it will always fail in offline or server down).
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved with the response.
     */
    async getDayEvents(
        year: number,
        month: number,
        day: number,
        courseId?: number,
        categoryId?: number,
        ignoreCache = false,
        siteId?: string,
    ): Promise<AddonCalendarCalendarDay> {

        const site = await CoreSites.getSite(siteId);
        const params: AddonCalendarGetCalendarDayViewWSParams = {
            year: year,
            month: month,
            day: day,
        };
        if (courseId) {
            params.courseid = courseId;
        }
        if (categoryId) {
            params.categoryid = categoryId;
        }
        const preSets: CoreSiteWSPreSets = {
            cacheKey: this.getDayEventsCacheKey(year, month, day, courseId, categoryId),
            updateFrequency: CoreSite.FREQUENCY_SOMETIMES,
        };
        if (ignoreCache) {
            preSets.getFromCache = false;
            preSets.emergencyCache = false;
        }
        const response: AddonCalendarCalendarDay = await site.read('core_calendar_get_calendar_day_view', params, preSets);
        this.storeEventsInLocalDB(response.events, siteId);

        return response;
    }

    /**
     * Get prefix cache key for day events WS calls.
     *
     * @return Prefix Cache key.
     */
    protected getDayEventsPrefixCacheKey(): string {
        return ROOT_CACHE_KEY + 'day:';
    }

    /**
     * Get prefix cache key for a certain day for day events WS calls.
     *
     * @param year Year to get.
     * @param month Month to get.
     * @param day Day to get.
     * @return Prefix Cache key.
     */
    protected getDayEventsDayPrefixCacheKey(year: number, month: number, day: number): string {
        return this.getDayEventsPrefixCacheKey() + year + ':' + month + ':' + day + ':';
    }

    /**
     * Get cache key for day events WS calls.
     *
     * @param year Year to get.
     * @param month Month to get.
     * @param day Day to get.
     * @param courseId Course to get.
     * @param categoryId Category to get.
     * @return Cache key.
     */
    protected getDayEventsCacheKey(year: number, month: number, day: number, courseId?: number, categoryId?: number): string {
        return this.getDayEventsDayPrefixCacheKey(year, month, day) + (courseId ? courseId : '') + ':' +
                (categoryId ? categoryId : '');
    }

    /**
     * Get a calendar reminders from local Db.
     *
     * @param id Event ID.
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved when the event data is retrieved.
     */
    async getEventReminders(id: number, siteId?: string): Promise<AddonCalendarReminderDBRecord[]> {
        const site = await CoreSites.getSite(siteId);

        return await site.getDb().getRecords(REMINDERS_TABLE, { eventid: id }, 'time ASC');
    }

    /**
     * Get the events in a certain period. The period is calculated like this:
     *     start time: now + daysToStart
     *     end time: start time + daysInterval
     * E.g. using provider.getEventsList(undefined, 30, 30) is going to get the events starting after 30 days from now
     * and ending before 60 days from now.
     *
     * @param initialTime Timestamp when the first fetch was done. If not defined, current time.
     * @param daysToStart Number of days from now to start getting events.
     * @param daysInterval Number of days between timestart and timeend.
     * @param siteId Site to get the events from. If not defined, use current site.
     * @return Promise to be resolved when the events are retrieved.
     */
    async getEventsList(
        initialTime?: number,
        daysToStart: number = 0,
        daysInterval: number = AddonCalendarProvider.DAYS_INTERVAL,
        siteId?: string,
    ): Promise<AddonCalendarGetEventsEvent[]> {

        initialTime = initialTime || CoreTimeUtils.timestamp();

        const site = await CoreSites.getSite(siteId);
        siteId = site.getId();

        const start = initialTime + (CoreConstants.SECONDS_DAY * daysToStart);
        const end = start + (CoreConstants.SECONDS_DAY * daysInterval) - 1;

        const params: AddonCalendarGetCalendarEventsWSParams = {
            options: {
                userevents: true,
                siteevents: true,
                timestart: start,
                timeend: end,
            },
            events: {
                courseids: [],
                groupids: [],
            },
        };

        const promises: Promise<void>[] = [];

        promises.push(CoreCourses.getUserCourses(false, siteId).then((courses) => {
            params.events!.courseids = courses.map((course) => course.id);
            params.events!.courseids.push(site.getSiteHomeId()); // Add front page.

            return;
        }));

        promises.push(CoreGroups.getAllUserGroups(siteId).then((groups) => {
            params.events!.groupids = groups.map((group) => group.id);

            return;
        }));

        await Promise.all(promises);

        // We need to retrieve cached data using cache key because we have timestamp in the params.
        const preSets: CoreSiteWSPreSets = {
            cacheKey: this.getEventsListCacheKey(daysToStart, daysInterval),
            getCacheUsingCacheKey: true,
            uniqueCacheKey: true,
            updateFrequency: CoreSite.FREQUENCY_SOMETIMES,
        };
        const response: AddonCalendarGetCalendarEventsWSResponse =
            await site.read('core_calendar_get_calendar_events', params, preSets);
        if (!this.canViewMonthInSite(site)) {
            // Store events only in 3.1-3.3. In 3.4+ we'll use the new WS that return more info.
            this.storeEventsInLocalDB(response.events, siteId);
        }

        return response.events;
    }

    /**
     * Get prefix cache key for events list WS calls.
     *
     * @return Prefix Cache key.
     */
    protected getEventsListPrefixCacheKey(): string {
        return ROOT_CACHE_KEY + 'events:';
    }

    /**
     * Get cache key for events list WS calls.
     *
     * @param daysToStart Number of days from now to start getting events.
     * @param daysInterval Number of days between timestart and timeend.
     * @return Cache key.
     */
    protected getEventsListCacheKey(daysToStart: number, daysInterval: number): string {
        return this.getEventsListPrefixCacheKey() + daysToStart + ':' + daysInterval;
    }

    /**
     * Get calendar events from local Db that have the same repeatid.
     *
     * @param repeatId Repeat Id of the event.
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved with all the events.
     */
    async getLocalEventsByRepeatIdFromLocalDb(repeatId: number, siteId?: string): Promise<AddonCalendarEventDBRecord[]> {
        const site = await CoreSites.getSite(siteId);

        return await site.getDb().getRecords(EVENTS_TABLE, { repeatid: repeatId });
    }

    /**
     * Get monthly calendar events.
     *
     * @param year Year to get.
     * @param month Month to get.
     * @param courseId Course to get.
     * @param categoryId Category to get.
     * @param ignoreCache True if it should ignore cached data (it will always fail in offline or server down).
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved with the response.
     */
    async getMonthlyEvents(
        year: number,
        month: number,
        courseId?: number,
        categoryId?: number,
        ignoreCache = false,
        siteId?: string,
    ): Promise<AddonCalendarMonth> {

        const site = await CoreSites.getSite(siteId);
        const params: AddonCalendarGetCalendarMonthlyViewWSParams = {
            year: year,
            month: month,
        };
        // This parameter requires Moodle 3.5.
        if (site.isVersionGreaterEqualThan('3.5')) {
            // Set mini to 1 to prevent returning the course selector HTML.
            params.mini = true;
        }
        if (courseId) {
            params.courseid = courseId;
        }
        if (categoryId) {
            params.categoryid = categoryId;
        }

        const preSets: CoreSiteWSPreSets = {
            cacheKey: this.getMonthlyEventsCacheKey(year, month, courseId, categoryId),
            updateFrequency: CoreSite.FREQUENCY_SOMETIMES,
        };
        if (ignoreCache) {
            preSets.getFromCache = false;
            preSets.emergencyCache = false;
        }

        const response = await site.read<AddonCalendarMonth>('core_calendar_get_calendar_monthly_view', params, preSets);
        response.weeks.forEach((week) => {
            week.days.forEach((day) => {
                this.storeEventsInLocalDB(day.events as AddonCalendarCalendarEvent[], siteId);
            });
        });

        // Store starting week day preference, we need it in offline to show months that are not in cache.
        if (CoreApp.isOnline()) {
            CoreConfig.set(AddonCalendarProvider.STARTING_WEEK_DAY, response.daynames[0].dayno);
        }

        return response;
    }

    /**
     * Get prefix cache key for monthly events WS calls.
     *
     * @return Prefix Cache key.
     */
    protected getMonthlyEventsPrefixCacheKey(): string {
        return ROOT_CACHE_KEY + 'monthly:';
    }

    /**
     * Get prefix cache key for a certain month for monthly events WS calls.
     *
     * @param year Year to get.
     * @param month Month to get.
     * @return Prefix Cache key.
     */
    protected getMonthlyEventsMonthPrefixCacheKey(year: number, month: number): string {
        return this.getMonthlyEventsPrefixCacheKey() + year + ':' + month + ':';
    }

    /**
     * Get cache key for monthly events WS calls.
     *
     * @param year Year to get.
     * @param month Month to get.
     * @param courseId Course to get.
     * @param categoryId Category to get.
     * @return Cache key.
     */
    protected getMonthlyEventsCacheKey(year: number, month: number, courseId?: number, categoryId?: number): string {
        return this.getMonthlyEventsMonthPrefixCacheKey(year, month) + (courseId ? courseId : '') + ':' +
                (categoryId ? categoryId : '');
    }

    /**
     * Get upcoming calendar events.
     *
     * @param courseId Course to get.
     * @param categoryId Category to get.
     * @param ignoreCache True if it should ignore cached data (it will always fail in offline or server down).
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved with the response.
     */
    async getUpcomingEvents(
        courseId?: number,
        categoryId?: number,
        ignoreCache = false,
        siteId?: string,
    ): Promise<AddonCalendarUpcoming> {

        const site = await CoreSites.getSite(siteId);

        const params: AddonCalendarGetCalendarUpcomingViewWSParams = {};
        if (courseId) {
            params.courseid = courseId;
        }

        if (categoryId) {
            params.categoryid = categoryId;
        }

        const preSets: CoreSiteWSPreSets = {
            cacheKey: this.getUpcomingEventsCacheKey(courseId, categoryId),
            updateFrequency: CoreSite.FREQUENCY_SOMETIMES,
        };

        if (ignoreCache) {
            preSets.getFromCache = false;
            preSets.emergencyCache = false;
        }

        const response = await site.read<AddonCalendarUpcoming>('core_calendar_get_calendar_upcoming_view', params, preSets);
        this.storeEventsInLocalDB(response.events, siteId);

        return response;
    }

    /**
     * Get prefix cache key for upcoming events WS calls.
     *
     * @return Prefix Cache key.
     */
    protected getUpcomingEventsPrefixCacheKey(): string {
        return ROOT_CACHE_KEY + 'upcoming:';
    }

    /**
     * Get cache key for upcoming events WS calls.
     *
     * @param courseId Course to get.
     * @param categoryId Category to get.
     * @return Cache key.
     */
    protected getUpcomingEventsCacheKey(courseId?: number, categoryId?: number): string {
        return this.getUpcomingEventsPrefixCacheKey() + (courseId ? courseId : '') + ':' + (categoryId ? categoryId : '');
    }

    /**
     * Get URL to view a calendar.
     *
     * @param view The view to load: 'month', 'day', 'upcoming', etc.
     * @param time Time to load. If not defined, current time.
     * @param courseId Course to load. If not defined, all courses.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved with the URL.x
     */
    async getViewUrl(view: string, time?: number, courseId?: string, siteId?: string): Promise<string> {
        const site = await CoreSites.getSite(siteId);
        let url = CoreTextUtils.concatenatePaths(site.getURL(), 'calendar/view.php?view=' + view);

        if (time) {
            url += '&time=' + time;
        }
        if (courseId) {
            url += '&course=' + courseId;
        }

        return url;
    }

    /**
     * Get the week days, already ordered according to a specified starting day.
     *
     * @param startingDay Starting day. 0=Sunday, 1=Monday, ...
     * @return Week days.
     */
    getWeekDays(startingDay?: number): AddonCalendarWeekDaysTranslationKeys[] {
        startingDay = startingDay || 0;

        return this.weekDays.slice(startingDay).concat(this.weekDays.slice(0, startingDay));
    }

    /**
     * Invalidates access information.
     *
     * @param courseId Course ID. If not defined, site calendar.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateAccessInformation(courseId?: number, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKey(this.getAccessInformationCacheKey(courseId));
    }

    /**
     * Invalidates allowed event types.
     *
     * @param courseId Course ID. If not defined, site calendar.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateAllowedEventTypes(courseId?: number, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKey(this.getAllowedEventTypesCacheKey(courseId));
    }

    /**
     * Invalidates day events for all days.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateAllDayEvents(siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKeyStartingWith(this.getDayEventsPrefixCacheKey());
    }

    /**
     * Invalidates day events for a certain day.
     *
     * @param year Year.
     * @param month Month.
     * @param day Day.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateDayEvents(year: number, month: number, day: number, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKeyStartingWith(this.getDayEventsDayPrefixCacheKey(year, month, day));
    }

    /**
     * Invalidates events list and all the single events and related info.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved when the list is invalidated.
     */
    async invalidateEventsList(siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        siteId = site.getId();
        const promises: Promise<void>[] = [];
        promises.push(CoreCourses.invalidateUserCourses(siteId));
        promises.push(CoreGroups.invalidateAllUserGroups(siteId));
        promises.push(site.invalidateWsCacheForKeyStartingWith(this.getEventsListPrefixCacheKey()));

        await Promise.all(promises);
    }

    /**
     * Invalidates a single event.
     *
     * @param eventId List of courses or course ids.
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved when the list is invalidated.
     */
    async invalidateEvent(eventId: number, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKey(this.getEventCacheKey(eventId));
    }

    /**
     * Invalidates monthly events for all months.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateAllMonthlyEvents(siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKeyStartingWith(this.getMonthlyEventsPrefixCacheKey());
    }

    /**
     * Invalidates monthly events for a certain months.
     *
     * @param year Year.
     * @param month Month.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateMonthlyEvents(year: number, month: number, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKeyStartingWith(this.getMonthlyEventsMonthPrefixCacheKey(year, month));
    }

    /**
     * Invalidates upcoming events for all courses and categories.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateAllUpcomingEvents(siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKeyStartingWith(this.getUpcomingEventsPrefixCacheKey());
    }

    /**
     * Invalidates upcoming events for a certain course or category.
     *
     * @param courseId Course ID.
     * @param categoryId Category ID.
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateUpcomingEvents(courseId?: number, categoryId?: number, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);

        await site.invalidateWsCacheForKeyStartingWith(this.getUpcomingEventsCacheKey(courseId, categoryId));
    }

    /**
     * Invalidates look ahead setting.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved when the data is invalidated.
     */
    async invalidateLookAhead(siteId?: string): Promise<void> {
        await CoreUser.invalidateUserPreference('calendar_lookahead', siteId);
    }

    /**
     * Invalidates time format setting.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved when the data is invalidated.
     */
    invalidateTimeFormat(siteId?: string): Promise<void> {
        return CoreUser.invalidateUserPreference('calendar_timeformat', siteId);
    }

    /**
     * Check if Calendar is disabled in a certain site.
     *
     * @param site Site. If not defined, use current site.
     * @return Whether it's disabled.
     */
    isCalendarDisabledInSite(site?: CoreSite): boolean {
        site = site || CoreSites.getCurrentSite();

        return !!site?.isFeatureDisabled('CoreMainMenuDelegate_AddonCalendar');
    }

    /**
     * Check if Calendar is disabled in a certain site.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved with true if disabled, rejected or resolved with false otherwise.
     */
    async isDisabled(siteId?: string): Promise<boolean> {
        const site = await CoreSites.getSite(siteId);

        return this.isCalendarDisabledInSite(site);
    }

    /**
     * Check if the get event by ID WS is available.
     *
     * @param siteId Site Id. If not defined, use current site.
     * @return Promise resolved with true if available.
     * @since 3.4
     */
    async isGetEventByIdAvailable(siteId?: string): Promise<boolean> {
        try {
            const site = await CoreSites.getSite(siteId);

            return this.isGetEventByIdAvailableInSite(site);
        } catch {
            return false;
        }
    }

    /**
     * Check if the get event by ID WS is available in a certain site.
     *
     * @param site Site. If not defined, use current site.
     * @return Whether it's available.
     * @since 3.4
     */
    isGetEventByIdAvailableInSite(site?: CoreSite): boolean {
        site = site || CoreSites.getCurrentSite();

        return !!site?.wsAvailable('core_calendar_get_calendar_event_by_id');
    }

    /**
     * Get the next events for all the sites and schedules their notifications.
     * If an event notification time is 0, cancel its scheduled notification (if any).
     * If local notification plugin is not enabled, resolve the promise.
     *
     * @return Promise resolved when all the notifications have been scheduled.
     */
    async scheduleAllSitesEventsNotifications(): Promise<void> {
        await Platform.ready();

        const notificationsEnabled = CoreLocalNotifications.isAvailable();

        const siteIds = await CoreSites.getSitesIds();

        const promises = siteIds.map((siteId: string) => this.cleanExpiredEvents(siteId).then(async() => {
            if (notificationsEnabled) {
                // Check if calendar is disabled for the site.
                const disabled = await this.isDisabled(siteId);
                if (!disabled) {
                    // Get first events.
                    const events = await this.getEventsList(undefined, undefined, undefined, siteId);
                    await this.scheduleEventsNotifications(events, siteId);
                }
            }

            return;
        }));

        await Promise.all(promises);
    }

    /**
     * Schedules an event notification. If time is 0, cancel scheduled notification if any.
     * If local notification plugin is not enabled, resolve the promise.
     *
     * @param event Event to schedule.
     * @param reminderId The reminder ID.
     * @param time Notification setting time (in minutes). E.g. 10 means "notificate 10 minutes before start".
     * @param siteId Site ID the event belongs to. If not defined, use current site.
     * @return Promise resolved when the notification is scheduled.
     */
    protected async scheduleEventNotification(
        event: { id: number; timestart: number; name: string},
        reminderId: number,
        time: number,
        siteId?: string,
    ): Promise<void> {

        if (!CoreLocalNotifications.isAvailable()) {
            return;
        }

        siteId = siteId || CoreSites.getCurrentSiteId();

        if (time === 0) {
            // Cancel if it was scheduled.
            return CoreLocalNotifications.cancel(reminderId, AddonCalendarProvider.COMPONENT, siteId);
        }

        if (time == -1) {
            // If time is -1, get event default time to calculate the notification time.
            time = await this.getDefaultNotificationTime(siteId);

            if (time == 0) {
                // Default notification time is disabled, do not show.
                return CoreLocalNotifications.cancel(reminderId, AddonCalendarProvider.COMPONENT, siteId);
            }

            time = event.timestart - (time * 60);
        }

        time = time * 1000;

        if (time <= Date.now()) {
            // This reminder is over, don't schedule. Cancel if it was scheduled.
            return CoreLocalNotifications.cancel(reminderId, AddonCalendarProvider.COMPONENT, siteId);
        }

        const notificationData: AddonCalendarPushNotificationData = {
            eventId: event.id,
            reminderId: reminderId,
            siteId: siteId,
        };

        const notification: ILocalNotification = {
            id: reminderId,
            title: event.name,
            text: CoreTimeUtils.userDate(event.timestart * 1000, 'core.strftimedaydatetime', true),
            icon: 'file://assets/img/icons/calendar.png',
            trigger: {
                at: new Date(time),
            },
            data: notificationData,
        };

        return CoreLocalNotifications.schedule(notification, AddonCalendarProvider.COMPONENT, siteId);
    }

    /**
     * Schedules the notifications for a list of events.
     * If an event notification time is 0, cancel its scheduled notification (if any).
     * If local notification plugin is not enabled, resolve the promise.
     *
     * @param events Events to schedule.
     * @param siteId ID of the site the events belong to. If not defined, use current site.
     * @return Promise resolved when all the notifications have been scheduled.
     */
    async scheduleEventsNotifications(
        events: ({ id: number; timestart: number; timeduration: number; name: string})[],
        siteId?: string,
    ): Promise<void> {

        if (!CoreLocalNotifications.isAvailable()) {
            return;
        }

        siteId = siteId || CoreSites.getCurrentSiteId();

        const promises = events.map(async (event) => {
            const timeEnd = (event.timestart + event.timeduration) * 1000;

            if (timeEnd <= new Date().getTime()) {
                // The event has finished already, don't schedule it.
                return this.deleteLocalEvent(event.id, siteId);
            }

            const reminders = await this.getEventReminders(event.id, siteId);

            const p2 = reminders.map((reminder: AddonCalendarReminderDBRecord) =>
                this.scheduleEventNotification(event, (reminder.id!), reminder.time, siteId));

            await Promise.all(p2);
        });

        await Promise.all(promises);
    }

    /**
     * Set the default notification time.
     *
     * @param time New default time.
     * @param siteId ID of the site. If not defined, use current site.
     * @return Promise resolved when stored.
     */
    async setDefaultNotificationTime(time: number, siteId?: string): Promise<void> {
        siteId = siteId || CoreSites.getCurrentSiteId();

        const key = AddonCalendarProvider.DEFAULT_NOTIFICATION_TIME_SETTING + '#' + siteId;

        await CoreConfig.set(key, time);
    }

    /**
     * Store an event in local DB as it is.
     *
     * @param event Event to store.
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved when stored.
     */
    async storeEventInLocalDb(event: AddonCalendarGetEventsEvent | AddonCalendarCalendarEvent, siteId?: string): Promise<void> {
        const site = await CoreSites.getSite(siteId);
        siteId = site.getId();
        try {
            await this.getEventFromLocalDb(event.id, site.id);
        } catch {
            // Event does not exist. Check if any reminder exists first.
            const reminders = await this.getEventReminders(event.id, siteId);

            if (reminders.length == 0) {
                this.addEventReminder(event, -1, siteId);
            }
        }

        // Don't store data that can be calculated like formattedtime, iscategoryevent, etc.
        let eventRecord: AddonCalendarEventDBRecord = {
            id: event.id,
            name: event.name,
            description: event.description || '',
            eventtype: event.eventtype,
            timestart: event.timestart,
            timeduration: event.timeduration,
            categoryid: event.categoryid,
            groupid: event.groupid,
            userid: event.userid,
            instance: event.instance,
            modulename: event.modulename,
            timemodified: event.timemodified,
            repeatid: event.repeatid,
            visible: event.visible,
        };

        if ('descriptionformat' in event) {
            eventRecord = Object.assign(eventRecord, {
                courseid: event.course?.id,
                location: event.location,
                eventcount: event.eventcount,
                timesort: event.timesort,
                category: event.category ? JSON.stringify(event.category) : undefined,
                course: event.course ? JSON.stringify(event.course) : undefined,
                subscription: event.subscription ? JSON.stringify(event.subscription) : undefined,
                canedit: event.canedit ? 1 : 0,
                candelete: event.candelete ? 1 : 0,
                deleteurl: event.deleteurl,
                editurl: event.editurl,
                viewurl: event.viewurl,
                isactionevent: event.isactionevent ? 1 : 0,
                url: event.url,
                islastday: event.islastday ? 1 : 0,
                popupname: event.popupname,
                mindaytimestamp: event.mindaytimestamp,
                maxdaytimestamp: event.maxdaytimestamp,
                draggable: event.draggable ? 1 : 0,
            });
        } else if ('uuid' in event) {
            eventRecord = Object.assign(eventRecord, {
                courseid: event.courseid,
                uuid: event.uuid,
                sequence: event.sequence,
                subscriptionid: event.subscriptionid,
            });
        }

        await site.getDb().insertRecord(EVENTS_TABLE, eventRecord);
    }

    /**
     * Store events in local DB.
     *
     * @param events Events to store.
     * @param siteId ID of the site the event belongs to. If not defined, use current site.
     * @return Promise resolved when the events are stored.
     */
    protected async storeEventsInLocalDB(
        events: (AddonCalendarGetEventsEvent | AddonCalendarCalendarEvent)[],
        siteId?: string,
    ): Promise<void> {
        const site = await CoreSites.getSite(siteId);
        siteId = site.getId();

        await Promise.all(events.map((event: AddonCalendarGetEventsEvent| AddonCalendarCalendarEvent) =>
            // If event does not exist on the DB, schedule the reminder.
            this.storeEventInLocalDb(event, siteId)));
    }

    /**
     * Submit a calendar event.
     *
     * @param eventId ID of the event. If undefined/null, create a new event.
     * @param formData Form data.
     * @param timeCreated The time the event was created. Only if modifying a new offline event.
     * @param forceOffline True to always save it in offline.
     * @param siteId Site ID. If not defined, current site.
     * @return Promise resolved with the event and a boolean indicating if data was sent to server or stored in offline.
     */
    async submitEvent(
        eventId: number | undefined,
        formData: AddonCalendarSubmitCreateUpdateFormDataWSParams,
        timeCreated?: number,
        forceOffline = false,
        siteId?: string,
    ): Promise<{sent: boolean; event: AddonCalendarOfflineEventDBRecord | AddonCalendarEvent}> {

        siteId = siteId || CoreSites.getCurrentSiteId();

        // Function to store the event to be synchronized later.
        const storeOffline = (): Promise<{ sent: boolean; event: AddonCalendarOfflineEventDBRecord }> =>
            AddonCalendarOffline.saveEvent(eventId, formData, timeCreated, siteId).then((event) =>
                ({ sent: false, event }));

        if (forceOffline || !CoreApp.isOnline()) {
            // App is offline, store the event.
            return storeOffline();
        }

        if (eventId) {
            // If the event is already stored, discard it first.
            await AddonCalendarOffline.deleteEvent(eventId, siteId);
        }
        try {
            const event = await this.submitEventOnline(eventId, formData, siteId);

            return ({ sent: true, event });
        } catch (error) {
            if (error && !CoreUtils.isWebServiceError(error)) {
                // Couldn't connect to server, store in offline.
                return storeOffline();
            } else {
                // The WebService has thrown an error, reject.
                throw error;
            }
        }
    }

    /**
     * Submit an event, either to create it or to edit it. It will fail if offline or cannot connect.
     *
     * @param eventId ID of the event. If undefined/null, create a new event.
     * @param formData Form data.
     * @param siteId Site ID. If not provided, current site.
     * @return Promise resolved when done.
     */
    async submitEventOnline(
        eventId: number = 0,
        formData: AddonCalendarSubmitCreateUpdateFormDataWSParams,
        siteId?: string,
    ): Promise<AddonCalendarEvent> {
        const site = await CoreSites.getSite(siteId);
        // Add data that is "hidden" in web.
        formData.id = eventId;
        formData.userid = site.getUserId();
        formData.visible = 1;
        formData.instance = 0;
        if (eventId > 0) {
            formData['_qf__core_calendar_local_event_forms_update'] = 1;
        } else {
            formData['_qf__core_calendar_local_event_forms_create'] = 1;
        }
        const params: AddonCalendarSubmitCreateUpdateFormWSParams = {
            formdata: CoreUtils.objectToGetParams(formData),
        };
        const result =
            await site.write<AddonCalendarSubmitCreateUpdateFormWSResponse>('core_calendar_submit_create_update_form', params);
        if (result.validationerror) {
            // Simulate a WS error.
            throw new CoreWSError({
                message: Translate.instant('core.invalidformdata'),
                errorcode: 'validationerror',
            });
        }

        return result.event!;
    }

}

export const AddonCalendar = makeSingleton(AddonCalendarProvider);

/**
 * Data returned by calendar's events_exporter.
 * Data returned by core_calendar_get_action_events_by_course and core_calendar_get_action_events_by_timesort WS.
 */
export type AddonCalendarEvents = {
    events: AddonCalendarEvent[]; // Events.
    firstid: number; // Firstid.
    lastid: number; // Lastid.
};

/**
 * Params of core_calendar_get_action_events_by_courses WS.
 */
export type AddonCalendarGetActionEventsByCoursesWSParams = {
    courseids: number[];
    timesortfrom?: number; // Time sort from.
    timesortto?: number; // Time sort to.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by calendar's events_grouped_by_course_exporter.
 * Data returned by core_calendar_get_action_events_by_courses WS.
 */
export type AddonCalendarEventsGroupedByCourse = {
    groupedbycourse: AddonCalendarEventsSameCourse[]; // Groupped by course.
};

/**
 * Params of core_calendar_get_action_events_by_course WS.
 */
export type AddonCalendarGetActionEventsByCourseWSParams = {
    courseid: number; // Course id.
    timesortfrom?: number; // Time sort from.
    timesortto?: number; // Time sort to.
    aftereventid?: number; // The last seen event id.
    limitnum?: number; // Limit number.
};

/**
 * Params of core_calendar_get_action_events_by_timesort WS.
 */
export type AddonCalendarGetActionEventsByTimesortWSParams = {
    timesortfrom?: number; // Time sort from.
    timesortto?: number; // Time sort to.
    aftereventid?: number; // The last seen event id.
    limitnum?: number; // Limit number.
    limittononsuspendedevents?: boolean; // Limit the events to courses the user is not suspended in.
    userid?: number; // The user id.
};

/**
 * Data returned by calendar's events_same_course_exporter.
 */
export type AddonCalendarEventsSameCourse = AddonCalendarEvents & {
    courseid: number; // Courseid.
};

/**
 * Data returned by calendar's event_exporter_base.
 */
export type AddonCalendarEventBase = {
    id: number; // Id.
    name: string; // Name.
    description?: string; // Description.
    descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    location?: string; // @since 3.6. Location.
    categoryid?: number; // Categoryid.
    groupid?: number; // Groupid.
    userid?: number; // Userid.
    repeatid?: number; // Repeatid.
    eventcount?: number; // Eventcount.
    modulename?: string; // Modulename.
    instance?: number; // Instance.
    eventtype: AddonCalendarEventType; // Eventtype.
    timestart: number; // Timestart.
    timeduration: number; // Timeduration.
    timesort: number; // Timesort.
    visible: number; // Visible.
    timemodified: number; // Timemodified.
    icon: {
        key: string; // Key.
        component: string; // Component.
        alttext: string; // Alttext.
    };
    category?: {
        id: number; // Id.
        name: string; // Name.
        idnumber: string; // Idnumber.
        description?: string; // Description.
        parent: number; // Parent.
        coursecount: number; // Coursecount.
        visible: number; // Visible.
        timemodified: number; // Timemodified.
        depth: number; // Depth.
        nestedname: string; // Nestedname.
        url: string; // Url.
    };
    course?: {
        id: number; // Id.
        fullname: string; // Fullname.
        shortname: string; // Shortname.
        idnumber: string; // Idnumber.
        summary: string; // Summary.
        summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        startdate: number; // Startdate.
        enddate: number; // Enddate.
        visible: boolean; // @since 3.8. Visible.
        fullnamedisplay: string; // Fullnamedisplay.
        viewurl: string; // Viewurl.
        courseimage: string; // @since 3.6. Courseimage.
        progress?: number; // @since 3.6. Progress.
        hasprogress: boolean; // @since 3.6. Hasprogress.
        isfavourite: boolean; // @since 3.6. Isfavourite.
        hidden: boolean; // @since 3.6. Hidden.
        timeaccess?: number; // @since 3.6. Timeaccess.
        showshortname: boolean; // @since 3.6. Showshortname.
        coursecategory: string; // @since 3.7. Coursecategory.
    };
    subscription?: {
        displayeventsource: boolean; // Displayeventsource.
        subscriptionname?: string; // Subscriptionname.
        subscriptionurl?: string; // Subscriptionurl.
    };
    canedit: boolean; // Canedit.
    candelete: boolean; // Candelete.
    deleteurl: string; // Deleteurl.
    editurl: string; // Editurl.
    viewurl: string; // Viewurl.
    formattedtime: string; // Formattedtime.
    isactionevent: boolean; // Isactionevent.
    iscourseevent: boolean; // Iscourseevent.
    iscategoryevent: boolean; // Iscategoryevent.
    groupname?: string; // Groupname.
    normalisedeventtype: string; // @since 3.7. Normalisedeventtype.
    normalisedeventtypetext: string; // @since 3.7. Normalisedeventtypetext.
};

/**
 * Data returned by calendar's event_exporter. Don't confuse it with AddonCalendarCalendarEvent.
 */
export type AddonCalendarEvent = AddonCalendarEventBase & {
    url: string; // Url.
    action?: {
        name: string; // Name.
        url: string; // Url.
        itemcount: number; // Itemcount.
        actionable: boolean; // Actionable.
        showitemcount: boolean; // Showitemcount.
    };
};

/**
 * Data returned by calendar's calendar_event_exporter. Don't confuse it with AddonCalendarEvent.
 */
export type AddonCalendarCalendarEvent = AddonCalendarEventBase & {
    url: string; // Url.
    islastday: boolean; // Islastday.
    popupname: string; // Popupname.
    mindaytimestamp?: number; // Mindaytimestamp.
    mindayerror?: string; // Mindayerror.
    maxdaytimestamp?: number; // Maxdaytimestamp.
    maxdayerror?: string; // Maxdayerror.
    draggable: boolean; // Draggable.
};

/**
 * Any of the possible types of events.
 */
export type AddonCalendarAnyEvent = AddonCalendarGetEventsEvent | AddonCalendarEvent | AddonCalendarCalendarEvent;

/**
 * Data returned by calendar's calendar_day_exporter. Don't confuse it with AddonCalendarDay.
 */
export type AddonCalendarCalendarDay = {
    events: AddonCalendarCalendarEvent[]; // Events.
    defaulteventcontext: number; // Defaulteventcontext.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    filter_selector: string; // Filter_selector.
    courseid: number; // Courseid.
    categoryid?: number; // Categoryid.
    neweventtimestamp: number; // Neweventtimestamp.
    date: CoreWSDate;
    periodname: string; // Periodname.
    previousperiod: CoreWSDate;
    previousperiodlink: string; // Previousperiodlink.
    previousperiodname: string; // Previousperiodname.
    nextperiod: CoreWSDate;
    nextperiodname: string; // Nextperiodname.
    nextperiodlink: string; // Nextperiodlink.
    larrow: string; // Larrow.
    rarrow: string; // Rarrow.
};

/**
 * Params of core_calendar_get_calendar_monthly_view WS.
 */
export type AddonCalendarGetCalendarMonthlyViewWSParams = {
    year: number; // Year to be viewed.
    month: number; // Month to be viewed.
    courseid?: number; // Course being viewed.
    categoryid?: number; // Category being viewed.
    includenavigation?: boolean; // Whether to show course navigation.
    mini?: boolean; // Whether to return the mini month view or not.
    day?: number; // Day to be viewed.
};

/**
 * Data returned by calendar's month_exporter and core_calendar_get_calendar_monthly_view WS.
 */
export type AddonCalendarMonth = {
    url: string; // Url.
    courseid: number; // Courseid.
    categoryid?: number; // Categoryid.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    filter_selector?: string; // Filter_selector.
    weeks: AddonCalendarWeek[]; // Weeks.
    daynames: AddonCalendarDayName[]; // Daynames.
    view: string; // View.
    date: CoreWSDate;
    periodname: string; // Periodname.
    includenavigation: boolean; // Includenavigation.
    initialeventsloaded: boolean; // @since 3.5. Initialeventsloaded.
    previousperiod: CoreWSDate;
    previousperiodlink: string; // Previousperiodlink.
    previousperiodname: string; // Previousperiodname.
    nextperiod: CoreWSDate;
    nextperiodname: string; // Nextperiodname.
    nextperiodlink: string; // Nextperiodlink.
    larrow: string; // Larrow.
    rarrow: string; // Rarrow.
    defaulteventcontext: number; // Defaulteventcontext.
};

/**
 * Data returned by calendar's week_exporter.
 */
export type AddonCalendarWeek = {
    prepadding: number[]; // Prepadding.
    postpadding: number[]; // Postpadding.
    days: AddonCalendarWeekDay[]; // Days.
};

/**
 * Data returned by calendar's week_day_exporter.
 */
export type AddonCalendarWeekDay = AddonCalendarDay & {
    istoday: boolean; // Istoday.
    isweekend: boolean; // Isweekend.
    popovertitle: string; // Popovertitle.
    ispast?: boolean; // Calculated in the app. Whether the day is in the past.
    filteredEvents?: AddonCalendarEventToDisplay[]; // Calculated in the app. Filtered events.
    eventsFormated?: AddonCalendarEventToDisplay[]; // Events.
    periodName?: string;
};

/**
 * Data returned by calendar's day_exporter. Don't confuse it with AddonCalendarCalendarDay.
 */
export type AddonCalendarDay = {
    seconds: number; // Seconds.
    minutes: number; // Minutes.
    hours: number; // Hours.
    mday: number; // Mday.
    wday: number; // Wday.
    year: number; // Year.
    yday: number; // Yday.
    timestamp: number; // Timestamp.
    neweventtimestamp: number; // Neweventtimestamp.
    viewdaylink?: string; // Viewdaylink.
    events: AddonCalendarCalendarEvent[]; // Events.
    hasevents: boolean; // Hasevents.
    calendareventtypes: AddonCalendarEventType[]; // Calendareventtypes.
    previousperiod: number; // Previousperiod.
    nextperiod: number; // Nextperiod.
    navigation: string; // Navigation.
    haslastdayofevent: boolean; // Haslastdayofevent.
};

/**
 * Data returned by calendar's day_name_exporter.
 */
export type AddonCalendarDayName = {
    dayno: number; // Dayno.
    shortname: string; // Shortname.
    fullname: string; // Fullname.
};

/**
 * Params of core_calendar_get_calendar_upcoming_view WS.
 */
type AddonCalendarGetCalendarUpcomingViewWSParams = {
    courseid?: number; // Course being viewed.
    categoryid?: number; // Category being viewed.
};

/**
 * Data returned by calendar's calendar_upcoming_exporter and core_calendar_get_calendar_upcoming_view WS.
 */
export type AddonCalendarUpcoming = {
    events: AddonCalendarCalendarEvent[]; // Events.
    defaulteventcontext: number; // Defaulteventcontext.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    filter_selector: string; // Filter_selector.
    courseid: number; // Courseid.
    categoryid?: number; // Categoryid.
    isloggedin: boolean; // Isloggedin.
    date: CoreWSDate; // @since 3.8. Date.
};

/**
 * Params of core_calendar_get_calendar_access_information WS.
 */
type AddonCalendarGetCalendarAccessInformationWSParams = {
    courseid?: number; // Course to check, empty for site calendar events.
};

/**
 * Data returned by core_calendar_get_calendar_access_information WS.
 */
export type AddonCalendarGetCalendarAccessInformationWSResponse = {
    canmanageentries: boolean; // Whether the user can manage entries.
    canmanageownentries: boolean; // Whether the user can manage its own entries.
    canmanagegroupentries: boolean; // Whether the user can manage group entries.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_get_allowed_event_types WS.
 */
type AddonCalendarGetAllowedEventTypesWSParams = {
    courseid?: number; // Course to check, empty for site.
};

/**
 * Data returned by core_calendar_get_allowed_event_types WS.
 */
export type AddonCalendarGetAllowedEventTypesWSResponse = {
    allowedeventtypes: AddonCalendarEventType[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_get_calendar_events WS.
 */
type AddonCalendarGetCalendarEventsWSParams = {
    events?: {
        eventids?: number[]; // List of event ids.
        courseids?: number[]; // List of course ids for which events will be returned.
        groupids?: number[]; // List of group ids for which events should be returned.
        categoryids?: number[]; // List of category ids for which events will be returned.
    }; // Event details.
    options?: {
        userevents?: boolean; // Set to true to return current user's user events.
        siteevents?: boolean; // Set to true to return site events.
        timestart?: number; // Time from which events should be returned.
        timeend?: number; // Time to which the events should be returned. We treat 0 and null as no end.
        ignorehidden?: boolean; // Ignore hidden events or not.
    }; // Options.
};

/**
 * Data returned by core_calendar_get_calendar_events WS.
 */
export type AddonCalendarGetCalendarEventsWSResponse = {
    events: AddonCalendarGetEventsEvent[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Event data returned by WS core_calendar_get_calendar_events.
 */
export type AddonCalendarGetEventsEvent = {
    id: number; // Event id.
    name: string; // Event name.
    description?: string; // Description.
    format: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    courseid: number; // Course id.
    categoryid?: number; // @since 3.4. Category id (only for category events).
    groupid: number; // Group id.
    userid: number; // User id.
    repeatid: number; // Repeat id.
    modulename?: string; // Module name.
    instance: number; // Instance id.
    eventtype: AddonCalendarEventType; // Event type.
    timestart: number; // Timestart.
    timeduration: number; // Time duration.
    visible: number; // Visible.
    uuid?: string; // Unique id of ical events.
    sequence: number; // Sequence.
    timemodified: number; // Time modified.
    subscriptionid?: number; // Subscription id.
};

/**
 * Params of core_calendar_get_calendar_event_by_id WS.
 */
type AddonCalendarGetCalendarEventByIdWSParams = {
    eventid: number; // The event id to be retrieved.
};

/**
 * Data returned by core_calendar_get_calendar_event_by_id WS.
 */
export type AddonCalendarGetCalendarEventByIdWSResponse = {
    event: AddonCalendarEvent; // Event.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Result of WS core_calendar_submit_create_update_form.
 */
export type AddonCalendarSubmitCreateUpdateFormResult = {
    event?: AddonCalendarEvent; // Event.
    validationerror: boolean; // Invalid form data.
};

/**
 * Params of core_calendar_delete_calendar_events WS.
 */
type AddonCalendarDeleteCalendarEventsWSParams = {
    events: {
        eventid: number; // Event ID.
        repeat: boolean; // Delete comeplete series if repeated event.
    }[];
};

/**
 * Params of core_calendar_get_calendar_day_view WS.
 */
type AddonCalendarGetCalendarDayViewWSParams = {
    year: number; // Year to be viewed.
    month: number; // Month to be viewed.
    day: number; // Day to be viewed.
    courseid?: number; // Course being viewed.
    categoryid?: number; // Category being viewed.
};

/**
 * Params of core_calendar_submit_create_update_form WS.
 */
type AddonCalendarSubmitCreateUpdateFormWSParams = {
    formdata: string; // The data from the event form. See @AddonCalendarSubmitCreateUpdateFormDataWSParams
};

/**
 * Form data on AddonCalendarSubmitCreateUpdateFormWSParams.
 */
export type AddonCalendarSubmitCreateUpdateFormDataWSParams = Omit<AddonCalendarOfflineEventDBRecord, 'description'> & {
    description?: {
        text: string;
        format: number;
    };
    visible?: number;
    instance?: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _qf__core_calendar_local_event_forms_update?: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _qf__core_calendar_local_event_forms_create?: number;
};

/**
 * Data returned by core_calendar_submit_create_update_form WS.
 */
export type AddonCalendarSubmitCreateUpdateFormWSResponse = {
    event?: AddonCalendarEvent;
    validationerror?: boolean; // Invalid form data.
};

export type AddonCalendarWeekDaysTranslationKeys = { shortname: string; fullname: string };

export type AddonCalendarEventToDisplay = Partial<AddonCalendarCalendarEvent> & {
    id: number;
    name: string;
    timestart: number;
    timeduration: number;
    eventcount: number;
    eventtype: AddonCalendarEventType;
    courseid?: number;
    offline?: boolean;
    showDate?: boolean; // Calculated in the app. Whether date should be shown before this event.
    endsSameDay?: boolean; // Calculated in the app. Whether the event finishes the same day it starts.
    deleted?: boolean; // Calculated in the app. Whether it has been deleted in offline.
    encodedLocation?: SafeUrl; // Calculated in the app. Sanitized location link.
    eventIcon?: string; // Calculated in the app. Event icon.
    iconTitle?: string;
    moduleIcon?: string; // Calculated in the app. Module icon.
    formattedType: string; // Calculated in the app. Formatted type.
    duration?: number; // Calculated in the app. Duration of offline event.
    format?: number; // Calculated in the app. Format of offline event.
    timedurationuntil?: number; // Calculated in the app. Time duration until of offline event.
    timedurationminutes?: number; // Calculated in the app. Time duration in minutes of offline event.
    ispast?: boolean; // Calculated in the app. Whether the event is in the past.
    contextLevel?: ContextLevel;
    contextInstanceId?: number;
};

/**
 * Event triggered when an event is modified with event types:
 * NEW_EVENT_EVENT, EDIT_EVENT_EVENT, DELETED_EVENT_EVENT, UNDELETED_EVENT_EVENT.
 */
export type AddonCalendarUpdatedEventEvent = {
    eventId: number;
    sent?: boolean;
};

/**
 * Additional data sent in push notifications, with some calculated data.
 */
type AddonCalendarPushNotificationData = {
    eventId: number;
    reminderId: number;
    siteId: string;
};
