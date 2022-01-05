(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-day-day-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.calendar.calendarevents' | translate }}</h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openFilter($event)\" [attr.aria-label]=\"'core.filter' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-filter\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <core-context-menu>\n                <core-context-menu-item *ngIf=\"!isCurrentDay\" [priority]=\"900\" [content]=\"'addon.calendar.today' | translate\"\n                    iconAction=\"fas-calendar-day\" (action)=\"goToCurrentDay()\">\n                </core-context-menu-item>\n                <core-context-menu-item [hidden]=\"!loaded || !hasOffline || !isOnline\" [priority]=\"400\"\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event)\"\n                    [iconAction]=\"syncIcon\" [closeOnClick]=\"false\">\n                </core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <!-- Period name and arrows to navigate. -->\n    <ion-grid class=\"ion-no-padding safe-area-page\">\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-text-start\" *ngIf=\"currentMoment\">\n                <ion-button fill=\"clear\" (click)=\"loadPrevious()\" [attr.aria-label]=\"'addon.calendar.dayprev' | translate\">\n                    <ion-icon name=\"fas-chevron-left\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </ion-col>\n            <ion-col class=\"ion-text-center addon-calendar-period\">\n                <h3>{{ periodName }}</h3>\n            </ion-col>\n            <ion-col class=\"ion-text-end\" *ngIf=\"currentMoment\">\n                <ion-button fill=\"clear\" (click)=\"loadNext()\" [attr.aria-label]=\"'addon.calendar.daynext' | translate\">\n                    <ion-icon name=\"fas-chevron-right\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <core-loading [hideUntil]=\"loaded\" class=\"safe-area-page\">\n        <!-- There is data to be synchronized -->\n        <ion-card class=\"core-warning-card\" *ngIf=\"hasOffline\">\n            <ion-item>\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'core.day' | translate} }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <core-empty-box *ngIf=\"!filteredEvents || !filteredEvents.length\" icon=\"fas-calendar\" inline=\"true\"\n            [message]=\"'addon.calendar.noevents' | translate\">\n        </core-empty-box>\n\n        <ion-list *ngIf=\"filteredEvents && filteredEvents.length\" class=\"ion-no-margin\">\n            <ng-container *ngFor=\"let event of filteredEvents\">\n                <ion-item class=\"addon-calendar-event ion-text-wrap\" [attr.aria-label]=\"event.name\" (click)=\"gotoEvent(event.id)\"\n                [class.item-dimmed]=\"event.ispast\" [ngClass]=\"['addon-calendar-eventtype-'+event.eventtype]\" button detail=\"true\">\n                    <img *ngIf=\"event.moduleIcon\" src=\"{{event.moduleIcon}}\" slot=\"start\" class=\"core-module-icon\" alt=\"\"\n                        role=\"presentation\">\n                    <ion-icon *ngIf=\"event.eventIcon && !event.moduleIcon\" [name]=\"event.eventIcon\" slot=\"start\" aria-hidden=\"true\">\n                    </ion-icon>\n                    <ion-label>\n                        <!-- Add the icon title so accessibility tools read it. -->\n                        <span class=\"sr-only\">\n                            {{ 'addon.calendar.type' + event.formattedType | translate }}\n                            <span class=\"sr-only\" *ngIf=\"event.moduleIcon && event.iconTitle\">{{ event.iconTitle }}</span>\n                        </span>\n                        <p class=\"item-heading\">\n                            <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\"\n                            [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\n                        </p>\n                        <p [innerHTML]=\"event.formattedtime\"></p>\n                    </ion-label>\n                    <ion-note *ngIf=\"event.offline && !event.deleted\" slot=\"end\">\n                        <ion-icon name=\"fas-clock\" aria-hidden=\"true\"></ion-icon>\n                        <span class=\"ion-text-wrap\">{{ 'core.notsent' | translate }}</span>\n                    </ion-note>\n                    <ion-note *ngIf=\"event.deleted\" slot=\"end\">\n                        <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon>\n                        <span class=\"ion-text-wrap\">{{ 'core.deletedoffline' | translate }}</span>\n                    </ion-note>\n                </ion-item>\n            </ng-container>\n        </ion-list>\n    </core-loading>\n\n    <!-- Create a calendar event. -->\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"canCreate && loaded\">\n        <ion-fab-button (click)=\"openEdit()\" [attr.aria-label]=\"'addon.calendar.newevent' | translate\">\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'addon.calendar.newevent' | translate }}</span>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/calendar/pages/day/day.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/calendar/pages/day/day.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonCalendarDayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarDayPageModule", function() { return AddonCalendarDayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/addons/calendar/components/components.module.ts");
/* harmony import */ var _day_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day.page */ "./src/addons/calendar/pages/day/day.page.ts");
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






