(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ (showCalendar ? 'addon.calendar.calendarevents' : 'addon.calendar.upcomingevents') | translate }}</h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openFilter($event)\" [attr.aria-label]=\"'core.filter' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-filter\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <core-context-menu>\n                <core-context-menu-item *ngIf=\"showCalendar\" [priority]=\"800\"\n                [content]=\"'addon.calendar.upcomingevents' | translate\" iconAction=\"fas-th-list\"\n                (action)=\"toggleDisplay()\"></core-context-menu-item>\n                <core-context-menu-item *ngIf=\"!showCalendar\" [priority]=\"800\"\n                [content]=\"'addon.calendar.monthlyview' | translate\" iconAction=\"fas-calendar-alt\"\n                (action)=\"toggleDisplay()\"></core-context-menu-item>\n                <core-context-menu-item [hidden]=\"!notificationsEnabled\" [priority]=\"600\"\n                [content]=\"'core.settings.settings' | translate\" (action)=\"openSettings()\" iconAction=\"fas-cogs\">\n                </core-context-menu-item>\n                <core-context-menu-item [hidden]=\"!loaded || !hasOffline || !isOnline\" [priority]=\"400\"\n                [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event, true)\"\n                [iconAction]=\"syncIcon\" [closeOnClick]=\"false\"></core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <!-- There is data to be synchronized -->\n    <ion-card class=\"core-warning-card\" *ngIf=\"hasOffline\">\n        <ion-item>\n            <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'addon.calendar.calendar' | translate} }}</ion-label>\n        </ion-item>\n    </ion-card>\n\n    <addon-calendar-calendar [hidden]=\"!showCalendar\" [initialYear]=\"year\" [initialMonth]=\"month\" [filter]=\"filter\"\n        [displayNavButtons]=\"showCalendar\" (onEventClicked)=\"gotoEvent($event)\" (onDayClicked)=\"gotoDay($event)\">\n    </addon-calendar-calendar>\n\n    <addon-calendar-upcoming-events *ngIf=\"loadUpcoming\" [hidden]=\"showCalendar\" [filter]=\"filter\"\n        (onEventClicked)=\"gotoEvent($event)\">\n    </addon-calendar-upcoming-events>\n\n    <!-- Create a calendar event. -->\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"canCreate\">\n        <ion-fab-button (click)=\"openEdit()\" [attr.aria-label]=\"'addon.calendar.newevent' | translate\">\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'addon.calendar.newevent' | translate }}</span>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/calendar/pages/index/index.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/calendar/pages/index/index.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonCalendarIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarIndexPageModule", function() { return AddonCalendarIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/addons/calendar/components/components.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.page */ "./src/addons/calendar/pages/index/index.page.ts");
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
        component: _index_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarIndexPage"],
    },
];
let AddonCalendarIndexPageModule = class AddonCalendarIndexPageModule {
};
AddonCalendarIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarComponentsModule"],
        ],
        declarations: [
            _index_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarIndexPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarIndexPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/index/index.page.ts":
/*!*******************************************************!*\
  !*** ./src/addons/calendar/pages/index/index.page.ts ***!
  \*******************************************************/
/*! exports provided: AddonCalendarIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarIndexPage", function() { return AddonCalendarIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/calendar/calendar */ "./src/addons/calendar/components/calendar/calendar.ts");
/* harmony import */ var _components_upcoming_events_upcoming_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/upcoming-events/upcoming-events */ "./src/addons/calendar/components/upcoming-events/upcoming-events.ts");
/* harmony import */ var _components_filter_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/filter/filter */ "./src/addons/calendar/components/filter/filter.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
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
 * Page that displays the calendar events.
 */
