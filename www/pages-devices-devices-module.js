(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-devices-devices-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messageoutput/airnotifier/pages/devices/devices.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messageoutput/airnotifier/pages/devices/devices.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.messageoutput_airnotifier.processorsettingsdesc' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!devicesLoaded\" (ionRefresh)=\"refreshDevices($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"devicesLoaded\">\n        <ion-list>\n            <ion-item class=\"ion-text-wrap\" *ngFor=\"let device of devices\" [class.item-current]=\"device.current\">\n                <ion-label [class.core-bold]=\"device.current\">\n                    <p class=\"item-heading\">\n                        {{ device.name }} {{ device.model }}\n                        <span *ngIf=\"device.current\">({{ 'core.currentdevice' | translate }})</span>\n                    </p>\n                    <p>{{ device.platform }} {{ device.version }}</p>\n                </ion-label>\n                <core-button-with-spinner [loading]=\"device.updating\" slot=\"end\">\n                    <ion-toggle\n                        [(ngModel)]=\"device.enable\"\n                        (ngModelChange)=\"enableDevice(device, device.enable)\"\n                    >\n                    </ion-toggle>\n                </core-button-with-spinner>\n            </ion-item>\n        </ion-list>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/messageoutput/airnotifier/pages/devices/devices.module.ts":
/*!******************************************************************************!*\
  !*** ./src/addons/messageoutput/airnotifier/pages/devices/devices.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddonMessageOutputAirnotifierDevicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessageOutputAirnotifierDevicesPageModule", function() { return AddonMessageOutputAirnotifierDevicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devices */ "./src/addons/messageoutput/airnotifier/pages/devices/devices.ts");
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
        component: _devices__WEBPACK_IMPORTED_MODULE_4__["AddonMessageOutputAirnotifierDevicesPage"],
    },
];
let AddonMessageOutputAirnotifierDevicesPageModule = class AddonMessageOutputAirnotifierDevicesPageModule {
};
AddonMessageOutputAirnotifierDevicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _devices__WEBPACK_IMPORTED_MODULE_4__["AddonMessageOutputAirnotifierDevicesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessageOutputAirnotifierDevicesPageModule);



/***/ }),

/***/ "./src/addons/messageoutput/airnotifier/pages/devices/devices.ts":
/*!***********************************************************************!*\
  !*** ./src/addons/messageoutput/airnotifier/pages/devices/devices.ts ***!
  \***********************************************************************/
/*! exports provided: AddonMessageOutputAirnotifierDevicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessageOutputAirnotifierDevicesPage", function() { return AddonMessageOutputAirnotifierDevicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/pushnotifications/services/pushnotifications */ "./src/core/features/pushnotifications/services/pushnotifications.ts");
/* harmony import */ var _services_airnotifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/airnotifier */ "./src/addons/messageoutput/airnotifier/services/airnotifier.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that displays the list of devices.
 */
let AddonMessageOutputAirnotifierDevicesPage = class AddonMessageOutputAirnotifierDevicesPage {
    constructor() {
        this.devices = [];
        this.devicesLoaded = false;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.fetchDevices();
    }
    /**
     * Fetches the list of devices.
     *
     * @return Promise resolved when done.
     */
    fetchDevices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const devices = yield _services_airnotifier__WEBPACK_IMPORTED_MODULE_4__["AddonMessageOutputAirnotifier"].getUserDevices();
                this.devices = this.formatDevices(devices);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.devicesLoaded = true;
            }
        });
    }
    /**
     * Add some calculated data for devices.
     *
     * @param devices Devices to format.
     * @return Formatted devices.
     */
    formatDevices(devices) {
        const formattedDevices = devices;
        const pushId = _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_3__["CorePushNotifications"].getPushId();
        // Convert enabled to boolean and search current device.
        formattedDevices.forEach((device) => {
            device.enable = !!device.enable;
            device.current = !!(pushId && pushId == device.pushid);
        });
        return formattedDevices.sort((a, b) => {
            const compareA = a.name.toLowerCase();
            const compareB = b.name.toLowerCase();
            return compareA.localeCompare(compareB);
        });
    }
    /**
     * Update list of devices after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    updateDevicesAfterDelay() {
        // Cancel pending updates.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
        }
        this.updateTimeout = window.setTimeout(() => {
            this.updateTimeout = undefined;
            this.updateDevices();
        }, 5000);
    }
    /**
     * Fetch devices. The purpose is to store the updated data, it won't be reflected in the view.
     */
    updateDevices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_airnotifier__WEBPACK_IMPORTED_MODULE_4__["AddonMessageOutputAirnotifier"].invalidateUserDevices());
            yield _services_airnotifier__WEBPACK_IMPORTED_MODULE_4__["AddonMessageOutputAirnotifier"].getUserDevices();
        });
    }
    /**
     * Refresh the list of devices.
     *
     * @param refresher Refresher.
     */
    refreshDevices(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_airnotifier__WEBPACK_IMPORTED_MODULE_4__["AddonMessageOutputAirnotifier"].invalidateUserDevices());
                yield this.fetchDevices();
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Enable or disable a certain device.
     *
     * @param device The device object.
     * @param enable True to enable the device, false to disable it.
     */
    enableDevice(device, enable) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            device.updating = true;
            try {
                yield _services_airnotifier__WEBPACK_IMPORTED_MODULE_4__["AddonMessageOutputAirnotifier"].enableDevice(device.id, enable);
                // Update the list of devices since it was modified.
                this.updateDevicesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModal(error);
                device.enable = !device.enable;
            }
            finally {
                device.updating = false;
            }
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        // If there is a pending action to update devices, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updateDevices();
        }
    }
};
AddonMessageOutputAirnotifierDevicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-message-output-airnotifier-devices',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./devices.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messageoutput/airnotifier/pages/devices/devices.html")).default,
    })
], AddonMessageOutputAirnotifierDevicesPage);



/***/ })

}]);
//# sourceMappingURL=pages-devices-devices-module.js.map