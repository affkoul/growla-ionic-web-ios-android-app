(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reconnect-reconnect-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/reconnect/reconnect.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/reconnect/reconnect.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <h1>{{ 'core.login.reconnect' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" (keydown)=\"keyDown($event)\" (keyup)=\"keyUp($event)\">\n    <div class=\"ion-text-wrap ion-text-center ion-margin-bottom\" [ngClass]=\"{'item-avatar-center': showSiteAvatar}\">\n        <!-- Show user avatar. -->\n        <img *ngIf=\"showSiteAvatar\" [src]=\"userAvatar\" class=\"large-avatar\" core-external-content [siteId]=\"siteId\"\n            alt=\"{{ 'core.pictureof' | translate:{$a: userFullName} }}\" onError=\"this.src='assets/img/user-avatar.png'\">\n\n        <div class=\"core-login-site-logo\" *ngIf=\"!showSiteAvatar\">\n            <!-- Show site logo or a default image. -->\n            <img *ngIf=\"logoUrl\" [src]=\"logoUrl\" role=\"presentation\" onError=\"this.src='assets/img/login_logo.png'\" alt=\"\">\n            <img *ngIf=\"!logoUrl\" src=\"assets/img/login_logo.png\" role=\"presentation\" alt=\"\">\n        </div>\n\n        <p *ngIf=\"siteName\" class=\"ion-padding core-sitename\">\n            <core-format-text [text]=\"siteName\" [filter]=\"false\"></core-format-text>\n        </p>\n        <p class=\"core-siteurl\">{{siteUrl}}</p>\n\n        <ion-card *ngIf=\"!isLoggedOut\" class=\"core-danger-card core-login-reconnect-warning\">\n            <ion-item>\n                <ion-icon name=\"fas-exclamation-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label color=\"danger\">{{ 'core.login.reconnectdescription' | translate }}</ion-label>\n            </ion-item>\n        </ion-card>\n    </div>\n    <form *ngIf=\"!isOAuth\" [formGroup]=\"credForm\" (ngSubmit)=\"login($event)\" class=\"core-login-form\" #reconnectForm>\n        <ion-item class=\"ion-text-wrap core-username item-interactive\">\n            <ion-label>\n                <p>{{username}}</p>\n            </ion-label>\n        </ion-item>\n        <ion-item class=\"ion-margin-bottom\">\n            <ion-label class=\"sr-only\">{{ 'core.login.password' | translate }}</ion-label>\n            <core-show-password name=\"password\">\n                <ion-input class=\"core-ioninput-password\" name=\"password\" type=\"password\"\n                    placeholder=\"{{ 'core.login.password' | translate }}\" formControlName=\"password\" [clearOnEdit]=\"false\"\n                    autocomplete=\"current-password\" enterkeyhint=\"go\" required=\"true\">\n                </ion-input>\n            </core-show-password>\n        </ion-item>\n        <ion-grid class=\"ion-padding\">\n            <ion-row>\n                <ion-col>\n                    <ion-button expand=\"block\" color=\"light\" (click)=\"cancel($event)\">\n                        {{ 'core.login.cancel' | translate }}\n                    </ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credForm.valid\">\n                        {{ 'core.login.loginbutton' | translate }}\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ng-container *ngIf=\"showScanQR\">\n            <div class=\"ion-text-center ion-padding\">{{ 'core.login.or' | translate }}</div>\n            <ion-button expand=\"block\" color=\"light\" class=\"ion-margin\" lines=\"none\" (click)=\"showInstructionsAndScanQR()\">\n                <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.scanqr' | translate }}</ion-label>\n            </ion-button>\n        </ng-container>\n    </form>\n\n    <!-- Forgotten password option. -->\n    <ion-button\n        *ngIf=\"showForgottenPassword && !isOAuth\"\n        expand=\"block\"\n        fill=\"clear\"\n        color=\"dark\"\n        class=\"core-login-forgotten-password core-button-as-link ion-text-wrap\"\n        (click)=\"forgottenPassword()\"\n    >\n        <ion-label>{{ 'core.login.forgotten' | translate }}</ion-label>\n    </ion-button>\n\n    <!-- Identity providers. -->\n    <ion-list *ngIf=\"identityProviders && identityProviders.length\" class=\"ion-padding-top core-login-identity-providers\">\n        <ion-item class=\"ion-text-wrap\" lines=\"none\">\n            <ion-label><h3 class=\"item-heading\">{{ 'core.login.potentialidps' | translate }}</h3></ion-label>\n        </ion-item>\n        <ion-item button *ngFor=\"let provider of identityProviders\" class=\"ion-text-wrap core-oauth-icon\"\n            (click)=\"oauthClicked(provider)\" detail=\"false\">\n            <img [src]=\"provider.iconurl\" alt=\"\" role=\"presentation\" width=\"32\" height=\"32\" slot=\"start\">\n            <ion-label>{{provider.name}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n    <!-- If OAuth, display cancel button since the form isn't displayed. -->\n    <ion-list *ngIf=\"isOAuth\">\n        <ion-button expand=\"block\" class=\"ion-margin\" color=\"light\" (click)=\"cancel($event)\">\n            {{ 'core.login.cancel' | translate }}\n        </ion-button>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/login/pages/reconnect/reconnect.module.ts":
/*!*********************************************************************!*\
  !*** ./src/core/features/login/pages/reconnect/reconnect.module.ts ***!
  \*********************************************************************/
/*! exports provided: CoreLoginReconnectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginReconnectPageModule", function() { return CoreLoginReconnectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _reconnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reconnect */ "./src/core/features/login/pages/reconnect/reconnect.ts");
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
        component: _reconnect__WEBPACK_IMPORTED_MODULE_4__["CoreLoginReconnectPage"],
    },
];
let CoreLoginReconnectPageModule = class CoreLoginReconnectPageModule {
};
CoreLoginReconnectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _reconnect__WEBPACK_IMPORTED_MODULE_4__["CoreLoginReconnectPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginReconnectPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/reconnect/reconnect.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/login/pages/reconnect/reconnect.ts ***!
  \**************************************************************/
/*! exports provided: CoreLoginReconnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginReconnectPage", function() { return CoreLoginReconnectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page to enter the user password to reconnect to a site.
 */
let CoreLoginReconnectPage = class CoreLoginReconnectPage {
    constructor(fb) {
        this.fb = fb;
        this.showForgottenPassword = true;
        this.showSiteAvatar = false;
        this.isOAuth = false;
        this.showScanQR = false;
        this.viewLeft = false;
        this.eventThrown = false;
        const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite();
        this.isLoggedOut = !!(currentSite === null || currentSite === void 0 ? void 0 : currentSite.isLoggedOut());
        this.credForm = fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('siteId');
            if (!siteId) {
                return this.cancel();
            }
            this.siteId = siteId;
            this.page = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('pageName');
            this.pageOptions = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('pageOptions');
            this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].displayQRInSiteScreen() || _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].displayQRInCredentialsScreen();
            try {
                const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getSite(this.siteId);
                if (!site.infos) {
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_9__["CoreError"]('Invalid site');
                }
                this.username = site.infos.username;
                this.userFullName = site.infos.fullname;
                this.userAvatar = site.infos.userpictureurl;
                this.siteUrl = site.infos.siteurl;
                this.siteName = site.getSiteName();
                // If login was OAuth we should only reach this page if the OAuth method ID has changed.
                this.isOAuth = site.isOAuth();
                // Show logo instead of avatar if it's a fixed site.
                this.showSiteAvatar = !!this.userAvatar && !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].getFixedSites();
                const config = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(site.getPublicConfig());
                if (!config) {
                    return;
                }
                this.siteConfig = config;
                yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].checkApplication(config);
                // Check logoURL if user avatar is not set.
                if (this.userAvatar.startsWith(this.siteUrl + '/theme/image.php')) {
                    this.showSiteAvatar = false;
                }
                this.logoUrl = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].getLogoUrl(config);
                this.getDataFromConfig(this.siteConfig);
            }
            catch (error) {
                // Just leave the view.
                this.cancel();
            }
        });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        this.viewLeft = true;
        _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
    }
    /**
     * Get some data (like identity providers) from the site config.
     *
     * @param config Config to use.
     */
    getDataFromConfig(config) {
        const disabledFeatures = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].getDisabledFeatures(config);
        this.identityProviders = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].getValidIdentityProviders(config, disabledFeatures);
        this.showForgottenPassword = !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].isForgottenPasswordDisabled(config);
        if (!this.eventThrown && !this.viewLeft) {
            this.eventThrown = true;
            _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].LOGIN_SITE_CHECKED, { config: config });
        }
    }
    /**
     * Cancel reconnect.
     *
     * @param e Event.
     */
    cancel(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].logout();
    }
    /**
     * Tries to authenticate the user.
     *
     * @param e Event.
     */
    login(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            _services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].closeKeyboard();
            // Get input data.
            const password = this.credForm.value.password;
            if (!password) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('core.login.passwordrequired', true);
                return;
            }
            if (!_services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showModalLoading();
            try {
                // Start the authentication process.
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getUserToken(this.siteUrl, this.username, password);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].updateSiteToken(this.siteUrl, this.username, data.token, data.privateToken);
                _singletons_form__WEBPACK_IMPORTED_MODULE_11__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                // Update site info too.
                yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].updateSiteInfoByUrl(this.siteUrl, this.username);
                // Reset fields so the data is not in the view anymore.
                this.credForm.controls['password'].reset();
                // Go to the site initial page.
                this.page
                    ? yield _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].navigateToSitePath(this.page, { params: this.pageOptions })
                    : yield _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].navigateToSiteHome();
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].treatUserTokenError(this.siteUrl, error, this.username, password);
                if (error.loggedout) {
                    this.cancel();
                }
                else if (error.errorcode == 'forcepasswordchangenotice') {
                    // Reset password field.
                    this.credForm.controls.password.reset();
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Forgotten password button clicked.
     */
    forgottenPassword() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].forgottenPasswordClicked(this.siteUrl, this.username, this.siteConfig);
    }
    /**
     * An OAuth button was clicked.
     *
     * @param provider The provider that was clicked.
     */
    oauthClicked(provider) {
        var _a;
        const result = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].openBrowserForOAuthLogin(this.siteUrl, provider, (_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.launchurl, this.page, this.pageOptions);
        if (!result) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('Invalid data.');
        }
    }
    /**
     * Show instructions and scan QR code.
     *
     * @return Promise resolved when done.
     */
    showInstructionsAndScanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].showScanQRInstructions();
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].scanQR();
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * A11y key functionality that prevents keyDown events.
     *
     * @param e Event.
     */
    keyDown(e) {
        if (e.key == 'Escape') {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    /**
     * Cancel reconnect.
     *
     * @param e Event.
     */
    keyUp(e) {
        if (e.key == 'Escape') {
            this.cancel(e);
        }
    }
};
CoreLoginReconnectPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginReconnectPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['reconnectForm',] }]
};
CoreLoginReconnectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-reconnect',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reconnect.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/reconnect/reconnect.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginReconnectPage);



/***/ })

}]);
//# sourceMappingURL=pages-reconnect-reconnect-module.js.map