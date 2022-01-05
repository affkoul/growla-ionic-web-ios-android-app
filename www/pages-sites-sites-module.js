(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sites-sites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <h1>{{ 'core.settings.sites' | translate }}</h1>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" *ngIf=\"sites && sites.length > 0\" (click)=\"toggleDelete()\"\n                [attr.aria-label]=\"'core.delete' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-cog\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item button (click)=\"login(site.id)\" *ngFor=\"let site of sites\" detail=\"true\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"site.avatar\" core-external-content [siteId]=\"site.id\"\n                    alt=\"{{ 'core.pictureof' | translate:{$a: site.fullName} }}\" onError=\"this.src='assets/img/user-avatar.png'\">\n            </ion-avatar>\n            <ion-label>\n                <p class=\"item-heading\">{{site.fullName}}</p>\n                <p><core-format-text [text]=\"site.siteName\" clean=\"true\" [siteId]=\"site.id\"></core-format-text></p>\n                <p>{{site.siteUrl}}</p>\n            </ion-label>\n            <ion-badge slot=\"end\" *ngIf=\"!showDelete && site.badge\">\n                <span aria-hidden=\"true\">{{site.badge}}</span>\n                <span class=\"sr-only\">{{ 'core.login.sitebadgedescription' | translate:{ count: site.badge } }}</span>\n            </ion-badge>\n            <ion-button *ngIf=\"showDelete\" slot=\"end\" fill=\"clear\" color=\"danger\" (click)=\"deleteSite($event, site)\"\n                [attr.aria-label]=\"'core.delete' | translate\" [@coreSlideInOut]=\"'fromRight'\">\n                <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-list>\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button (click)=\"add()\" [attr.aria-label]=\"'core.add' | translate\">\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'core.add' | translate }}</span>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/login/pages/sites/sites.module.ts":
/*!*************************************************************!*\
  !*** ./src/core/features/login/pages/sites/sites.module.ts ***!
  \*************************************************************/
/*! exports provided: CoreLoginSitesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitesPageModule", function() { return CoreLoginSitesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sites */ "./src/core/features/login/pages/sites/sites.ts");
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
        component: _sites__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitesPage"],
    },
];
let CoreLoginSitesPageModule = class CoreLoginSitesPageModule {
};
CoreLoginSitesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _sites__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginSitesPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/sites/sites.ts":
/*!******************************************************!*\
  !*** ./src/core/features/login/pages/sites/sites.ts ***!
  \******************************************************/
/*! exports provided: CoreLoginSitesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitesPage", function() { return CoreLoginSitesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/pushnotifications/services/pushnotifications */ "./src/core/features/pushnotifications/services/pushnotifications.ts");
/* harmony import */ var _features_filter_services_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/filter/services/filter */ "./src/core/features/filter/services/filter.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
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
 * Page that displays a "splash screen" while the app is being initialized.
 */
let CoreLoginSitesPage = class CoreLoginSitesPage {
    constructor() {
        this.sites = [];
        this.showDelete = false;
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_5__["CoreLogger"].getInstance('CoreLoginSitesPage');
    }
    /**
     * Component being initialized.
     *
     * @return Promise resolved when done.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sites = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__["CoreUtils"].ignoreErrors(_services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getSortedSites(), []);
            // Remove protocol from the url to show more url text.
            this.sites = yield Promise.all(sites.map((site) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                site.siteUrl = site.siteUrl.replace(/^https?:\/\//, '');
                site.badge = (yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__["CoreUtils"].ignoreErrors(_features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_8__["CorePushNotifications"].getSiteCounter(site.id))) || 0;
                return site;
            })));
            this.showDelete = false;
        });
    }
    /**
     * Go to the page to add a site.
     */
    add() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].goToAddSite(false, true);
    }
    /**
     * Delete a site.
     *
     * @param e Click event.
     * @param site Site to delete.
     * @return Promise resolved when done.
     */
    deleteSite(e, site) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.stopPropagation();
            let siteName = site.siteName || '';
            siteName = yield _features_filter_services_filter__WEBPACK_IMPORTED_MODULE_9__["CoreFilter"].formatText(siteName, { clean: true, singleLine: true, filter: false }, [], site.id);
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showDeleteConfirm('core.login.confirmdeletesite', { sitename: siteName });
            }
            catch (error) {
                // User cancelled, stop.
                return;
            }
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].deleteSite(site.id);
                const index = this.sites.findIndex((listedSite) => listedSite.id == site.id);
                index >= 0 && this.sites.splice(index, 1);
                this.showDelete = false;
                // If there are no sites left, go to add site.
                const hasSites = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].hasSites();
                if (!hasSites) {
                    _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].goToAddSite(true, true);
                }
            }
            catch (error) {
                this.logger.error('Error deleting site ' + site.id, error);
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showErrorModalDefault(error, 'core.login.errordeletesite', true);
            }
        });
    }
    /**
     * Login in a site.
     *
     * @param siteId The site ID.
     * @return Promise resolved when done.
     */
    login(siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showModalLoading();
            try {
                const loggedIn = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].loadSite(siteId);
                if (loggedIn) {
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSiteHome();
                    return;
                }
            }
            catch (error) {
                this.logger.error('Error loading site ' + siteId, error);
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading site.');
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Toggle delete.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate('/settings');
    }
};
CoreLoginSitesPage.ctorParameters = () => [];
CoreLoginSitesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-core-login-sites',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sites.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_10__["CoreAnimations"].SLIDE_IN_OUT],
    })
], CoreLoginSitesPage);



/***/ })

}]);
//# sourceMappingURL=pages-sites-sites-module.js.map