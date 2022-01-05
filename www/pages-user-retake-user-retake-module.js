(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-retake-user-retake-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/user-retake/user-retake.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/user-retake/user-retake.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.mod_lesson.detailedstats' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"loaded\">\n        <div *ngIf=\"student\">\n            <!-- Student data. -->\n            <ion-item class=\"ion-text-wrap\" core-user-link [userId]=\"student.id\" [courseId]=\"courseId\" [attr.aria-label]=\"student.fullname\">\n                <core-user-avatar [user]=\"student\" slot=\"start\" [userId]=\"student.id\" [courseId]=\"courseId\">\n                </core-user-avatar>\n                <ion-label>\n                    <h2>{{student.fullname}}</h2>\n                    <core-progress-bar [progress]=\"student.bestgrade\" a11yText=\"addon.mod_lesson.grade\"></core-progress-bar>\n                </ion-label>\n            </ion-item>\n\n            <!-- Retake selector if there is more than one retake. -->\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"student.attempts && student.attempts.length > 1\">\n                <ion-label id=\"addon-mod_lesson-retakeslabel\">{{ 'addon.mod_lesson.attemptheader' | translate }}</ion-label>\n                <ion-select [(ngModel)]=\"selectedRetake\" (ionChange)=\"changeRetake(selectedRetake!)\"\n                    aria-labelledby=\"addon-mod_lesson-retakeslabel\" interface=\"action-sheet\"\n                    [interfaceOptions]=\"{header: 'addon.mod_lesson.attemptheader' | translate}\">\n                    <ion-select-option *ngFor=\"let retake of student.attempts\" [value]=\"retake.try\">\n                        {{retake.label}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <!-- Retake stats. -->\n            <ion-list *ngIf=\"retake && retake.userstats && retake.userstats.gradeinfo\" class=\"addon-mod_lesson-userstats\">\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-grid class=\"ion-no-padding\">\n                            <ion-row>\n                                <ion-col>\n                                    <h3 class=\"item-heading\">{{ 'addon.mod_lesson.grade' | translate }}</h3>\n                                    <p>{{ 'core.percentagenumber' | translate:{$a: retake.userstats.grade} }}</p>\n                                </ion-col>\n\n                                <ion-col>\n                                    <h3 class=\"item-heading\">{{ 'addon.mod_lesson.rawgrade' | translate }}</h3>\n                                    <p>{{ retake.userstats.gradeinfo.earned }} / {{ retake.userstats.gradeinfo.total }}</p>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <h3 class=\"item-heading\">{{ 'addon.mod_lesson.timetaken' | translate }}</h3>\n                        <p>{{ timeTakenReadable }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <h3 class=\"item-heading\">{{ 'addon.mod_lesson.completed' | translate }}</h3>\n                        <p>{{ retake.userstats.completed * 1000 | coreFormatDate }}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n            <!-- Not completed, no stats. -->\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"retake && (!retake.userstats || !retake.userstats.gradeinfo)\">\n                <ion-label>{{ 'addon.mod_lesson.notcompleted' | translate }}</ion-label>\n            </ion-item>\n\n            <!-- Pages. -->\n            <ng-container *ngIf=\"retake\">\n                <!-- The \"text-dimmed\" class does nothing, but the same goes for the \"dimmed\" class in Moodle. -->\n                <ion-card *ngFor=\"let page of retake.answerpages\" class=\"addon-mod_lesson-answerpage\"\n                    [ngClass]=\"{'text-dimmed': page.grayout}\">\n                    <ion-card-header class=\"ion-text-wrap\">\n                        <ion-card-title>{{page.qtype}}: {{page.title}}</ion-card-title>\n                    </ion-card-header>\n                    <ion-item class=\"ion-text-wrap\" lines=\"none\">\n                        <ion-label>\n                            <h3 class=\"item-heading\">{{ 'addon.mod_lesson.question' | translate }}</h3>\n                            <p>\n                                <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [maxHeight]=\"50\"\n                                    [text]=\"page.contents\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                    [courseId]=\"courseId\">\n                                </core-format-text>\n                            </p>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item class=\"ion-text-wrap\" lines=\"none\">\n                        <ion-label>\n                            <h3 class=\"item-heading\">{{ 'addon.mod_lesson.answer' | translate }}</h3>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item class=\"ion-text-wrap\" lines=\"none\"\n                        *ngIf=\"!page.answerdata || !page.answerdata.answers || !page.answerdata.answers.length\">\n                        <ion-label>\n                            <p>{{ 'addon.mod_lesson.didnotanswerquestion' | translate }}</p>\n                        </ion-label>\n                    </ion-item>\n                    <div *ngIf=\"page.answerdata && page.answerdata.answers && page.answerdata.answers.length\"\n                        class=\"addon-mod_lesson-answer\">\n                        <ng-container *ngFor=\"let answer of page.answerdata.answers\">\n                            <ion-item lines=\"none\" *ngIf=\"page.isContent\">\n                                <ion-label class=\"ion-text-wrap\">\n                                    <ion-grid class=\"ion-no-padding\">\n                                        <!-- Content page, display a button and the content. -->\n                                        <ion-row>\n                                            <ion-col>\n                                                <ion-button expand=\"block\" class=\"ion-text-wrap\" color=\"light\" [disabled]=\"true\">\n                                                    {{ answer[0].buttonText }}\n                                                </ion-button>\n                                            </ion-col>\n                                            <ion-col>\n                                                <p [innerHTML]=\"answer[0].content\"></p>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </ion-label>\n                            </ion-item>\n\n                            <ng-container *ngIf=\"page.isQuestion\">\n                                <!-- Question page, show the right input for the answer. -->\n\n                                <!-- Truefalse or matching. -->\n                                <ion-item class=\"ion-text-wrap\" *ngIf=\"answer[0].isCheckbox\"\n                                    [ngClass]=\"{'addon-mod_lesson-highlight': answer[0].highlight}\">\n                                    <ion-label>\n                                        <p>\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                                [text]=\"answer[0].content\" contextLevel=\"module\"\n                                                [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                            </core-format-text>\n                                        </p>\n                                        <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                                [text]=\"answer[1]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                                [courseId]=\"courseId\">\n                                            </core-format-text>\n                                        </ion-badge>\n                                    </ion-label>\n                                    <ion-checkbox [attr.name]=\"answer[0].name\" [ngModel]=\"answer[0].checked\" [disabled]=\"true\"\n                                        slot=\"end\">\n                                    </ion-checkbox>\n                                </ion-item>\n\n                                <!-- Short answer or numeric. -->\n                                <ion-item class=\"ion-text-wrap\" *ngIf=\"answer[0].isText\" lines=\"none\">\n                                    <ion-label>\n                                        <p>{{ answer[0].value }}</p>\n                                        <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                                [text]=\"answer[1]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                                [courseId]=\"courseId\">\n                                            </core-format-text>\n                                        </ion-badge>\n                                    </ion-label>\n                                </ion-item>\n\n                                <!-- Matching. -->\n                                <ion-item lines=\"none\" *ngIf=\"answer[0].isSelect\">\n                                    <ion-label class=\"ion-text-wrap\">\n                                        <ion-grid class=\"ion-no-padding\">\n                                            <ion-row>\n                                                <ion-col>\n                                                    <p>\n                                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                                            [text]=\" answer[0].content\" contextLevel=\"module\"\n                                                            [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                                        </core-format-text>\n                                                    </p>\n                                                </ion-col>\n                                                <ion-col>\n                                                    <p>{{answer[0].value}}</p>\n                                                    <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\n                                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                                            [text]=\"answer[1]\" contextLevel=\"module\"\n                                                            [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                                        </core-format-text>\n                                                    </ion-badge>\n                                                </ion-col>\n                                            </ion-row>\n                                        </ion-grid>\n                                    </ion-label>\n                                </ion-item>\n\n                                <!-- Essay or couldn't determine. -->\n                                <ion-item class=\"ion-text-wrap\" lines=\"none\"\n                                    *ngIf=\"!answer[0].isCheckbox && !answer[0].isText && !answer[0].isSelect\">\n                                    <ion-label>\n                                        <p>\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                                [text]=\"answer[0]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                                [courseId]=\"courseId\">\n                                            </core-format-text>\n                                        </p>\n                                        <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                                [text]=\"answer[1]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                                [courseId]=\"courseId\">\n                                            </core-format-text>\n                                        </ion-badge>\n                                    </ion-label>\n                                </ion-item>\n                            </ng-container>\n\n                            <ion-item class=\"ion-text-wrap\" *ngIf=\"!page.isContent && !page.isQuestion\" lines=\"none\">\n                                <!-- Another page (end of branch, ...). -->\n                                <ion-label>\n                                    <p>\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                            [text]=\"answer[0]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                            [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </p>\n                                    <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                            [text]=\"answer[1]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                            [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </ion-badge>\n                                </ion-label>\n                            </ion-item>\n                        </ng-container>\n\n                        <ion-item class=\"ion-text-wrap\" *ngIf=\"page.answerdata.response\" lines=\"none\">\n                            <ion-label>\n                                <h3 class=\"item-heading\">{{ 'addon.mod_lesson.response' | translate }}</h3>\n                                <p>\n                                    <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                        [text]=\"page.answerdata.response\" contextLevel=\"module\"\n                                        [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                    </core-format-text>\n                                </p>\n                            </ion-label>\n                        </ion-item>\n                        <ion-item class=\"ion-text-wrap\" *ngIf=\"page.answerdata.score\">\n                            <ion-label><p>{{page.answerdata.score}}</p></ion-label>\n                        </ion-item>\n                    </div>\n                </ion-card>\n            </ng-container>\n        </div>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/lesson/pages/user-retake/user-retake.module.ts":
/*!***********************************************************************!*\
  !*** ./src/addons/mod/lesson/pages/user-retake/user-retake.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddonModLessonUserRetakePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonUserRetakePageModule", function() { return AddonModLessonUserRetakePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _user_retake_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-retake.page */ "./src/addons/mod/lesson/pages/user-retake/user-retake.page.ts");
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
        component: _user_retake_page__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonUserRetakePage"],
    },
];
let AddonModLessonUserRetakePageModule = class AddonModLessonUserRetakePageModule {
};
AddonModLessonUserRetakePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _user_retake_page__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonUserRetakePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModLessonUserRetakePageModule);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/user-retake/user-retake.page.ts":
/*!*********************************************************************!*\
  !*** ./src/addons/mod/lesson/pages/user-retake/user-retake.page.ts ***!
  \*********************************************************************/
/*! exports provided: AddonModLessonUserRetakePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonUserRetakePage", function() { return AddonModLessonUserRetakePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_lesson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/lesson */ "./src/addons/mod/lesson/services/lesson.ts");
/* harmony import */ var _services_lesson_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/lesson-helper */ "./src/addons/mod/lesson/services/lesson-helper.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
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
 * Page that displays a retake made by a certain user.
 */
let AddonModLessonUserRetakePage = class AddonModLessonUserRetakePage {
    constructor() {
        this.component = _services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLessonProvider"].COMPONENT;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('cmId');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('courseId');
        this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('userId') || _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
        this.retakeNumber = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('retake');
        // Fetch the data.
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Change the retake displayed.
     *
     * @param retakeNumber The new retake number.
     */
    changeRetake(retakeNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                yield this.setRetake(retakeNumber);
            }
            catch (error) {
                this.selectedRetake = this.previousSelectedRetake;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(_services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].addDataNotDownloadedError(error, 'Error getting attempt.'));
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        this.refreshData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Get lesson and retake data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.lesson = yield _services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].getLesson(this.courseId, this.cmId);
                // Get the retakes overview for all participants.
                const data = yield _services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].getRetakesOverview(this.lesson.id, {
                    cmId: this.cmId,
                });
                // Search the student.
                const student = (_a = data === null || data === void 0 ? void 0 : data.students) === null || _a === void 0 ? void 0 : _a.find(student => student.id == this.userId);
                if (!student) {
                    // Student not found.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_2__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_lesson.cannotfinduser'));
                }
                if (!student.attempts.length) {
                    // No retakes.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_2__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_lesson.cannotfindattempt'));
                }
                student.bestgrade = _services_utils_text__WEBPACK_IMPORTED_MODULE_7__["CoreTextUtils"].roundToDecimals(student.bestgrade, 2);
                student.attempts.forEach((retake) => {
                    if (!this.selectedRetake && this.retakeNumber == retake.try) {
                        // The retake specified as parameter exists. Use it.
                        this.selectedRetake = this.retakeNumber;
                    }
                    retake.label = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_11__["AddonModLessonHelper"].getRetakeLabel(retake);
                });
                if (!this.selectedRetake) {
                    // Retake number not specified or not valid, use the last retake.
                    this.selectedRetake = student.attempts[student.attempts.length - 1].try;
                }
                // Get the profile image of the user.
                const user = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_3__["CoreUser"].getProfile(student.id, this.courseId, true));
                this.student = student;
                this.student.profileimageurl = user === null || user === void 0 ? void 0 : user.profileimageurl;
                yield this.setRetake(this.selectedRetake);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting data.', true);
            }
        });
    }
    /**
     * Refreshes data.
     *
     * @return Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].invalidateLessonData(this.courseId));
            if (this.lesson) {
                promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].invalidateRetakesOverview(this.lesson.id));
                promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].invalidateUserRetakesForUser(this.lesson.id, this.userId));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchData();
        });
    }
    /**
     * Set the retake to view and load its data.
     *
     * @param retakeNumber Retake number to set.
     * @return Promise resolved when done.
     */
    setRetake(retakeNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedRetake = retakeNumber;
            const retakeData = yield _services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].getUserRetake(this.lesson.id, retakeNumber, {
                cmId: this.cmId,
                userId: this.userId,
            });
            this.retake = this.formatRetake(retakeData);
            this.previousSelectedRetake = this.selectedRetake;
        });
    }
    /**
     * Format retake data, adding some calculated data.
     *
     * @param data Retake data.
     * @return Formatted data.
     */
    formatRetake(retakeData) {
        const formattedData = retakeData;
        if (formattedData.userstats.gradeinfo) {
            // Completed.
            formattedData.userstats.grade = _services_utils_text__WEBPACK_IMPORTED_MODULE_7__["CoreTextUtils"].roundToDecimals(formattedData.userstats.grade, 2);
            this.timeTakenReadable = _services_utils_time__WEBPACK_IMPORTED_MODULE_12__["CoreTimeUtils"].formatTime(formattedData.userstats.timetotake);
        }
        // Format pages data.
        formattedData.answerpages.forEach((page) => {
            var _a, _b;
            if (_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].answerPageIsContent(page)) {
                page.isContent = true;
                if ((_a = page.answerdata) === null || _a === void 0 ? void 0 : _a.answers) {
                    page.answerdata.answers.forEach((answer) => {
                        // Content pages only have 1 valid field in the answer array.
                        answer[0] = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_11__["AddonModLessonHelper"].getContentPageAnswerDataFromHtml(answer[0]);
                    });
                }
            }
            else if (_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].answerPageIsQuestion(page)) {
                page.isQuestion = true;
                if ((_b = page.answerdata) === null || _b === void 0 ? void 0 : _b.answers) {
                    page.answerdata.answers.forEach((answer) => {
                        // Only the first field of the answer array requires to be parsed.
                        answer[0] = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_11__["AddonModLessonHelper"].getQuestionPageAnswerDataFromHtml(answer[0]);
                    });
                }
            }
        });
        return formattedData;
    }
};
AddonModLessonUserRetakePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-lesson-user-retake',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-retake.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/user-retake/user-retake.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-retake.scss */ "./src/addons/mod/lesson/pages/user-retake/user-retake.scss")).default]
    })
], AddonModLessonUserRetakePage);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/user-retake/user-retake.scss":
/*!******************************************************************!*\
  !*** ./src/addons/mod/lesson/pages/user-retake/user-retake.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .button-disabled {\n  opacity: 0.4;\n}\n:host .addon-mod_lesson-highlight {\n  --background: var(--blue-light);\n}\n:host .addon-mod_lesson-highlight ion-label, :host .addon-mod_lesson-highlight ion-label p {\n  color: var(--blue-dark);\n}\n:host .item-interactive-disabled ion-label {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy91c2VyLXJldGFrZS91c2VyLXJldGFrZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQUFSO0FBR0k7RUFDSSwrQkFBQTtBQURSO0FBR1E7RUFDSSx1QkFBQTtBQURaO0FBS0k7RUFDSSxZQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FkZG9ucy9tb2QvbGVzc29uL3BhZ2VzL3VzZXItcmV0YWtlL3VzZXItcmV0YWtlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAuYWRkb24tbW9kX2xlc3Nvbi1oaWdobGlnaHQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWJsdWUtbGlnaHQpO1xuXG4gICAgICAgIGlvbi1sYWJlbCwgaW9uLWxhYmVsIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCBpb24tbGFiZWwge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-user-retake-user-retake-module.js.map