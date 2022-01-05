(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.settings.settings' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item *ngIf=\"defaultTime != -1\">\n            <ion-label>{{ 'addon.calendar.defaultnotificationtime' | translate }}</ion-label>\n            <ion-select [(ngModel)]=\"defaultTime\" (ionChange)=\"updateDefaultTime(defaultTime)\" interface=\"action-sheet\"\n                [interfaceOptions]=\"{header: 'addon.calendar.defaultnotificationtime' | translate}\">\n                <ion-select-option [value]=\"0\">{{ 'core.settings.disabled' | translate }}</ion-select-option>\n                <ion-select-option [value]=\"10\">{{ 600 | coreDuration }}</ion-select-option>\n                <ion-select-option [value]=\"30\">{{ 1800 | coreDuration }}</ion-select-option>\n                <ion-select-option [value]=\"60\">{{ 3600 | coreDuration }}</ion-select-option>\n                <ion-select-option [value]=\"120\">{{ 7200 | coreDuration }}</ion-select-option>\n                <ion-select-option [value]=\"360\">{{ 21600 | coreDuration }}</ion-select-option>\n                <ion-select-option [value]=\"720\">{{ 43200 | coreDuration }}</ion-select-option>\n                <ion-select-option [value]=\"1440\">{{ 86400 | coreDuration }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/calendar/pages/settings/settings.module.ts":
/*!***************************************************************!*\
  !*** ./src/addons/calendar/pages/settings/settings.module.ts ***!
  \***************************************************************/
/*! exports provided: AddonCalendarSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarSettingsPageModule", function() { return AddonCalendarSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/addons/calendar/pages/settings/settings.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
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
        component: _settings__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarSettingsPage"],
    },
];
let AddonCalendarSettingsPageModule = class AddonCalendarSettingsPageModule {
};
AddonCalendarSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
        ],
        declarations: [
            _settings__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarSettingsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarSettingsPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/settings/settings.ts":
/*!********************************************************!*\
  !*** ./src/addons/calendar/pages/settings/settings.ts ***!
  \********************************************************/
/*! exports provided: AddonCalendarSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarSettingsPage", function() { return AddonCalendarSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
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
 * Page that displays the calendar settings.
 */
let AddonCalendarSettingsPage = class AddonCalendarSettingsPage {
    constructor() {
        this.defaultTime = -1;
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.defaultTime = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getDefaultNotificationTime();
        });
    }
    /**
     * Update default time.
     *
     * @param newTime New time.
     */
    updateDefaultTime(newTime) {
        _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].setDefaultNotificationTime(newTime);
        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].DEFAULT_NOTIFICATION_TIME_CHANGED, { time: newTime }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
    }
};
AddonCalendarSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html")).default,
    })
], AddonCalendarSettingsPage);



/***/ })

}]);
//# sourceMappingURL=addons-calendar-pages-settings-settings-module.js.map