const routes = [
    {
        path: '',
        component: _day_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarDayPage"],
    },
];
let AddonCalendarDayPageModule = class AddonCalendarDayPageModule {
};
AddonCalendarDayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarComponentsModule"],
        ],
        declarations: [
            _day_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarDayPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarDayPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/day/day.page.ts":
/*!***************************************************!*\
  !*** ./src/addons/calendar/pages/day/day.page.ts ***!
  \***************************************************/
/*! exports provided: AddonCalendarDayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarDayPage", function() { return AddonCalendarDayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _components_filter_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/filter/filter */ "./src/addons/calendar/components/filter/filter.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
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




















/**
 * Page that displays the calendar events for a certain day.
 */
let AddonCalendarDayPage = class AddonCalendarDayPage {
    constructor() {
        this.categories = {};
        this.events = []; // Events (both online and offline).
        this.onlineEvents = [];
        this.offlineEvents = {}; // Offline events classified in month & day.
        this.offlineEditedEventsIds = []; // IDs of events edited in offline.
        this.deletedEvents = []; // Events deleted in offline.
        this.filteredEvents = [];
        this.canCreate = false;
        this.courses = [];
        this.loaded = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_19__["CoreConstants"].ICON_LOADING;
        this.isCurrentDay = false;
        this.isPastDay = false;
        this.filter = {
            filtered: false,
            courseId: undefined,
            categoryId: undefined,
            course: true,
            group: true,
            site: true,
            user: true,
            category: true,
        };
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId();
        if (_services_local_notifications__WEBPACK_IMPORTED_MODULE_4__["CoreLocalNotifications"].isAvailable()) {
            // Re-schedule events if default time changes.
            this.obsDefaultTimeChange = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarProvider"].DEFAULT_NOTIFICATION_TIME_CHANGED, () => {
                _services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendar"].scheduleEventsNotifications(this.onlineEvents);
            }, this.currentSiteId);
        }
        // Listen for events added. When an event is added, reload the data.
        this.newEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarProvider"].NEW_EVENT_EVENT, (data) => {
            if (data && data.eventId) {
                this.loaded = false;
                this.refreshData(true, true);
            }
        }, this.currentSiteId);
        // Listen for new event discarded event. When it does, reload the data.
        this.discardedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, () => {
            this.loaded = false;
            this.refreshData(true, true);
        }, this.currentSiteId);
        // Listen for events edited. When an event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            if (data && data.eventId) {
                this.loaded = false;
                this.refreshData(true, true);
            }
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_11__["AddonCalendarSyncProvider"].AUTO_SYNCED, () => {
            this.loaded = false;
            this.refreshData(false, true);
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_11__["AddonCalendarSyncProvider"].MANUAL_SYNCED, (data) => {
            if (data && (data.source != 'day' || data.year != this.year || data.month != this.month || data.day != this.day)) {
                this.loaded = false;
                this.refreshData(false, true);
            }
        }, this.currentSiteId);
        // Update the events when an event is deleted.
        this.deleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarProvider"].DELETED_EVENT_EVENT, (data) => {
            if (data && !data.sent) {
                // Event was deleted in offline. Just mark it as deleted, no need to refresh.
                this.hasOffline = this.markAsDeleted(data.eventId, true) || this.hasOffline;
                this.deletedEvents.push(data.eventId);
            }
            else {
                this.loaded = false;
                this.refreshData(false, true);
            }
        }, this.currentSiteId);
        // Listen for events "undeleted" (offline).
        this.undeleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, (data) => {
            if (!data || !data.eventId) {
                return;
            }
            // Mark it as undeleted, no need to refresh.
            const found = this.markAsDeleted(data.eventId, false);
            // Remove it from the list of deleted events if it's there.
            const index = this.deletedEvents.indexOf(data.eventId);
            if (index != -1) {
                this.deletedEvents.splice(index, 1);
            }
            if (found) {
                // The deleted event belongs to current list. Re-calculate "hasOffline".
                this.hasOffline = false;
                if (this.events.length != this.onlineEvents.length) {
                    this.hasOffline = true;
                }
                else {
                    const event = this.events.find((event) => event.deleted || event.offline);
                    this.hasOffline = !!event;
                }
            }
        }, this.currentSiteId);
        this.filterChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarProvider"].FILTER_CHANGED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filter = data;
            // Course viewed has changed, check if the user can create events for this course calendar.
            this.canCreate = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].canEditEvents(this.filter.courseId);
            this.filterEvents();
        }));
        // Refresh online status when changes.
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_16__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_16__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        const types = [];
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_18__["CoreUtils"].enumKeys(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarEventType"]).forEach((name) => {
            var _a;
            const value = _services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarEventType"][name];
            this.filter[name] = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteBooleanParam(name)) !== null && _a !== void 0 ? _a : true;
            types.push(value);
        });
        this.filter.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteNumberParam('courseId');
        this.filter.categoryId = _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteNumberParam('categoryId');
        this.filter.filtered = typeof this.filter.courseId != 'undefined' || types.some((name) => !this.filter[name]);
        const now = new Date();
        this.year = _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteNumberParam('year') || now.getFullYear();
        this.month = _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteNumberParam('month') || (now.getMonth() + 1);
        this.day = _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteNumberParam('day') || now.getDate();
        this.calculateCurrentMoment();
        this.calculateIsCurrentDay();
        this.fetchData(true);
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    fetchData(sync) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_19__["CoreConstants"].ICON_LOADING;
            this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].isOnline();
            if (sync) {
                yield this.sync();
            }
            try {
                const promises = [];
                // Load courses for the popover.
                promises.push(_features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_13__["CoreCoursesHelper"].getCoursesForPopover(this.filter.courseId).then((data) => {
                    this.courses = data.courses;
                    return;
                }));
                // Get categories.
                promises.push(this.loadCategories());
                // Get offline events.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarOffline"].getAllEditedEvents().then((offlineEvents) => {
                    // Classify them by month & day.
                    this.offlineEvents = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].classifyIntoMonths(offlineEvents);
                    // Get the IDs of events edited in offline.
                    this.offlineEditedEventsIds = offlineEvents.filter((event) => event.id > 0).map((event) => event.id);
                    return;
                }));
                // Get events deleted in offline.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarOffline"].getAllDeletedEventsIds().then((ids) => {
                    this.deletedEvents = ids;
                    return;
                }));
                // Check if user can create events.
                promises.push(_services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].canEditEvents(this.filter.courseId).then((canEdit) => {
                    this.canCreate = canEdit;
                    return;
                }));
                // Get user preferences.
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendar"].getCalendarTimeFormat().then((value) => {
                    this.timeFormat = value;
                    return;
                }));
                yield Promise.all(promises);
                yield this.fetchEvents();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            }
            this.loaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_19__["CoreConstants"].ICON_SYNC;
        });
    }
    /**
     * Fetch the events for current day.
     *
     * @return Promise resolved when done.
     */
    fetchEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result;
            try {
                // Don't pass courseId and categoryId, we'll filter them locally.
                result = yield _services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendar"].getDayEvents(this.year, this.month, this.day);
                this.onlineEvents = result.events.map((event) => _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].formatEventData(event));
            }
            catch (error) {
                if (_services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].isOnline()) {
                    throw error;
                }
                // Allow navigating to non-cached days in offline (behave as if using emergency cache).
                this.onlineEvents = [];
            }
            // Calculate the period name. We don't use the one in result because it's in server's language.
            this.periodName = _services_utils_time__WEBPACK_IMPORTED_MODULE_7__["CoreTimeUtils"].userDate(new Date(this.year, this.month - 1, this.day).getTime(), 'core.strftimedaydate');
            // Schedule notifications for the events retrieved (only future events will be scheduled).
            _services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendar"].scheduleEventsNotifications(this.onlineEvents);
            // Merge the online events with offline data.
            this.events = this.mergeEvents();
            // Filter events by course.
            this.filterEvents();
            this.calculateIsCurrentDay();
            // Re-calculate the formatted time so it uses the device date.
            const dayTime = this.currentMoment.unix() * 1000;
            const promises = this.events.map((event) => {
                event.ispast = this.isPastDay || (this.isCurrentDay && this.isEventPast(event));
                return _services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendar"].formatEventTime(event, this.timeFormat, true, dayTime).then((time) => {
                    event.formattedtime = time;
                    return;
                });
            });
            yield Promise.all(promises);
        });
    }
    /**
     * Merge online events with the offline events of that period.
     *
     * @return Merged events.
     */
    mergeEvents() {
        this.hasOffline = false;
        if (!Object.keys(this.offlineEvents).length && !this.deletedEvents.length) {
            // No offline events, nothing to merge.
            return this.onlineEvents;
        }
        const monthOfflineEvents = this.offlineEvents[_services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].getMonthId(this.year, this.month)];
        const dayOfflineEvents = monthOfflineEvents && monthOfflineEvents[this.day];
        let result = this.onlineEvents;
        if (this.deletedEvents.length) {
            // Mark as deleted the events that were deleted in offline.
            result.forEach((event) => {
                event.deleted = this.deletedEvents.indexOf(event.id) != -1;
                if (event.deleted) {
                    this.hasOffline = true;
                }
            });
        }
        if (this.offlineEditedEventsIds.length) {
            // Remove the online events that were modified in offline.
            result = result.filter((event) => this.offlineEditedEventsIds.indexOf(event.id) == -1);
            if (result.length != this.onlineEvents.length) {
                this.hasOffline = true;
            }
        }
        if (dayOfflineEvents && dayOfflineEvents.length) {
            // Add the offline events (either new or edited).
            this.hasOffline = true;
            result = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].sortEvents(result.concat(dayOfflineEvents));
        }
        return result;
    }
    /**
     * Filter events based on the filter popover.
     */
    filterEvents() {
        this.filteredEvents = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].getFilteredEvents(this.events, this.filter, this.categories);
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.loaded) {
                return;
            }
            yield this.refreshData(true).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the data.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param afterChange Whether the refresh is done after an event has changed or has been synced.
     * @return Promise resolved when done.
     */
    refreshData(sync, afterChange) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_19__["CoreConstants"].ICON_LOADING;
            const promises = [];
            // Don't invalidate day events after a change, it has already been handled.
            if (!afterChange) {
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendar"].invalidateDayEvents(this.year, this.month, this.day));
            }
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendar"].invalidateAllowedEventTypes());
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_12__["CoreCourses"].invalidateCategories(0, true));
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_8__["AddonCalendar"].invalidateTimeFormat());
            yield Promise.all(promises).finally(() => this.fetchData(sync));
        });
    }
    /**
     * Load categories to be able to filter events.
     *
     * @return Promise resolved when done.
     */
    loadCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const cats = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_12__["CoreCourses"].getCategories(0, true);
                this.categories = {};
                // Index categories by ID.
                cats.forEach((category) => {
                    this.categories[category.id] = category;
                });
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Try to synchronize offline events.
     *
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    sync(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_11__["AddonCalendarSync"].syncEvents();
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                if (result.updated) {
                    // Trigger a manual sync event.
                    result.source = 'day';
                    result.day = this.day;
                    result.month = this.month;
                    result.year = this.year;
                    _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_11__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                }
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
            }
        });
    }
    /**
     * Navigate to a particular event.
     *
     * @param eventId Event to load.
     */
    gotoEvent(eventId) {
        if (eventId < 0) {
            // It's an offline event, go to the edit page.
            this.openEdit(eventId);
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigateToSitePath(`/calendar/event/${eventId}`);
        }
    }
    /**
     * Show the context menu.
     *
     * @param event Event.
     */
    openFilter(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].openPopover({
                component: _components_filter_filter__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarFilterPopoverComponent"],
                componentProps: {
                    courses: this.courses,
                    filter: this.filter,
                },
                event,
            });
        });
    }
    /**
     * Open page to create/edit an event.
     *
     * @param eventId Event ID to edit.
     */
    openEdit(eventId) {
        const params = {};
        if (!eventId) {
            // It's a new event, set the time.
            eventId = 0;
            params.timestamp = moment__WEBPACK_IMPORTED_MODULE_15___default()().year(this.year).month(this.month - 1).date(this.day).unix() * 1000;
        }
        if (this.filter.courseId) {
            params.courseId = this.filter.courseId;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigateToSitePath(`/calendar/edit/${eventId}`, { params });
    }
    /**
     * Calculate current moment.
     */
    calculateCurrentMoment() {
        this.currentMoment = moment__WEBPACK_IMPORTED_MODULE_15___default()().year(this.year).month(this.month - 1).date(this.day);
    }
    /**
     * Check if user is viewing the current day.
     */
    calculateIsCurrentDay() {
        const now = new Date();
        this.currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_7__["CoreTimeUtils"].timestamp();
        this.isCurrentDay = this.year == now.getFullYear() && this.month == now.getMonth() + 1 && this.day == now.getDate();
        this.isPastDay = this.year < now.getFullYear() || (this.year == now.getFullYear() && this.month < now.getMonth()) ||
            (this.year == now.getFullYear() && this.month == now.getMonth() + 1 && this.day < now.getDate());
    }
    /**
     * Go to current day.
     */
    goToCurrentDay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const now = new Date();
            const initialDay = this.day;
            const initialMonth = this.month;
            const initialYear = this.year;
            this.day = now.getDate();
            this.month = now.getMonth() + 1;
            this.year = now.getFullYear();
            this.calculateCurrentMoment();
            this.loaded = false;
            try {
                yield this.fetchEvents();
                this.isCurrentDay = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                this.year = initialYear;
                this.month = initialMonth;
                this.day = initialDay;
                this.calculateCurrentMoment();
            }
            this.loaded = true;
        });
    }
    /**
     * Load next day.
     */
    loadNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.increaseDay();
            this.loaded = false;
            try {
                yield this.fetchEvents();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                this.decreaseDay();
            }
            this.loaded = true;
        });
    }
    /**
     * Load previous day.
     */
    loadPrevious() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.decreaseDay();
            this.loaded = false;
            try {
                yield this.fetchEvents();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                this.increaseDay();
            }
            this.loaded = true;
        });
    }
    /**
     * Decrease the current day.
     */
    decreaseDay() {
        this.currentMoment.subtract(1, 'day');
        this.year = this.currentMoment.year();
        this.month = this.currentMoment.month() + 1;
        this.day = this.currentMoment.date();
    }
    /**
     * Increase the current day.
     */
    increaseDay() {
        this.currentMoment.add(1, 'day');
        this.year = this.currentMoment.year();
        this.month = this.currentMoment.month() + 1;
        this.day = this.currentMoment.date();
    }
    /**
     * Find an event and mark it as deleted.
     *
     * @param eventId Event ID.
     * @param deleted Whether to mark it as deleted or not.
     * @return Whether the event was found.
     */
    markAsDeleted(eventId, deleted) {
        const event = this.onlineEvents.find((event) => event.id == eventId);
        if (event) {
            event.deleted = deleted;
            return true;
        }
        return false;
    }
    /**
     * Returns if the event is in the past or not.
     *
     * @param event Event object.
     * @return True if it's in the past.
     */
    isEventPast(event) {
        return (event.timestart + event.timeduration) < this.currentTime;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        (_a = this.newEventObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.discardedObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.editEventObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.deleteEventObserver) === null || _d === void 0 ? void 0 : _d.off();
        (_e = this.undeleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
        (_f = this.syncObserver) === null || _f === void 0 ? void 0 : _f.off();
        (_g = this.manualSyncObserver) === null || _g === void 0 ? void 0 : _g.off();
        (_h = this.onlineObserver) === null || _h === void 0 ? void 0 : _h.unsubscribe();
        (_j = this.filterChangedObserver) === null || _j === void 0 ? void 0 : _j.off();
        (_k = this.obsDefaultTimeChange) === null || _k === void 0 ? void 0 : _k.off();
    }
};
AddonCalendarDayPage.ctorParameters = () => [];
AddonCalendarDayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-day',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./day.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../calendar-common.scss */ "./src/addons/calendar/calendar-common.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./day.scss */ "./src/addons/calendar/pages/day/day.scss")).default]
    })
], AddonCalendarDayPage);



/***/ }),

/***/ "./src/addons/calendar/pages/day/day.scss":
/*!************************************************!*\
  !*** ./src/addons/calendar/pages/day/day.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-calendar-period {\n  flex-grow: 3;\n}\n:host .addon-calendar-period h3 {\n  margin-top: 10px;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvZGF5L2RheS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FkZG9ucy9jYWxlbmRhci9wYWdlcy9kYXkvZGF5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmFkZG9uLWNhbGVuZGFyLXBlcmlvZCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMztcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=addons-calendar-pages-day-day-module.js.map