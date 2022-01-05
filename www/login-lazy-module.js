(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-lazy-module"],{

/***/ "./src/core/features/login/guards/has-sites.ts":
/*!*****************************************************!*\
  !*** ./src/core/features/login/guards/has-sites.ts ***!
  \*****************************************************/
/*! exports provided: CoreLoginHasSitesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginHasSitesGuard", function() { return CoreLoginHasSitesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_login_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login-helper */ "./src/core/features/login/services/login-helper.ts");
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






let CoreLoginHasSitesGuard = class CoreLoginHasSitesGuard {
    /**
     * @inheritdoc
     */
    canActivate() {
        return this.guard();
    }
    /**
     * @inheritdoc
     */
    canLoad() {
        return this.guard();
    }
    /**
     * Check if the user has any sites stored.
     */
    guard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sites = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].ignoreErrors(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSites(), []);
            if (sites.length > 0) {
                return true;
            }
            const [path, params] = _services_login_helper__WEBPACK_IMPORTED_MODULE_5__["CoreLoginHelper"].getAddSiteRouteInfo();
            const route = _singletons__WEBPACK_IMPORTED_MODULE_4__["Router"].parseUrl(path);
            route.queryParams = params;
            return route;
        });
    }
};
CoreLoginHasSitesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CoreLoginHasSitesGuard);



/***/ }),

/***/ "./src/core/features/login/login-lazy.module.ts":
/*!******************************************************!*\
  !*** ./src/core/features/login/login-lazy.module.ts ***!
  \******************************************************/
/*! exports provided: CoreLoginLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginLazyModule", function() { return CoreLoginLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_site_help_site_help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/site-help/site-help */ "./src/core/features/login/components/site-help/site-help.ts");
/* harmony import */ var _components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/site-onboarding/site-onboarding */ "./src/core/features/login/components/site-onboarding/site-onboarding.ts");
/* harmony import */ var _guards_has_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/has-sites */ "./src/core/features/login/guards/has-sites.ts");
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
        pathMatch: 'full',
        redirectTo: 'sites',
    },
    {
        path: 'site',
        loadChildren: () => Promise.all(/*! import() | pages-site-site-module */[__webpack_require__.e("default~login-lazy-module~pages-site-site-module"), __webpack_require__.e("pages-site-site-module")]).then(__webpack_require__.bind(null, /*! ./pages/site/site.module */ "./src/core/features/login/pages/site/site.module.ts")).then(m => m.CoreLoginSitePageModule),
    },
    {
        path: 'credentials',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-credentials-credentials-module */ "pages-credentials-credentials-module").then(__webpack_require__.bind(null, /*! ./pages/credentials/credentials.module */ "./src/core/features/login/pages/credentials/credentials.module.ts")).then(m => m.CoreLoginCredentialsPageModule),
    },
    {
        path: 'sites',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-sites-sites-module */ "pages-sites-sites-module").then(__webpack_require__.bind(null, /*! ./pages/sites/sites.module */ "./src/core/features/login/pages/sites/sites.module.ts")).then(m => m.CoreLoginSitesPageModule),
        canLoad: [_guards_has_sites__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHasSitesGuard"]],
        canActivate: [_guards_has_sites__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHasSitesGuard"]],
    },
    {
        path: 'forgottenpassword',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-forgotten-password-forgotten-password-module */ "pages-forgotten-password-forgotten-password-module").then(__webpack_require__.bind(null, /*! ./pages/forgotten-password/forgotten-password.module */ "./src/core/features/login/pages/forgotten-password/forgotten-password.module.ts"))
            .then(m => m.CoreLoginForgottenPasswordPageModule),
    },
    {
        path: 'changepassword',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-change-password-change-password-module */ "pages-change-password-change-password-module").then(__webpack_require__.bind(null, /*! ./pages/change-password/change-password.module */ "./src/core/features/login/pages/change-password/change-password.module.ts"))
            .then(m => m.CoreLoginChangePasswordPageModule),
    },
    {
        path: 'sitepolicy',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-site-policy-site-policy-module */ "pages-site-policy-site-policy-module").then(__webpack_require__.bind(null, /*! ./pages/site-policy/site-policy.module */ "./src/core/features/login/pages/site-policy/site-policy.module.ts")).then(m => m.CoreLoginSitePolicyPageModule),
    },
    {
        path: 'emailsignup',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-email-signup-email-signup-module */ "pages-email-signup-email-signup-module").then(__webpack_require__.bind(null, /*! ./pages/email-signup/email-signup.module */ "./src/core/features/login/pages/email-signup/email-signup.module.ts")).then(m => m.CoreLoginEmailSignupPageModule),
    },
    {
        path: 'reconnect',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-reconnect-reconnect-module */ "pages-reconnect-reconnect-module").then(__webpack_require__.bind(null, /*! ./pages/reconnect/reconnect.module */ "./src/core/features/login/pages/reconnect/reconnect.module.ts")).then(m => m.CoreLoginReconnectPageModule),
    },
];
let CoreLoginLazyModule = class CoreLoginLazyModule {
};
CoreLoginLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _components_site_help_site_help__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSiteHelpComponent"],
            _components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_5__["CoreLoginSiteOnboardingComponent"],
        ],
    })
], CoreLoginLazyModule);



/***/ })

}]);
//# sourceMappingURL=login-lazy-module.js.map