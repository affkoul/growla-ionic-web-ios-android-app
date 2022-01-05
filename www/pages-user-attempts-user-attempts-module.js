(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-attempts-user-attempts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text *ngIf=\"h5pActivity\" [text]=\"h5pActivity.name\" contextLevel=\"module\"\n                [contextInstanceId]=\"h5pActivity.coursemodule\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <!-- User viewed. -->\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"user && !isCurrentUser\" core-user-link [userId]=\"user.id\" [courseId]=\"courseId\"\n            [attr.aria-label]=\"user.fullname\">\n            <core-user-avatar [user]=\"user\" slot=\"start\" [courseId]=\"courseId\"></core-user-avatar>\n            <ion-label>\n                <h2>{{ user.fullname }}</h2>\n            </ion-label>\n        </ion-item>\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"user && isCurrentUser\">\n            <core-user-avatar [user]=\"user\" slot=\"start\" [courseId]=\"courseId\"></core-user-avatar>\n            <ion-label>\n                <h2>{{ 'addon.mod_h5pactivity.myattempts' | translate }}</h2>\n            </ion-label>\n        </ion-item>\n\n        <ion-list *ngIf=\"attemptsData\">\n            <!-- Attempts used to calculate the score. -->\n            <ng-container *ngIf=\"attemptsData.scored\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ attemptsData.scored.title }}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ng-container *ngTemplateOutlet=\"attemptsTemplate; context: {attempts: attemptsData.scored.attempts}\">\n                </ng-container>\n            </ng-container>\n\n            <!-- All attempts. -->\n            <ng-container *ngIf=\"attemptsData.attempts && attemptsData.attempts.length\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'addon.mod_h5pactivity.all_attempts' | translate }}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ng-container *ngTemplateOutlet=\"attemptsTemplate; context: {attempts: attemptsData.attempts}\"></ng-container>\n            </ng-container>\n        </ion-list>\n\n        <!-- No attempts. -->\n        <core-empty-box *ngIf=\"attemptsData && (!attemptsData.attempts || !attemptsData.attempts.length)\" icon=\"fas-chart-bar\"\n            [message]=\"'addon.mod_h5pactivity.attempts_none' | translate\">\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n\n<!-- Template to render a list of conversations. -->\n<ng-template #attemptsTemplate let-attempts=\"attempts\">\n    <!-- \"Header\" of the table -->\n    <ion-item class=\"ion-text-wrap addon-mod_h5pactivity-table-header hide-detail\" detail=\"true\">\n        <ion-label>\n            <ion-row class=\"ion-align-items-center\">\n                <ion-col class=\"ion-text-center\">#</ion-col>\n                <ion-col class=\"ion-text-center\" size=\"5\" size-md=\"2\">{{ 'core.date' | translate }}</ion-col>\n                <ion-col class=\"ion-text-center\">{{ 'addon.mod_h5pactivity.score' | translate }}</ion-col>\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ 'addon.mod_h5pactivity.maxscore' | translate }}</ion-col>\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ 'addon.mod_h5pactivity.duration' | translate }}</ion-col>\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ 'addon.mod_h5pactivity.completion' | translate }}</ion-col>\n                <ion-col class=\"ion-text-center\">{{ 'core.success' | translate }}</ion-col>\n            </ion-row>\n        </ion-label>\n    </ion-item>\n\n    <!-- List of attempts. -->\n    <ion-item class=\"ion-text-wrap addon-mod_h5pactivity-table-row\" *ngFor=\"let attempt of attempts\" button detail=\"true\"\n        [attr.aria-label]=\"'addon.mod_h5pactivity.viewattempt' | translate:{$a: attempt.attempt}\" (click)=\"openAttempt(attempt)\">\n\n        <ion-label>\n            <ion-row class=\"ion-align-items-center\">\n                <ion-col class=\"ion-text-center\">{{ attempt.attempt }}</ion-col>\n                <ion-col class=\"ion-text-center\" size=\"5\" size-md=\"2\">\n                    {{ attempt.timemodified | coreFormatDate:'strftimedatetimeshort' }}\n                </ion-col>\n                <ion-col class=\"ion-text-center\">\n                    {{ attempt.rawscore }}<span class=\"ion-hide-md-up\"> / {{ attempt.maxscore }}</span>\n                </ion-col>\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ attempt.maxscore }}</ion-col>\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ attempt.durationReadable }}</ion-col>\n                <ion-col class=\"ion-text-center ion-hide-md-down\">\n                    <img *ngIf=\"attempt.completion\" src=\"assets/img/completion/completion-auto-y.svg\"\n                        [alt]=\"'addon.mod_h5pactivity.attempt_completion_yes' | translate\">\n                    <img *ngIf=\"!attempt.completion\" src=\"assets/img/completion/completion-auto-n.svg\"\n                        [alt]=\"'addon.mod_h5pactivity.attempt_completion_no' | translate\">\n                </ion-col>\n                <ion-col class=\"ion-text-center addon-mod_h5pactivity-table-success-col\">\n                    <ion-icon *ngIf=\"attempt.success !== null && attempt.success\" name=\"fas-check-circle\"\n                        [attr.aria-label]=\"'addon.mod_h5pactivity.attempt_success_pass' | translate\">\n                    </ion-icon>\n                    <ion-icon *ngIf=\"attempt.success !== null && !attempt.success\" name=\"far-circle\"\n                        [attr.aria-label]=\"'addon.mod_h5pactivity.attempt_success_fail' | translate\">\n                    </ion-icon>\n                    <img *ngIf=\"attempt.success === null\" src=\"assets/img/icons/empty.svg\"\n                        [alt]=\"'addon.mod_h5pactivity.attempt_success_unknown' | translate\">\n                </ion-col>\n            </ion-row>\n        </ion-label>\n    </ion-item>\n</ng-template>\n");

