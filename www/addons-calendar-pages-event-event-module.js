(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-event-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"event\">\n            <img *ngIf=\"event.moduleIcon\" src=\"{{event.moduleIcon}}\" alt=\"\" role=\"presentation\" class=\"core-module-icon\">\n            <ion-icon *ngIf=\"event.eventIcon && !event.moduleIcon\" [name]=\"event.eventIcon\" aria-hidden=\"true\"></ion-icon>\n            <!-- Add the icon title so accessibility tools read it. -->\n            <span class=\"sr-only\">\n                {{ 'addon.calendar.type' + event.formattedType | translate }}\n                <span class=\"sr-only\" *ngIf=\"event.moduleIcon && event.iconTitle\">{{ event.iconTitle }}</span>\n            </span>\n            <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\"\n                [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <!-- The context menu will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<core-navbar-buttons slot=\"end\">\n    <core-context-menu>\n        <core-context-menu-item [hidden]=\"isSplitViewOn || !eventLoaded || (!hasOffline && event && !event.deleted) || !isOnline\"\n            [priority]=\"400\" [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event, true)\"\n            [iconAction]=\"syncIcon\" [closeOnClick]=\"false\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!canEdit || !event || !event.canedit || event.deleted\" [priority]=\"300\"\n            [content]=\"'core.edit' | translate\" (action)=\"openEdit()\" iconAction=\"fas-edit\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!canDelete || !event || !event.candelete || event.deleted\" [priority]=\"200\"\n            [content]=\"'core.delete' | translate\" (action)=\"deleteEvent()\"\n            iconAction=\"fas-trash\"></core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!event || !event.deleted\" [priority]=\"200\" [content]=\"'core.restore' | translate\"\n            (action)=\"undoDelete()\" iconAction=\"fas-undo-alt\"></core-context-menu-item>\n    </core-context-menu>\n</core-navbar-buttons>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!eventLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"eventLoaded\">\n        <!-- There is data to be synchronized -->\n        <ion-card class=\"core-warning-card\" *ngIf=\"hasOffline || (event && event.deleted)\">\n            <ion-item>\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'addon.calendar.calendarevent' | translate} }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-content *ngIf=\"event\">\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"isSplitViewOn\">\n                    <img *ngIf=\"event.moduleIcon\" src=\"{{event.moduleIcon}}\" slot=\"start\" alt=\"\" role=\"presentation\"\n                        class=\"core-module-icon\">\n                    <ion-icon *ngIf=\"event.eventIcon && !event.moduleIcon\" [name]=\"event.eventIcon\" slot=\"start\" aria-hidden=\"true\">\n                    </ion-icon>\n                    <ion-label>\n                        <span class=\"sr-only\">\n                            {{ 'addon.calendar.type' + event.formattedType | translate }}\n                            <span class=\"sr-only\" *ngIf=\"event.moduleIcon && event.iconTitle\">{{ event.iconTitle }}</span>\n                        </span>\n                        <h2>{{ 'addon.calendar.eventname' | translate }}</h2>\n                        <p>\n                            <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\"\n                                [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\n                        </p>\n                    </ion-label>\n                    <ion-note slot=\"end\" *ngIf=\"event.deleted\">\n                        <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon> {{ 'core.deletedoffline' | translate }}\n                    </ion-note>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <h2>{{ 'addon.calendar.when' | translate }}</h2>\n                        <core-format-text [text]=\"event.formattedtime\" [contextLevel]=\"event.contextLevel\"\n                        [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\n                    </ion-label>\n                    <ion-note slot=\"end\" *ngIf=\"!isSplitViewOn && event.deleted\">\n                        <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon> {{ 'core.deletedoffline' | translate }}\n                    </ion-note>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <h2>{{ 'addon.calendar.eventtype' | translate }}</h2>\n                        <p>{{ 'addon.calendar.type' + event.formattedType | translate }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"courseName\" [href]=\"courseUrl\" core-link capture=\"true\">\n                    <ion-label>\n                        <h2>{{ 'core.course' | translate}}</h2>\n                        <p>\n                            <core-format-text [text]=\"courseName\" contextLevel=\"course\" [contextInstanceId]=\"courseId\">\n                            </core-format-text>\n                        </p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"groupName\">\n                    <ion-label>\n                        <h2>{{ 'core.group' | translate}}</h2>\n                        <p>{{ groupName }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"categoryPath\">\n                    <ion-label>\n                        <h2>{{ 'core.category' | translate}}</h2>\n                        <p><core-format-text [text]=\"categoryPath\" contextLevel=\"coursecat\"\n                            [contextInstanceId]=\"event.categoryid\"></core-format-text></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"event.description\">\n                    <ion-label>\n                        <h2>{{ 'core.description' | translate}}</h2>\n                        <p>\n                            <core-format-text [text]=\"event.description\" [contextLevel]=\"event.contextLevel\"\n                                [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\n                        </p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"event.location\">\n                    <ion-label>\n                        <h2>{{ 'core.location' | translate}}</h2>\n                        <p>\n                            <a [href]=\"event.encodedLocation\" core-link auto-login=\"no\">\n                                <core-format-text [text]=\"event.location\" [contextLevel]=\"event.contextLevel\"\n                                    [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\n                            </a>\n                        </p>\n                    </ion-label>\n                </ion-item>\n                <ion-item *ngIf=\"moduleUrl\">\n                    <ion-label>\n                        <ion-button expand=\"block\" color=\"primary\" [href]=\"moduleUrl\" core-link capture=\"true\">\n                            {{ 'addon.calendar.gotoactivity' | translate }}\n                        </ion-button>\n                    </ion-label>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card list *ngIf=\"notificationsEnabled && event\">\n            <ion-item>\n                <ion-label>\n                    <h2>{{ 'addon.calendar.reminders' | translate }}</h2>\n                </ion-label>\n            </ion-item>\n            <ng-container *ngFor=\"let reminder of reminders\">\n                <ion-item *ngIf=\"reminder.time > 0 || defaultTime > 0\" class=\"ion-text-wrap\"\n                    [class.item-dimmed]=\"(reminder.time == -1 ? (event.timestart - defaultTime) : reminder.time) <= currentTime!\">\n                    <ion-label>\n                        <p *ngIf=\"reminder.time == -1\">\n                            {{ 'core.defaultvalue' | translate :{$a: ((event.timestart - defaultTime) * 1000) | coreFormatDate } }}\n                        </p>\n                        <p *ngIf=\"reminder.time > 0\">{{ reminder.time * 1000 | coreFormatDate }}</p>\n                    </ion-label>\n                    <ion-button fill=\"clear\" (click)=\"cancelNotification(reminder.id, $event)\"\n                        [attr.aria-label]=\"'core.delete' | translate\" slot=\"end\"\n                        *ngIf=\"(reminder.time == -1 ? (event.timestart - defaultTime) : reminder.time) > currentTime!\">\n                        <ion-icon name=\"fas-trash\" color=\"danger\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                </ion-item>\n            </ng-container>\n\n            <ng-container *ngIf=\"event.timestart + event.timeduration > currentTime!\">\n                <ion-item>\n                    <ion-label>\n                        <ion-button expand=\"block\" color=\"primary\" (click)=\"notificationPicker.open()\">\n                            {{ 'addon.calendar.setnewreminder' | translate }}\n                        </ion-button>\n                    </ion-label>\n                </ion-item>\n                <ion-datetime #notificationPicker hidden [(ngModel)]=\"notificationTimeText\"\n                    [displayFormat]=\"notificationFormat\" [min]=\"notificationMin\" [max]=\"notificationMax\"\n                    [doneText]=\"'core.add' | translate\" (ionChange)=\"addNotificationTime()\" [monthNames]=\"monthNames\">\n                </ion-datetime>\n            </ng-container>\n        </ion-card>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/calendar/pages/event/event.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/calendar/pages/event/event.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonCalendarEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventPageModule", function() { return AddonCalendarEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/addons/calendar/components/components.module.ts");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.page */ "./src/addons/calendar/pages/event/event.page.ts");
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
        component: _event_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarEventPage"],
    },
];
let AddonCalendarEventPageModule = class AddonCalendarEventPageModule {
};
AddonCalendarEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarComponentsModule"],
        ],
        declarations: [
            _event_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarEventPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarEventPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/event/event.page.ts":
/*!*******************************************************!*\
  !*** ./src/addons/calendar/pages/event/event.page.ts ***!
  \*******************************************************/
/*! exports provided: AddonCalendarEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventPage", function() { return AddonCalendarEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_lang__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @services/lang */ "./src/core/services/lang.ts");
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
 * Page that displays a single calendar event.
 */
