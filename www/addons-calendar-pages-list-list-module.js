(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/list/list.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/list/list.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.calendar.calendarevents' | translate }}</h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openFilter($event)\" [attr.aria-label]=\"'core.filter' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-filter\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <core-context-menu>\n                <core-context-menu-item [hidden]=\"!notificationsEnabled\" [priority]=\"600\"\n                [content]=\"'core.settings.settings' | translate\" (action)=\"openSettings()\" iconAction=\"fas-cogs\">\n            </core-context-menu-item>\n                <core-context-menu-item [hidden]=\"!eventsLoaded || !hasOffline || !isOnline\" [priority]=\"400\"\n                [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event, true)\"\n                [iconAction]=\"syncIcon\" [closeOnClick]=\"false\"></core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!eventsLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"eventsLoaded\">\n        <!-- There is data to be synchronized -->\n        <ion-card class=\"core-warning-card\" *ngIf=\"hasOffline\">\n            <ion-item>\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'addon.calendar.calendar' | translate} }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <core-empty-box *ngIf=\"!filteredEvents || !filteredEvents.length\" icon=\"fas-calendar\"\n            [message]=\"'addon.calendar.noevents' | translate\">\n        </core-empty-box>\n\n        <ion-list *ngIf=\"filteredEvents && filteredEvents.length\" class=\"ion-no-margin\">\n            <ng-container *ngFor=\"let event of filteredEvents\">\n                <ion-item-divider *ngIf=\"event.showDate\">\n                    <ion-label><p class=\"item-heading\">{{ event.timestart * 1000 | coreFormatDate: \"strftimedayshort\" }}</p></ion-label>\n                </ion-item-divider>\n                <ion-item class=\"addon-calendar-event ion-text-wrap\" [attr.aria-label]=\"event.name\" (click)=\"gotoEvent(event.id)\"\n                    [attr.aria-current]=\"event.id == eventId ? 'page' : 'false'\"\n                    [ngClass]=\"['addon-calendar-eventtype-'+event.eventtype]\" button detail=\"true\">\n                    <img *ngIf=\"event.moduleIcon\" src=\"{{event.moduleIcon}}\" slot=\"start\" class=\"core-module-icon\" alt=\"\"\n                        role=\"presentation\">\n                    <ion-icon *ngIf=\"event.eventIcon && !event.moduleIcon\" [name]=\"event.eventIcon\" slot=\"start\"\n                        aria-hidden=\"true\">\n                    </ion-icon>\n                    <ion-label>\n                        <p class=\"item-heading\">\n                            <!-- Add the icon title so accessibility tools read it. -->\n                            <span class=\"sr-only\">\n                                {{ 'addon.calendar.type' + event.formattedType | translate }}\n                                <span class=\"sr-only\" *ngIf=\"event.moduleIcon && event.iconTitle\">{{ event.iconTitle }}</span>\n                            </span>\n                            <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\"\n                                [contextInstanceId]=\"event.contextInstanceId\">\n                            </core-format-text>\n                        </p>\n                        <p>\n                            {{ event.timestart * 1000 | coreFormatDate: \"strftimetime\" }}\n                            <span *ngIf=\"event.timeduration && event.endsSameDay\">\n                                - {{ (event.timestart + event.timeduration) * 1000 | coreFormatDate: \"strftimetime\" }}\n                            </span>\n                            <span *ngIf=\"event.timeduration && !event.endsSameDay\">\n                                - {{ (event.timestart + event.timeduration) * 1000 | coreFormatDate: \"strftimedatetimeshort\" }}\n                            </span>\n                        </p>\n                    </ion-label>\n                    <ion-note *ngIf=\"event.offline && !event.deleted\" slot=\"end\">\n                        <ion-icon name=\"fas-clock\" aria-hidden=\"true\"></ion-icon>\n                        <span class=\"ion-text-wrap\">{{ 'core.notsent' | translate }}</span>\n                    </ion-note>\n                    <ion-note *ngIf=\"event.deleted\" slot=\"end\">\n                        <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon>\n                        <span class=\"ion-text-wrap\">{{ 'core.deletedoffline' | translate }}</span>\n                    </ion-note>\n                </ion-item>\n            </ng-container>\n        </ion-list>\n\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMoreEvents($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n    </core-loading>\n\n    <!-- Create a calendar event. -->\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"canCreate\">\n        <ion-fab-button (click)=\"openEdit()\" [attr.aria-label]=\"'addon.calendar.newevent' | translate\">\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'addon.calendar.newevent' | translate }}</span>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/calendar/pages/list/list.module.ts":
/*!*******************************************************!*\
  !*** ./src/addons/calendar/pages/list/list.module.ts ***!
  \*******************************************************/
/*! exports provided: AddonCalendarListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarListPageModule", function() { return AddonCalendarListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_calendar_calendar_lazy_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/calendar/calendar-lazy.module */ "./src/addons/calendar/calendar-lazy.module.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.page */ "./src/addons/calendar/pages/list/list.page.ts");
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








const splitviewRoutes = [_addons_calendar_calendar_lazy_module__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarEditRoute"], _addons_calendar_calendar_lazy_module__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarEventRoute"]];
const mobileRoutes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarListPage"],
    },
    ...splitviewRoutes,
];
const tabletRoutes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarListPage"],
        children: [
            ...splitviewRoutes,
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
];
let AddonCalendarListPageModule = class AddonCalendarListPageModule {
};
AddonCalendarListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
        ],
        declarations: [
            _list_page__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarListPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarListPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/list/list.page.ts":
/*!*****************************************************!*\
  !*** ./src/addons/calendar/pages/list/list.page.ts ***!
  \*****************************************************/
/*! exports provided: AddonCalendarListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarListPage", function() { return AddonCalendarListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _components_filter_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/filter/filter */ "./src/addons/calendar/components/filter/filter.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the list of calendar events.
 */
let AddonCalendarListPage = class AddonCalendarListPage {
    constructor() {
        this.initialTime = 0;
        this.daysLoaded = 0;
        this.emptyEventsTimes = 0; // Variable to identify consecutive calls returning 0 events.
        this.categoriesRetrieved = false;
        this.getCategories = false;
        this.categories = {};
        this.onlineEvents = [];
        this.offlineEvents = [];
        this.deletedEvents = [];
        this.courses = [];
        this.eventsLoaded = false;
        this.events = []; // Events (both online and offline).
        this.notificationsEnabled = false;
        this.filteredEvents = [];
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.canCreate = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_15__["CoreConstants"].ICON_LOADING;
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
        this.siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteHomeId();
        this.notificationsEnabled = _services_local_notifications__WEBPACK_IMPORTED_MODULE_11__["CoreLocalNotifications"].isAvailable();
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId();
        if (this.notificationsEnabled) {
            // Re-schedule events if default time changes.
            this.obsDefaultTimeChange = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].DEFAULT_NOTIFICATION_TIME_CHANGED, () => {
                _services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendar"].scheduleEventsNotifications(this.onlineEvents);
            }, this.currentSiteId);
        }
        // Listen for events added. When an event is added, reload the data.
        this.newEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].NEW_EVENT_EVENT, (data) => {
            if (data && data.eventId) {
                this.eventsLoaded = false;
                this.refreshEvents(true, false);
            }
        }, this.currentSiteId);
        // Listen for new event discarded event. When it does, reload the data.
        this.discardedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, () => {
            this.eventsLoaded = false;
            this.refreshEvents(true, false);
        }, this.currentSiteId);
        // Listen for events edited. When an event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            if (data && data.eventId) {
                this.eventsLoaded = false;
                this.refreshEvents(true, false);
            }
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_6__["AddonCalendarSyncProvider"].AUTO_SYNCED, () => {
            this.eventsLoaded = false;
            this.refreshEvents();
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_6__["AddonCalendarSyncProvider"].MANUAL_SYNCED, (data) => {
            if (data && data.source != 'list') {
                this.eventsLoaded = false;
                this.refreshEvents();
            }
        }, this.currentSiteId);
        // Update the list when an event is deleted.
        this.deleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].DELETED_EVENT_EVENT, (data) => {
            if (data && !data.sent) {
                // Event was deleted in offline. Just mark it as deleted, no need to refresh.
                this.markAsDeleted(data.eventId, true);
                this.deletedEvents.push(data.eventId);
                this.hasOffline = true;
            }
            else {
                // Event deleted, refresh the view.
                this.eventsLoaded = false;
                this.refreshEvents();
            }
        }, this.currentSiteId);
        // Listen for events "undeleted" (offline).
        this.undeleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, (data) => {
            if (!data || !data.eventId) {
                return;
            }
            // Mark it as undeleted, no need to refresh.
            this.markAsDeleted(data.eventId, false);
            // Remove it from the list of deleted events if it's there.
            const index = this.deletedEvents.indexOf(data.eventId);
            if (index != -1) {
                this.deletedEvents.splice(index, 1);
            }
            this.hasOffline = !!this.offlineEvents.length || !!this.deletedEvents.length;
        }, this.currentSiteId);
        this.filterChangedObserver =
            _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].FILTER_CHANGED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                this.filter = data;
                // Course viewed has changed, check if the user can create events for this course calendar.
                this.canCreate = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarHelper"].canEditEvents(this.filter.courseId);
                this.filterEvents();
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            }));
        // Refresh online status when changes.
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_17__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_17__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_13__["CoreApp"].isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filter.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteNumberParam('courseId');
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_15__["CoreConstants"].ICON_LOADING;
            yield this.fetchData(false, true, false);
        });
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param refresh Empty events array first.
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    fetchData(refresh = false, sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.initialTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_9__["CoreTimeUtils"].timestamp();
            this.daysLoaded = 0;
            this.emptyEventsTimes = 0;
            this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_13__["CoreApp"].isOnline();
            if (sync) {
                // Try to synchronize offline events.
                try {
                    const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_6__["AddonCalendarSync"].syncEvents();
                    if (result.warnings && result.warnings.length) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                    }
                    if (result.updated) {
                        // Trigger a manual sync event.
                        result.source = 'list';
                        _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_6__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                    }
                }
                catch (error) {
                    if (showErrors) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                    }
                }
            }
            try {
                const promises = [];
                this.hasOffline = false;
                promises.push(_services_calendar_helper__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarHelper"].canEditEvents(this.filter.courseId).then((canEdit) => {
                    this.canCreate = canEdit;
                    return;
                }));
                // Load courses for the popover.
                promises.push(_features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_18__["CoreCoursesHelper"].getCoursesForPopover(this.filter.courseId).then((result) => {
                    this.courses = result.courses;
                    return this.fetchEvents(refresh);
                }));
                // Get offline events.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].getAllEditedEvents().then((offlineEvents) => {
                    this.hasOffline = this.hasOffline || !!offlineEvents.length;
                    // Format data and sort by timestart.
                    const events = offlineEvents.map((event) => _services_calendar_helper__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarHelper"].formatOfflineEventData(event));
                    this.offlineEvents = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarHelper"].sortEvents(events);
                    return;
                }));
                // Get events deleted in offline.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].getAllDeletedEventsIds().then((ids) => {
                    this.hasOffline = this.hasOffline || !!ids.length;
                    this.deletedEvents = ids;
                    return;
                }));
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            }
            this.eventsLoaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_15__["CoreConstants"].ICON_SYNC;
        });
    }
    /**
     * Fetches the events and updates the view.
     *
     * @param refresh Empty events array first.
     * @return Promise resolved when done.
     */
    fetchEvents(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            try {
                const onlineEventsTemp = yield _services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendar"].getEventsList(this.initialTime, this.daysLoaded, _services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].DAYS_INTERVAL);
                if (onlineEventsTemp.length === 0) {
                    this.emptyEventsTimes++;
                    if (this.emptyEventsTimes > 5) { // Stop execution if we retrieve empty list 6 consecutive times.
                        this.canLoadMore = false;
                        if (refresh) {
                            this.onlineEvents = [];
                            this.filteredEvents = [];
                            this.events = this.offlineEvents;
                        }
                    }
                    else {
                        // No events returned, load next events.
                        this.daysLoaded += _services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].DAYS_INTERVAL;
                        return this.fetchEvents();
                    }
                }
                else {
                    const onlineEvents = onlineEventsTemp.map((event) => _services_calendar_helper__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarHelper"].formatEventData(event));
                    // Get the merged events of this period.
                    const events = this.mergeEvents(onlineEvents);
                    this.getCategories = this.shouldLoadCategories(onlineEvents);
                    if (refresh) {
                        this.onlineEvents = onlineEvents;
                        this.events = events;
                    }
                    else {
                        // Filter events with same ID. Repeated events are returned once per WS call, show them only once.
                        this.onlineEvents = _services_utils_utils__WEBPACK_IMPORTED_MODULE_19__["CoreUtils"].mergeArraysWithoutDuplicates(this.onlineEvents, onlineEvents, 'id');
                        this.events = _services_utils_utils__WEBPACK_IMPORTED_MODULE_19__["CoreUtils"].mergeArraysWithoutDuplicates(this.events, events, 'id');
                    }
                    this.filterEvents();
                    // Calculate which evemts need to display the date.
                    this.filteredEvents.forEach((event, index) => {
                        event.showDate = this.showDate(event, this.filteredEvents[index - 1]);
                        event.endsSameDay = this.endsSameDay(event);
                    });
                    this.canLoadMore = true;
                    // Schedule notifications for the events retrieved (might have new events).
                    _services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendar"].scheduleEventsNotifications(this.onlineEvents);
                    this.daysLoaded += _services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].DAYS_INTERVAL;
                }
                // Resize the content so infinite loading is able to calculate if it should load more items or not.
                // @todo: Infinite loading is not working if content is not high enough.
                // this.content.resize();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
            }
            // Success retrieving events. Get categories if needed.
            if (this.getCategories) {
                this.getCategories = false;
                return this.loadCategories();
            }
        });
    }
    /**
     * Function to load more events.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadMoreEvents(infiniteComplete) {
        this.fetchEvents().finally(() => {
            infiniteComplete && infiniteComplete();
        });
    }
    filterEvents() {
        this.filteredEvents = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarHelper"].getFilteredEvents(this.events, this.filter, this.categories);
    }
    /**
     * Returns if the current state should load categories or not.
     *
     * @param events Events to parse.
     * @return True if categories should be loaded.
     */
    shouldLoadCategories(events) {
        if (this.categoriesRetrieved || this.getCategories) {
            // Use previous value
            return this.getCategories;
        }
        // Categories not loaded yet. We should get them if there's any category event.
        const found = events.some((event) => typeof event.categoryid != 'undefined' && event.categoryid > 0);
        return found || this.getCategories;
    }
    /**
     * Load categories to be able to filter events.
     *
     * @return Promise resolved when done.
     */
    loadCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const cats = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getCategories(0, true);
                this.categoriesRetrieved = true;
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
     * Merge a period of online events with the offline events of that period.
     *
     * @param onlineEvents Online events.
     * @return Merged events.
     */
    mergeEvents(onlineEvents) {
        if (!this.offlineEvents.length && !this.deletedEvents.length) {
            // No offline events, nothing to merge.
            return onlineEvents;
        }
        const start = this.initialTime + (_core_constants__WEBPACK_IMPORTED_MODULE_15__["CoreConstants"].SECONDS_DAY * this.daysLoaded);
        const end = start + (_core_constants__WEBPACK_IMPORTED_MODULE_15__["CoreConstants"].SECONDS_DAY * _services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarProvider"].DAYS_INTERVAL) - 1;
        let result = onlineEvents;
        if (this.deletedEvents.length) {
            // Mark as deleted the events that were deleted in offline.
            result.forEach((event) => {
                event.deleted = this.deletedEvents.indexOf(event.id) != -1;
            });
        }
        if (this.offlineEvents.length) {
            // Remove the online events that were modified in offline.
            result = result.filter((event) => {
                const offlineEvent = this.offlineEvents.find((ev) => ev.id == event.id);
                return !offlineEvent;
            });
        }
        // Now get the offline events that belong to this period.
        const periodOfflineEvents = this.offlineEvents.filter((event) => {
            if (this.daysLoaded == 0 && event.timestart < start) {
                // Display offline events that are previous to current time to allow editing them.
                return true;
            }
            return (event.timestart >= start || event.timestart + event.timeduration >= start) && event.timestart <= end;
        });
        // Merge both arrays and sort them.
        result = result.concat(periodOfflineEvents);
        return _services_calendar_helper__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarHelper"].sortEvents(result);
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.eventsLoaded) {
                return;
            }
            yield this.refreshEvents(true, showErrors).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the events.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    refreshEvents(sync, showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_15__["CoreConstants"].ICON_LOADING;
            const promises = [];
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendar"].invalidateEventsList());
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_3__["AddonCalendar"].invalidateAllowedEventTypes());
            if (this.categoriesRetrieved) {
                promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateCategories(0, true));
                this.categoriesRetrieved = false;
            }
            yield Promise.all(promises).finally(() => this.fetchData(true, sync, showErrors));
        });
    }
    /**
     * Check date should be shown on event list for the current event.
     * If date has changed from previous to current event it should be shown.
     *
     * @param event Current event where to show the date.
     * @param prevEvent Previous event where to compare the date with.
     * @return If date has changed and should be shown.
     */
    showDate(event, prevEvent) {
        if (!prevEvent) {
            // First event, show it.
            return true;
        }
        // Check if day has changed.
        return !moment__WEBPACK_IMPORTED_MODULE_14___default()(event.timestart * 1000).isSame(prevEvent.timestart * 1000, 'day');
    }
    /**
     * Check if event ends the same date or not.
     *
     * @param event Event info.
     * @return If date has changed and should be shown.
     */
    endsSameDay(event) {
        if (!event.timeduration) {
            // No duration.
            return true;
        }
        // Check if day has changed.
        return moment__WEBPACK_IMPORTED_MODULE_14___default()(event.timestart * 1000).isSame((event.timestart + event.timeduration) * 1000, 'day');
    }
    /**
     * Show the context menu.
     *
     * @param event Event.
     */
    openFilter(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openPopover({
                component: _components_filter_filter__WEBPACK_IMPORTED_MODULE_16__["AddonCalendarFilterPopoverComponent"],
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
        this.eventId = undefined;
        eventId = eventId || 0;
        const params = {};
        if (this.filter.courseId) {
            params.courseId = this.filter.courseId;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath(`calendar/edit/${eventId}`, { params });
    }
    /**
     * Open calendar events settings.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath('/calendar/settings');
    }
    /**
     * Navigate to a particular event.
     *
     * @param eventId Event to load.
     */
    gotoEvent(eventId) {
        this.eventId = eventId;
        if (eventId <= 0) {
            // It's an offline event, go to the edit page.
            this.openEdit(eventId);
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath(`/calendar/event/${eventId}`);
        }
    }
    /**
     * Find an event and mark it as deleted.
     *
     * @param eventId Event ID.
     * @param deleted Whether to mark it as deleted or not.
     */
    markAsDeleted(eventId, deleted) {
        const event = this.onlineEvents.find((event) => event.id == eventId);
        if (event) {
            event.deleted = deleted;
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        (_a = this.obsDefaultTimeChange) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.newEventObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.discardedObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.editEventObserver) === null || _d === void 0 ? void 0 : _d.off();
        (_e = this.deleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
        (_f = this.undeleteEventObserver) === null || _f === void 0 ? void 0 : _f.off();
        (_g = this.syncObserver) === null || _g === void 0 ? void 0 : _g.off();
        (_h = this.manualSyncObserver) === null || _h === void 0 ? void 0 : _h.off();
        (_j = this.filterChangedObserver) === null || _j === void 0 ? void 0 : _j.off();
        (_k = this.onlineObserver) === null || _k === void 0 ? void 0 : _k.unsubscribe();
    }
};
AddonCalendarListPage.ctorParameters = () => [];
AddonCalendarListPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }]
};
AddonCalendarListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/list/list.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../calendar-common.scss */ "./src/addons/calendar/calendar-common.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.scss */ "./src/addons/calendar/pages/list/list.scss")).default]
    })
], AddonCalendarListPage);



/***/ }),

/***/ "./src/addons/calendar/pages/list/list.scss":
/*!**************************************************!*\
  !*** ./src/addons/calendar/pages/list/list.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-note {\n  max-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvbGlzdC9saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FkZG9ucy9jYWxlbmRhci9wYWdlcy9saXN0L2xpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tbm90ZSB7XG4gICAgICAgIG1heC13aWR0aDogMzAlO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=addons-calendar-pages-list-list-module.js.map