(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-deviceinfo-deviceinfo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            {{ 'core.settings.deviceinfo' | translate }}\n        </h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"copyInfo()\" [attr.aria-label]=\"'core.settings.copyinfo' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-clipboard\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.appversion' | translate}}</h2>\n            <p>{{ deviceInfo.versionName }} ({{ deviceInfo.versionCode }})</p>\n        </ion-label>\n    </ion-item>\n    <ion-item (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.compilationinfo' | translate }}</h2>\n            <p *ngIf=\"deviceInfo.compilationTime\">{{ deviceInfo.compilationTime | coreFormatDate: \"LLL Z\": false }}</p>\n            <p *ngIf=\"deviceInfo.lastCommit\">{{ deviceInfo.lastCommit }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.siteUrl\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.siteinfo' | translate }}<ng-container *ngIf=\"deviceInfo.isPrefixedUrl\"> *</ng-container></h2>\n            <p><a [href]=\"deviceInfo.siteUrl\" core-link auto-login=\"yes\">{{ deviceInfo.siteUrl }}</a></p>\n            <p *ngIf=\"deviceInfo.siteVersion\">{{ deviceInfo.siteVersion }}</p>\n            <p *ngIf=\"deviceInfo.siteId\">{{ deviceInfo.siteId }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.fileSystemRoot\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.filesystemroot' | translate }}</h2>\n            <p><a *ngIf=\"fsClickable\" [href]=\"deviceInfo.fileSystemRoot\" core-link auto-login=\"no\">{{ deviceInfo.fileSystemRoot }}</a></p>\n            <p *ngIf=\"!fsClickable\">{{ deviceInfo.fileSystemRoot }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.userAgent\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.navigatoruseragent' | translate }}</h2>\n            <p>{{ deviceInfo.userAgent }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.browserLanguage\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.navigatorlanguage' | translate }}</h2>\n            <p>{{ deviceInfo.browserLanguage }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.currentLanguage\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.currentlanguage' | translate }}</h2>\n            <p>{{ currentLangName }} ({{ deviceInfo.currentLanguage }})</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.locationHref\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.locationhref' | translate }}</h2>\n            <p>{{ deviceInfo.locationHref }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.deviceType\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.displayformat' | translate }}</h2>\n            <p>{{ 'core.' + deviceInfo.deviceType | translate }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.deviceOs && deviceOsTranslated\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.deviceos' | translate}}</h2>\n            <p>{{ deviceOsTranslated }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.screen\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.screen' | translate }}</h2>\n            <p>{{ deviceInfo.screen }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.networkstatus' | translate}}</h2>\n            <p>{{ 'core.' + deviceInfo.networkStatus | translate }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.wificonnection' | translate}}</h2>\n            <p>{{ 'core.' + deviceInfo.wifiConnection | translate }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.cordovaVersion\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.cordovaversion' | translate }}</h2>\n            <p>{{ deviceInfo.cordovaVersion }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.platform\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.cordovadeviceplatform' | translate }}</h2>\n            <p>{{ deviceInfo.platform }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.osVersion\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.cordovadeviceosversion' | translate }}</h2>\n            <p>{{ deviceInfo.osVersion }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.model\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.cordovadevicemodel' | translate}}</h2>\n            <p>{{ deviceInfo.model }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.uuid\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.cordovadeviceuuid' | translate}}</h2>\n            <p>{{ deviceInfo.uuid }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"deviceInfo.pushId\" (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.pushid' | translate }}</h2>\n            <p>{{ deviceInfo.pushId }}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item (longPress)=\"copyItemInfo($event)\">\n        <ion-label class=\"ion-text-wrap\">\n            <h2>{{ 'core.settings.localnotifavailable' | translate }}</h2>\n            <p>{{ 'core.' + deviceInfo.localNotifAvailable | translate }}</p>\n        </ion-label>\n    </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/settings/pages/deviceinfo/deviceinfo.module.ts":
/*!**************************************************************************!*\
  !*** ./src/core/features/settings/pages/deviceinfo/deviceinfo.module.ts ***!
  \**************************************************************************/
/*! exports provided: CoreSettingsDeviceInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDeviceInfoPageModule", function() { return CoreSettingsDeviceInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _deviceinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deviceinfo */ "./src/core/features/settings/pages/deviceinfo/deviceinfo.ts");
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
        component: _deviceinfo__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsDeviceInfoPage"],
    },
];
let CoreSettingsDeviceInfoPageModule = class CoreSettingsDeviceInfoPageModule {
};
CoreSettingsDeviceInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _deviceinfo__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsDeviceInfoPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsDeviceInfoPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/deviceinfo/deviceinfo.scss":
/*!*********************************************************************!*\
  !*** ./src/core/features/settings/pages/deviceinfo/deviceinfo.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\n  -webkit-user-select: text;\n          user-select: text;\n  cursor: text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2RldmljZWluZm8vZGV2aWNlaW5mby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9zZXR0aW5ncy9wYWdlcy9kZXZpY2VpbmZvL2RldmljZWluZm8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/core/features/settings/pages/deviceinfo/deviceinfo.ts":
/*!*******************************************************************!*\
  !*** ./src/core/features/settings/pages/deviceinfo/deviceinfo.ts ***!
  \*******************************************************************/
/*! exports provided: CoreSettingsDeviceInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDeviceInfoPage", function() { return CoreSettingsDeviceInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/lang */ "./src/core/services/lang.ts");
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/file */ "./src/core/services/file.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/pushnotifications/services/pushnotifications */ "./src/core/features/pushnotifications/services/pushnotifications.ts");
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
 * Page that displays the device information.
 */
