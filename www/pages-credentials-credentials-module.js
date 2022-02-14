(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-credentials-credentials-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/credentials/credentials.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/credentials/credentials.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <h1>{{ 'core.login.login' | translate }}</h1>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-cog\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <core-loading [hideUntil]=\"pageLoaded\">\n        <div class=\"ion-text-wrap ion-text-center ion-margin-bottom\">\n            <div class=\"core-login-site-logo\">\n                <!-- Show site logo or a default image. -->\n                <img *ngIf=\"logoUrl\" [src]=\"logoUrl\" role=\"presentation\" alt=\"\" onError=\"this.src='assets/img/login_logo.png'\">\n                <img *ngIf=\"!logoUrl\" src=\"assets/img/login_logo.png\" role=\"presentation\" alt=\"\">\n            </div>\n\n            <h3 *ngIf=\"siteName\" class=\"ion-padding core-sitename\">\n                <core-format-text [text]=\"siteName\" [filter]=\"false\"></core-format-text>\n            </h3>\n            <!-- <p class=\"core-siteurl\">{{siteUrl}}</p> -->\n        </div>\n\n        <form [formGroup]=\"credForm\" (ngSubmit)=\"login($event)\" class=\"core-login-form\" #credentialsForm>\n            <ion-item *ngIf=\"siteChecked && !isBrowserSSO\">\n                <ion-label class=\"sr-only\">{{ 'core.login.username' | translate }}</ion-label>\n                <ion-input type=\"text\" name=\"username\" placeholder=\"{{ 'core.login.username' | translate }}\"\n                    formControlName=\"username\" autocapitalize=\"none\" autocorrect=\"off\" autocomplete=\"username\" enterkeyhint=\"next\"\n                    required=\"true\">\n                </ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"siteChecked && !isBrowserSSO\" class=\"ion-margin-bottom\">\n                <ion-label class=\"sr-only\">{{ 'core.login.password' | translate }}</ion-label>\n                <core-show-password name=\"password\">\n                    <ion-input name=\"password\" type=\"password\" placeholder=\"{{ 'core.login.password' | translate }}\"\n                        formControlName=\"password\" [clearOnEdit]=\"false\" autocomplete=\"current-password\" enterkeyhint=\"go\"\n                        required=\"true\">\n                    </ion-input>\n                </core-show-password>\n            </ion-item>\n            <ion-button expand=\"block\" type=\"submit\" [disabled]=\"siteChecked && !isBrowserSSO && !credForm.valid\"\n                class=\"ion-margin core-login-login-button\">\n                {{ 'core.login.loginbutton' | translate }}\n            </ion-button>\n             <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\n            <input type=\"submit\" class=\"core-submit-hidden-enter\" />\n\n            <ng-container *ngIf=\"showScanQR\">\n                <div class=\"ion-text-center ion-padding\">{{ 'core.login.or' | translate }}</div>\n                <ion-button expand=\"block\" color=\"light\" class=\"ion-margin\" lines=\"none\" (click)=\"showInstructionsAndScanQR()\">\n                    <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label>{{ 'core.scanqr' | translate }}</ion-label>\n                </ion-button>\n            </ng-container>\n        </form>\n        <!-- Forgotten password option. -->\n        <ion-button\n            *ngIf=\"showForgottenPassword\"\n            expand=\"block\"\n            fill=\"clear\"\n            color=\"dark\"\n            class=\"core-login-forgotten-password core-button-as-link ion-text-wrap\"\n            (click)=\"forgottenPassword()\"\n        >\n            <ion-label>{{ 'core.login.forgotten' | translate }}</ion-label>\n        </ion-button>\n\n        <ion-list *ngIf=\"identityProviders && identityProviders.length\" class=\"ion-padding-top core-login-identity-providers\">\n            <ion-item class=\"ion-text-wrap\" lines=\"none\">\n                <ion-label><h3 class=\"item-heading\">{{ 'core.login.potentialidps' | translate }}</h3></ion-label>\n            </ion-item>\n            <ion-item button *ngFor=\"let provider of identityProviders\" class=\"ion-text-wrap core-oauth-icon\"\n                (click)=\"oauthClicked(provider)\" [attr.aria-label]=\"provider.name\" detail=\"false\">\n                <img [src]=\"provider.iconurl\" alt=\"\" width=\"32\" height=\"32\" slot=\"start\">\n                <ion-label>{{provider.name}}</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <ion-list *ngIf=\"canSignup\" class=\"ion-padding-top core-login-sign-up\">\n            <ion-item class=\"ion-text-wrap\" lines=\"none\">\n                <ion-label><h3 class=\"item-heading\">{{ 'core.login.firsttime' | translate }}</h3></ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\" lines=\"none\" *ngIf=\"authInstructions\">\n                <ion-label><p><core-format-text [text]=\"authInstructions\" [filter]=\"false\"></core-format-text></p></ion-label>\n            </ion-item>\n            <ion-button expand=\"block\" class=\"ion-margin ion-text-wrap\" color=\"light\" (click)=\"openEmailSignup()\">\n                {{ 'core.login.startsignup' | translate }}\n            </ion-button>\n        </ion-list>\n    </core-loading>\n    <core-login-site-onboarding></core-login-site-onboarding>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/login/pages/credentials/credentials.module.ts":
/*!*************************************************************************!*\
  !*** ./src/core/features/login/pages/credentials/credentials.module.ts ***!
  \*************************************************************************/
/*! exports provided: CoreLoginCredentialsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPageModule", function() { return CoreLoginCredentialsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credentials */ "./src/core/features/login/pages/credentials/credentials.ts");
// (C) Copyright 2015 GROWLA Pty Ltd.
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
        component: _credentials__WEBPACK_IMPORTED_MODULE_4__["CoreLoginCredentialsPage"],
    },
];
let CoreLoginCredentialsPageModule = class CoreLoginCredentialsPageModule {
};
CoreLoginCredentialsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _credentials__WEBPACK_IMPORTED_MODULE_4__["CoreLoginCredentialsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginCredentialsPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/credentials/credentials.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/login/pages/credentials/credentials.ts ***!
  \******************************************************************/
/*! exports provided: CoreLoginCredentialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPage", function() { return CoreLoginCredentialsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/login/components/site-onboarding/site-onboarding */ "./src/core/features/login/components/site-onboarding/site-onboarding.ts");
/* harmony import */ var _singletons_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/url */ "./src/core/singletons/url.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
// (C) Copyright 2015 GROWLA Pty Ltd.
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
 * Page to enter the user credentials.
 */
