(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-licenses-licenses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <h1>{{ 'core.settings.opensourcelicenses' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item button *ngIf=\"error\" class=\"ion-text-wrap\" [href]=\"licensesUrl\" core-link auto-login=\"no\">\n            <ion-label>\n                {{ 'core.settings.opensourcelicenses' | translate }}\n            </ion-label>\n            <ion-button [href]=\"licensesUrl\" target=\"_blank\" fill=\"clear\" slot=\"end\" core-link auto-login=\"no\">\n                {{ 'core.view' | translate }}</ion-button>\n        </ion-item>\n\n        <ng-container *ngIf=\"!error\">\n            <ion-item *ngFor=\"let license of licenses\" class=\"ion-text-wrap\">\n                <ion-label>\n                    <p class=\"item-heading\">\n                        <a *ngIf=\"license.repository\" [href]=\"license.repository\" core-link\n                            auto-login=\"no\">{{ license.name }}</a>\n                        <ng-container *ngIf=\"!license.repository\">{{ license.name }}</ng-container> - {{ license.version }}\n                    </p>\n                    <p class=\"item-heading\" *ngIf=\"license.publisher\">\n                        {{ 'core.settings.publisher' | translate }}{{ 'core.labelsep' | translate }} {{ license.publisher }}\n                    </p>\n                    <p>{{ 'core.settings.license' | translate }}{{ 'core.labelsep' | translate }} {{ license.licenses }}</p>\n                    <p><a *ngIf=\"license.url\" [href]=\"license.url\" core-link auto-login=\"no\">{{ license.url }}</a></p>\n                    <p><a *ngIf=\"license.email\" [href]=\"'mailto:' + license.email\" core-link\n                            auto-login=\"no\">{{ license.email }}</a></p>\n                </ion-label>\n                <ion-button *ngIf=\"license.licenseUrl\" [href]=\"license.licenseUrl\" target=\"_blank\"\n                    fill=\"clear\" slot=\"end\" core-link auto-login=\"no\">{{ 'core.view' | translate }}</ion-button>\n            </ion-item>\n        </ng-container>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/settings/pages/licenses/licenses.module.ts":
/*!**********************************************************************!*\
  !*** ./src/core/features/settings/pages/licenses/licenses.module.ts ***!
  \**********************************************************************/
/*! exports provided: CoreSettingsLicensesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsLicensesPageModule", function() { return CoreSettingsLicensesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _licenses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./licenses */ "./src/core/features/settings/pages/licenses/licenses.ts");
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
        component: _licenses__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsLicensesPage"],
    },
];
let CoreSettingsLicensesPageModule = class CoreSettingsLicensesPageModule {
};
CoreSettingsLicensesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _licenses__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsLicensesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsLicensesPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/licenses/licenses.ts":
/*!***************************************************************!*\
  !*** ./src/core/features/settings/pages/licenses/licenses.ts ***!
  \***************************************************************/
/*! exports provided: CoreSettingsLicensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsLicensesPage", function() { return CoreSettingsLicensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays the open source licenses information.
 */
let CoreSettingsLicensesPage = class CoreSettingsLicensesPage {
    constructor() {
        this.loaded = false;
        this.licenses = [];
        this.error = false;
        let version = 'v' + _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname;
        if (version.indexOf('-') > 0) {
            version = 'integration';
        }
        this.licensesUrl = 'https://raw.githubusercontent.com/moodlehq/moodleapp/' + version + '/licenses.json';
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const licenses = yield _singletons__WEBPACK_IMPORTED_MODULE_3__["Http"].get(this.licensesUrl).toPromise();
                this.licenses = Object.keys(licenses).map((name) => {
                    const license = licenses[name];
                    const nameSplit = name.lastIndexOf('@');
                    license.name = name.substring(0, nameSplit);
                    license.version = name.substring(nameSplit + 1);
                    if (license.repository) {
                        license.repository = license.repository.replace('git://', 'https://');
                        if (license.repository.indexOf('github.com') > 0) {
                            license.licenseUrl = license.repository + '/blob/' + license.version + '/' + license.licenseFile;
                        }
                    }
                    return license;
                });
                this.error = false;
            }
            catch (_a) {
                this.error = true;
            }
            this.loaded = true;
        });
    }
};
CoreSettingsLicensesPage.ctorParameters = () => [];
CoreSettingsLicensesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-licenses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./licenses.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html")).default,
    })
], CoreSettingsLicensesPage);



/***/ })

}]);
//# sourceMappingURL=pages-licenses-licenses-module.js.map