let CoreSettingsDeviceInfoPage = class CoreSettingsDeviceInfoPage {
    constructor() {
        var _a;
        this.fsClickable = false;
        const appProvider = _services_app__WEBPACK_IMPORTED_MODULE_1__["CoreApp"].instance;
        const sitesProvider = _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].instance;
        const device = _singletons__WEBPACK_IMPORTED_MODULE_5__["Device"].instance;
        const translate = _singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instance;
        const navigator = window.navigator;
        this.deviceInfo = {
            versionName: _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.versionname,
            versionCode: _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.versioncode,
            compilationTime: _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].BUILD.compilationTime || 0,
            lastCommit: _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].BUILD.lastCommitHash || '',
            networkStatus: appProvider.isOnline() ? 'online' : 'offline',
            wifiConnection: appProvider.isWifi() ? 'yes' : 'no',
            localNotifAvailable: _services_local_notifications__WEBPACK_IMPORTED_MODULE_4__["CoreLocalNotifications"].isAvailable() ? 'yes' : 'no',
            pushId: _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_10__["CorePushNotifications"].getPushId(),
            deviceType: '',
        };
        if (window.location && window.location.href) {
            const url = window.location.href;
            this.deviceInfo.locationHref = url.indexOf('#') > 0 ? url.substr(0, url.indexOf('#')) : url;
        }
        if (window.screen) {
            this.deviceInfo.screen = window.innerWidth + 'x' + window.innerHeight +
                ' (' + window.screen.width + 'x' + window.screen.height + ')';
        }
        if (appProvider.isMobile()) {
            this.deviceInfo.deviceType = _singletons__WEBPACK_IMPORTED_MODULE_5__["Platform"].is('tablet') ? 'tablet' : 'phone';
            if (appProvider.isAndroid()) {
                this.deviceInfo.deviceOs = 'android';
                this.deviceOsTranslated = 'Android';
            }
            else if (appProvider.isIOS()) {
                this.deviceInfo.deviceOs = 'ios';
                this.deviceOsTranslated = 'iOS';
            }
            else {
                const matches = navigator.userAgent.match(/\(([^)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                }
                else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = translate.instant('core.unknown');
                }
            }
        }
        else {
            this.deviceInfo.deviceType = 'browser';
            const matches = navigator.userAgent.match(/\(([^)]*)\)/);
            if (matches && matches.length > 1) {
                this.deviceInfo.deviceOs = matches[1];
                this.deviceOsTranslated = matches[1];
            }
            else {
                this.deviceInfo.deviceOs = 'unknown';
                this.deviceOsTranslated = translate.instant('core.unknown');
            }
        }
        if (navigator) {
            if (navigator.userAgent) {
                this.deviceInfo.userAgent = navigator.userAgent;
            }
            if (navigator.language) {
                this.deviceInfo.browserLanguage = navigator.language;
            }
        }
        if (device) {
            if (device.cordova) {
                this.deviceInfo.cordovaVersion = device.cordova;
            }
            if (device.platform) {
                this.deviceInfo.platform = device.platform;
            }
            if (device.version) {
                this.deviceInfo.osVersion = device.version;
            }
            if (device.model) {
                this.deviceInfo.model = device.model;
            }
            if (device.uuid) {
                this.deviceInfo.uuid = device.uuid;
            }
        }
        const currentSite = sitesProvider.getCurrentSite();
        this.deviceInfo.siteUrl = (currentSite === null || currentSite === void 0 ? void 0 : currentSite.getURL()) ||
            (typeof _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.siteurl == 'string' && _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.siteurl) || undefined;
        this.deviceInfo.isPrefixedUrl = !!_core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.siteurl;
        this.deviceInfo.siteId = currentSite === null || currentSite === void 0 ? void 0 : currentSite.getId();
        this.deviceInfo.siteVersion = (_a = currentSite === null || currentSite === void 0 ? void 0 : currentSite.getInfo()) === null || _a === void 0 ? void 0 : _a.release;
        // Refresh online status when changes.
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_5__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_5__["NgZone"].run(() => {
                this.deviceInfo.networkStatus = appProvider.isOnline() ? 'online' : 'offline';
            });
        });
        this.asyncInit();
    }
    /**
     * Async part of the constructor.
     */
    asyncInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fileProvider = _services_file__WEBPACK_IMPORTED_MODULE_7__["CoreFile"].instance;
            const lang = yield _services_lang__WEBPACK_IMPORTED_MODULE_6__["CoreLang"].getCurrentLanguage();
            this.deviceInfo.currentLanguage = lang;
            this.currentLangName = _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.languages[lang];
            if (fileProvider.isAvailable()) {
                const basepath = yield fileProvider.getBasePath();
                this.deviceInfo.fileSystemRoot = basepath;
                this.fsClickable = fileProvider.usesHTMLAPI();
            }
        });
    }
    /**
     * Copies device info into the clipboard.
     */
    copyInfo() {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].copyToClipboard(JSON.stringify(this.deviceInfo));
    }
    /**
     * Copies device info item into the clipboard.
     *
     * @param e Event.
     */
    copyItemInfo(e) {
        var _a, _b;
        const el = e.target;
        const text = (_b = (_a = el === null || el === void 0 ? void 0 : el.closest('ion-item')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
        text && _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].copyToClipboard(text);
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    }
};
CoreSettingsDeviceInfoPage.ctorParameters = () => [];
CoreSettingsDeviceInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-core-app-settings-deviceinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./deviceinfo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./deviceinfo.scss */ "./src/core/features/settings/pages/deviceinfo/deviceinfo.scss")).default]
    })
], CoreSettingsDeviceInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-deviceinfo-deviceinfo-module.js.map