let AddonCalendarIndexPage = class AddonCalendarIndexPage {
    constructor(route) {
        this.route = route;
        this.canCreate = false;
        this.courses = [];
        this.notificationsEnabled = false;
        this.loaded = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
        this.showCalendar = true;
        this.loadUpcoming = false;
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
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        // Listen for events added. When an event is added, reload the data.
        this.newEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].NEW_EVENT_EVENT, (data) => {
            if (data && data.eventId) {
                this.loaded = false;
                this.refreshData(true, false);
            }
        }, this.currentSiteId);
        // Listen for new event discarded event. When it does, reload the data.
        this.discardedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, () => {
            this.loaded = false;
            this.refreshData(true, false);
        }, this.currentSiteId);
        // Listen for events edited. When an event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            if (data && data.eventId) {
                this.loaded = false;
                this.refreshData(true, false);
            }
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarSyncProvider"].AUTO_SYNCED, () => {
            this.loaded = false;
            this.refreshData(false, false);
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarSyncProvider"].MANUAL_SYNCED, (data) => {
            if (data && data.source != 'index') {
                this.loaded = false;
                this.refreshData(false, false);
            }
        }, this.currentSiteId);
        // Update the events when an event is deleted.
        this.deleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].DELETED_EVENT_EVENT, () => {
            this.loaded = false;
            this.refreshData(false, false);
        }, this.currentSiteId);
        // Update the "hasOffline" property if an event deleted in offline is restored.
        this.undeleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hasOffline = yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarOffline"].hasOfflineData();
        }), this.currentSiteId);
        this.filterChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].FILTER_CHANGED_EVENT, (filterData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filter = filterData;
            // Course viewed has changed, check if the user can create events for this course calendar.
            this.canCreate = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].canEditEvents(this.filter.courseId);
        }));
        // Refresh online status when changes.
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_11__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_11__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.notificationsEnabled = _services_local_notifications__WEBPACK_IMPORTED_MODULE_17__["CoreLocalNotifications"].isAvailable();
        this.loadUpcoming = !!_services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteBooleanParam('upcoming');
        this.showCalendar = !this.loadUpcoming;
        this.route.queryParams.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filter.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('courseId');
            this.year = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('year');
            this.month = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('month');
            this.filter.filtered = !!this.filter.courseId;
            this.fetchData(true, false);
        }));
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    fetchData(sync, showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
            this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].isOnline();
            if (sync) {
                // Try to synchronize offline events.
                try {
                    const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarSync"].syncEvents();
                    if (result.warnings && result.warnings.length) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                    }
                    if (result.updated) {
                        // Trigger a manual sync event.
                        result.source = 'index';
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                    }
                }
                catch (error) {
                    if (showErrors) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                    }
                }
            }
            try {
                const promises = [];
                this.hasOffline = false;
                // Load courses for the popover.
                promises.push(_features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesHelper"].getCoursesForPopover(this.filter.courseId).then((data) => {
                    this.courses = data.courses;
                    return;
                }));
                // Check if user can create events.
                promises.push(_services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].canEditEvents(this.filter.courseId).then((canEdit) => {
                    this.canCreate = canEdit;
                    return;
                }));
                // Check if there is offline data.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarOffline"].hasOfflineData().then((hasOffline) => {
                    this.hasOffline = hasOffline;
                    return;
                }));
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            }
            this.loaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_SYNC;
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
    doRefresh(refresher, done, showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.loaded) {
                return;
            }
            yield this.refreshData(true, showErrors).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the data.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @param afterChange Whether the refresh is done after an event has changed or has been synced.
     * @return Promise resolved when done.
     */
    refreshData(sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
            const promises = [];
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].invalidateAllowedEventTypes());
            // Refresh the sub-component.
            if (this.showCalendar && this.calendarComponent) {
                promises.push(this.calendarComponent.refreshData());
            }
            else if (!this.showCalendar && this.upcomingEventsComponent) {
                promises.push(this.upcomingEventsComponent.refreshData());
            }
            yield Promise.all(promises).finally(() => this.fetchData(sync, showErrors));
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
            _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/event/${eventId}`);
        }
    }
    /**
     * View a certain day.
     *
     * @param data Data with the year, month and day.
     */
    gotoDay(data) {
        const params = {
            day: data.day,
            month: data.month,
            year: data.year,
        };
        Object.keys(this.filter).forEach((key) => {
            params[key] = this.filter[key];
        });
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath('/calendar/day', { params });
    }
    /**
     * Show the context menu.
     *
     * @param event Event.
     */
    openFilter(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].openPopover({
                component: _components_filter_filter__WEBPACK_IMPORTED_MODULE_15__["AddonCalendarFilterPopoverComponent"],
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
        eventId = eventId || 0;
        if (this.filter.courseId) {
            params.courseId = this.filter.courseId;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/edit/${eventId}`, { params });
    }
    /**
     * Open calendar events settings.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath('/calendar/settings');
    }
    /**
     * Toogle display: monthly view or upcoming events.
     */
    toggleDisplay() {
        this.showCalendar = !this.showCalendar;
        if (!this.showCalendar) {
            this.loadUpcoming = true;
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        (_a = this.newEventObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.discardedObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.editEventObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.deleteEventObserver) === null || _d === void 0 ? void 0 : _d.off();
        (_e = this.undeleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
        (_f = this.syncObserver) === null || _f === void 0 ? void 0 : _f.off();
        (_g = this.manualSyncObserver) === null || _g === void 0 ? void 0 : _g.off();
        (_h = this.filterChangedObserver) === null || _h === void 0 ? void 0 : _h.off();
        (_j = this.onlineObserver) === null || _j === void 0 ? void 0 : _j.unsubscribe();
    }
};
AddonCalendarIndexPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
];
AddonCalendarIndexPage.propDecorators = {
    calendarComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_13__["AddonCalendarCalendarComponent"],] }],
    upcomingEventsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_upcoming_events_upcoming_events__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarUpcomingEventsComponent"],] }]
};
AddonCalendarIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/index/index.html")).default,
    })
], AddonCalendarIndexPage);



/***/ })

}]);
//# sourceMappingURL=addons-calendar-pages-index-index-module.js.map