let AddonCalendarEventPage = class AddonCalendarEventPage {
    constructor(svComponent, route) {
        var _a;
        this.svComponent = svComponent;
        this.route = route;
        this.eventLoaded = false;
        this.courseName = '';
        this.courseUrl = '';
        this.notificationsEnabled = false;
        this.moduleUrl = '';
        this.categoryPath = '';
        this.defaultTime = 0;
        this.reminders = [];
        this.canEdit = false;
        this.canDelete = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING; // Sync icon.
        this.isSplitViewOn = false;
        this.notificationsEnabled = _services_local_notifications__WEBPACK_IMPORTED_MODULE_12__["CoreLocalNotifications"].isAvailable();
        this.siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_11__["CoreSites"].getCurrentSiteHomeId();
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_11__["CoreSites"].getCurrentSiteId();
        this.isSplitViewOn = (_a = this.svComponent) === null || _a === void 0 ? void 0 : _a.outletActivated;
        // Check if site supports editing and deleting. No need to check allowed types, event.canedit already does it.
        this.canEdit = _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].canEditEventsInSite();
        this.canDelete = _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].canDeleteEventsInSite();
        // Listen for event edited. If current event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            if (data && data.eventId == this.eventId) {
                this.eventLoaded = false;
                this.refreshEvent(true, false);
            }
        }, this.currentSiteId);
        // Refresh data if this calendar event is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].AUTO_SYNCED, this.checkSyncResult.bind(this, false), this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].MANUAL_SYNCED, this.checkSyncResult.bind(this, true), this.currentSiteId);
        // Refresh online status when changes.
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_17__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_17__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_7__["CoreApp"].isOnline();
            });
        });
    }
    initReminders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.notificationsEnabled) {
                this.monthNames = _services_lang__WEBPACK_IMPORTED_MODULE_23__["CoreLang"].getMonthNames();
                this.reminders = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getEventReminders(this.eventId);
                this.defaultTime = (yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getDefaultNotificationTime()) * 60;
                // Calculate format to use.
                this.notificationFormat =
                    _services_utils_time__WEBPACK_IMPORTED_MODULE_14__["CoreTimeUtils"].fixFormatForDatetime(_services_utils_time__WEBPACK_IMPORTED_MODULE_14__["CoreTimeUtils"].convertPHPToMoment(_singletons__WEBPACK_IMPORTED_MODULE_17__["Translate"].instant('core.strftimedatetime')));
            }
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.eventId = _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].getRouteNumberParam('id');
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
        this.fetchEvent();
        this.initReminders();
    }
    /**
     * Fetches the event and updates the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    fetchEvent(sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_11__["CoreSites"].getCurrentSite();
            const canGetById = _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].isGetEventByIdAvailableInSite();
            let deleted = false;
            this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_7__["CoreApp"].isOnline();
            if (sync) {
                // Try to synchronize offline events.
                try {
                    const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSync"].syncEvents();
                    if (result.warnings && result.warnings.length) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                    }
                    if (result.deleted && result.deleted.indexOf(this.eventId) != -1) {
                        // This event was deleted during the sync.
                        deleted = true;
                    }
                    if (result.updated) {
                        // Trigger a manual sync event.
                        result.source = 'event';
                        _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                    }
                }
                catch (error) {
                    if (showErrors) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                    }
                }
            }
            if (deleted) {
                return;
            }
            try {
                let event;
                // Get the event data.
                if (canGetById) {
                    event = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getEventById(this.eventId);
                }
                else {
                    event = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getEvent(this.eventId);
                }
                this.event = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].formatEventData(event);
                try {
                    const offlineEvent = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].formatOfflineEventData(yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].getEvent(this.eventId));
                    // There is offline data, apply it.
                    this.hasOffline = true;
                    this.event = Object.assign(this.event, offlineEvent);
                }
                catch (_a) {
                    // No offline data.
                    this.hasOffline = false;
                }
                this.currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_14__["CoreTimeUtils"].timestamp();
                this.notificationMin = _services_utils_time__WEBPACK_IMPORTED_MODULE_14__["CoreTimeUtils"].userDate(this.currentTime * 1000, 'YYYY-MM-DDTHH:mm', false);
                this.notificationMax = _services_utils_time__WEBPACK_IMPORTED_MODULE_14__["CoreTimeUtils"].userDate((this.event.timestart + this.event.timeduration) * 1000, 'YYYY-MM-DDTHH:mm', false);
                // Reset some of the calculated data.
                this.categoryPath = '';
                this.courseName = '';
                this.courseUrl = '';
                this.moduleUrl = '';
                if (this.event.moduleIcon) {
                    // It's a module event, translate the module name to the current language.
                    const name = _features_course_services_course__WEBPACK_IMPORTED_MODULE_13__["CoreCourse"].translateModuleName(this.event.modulename || '');
                    if (name.indexOf('core.mod_') === -1) {
                        this.event.modulename = name;
                    }
                    // Get the module URL.
                    if (canGetById) {
                        this.moduleUrl = this.event.url || '';
                    }
                }
                const promises = [];
                const courseId = this.event.courseid;
                if (courseId != this.siteHomeId) {
                    // If the event belongs to a course, get the course name and the URL to view it.
                    if (canGetById && this.event.course) {
                        this.courseId = this.event.course.id;
                        this.courseName = this.event.course.fullname;
                        this.courseUrl = this.event.course.viewurl;
                    }
                    else if (!canGetById && this.event.courseid) {
                        // Retrieve the course.
                        promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getUserCourse(this.event.courseid, true).then((course) => {
                            this.courseId = course.id;
                            this.courseName = course.fullname;
                            this.courseUrl = currentSite ? _services_utils_text__WEBPACK_IMPORTED_MODULE_10__["CoreTextUtils"].concatenatePaths(currentSite.siteUrl, '/course/view.php?id=' + this.courseId) : '';
                            return;
                        }).catch(() => {
                            // Error getting course, just don't show the course name.
                        }));
                    }
                }
                // If it's a group event, get the name of the group.
                if (courseId && this.event.groupid) {
                    promises.push(_services_groups__WEBPACK_IMPORTED_MODULE_15__["CoreGroups"].getUserGroupsInCourse(courseId).then((groups) => {
                        const group = groups.find((group) => group.id == this.event.groupid);
                        this.groupName = group ? group.name : '';
                        return;
                    }).catch(() => {
                        // Error getting groups, just don't show the group name.
                        this.groupName = '';
                    }));
                }
                if (canGetById && this.event.iscategoryevent && this.event.category) {
                    this.categoryPath = this.event.category.nestedname;
                }
                if (this.event.location) {
                    // Build a link to open the address in maps.
                    this.event.location = _services_utils_text__WEBPACK_IMPORTED_MODULE_10__["CoreTextUtils"].decodeHTML(this.event.location);
                    this.event.encodedLocation = _services_utils_text__WEBPACK_IMPORTED_MODULE_10__["CoreTextUtils"].buildAddressURL(this.event.location);
                }
                // Check if event was deleted in offine.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].isEventDeleted(this.eventId).then((deleted) => {
                    this.event.deleted = deleted;
                    return;
                }));
                // Re-calculate the formatted time so it uses the device date.
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getCalendarTimeFormat().then((timeFormat) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.event.formattedtime = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].formatEventTime(this.event, timeFormat);
                    return;
                })));
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevent', true);
            }
            this.eventLoaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_SYNC;
        });
    }
    /**
     * Add a reminder for this event.
     */
    addNotificationTime() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.notificationTimeText && this.event && this.event.id) {
                let notificationTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_14__["CoreTimeUtils"].convertToTimestamp(this.notificationTimeText);
                const currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_14__["CoreTimeUtils"].timestamp();
                const minute = Math.floor(currentTime / 60) * 60;
                // Check if the notification time is in the same minute as we are, so the notification is triggered.
                if (notificationTime >= minute && notificationTime < minute + 60) {
                    notificationTime = currentTime + 1;
                }
                yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].addEventReminder(this.event, notificationTime);
                this.reminders = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getEventReminders(this.eventId);
                this.notificationTimeText = undefined;
            }
        });
    }
    /**
     * Cancel the selected notification.
     *
     * @param id Reminder ID.
     * @param e Click event.
     */
    cancelNotification(id, e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm();
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.deleting', true);
                try {
                    yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].deleteEventReminder(id);
                    this.reminders = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getEventReminders(this.eventId);
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting reminder');
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.eventLoaded) {
                return;
            }
            yield this.refreshEvent(true, showErrors).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the event.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    refreshEvent(sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
            const promises = [];
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].invalidateEvent(this.eventId));
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].invalidateTimeFormat());
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_19__["CoreUtils"].allPromisesIgnoringErrors(promises);
            yield this.fetchEvent(sync, showErrors);
        });
    }
    /**
     * Open the page to edit the event.
     */
    openEdit() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].navigateToSitePath(`/calendar/edit/${this.eventId}`);
    }
    /**
     * Delete the event.
     */
    deleteEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event) {
                return;
            }
            const title = _singletons__WEBPACK_IMPORTED_MODULE_17__["Translate"].instant('addon.calendar.deleteevent');
            const options = {};
            let message;
            if (this.event.eventcount > 1) {
                // It's a repeated event.
                message = _singletons__WEBPACK_IMPORTED_MODULE_17__["Translate"].instant('addon.calendar.confirmeventseriesdelete', { $a: { name: this.event.name, count: this.event.eventcount } });
                options.inputs = [
                    {
                        type: 'radio',
                        name: 'deleteall',
                        checked: true,
                        value: false,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_17__["Translate"].instant('addon.calendar.deleteoneevent'),
                    },
                    {
                        type: 'radio',
                        name: 'deleteall',
                        checked: false,
                        value: true,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_17__["Translate"].instant('addon.calendar.deleteallevents'),
                    },
                ];
            }
            else {
                // Not repeated, display a simple confirm.
                message = _singletons__WEBPACK_IMPORTED_MODULE_17__["Translate"].instant('addon.calendar.confirmeventdelete', { $a: this.event.name });
            }
            let deleteAll = false;
            try {
                deleteAll = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(message, title, undefined, undefined, options);
            }
            catch (_a) {
                // User canceled.
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                const sent = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].deleteEvent(this.event.id, this.event.name, deleteAll);
                if (sent) {
                    // Event deleted, invalidate right days & months.
                    try {
                        yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].refreshAfterChangeEvent(this.event, deleteAll ? this.event.eventcount : 1);
                    }
                    catch (_b) {
                        // Ignore errors.
                    }
                }
                // Trigger an event.
                _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].DELETED_EVENT_EVENT, {
                    eventId: this.eventId,
                    sent: sent,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_11__["CoreSites"].getCurrentSiteId());
                if (sent) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showToast('addon.calendar.eventcalendareventdeleted', true, 3000);
                    // Event deleted, close the view.
                    if (_services_screen__WEBPACK_IMPORTED_MODULE_21__["CoreScreen"].isMobile) {
                        _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].back();
                    }
                }
                else {
                    // Event deleted in offline, just mark it as deleted.
                    this.event.deleted = true;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting event.');
            }
            modal.dismiss();
        });
    }
    /**
     * Undo delete the event.
     */
    undoDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].unmarkDeleted(this.event.id);
                // Trigger an event.
                _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, {
                    eventId: this.eventId,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_11__["CoreSites"].getCurrentSiteId());
                this.event.deleted = false;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error undeleting event.');
            }
            modal.dismiss();
        });
    }
    /**
     * Check the result of an automatic sync or a manual sync not done by this page.
     *
     * @param isManual Whether it's a manual sync.
     * @param data Sync result.
     */
    checkSyncResult(isManual, data) {
        if (!data) {
            return;
        }
        if (data.deleted && data.deleted.indexOf(this.eventId) != -1) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showToast('addon.calendar.eventcalendareventdeleted', true, 3000);
            // Event was deleted, close the view.
            if (_services_screen__WEBPACK_IMPORTED_MODULE_21__["CoreScreen"].isMobile) {
                _services_navigator__WEBPACK_IMPORTED_MODULE_18__["CoreNavigator"].back();
            }
        }
        else if (data.events && (!isManual || data.source != 'event')) {
            const event = data.events.find((ev) => ev.id == this.eventId);
            if (event) {
                this.eventLoaded = false;
                this.refreshEvent();
            }
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.editEventObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.syncObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.manualSyncObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.onlineObserver) === null || _d === void 0 ? void 0 : _d.unsubscribe();
    }
};
AddonCalendarEventPage.ctorParameters = () => [
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_16__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"] }
];
AddonCalendarEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event.scss */ "./src/addons/calendar/pages/event/event.scss")).default]
    })
], AddonCalendarEventPage);



/***/ }),

/***/ "./src/addons/calendar/pages/event/event.scss":
/*!****************************************************!*\
  !*** ./src/addons/calendar/pages/event/event.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-card ion-note {\n  font-size: 1.6rem;\n}\n:host h1 ion-icon, :host h1 img {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvZXZlbnQvZXZlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FBQVI7QUFFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvYWRkb25zL2NhbGVuZGFyL3BhZ2VzL2V2ZW50L2V2ZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNhcmQgaW9uLW5vdGUge1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB9XG4gICAgaDEgaW9uLWljb24sIGgxIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=addons-calendar-pages-event-event-module.js.map