/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.module.ts":
/*!********************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddonModH5PActivityUserAttemptsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUserAttemptsPageModule", function() { return AddonModH5PActivityUserAttemptsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _user_attempts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-attempts */ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.ts");
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
        component: _user_attempts__WEBPACK_IMPORTED_MODULE_4__["AddonModH5PActivityUserAttemptsPage"],
    },
];
let AddonModH5PActivityUserAttemptsPageModule = class AddonModH5PActivityUserAttemptsPageModule {
};
AddonModH5PActivityUserAttemptsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _user_attempts__WEBPACK_IMPORTED_MODULE_4__["AddonModH5PActivityUserAttemptsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModH5PActivityUserAttemptsPageModule);



/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.scss":
/*!***************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-mod_h5pactivity-table-header {\n  font-weight: bold;\n}\n:host .addon-mod_h5pactivity-table-row .addon-mod_h5pactivity-table-success-col {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2g1cGFjdGl2aXR5L3BhZ2VzL3VzZXItYXR0ZW1wdHMvdXNlci1hdHRlbXB0cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUFBUjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9oNXBhY3Rpdml0eS9wYWdlcy91c2VyLWF0dGVtcHRzL3VzZXItYXR0ZW1wdHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuYWRkb24tbW9kX2g1cGFjdGl2aXR5LXRhYmxlLWhlYWRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5hZGRvbi1tb2RfaDVwYWN0aXZpdHktdGFibGUtcm93IC5hZGRvbi1tb2RfaDVwYWN0aXZpdHktdGFibGUtc3VjY2Vzcy1jb2wge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.ts":
/*!*************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.ts ***!
  \*************************************************************************/
/*! exports provided: AddonModH5PActivityUserAttemptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUserAttemptsPage", function() { return AddonModH5PActivityUserAttemptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/h5pactivity */ "./src/addons/mod/h5pactivity/services/h5pactivity.ts");
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
 * Page that displays user attempts of a certain user.
 */
let AddonModH5PActivityUserAttemptsPage = class AddonModH5PActivityUserAttemptsPage {
    constructor() {
        this.loaded = false;
        this.isCurrentUser = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('courseId');
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('cmId');
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('userId') || _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
            this.isCurrentUser = this.userId == _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
            try {
                yield this.fetchData();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading attempts.');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        this.refreshData().finally(() => {
            refresher.complete();
        });
    }
    /**
     * Get quiz data and attempt data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.h5pActivity = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].getH5PActivity(this.courseId, this.cmId);
            yield Promise.all([
                this.fetchAttempts(),
                this.fetchUserProfile(),
            ]);
        });
    }
    /**
     * Get attempts.
     *
     * @return Promise resolved when done.
     */
    fetchAttempts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.attemptsData = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].getUserAttempts(this.h5pActivity.id, {
                cmId: this.cmId,
                userId: this.userId,
            });
        });
    }
    /**
     * Get user profile.
     *
     * @return Promise resolved when done.
     */
    fetchUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(this.userId, this.courseId, true);
            }
            catch (error) {
                // Ignore errors.
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @return Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [
                _services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].invalidateActivityData(this.courseId),
            ];
            if (this.h5pActivity) {
                promises.push(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].invalidateUserAttempts(this.h5pActivity.id, this.userId));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchData();
        });
    }
    /**
     * Open the page to view an attempt.
     *
     * @param attempt Attempt.
     */
    openAttempt(attempt) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].navigate(`../../attemptresults/${attempt.id}`);
    }
};
AddonModH5PActivityUserAttemptsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-h5pactivity-user-attempts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-attempts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-attempts.scss */ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.scss")).default]
    })
], AddonModH5PActivityUserAttemptsPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-attempts-user-attempts-module.js.map