let CoreLoginCredentialsPage = class CoreLoginCredentialsPage {
    constructor(fb) {
        this.fb = fb;
        this.siteChecked = false;
        this.pageLoaded = false;
        this.isBrowserSSO = false;
        this.isFixedUrlSet = false;
        this.showForgottenPassword = true;
        this.showScanQR = false;
        this.eventThrown = false;
        this.viewLeft = false;
        this.siteSelector = 'sitefinder';
        this.isShow = false;
        const siteFinderSettings = _core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].CONFIG.sitefindersettings || {};
        this.siteFinderSettings = Object.assign({ displaysitename: true, displayimage: true, displayalias: true, displaycity: true, displaycountry: true, displayurl: true }, siteFinderSettings);
        let url = '';
        // Load fixed sites if they're set.
        if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].hasSeveralFixedSites()) {
            url = this.initSiteSelector();
        }
        else if (_core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].CONFIG.enableonboarding && !_services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].isIOS()) {
            this.initOnboarding();
        }
    }
    /**
     * Initialize the site selector.
     *
     * @return URL of the first site.
     */
    initSiteSelector() {
        this.fixedSites = this.extendCoreLoginSiteInfo(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].getFixedSites());
        this.siteSelector = 'list'; // In case it's not defined
        // Do not show images if none are set.
        if (!this.fixedSites.some((site) => !!site.imageurl)) {
            this.siteFinderSettings.displayimage = false;
        }
        this.filteredSites = this.fixedSites;
        return this.fixedSites[0].url;
    }
    /**
     * Initialize and show onboarding if needed.
     *
     * @return Promise resolved when done.
     */
    initOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let onboardingDone;
            if (navigator.platform == "iPhone") {
                onboardingDone = false;
                // var options = { key: "ONBOARDING_DONE", suite: "group.com.example" };
                // await (<any>window).UserDefaults.load(
                //     options,
                //     (data) => {
                //         onboardingDone = data.value
                //     },
                //     (error) => console.log(error)
                //   );
            }
            else {
                onboardingDone = yield _services_config__WEBPACK_IMPORTED_MODULE_13__["CoreConfig"].get(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelperProvider"].ONBOARDING_DONE, false);
            }
            if (!onboardingDone) {
                if (navigator.platform == "iPhone") {
                    this.isShow = true;
                }
                else {
                    this.showOnboarding();
                }
                // Check onboarding.
            }
        });
    }
    /**
     * Show an onboarding modal.
     */
    showOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].openModal({
                component: _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_14__["CoreLoginSiteOnboardingComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Extend info of Login Site Info to get UI tweaks.
     *
     * @param sites Sites list.
     * @return Sites list with extended info.
     */
    extendCoreLoginSiteInfo(sites) {
        return sites.map((site) => {
            site.noProtocolUrl = this.siteFinderSettings.displayurl && site.url ? _singletons_url__WEBPACK_IMPORTED_MODULE_15__["CoreUrl"].removeProtocol(site.url) : '';
            const name = this.siteFinderSettings.displaysitename ? site.name : '';
            const alias = this.siteFinderSettings.displayalias && site.alias ? site.alias : '';
            // Set title with parenthesis if both name and alias are present.
            site.title = name && alias ? name + ' (' + alias + ')' : name + alias;
            const country = this.siteFinderSettings.displaycountry && site.countrycode ?
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_16__["CoreUtils"].getCountryName(site.countrycode) : '';
            const city = this.siteFinderSettings.displaycity && site.city ?
                site.city : '';
            // Separate location with hiphen if both country and city are present.
            site.location = city && country ? city + ' - ' + country : city + country;
            return site;
        });
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        const siteUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('siteUrl');
        if (!siteUrl) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal('Site URL not supplied.');
            _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
            return;
        }
        this.siteUrl = siteUrl;
        this.siteName = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('siteName');
        this.logoUrl = !_core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].CONFIG.forceLoginLogo && _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('logoUrl') || undefined;
        this.siteConfig = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('siteConfig');
        this.urlToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('urlToOpen');
        this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].displayQRInCredentialsScreen();
        this.credForm = this.fb.group({
            username: [_services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('username') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.treatSiteConfig();
        this.isFixedUrlSet = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].isFixedUrlSet();
        if (this.isFixedUrlSet) {
            // Fixed URL, we need to check if it uses browser SSO login.
            this.checkSite(this.siteUrl);
        }
        else {
            this.siteChecked = true;
            this.pageLoaded = true;
        }
        if (_services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].isIOS()) {
            // Make iOS auto-fill work. The field that isn't focused doesn't get updated, do it manually.
            // Debounce it to prevent triggering this function too often when the user is typing.
            this.valueChangeSubscription = this.credForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe((changes) => {
                var _a, _b;
                if (!this.formElement || !this.formElement.nativeElement) {
                    return;
                }
                const usernameInput = this.formElement.nativeElement.querySelector('input[name="username"]');
                const passwordInput = this.formElement.nativeElement.querySelector('input[name="password"]');
                const usernameValue = usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.value;
                const passwordValue = passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value;
                if (usernameValue !== undefined && usernameValue !== changes.username) {
                    (_a = this.credForm.get('username')) === null || _a === void 0 ? void 0 : _a.setValue(usernameValue);
                }
                if (passwordValue !== undefined && passwordValue !== changes.password) {
                    (_b = this.credForm.get('password')) === null || _b === void 0 ? void 0 : _b.setValue(passwordValue);
                }
            });
        }
    }
    /**
     * Check if a site uses local_mobile, requires SSO login, etc.
     * This should be used only if a fixed URL is set, otherwise this check is already performed in CoreLoginSitePage.
     *
     * @param siteUrl Site URL to check.
     * @return Promise resolved when done.
     */
    checkSite(siteUrl) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pageLoaded = false;
            // If the site is configured with http:// protocol we force that one, otherwise we use default mode.
            const protocol = siteUrl.indexOf('http://') === 0 ? 'http://' : undefined;
            try {
                const result = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkSite(siteUrl, protocol);
                this.siteChecked = true;
                this.siteUrl = result.siteUrl;
                this.siteConfig = result.config;
                this.treatSiteConfig();
                if (result && result.warning) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(result.warning, true, 4000);
                }
                if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].isSSOLoginNeeded(result.code)) {
                    // SSO. User needs to authenticate in a browser.
                    this.isBrowserSSO = true;
                    // Check that there's no SSO authentication ongoing and the view hasn't changed.
                    if (!_services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].isSSOAuthenticationOngoing() && !this.viewLeft) {
                        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].confirmAndOpenBrowserForSSOLogin(result.siteUrl, result.code, result.service, (_a = result.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                    }
                }
                else {
                    this.isBrowserSSO = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.pageLoaded = true;
            }
        });
    }
    /**
     * Treat the site configuration (if it exists).
     */
    treatSiteConfig() {
        if (this.siteConfig) {
            this.siteName = _core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].CONFIG.sitename ? _core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].CONFIG.sitename : this.siteConfig.sitename;
            this.logoUrl = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].getLogoUrl(this.siteConfig);
            this.authInstructions = this.siteConfig.authinstructions || _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.login.loginsteps');
            const disabledFeatures = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].getDisabledFeatures(this.siteConfig);
            this.identityProviders = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].getValidIdentityProviders(this.siteConfig, disabledFeatures);
            this.canSignup = this.siteConfig.registerauth == 'email' &&
                !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].isEmailSignupDisabled(this.siteConfig, disabledFeatures);
            this.showForgottenPassword = !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].isForgottenPasswordDisabled(this.siteConfig, disabledFeatures);
            if (!this.eventThrown && !this.viewLeft) {
                this.eventThrown = true;
                _singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].LOGIN_SITE_CHECKED, { config: this.siteConfig });
            }
        }
        else {
            this.authInstructions = undefined;
            this.canSignup = false;
            this.identityProviders = [];
        }
    }
    /**
     * Tries to authenticate the user.
     *
     * @param e Event.
     * @return Promise resolved when done.
     */
    login(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            _services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].closeKeyboard();
            // Get input data.
            const siteUrl = this.siteUrl;
            const username = this.credForm.value.username;
            const password = this.credForm.value.password;
            if (!this.siteChecked || this.isBrowserSSO) {
                // Site wasn't checked (it failed) or a previous check determined it was SSO. Let's check again.
                yield this.checkSite(siteUrl);
                if (!this.isBrowserSSO) {
                    // Site doesn't use browser SSO, throw app's login again.
                    return this.login();
                }
                return;
            }
            if (!username) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal('core.login.usernamerequired', true);
                return;
            }
            if (!password) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal('core.login.passwordrequired', true);
                return;
            }
            if (!_services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showModalLoading();
            // Start the authentication process.
            try {
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getUserToken(siteUrl, username, password);
                const id = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].newSite(data.siteUrl, data.token, data.privateToken);
                // Reset fields so the data is not in the view anymore.
                this.credForm.controls['username'].reset();
                this.credForm.controls['password'].reset();
                this.siteId = id;
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSiteHome({ params: { urlToOpen: this.urlToOpen } });
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].treatUserTokenError(siteUrl, error, username, password);
                if (error.loggedout) {
                    _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('/login/sites', { reset: true });
                }
                else if (error.errorcode == 'forcepasswordchangenotice') {
                    // Reset password field.
                    this.credForm.controls.password.reset();
                }
            }
            finally {
                modal.dismiss();
                _singletons_form__WEBPACK_IMPORTED_MODULE_12__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
            }
        });
    }
    /**
     * Forgotten password button clicked.
     */
    forgottenPassword() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].forgottenPasswordClicked(this.siteUrl, this.credForm.value.username, this.siteConfig);
    }
    /**
     * An OAuth button was clicked.
     *
     * @param provider The provider that was clicked.
     */
    oauthClicked(provider) {
        var _a;
        if (!_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_7__["CoreLoginHelper"].openBrowserForOAuthLogin(this.siteUrl, provider, (_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.launchurl)) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal('Invalid data.');
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
     * Open email signup page.
     */
    openEmailSignup() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('/login/emailsignup', { params: { siteUrl: this.siteUrl } });
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('/settings');
    }
    /**
     * View destroyed.
     */
    ngOnDestroy() {
        var _a;
        this.viewLeft = true;
        _singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
        (_a = this.valueChangeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
CoreLoginCredentialsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginCredentialsPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['credentialsForm',] }]
};
CoreLoginCredentialsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-credentials',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./credentials.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/credentials/credentials.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginCredentialsPage);



/***/ })

}]);
//# sourceMappingURL=pages-credentials-credentials-module.js.map