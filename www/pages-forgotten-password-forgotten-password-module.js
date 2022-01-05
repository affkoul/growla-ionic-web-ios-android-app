(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgotten-password-forgotten-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <h1>{{ 'core.login.passwordforgotten' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list lines=\"none\">\n        <ion-item class=\"ion-text-wrap\">\n            <ion-label>{{ 'core.login.passwordforgotteninstructions2' | translate }}</ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-card>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"resetPassword($event)\" #resetPasswordForm>\n            <ion-item-divider class=\"ion-text-wrap\">\n                <ion-label><h2>{{ 'core.login.searchby' | translate }}</h2></ion-label>\n            </ion-item-divider>\n            <ion-radio-group formControlName=\"field\">\n                <ion-item>\n                    <ion-label>{{ 'core.login.username' | translate }}</ion-label>\n                    <ion-radio slot=\"end\" value=\"username\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>{{ 'core.user.email' | translate }}</ion-label>\n                    <ion-radio slot=\"end\" value=\"email\"></ion-radio>\n                </ion-item>\n            </ion-radio-group>\n            <ion-item>\n                <ion-label class=\"sr-only\">{{ 'core.login.usernameoremail' | translate }}</ion-label>\n                <ion-input type=\"text\" name=\"value\" placeholder=\"{{ 'core.login.usernameoremail' | translate }}\"\n                    formControlName=\"value\" autocapitalize=\"none\" autocorrect=\"off\" [core-auto-focus]=\"autoFocus\">\n                </ion-input>\n            </ion-item>\n            <ion-button type=\"submit\" class=\"ion-margin\" expand=\"block\" [disabled]=\"!myForm.valid\">\n                {{ 'core.courses.search' | translate }}\n            </ion-button>\n        </form>\n    </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/login/pages/forgotten-password/forgotten-password.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/core/features/login/pages/forgotten-password/forgotten-password.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CoreLoginForgottenPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginForgottenPasswordPageModule", function() { return CoreLoginForgottenPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _forgotten_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgotten-password */ "./src/core/features/login/pages/forgotten-password/forgotten-password.ts");
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
        component: _forgotten_password__WEBPACK_IMPORTED_MODULE_4__["CoreLoginForgottenPasswordPage"],
    },
];
let CoreLoginForgottenPasswordPageModule = class CoreLoginForgottenPasswordPageModule {
};
CoreLoginForgottenPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _forgotten_password__WEBPACK_IMPORTED_MODULE_4__["CoreLoginForgottenPasswordPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginForgottenPasswordPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/forgotten-password/forgotten-password.ts":
/*!********************************************************************************!*\
  !*** ./src/core/features/login/pages/forgotten-password/forgotten-password.ts ***!
  \********************************************************************************/
/*! exports provided: CoreLoginForgottenPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginForgottenPasswordPage", function() { return CoreLoginForgottenPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page to recover a forgotten password.
 */
let CoreLoginForgottenPasswordPage = class CoreLoginForgottenPasswordPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        const siteUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('siteUrl');
        if (!siteUrl) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal('Site URL not supplied.');
            _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            return;
        }
        this.siteUrl = siteUrl;
        this.autoFocus = _singletons__WEBPACK_IMPORTED_MODULE_5__["Platform"].is('tablet');
        this.myForm = this.formBuilder.group({
            field: ['username', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            value: [_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('username') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    /**
     * Request to reset the password.
     *
     * @param e Event.
     */
    resetPassword(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const field = this.myForm.value.field;
            const value = this.myForm.value.value;
            if (!value) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal('core.login.usernameoremail', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showModalLoading('core.sending', true);
            const isMail = field == 'email';
            try {
                const response = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].requestPasswordReset(this.siteUrl, isMail ? '' : value, isMail ? value : '');
                if (response.status == 'dataerror') {
                    // Error in the data sent.
                    this.showError(isMail, response.warnings);
                }
                else if (response.status == 'emailpasswordconfirmnotsent' || response.status == 'emailpasswordconfirmnoemail') {
                    // Error, not found.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(response.notice);
                }
                else {
                    // Success.
                    _singletons_form__WEBPACK_IMPORTED_MODULE_7__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant('core.success'), response.notice);
                    _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    // Show an error from the warnings.
    showError(isMail, warnings) {
        for (let i = 0; i < warnings.length; i++) {
            const warning = warnings[i];
            if ((warning.item == 'email' && isMail) || (warning.item == 'username' && !isMail)) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(warning.message);
                break;
            }
        }
    }
};
CoreLoginForgottenPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginForgottenPasswordPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['resetPasswordForm',] }]
};
CoreLoginForgottenPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-forgotten-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotten-password.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html")).default,
    })
], CoreLoginForgottenPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgotten-password-forgotten-password-module.js.map