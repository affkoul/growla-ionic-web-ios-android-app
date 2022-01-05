(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-review-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/review/review.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/review/review.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.mod_quiz.review' | translate }}</h1>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" *ngIf=\"navigation.length\" [attr.aria-label]=\"'addon.mod_quiz.opentoc' | translate\"\n                (click)=\"openNavigation()\" aria-haspopup=\"true\">\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n\n        <!-- Review summary -->\n        <ion-card *ngIf=\"attempt\">\n            <ion-card-header class=\"ion-text-wrap\">\n                <ion-card-title>\n                    <ng-container *ngIf=\"attempt.preview\">{{ 'addon.mod_quiz.reviewofpreview' | translate }}</ng-container>\n                    <ng-container *ngIf=\"!attempt.preview\">\n                        {{ 'addon.mod_quiz.reviewofattempt' | translate:{$a: attempt.attempt} }}\n                    </ng-container>\n                </ion-card-title>\n            </ion-card-header>\n            <ion-list lines=\"none\">\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <h2>{{ 'addon.mod_quiz.startedon' | translate }}</h2>\n                        <p>{{ attempt.timestart! * 1000 | coreFormatDate }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <h2>{{ 'addon.mod_quiz.attemptstate' | translate }}</h2>\n                        <p>{{ readableState }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"showCompleted\">\n                    <ion-label>\n                        <h2>{{ 'addon.mod_quiz.completedon' | translate }}</h2>\n                        <p>{{ attempt.timefinish! * 1000 | coreFormatDate }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"timeTaken\">\n                    <ion-label>\n                        <h2>{{ 'addon.mod_quiz.timetaken' | translate }}</h2>\n                        <p>{{ timeTaken }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"overTime\">\n                    <ion-label>\n                        <h2>{{ 'addon.mod_quiz.overdue' | translate }}</h2>\n                        <p>{{ overTime }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"readableMark\">\n                    <ion-label>\n                        <h2>{{ 'addon.mod_quiz.marks' | translate }}</h2>\n                        <p>{{ readableMark }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"readableGrade\">\n                    <ion-label>\n                        <h2>{{ 'addon.mod_quiz.grade' | translate }}</h2>\n                        <p>{{ readableGrade }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let data of additionalData\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ data.title }}</p>\n                        <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"data.content\"\n                            contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\n                        </core-format-text>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n        <!-- Questions -->\n        <div *ngIf=\"attempt && questions.length\">\n            <!-- Arrows to go to next/previous. -->\n            <ng-container *ngTemplateOutlet=\"navArrows\"></ng-container>\n\n            <!-- Questions. -->\n            <div *ngFor=\"let question of questions\">\n                <ion-card id=\"addon-mod_quiz-question-{{question.slot}}\">\n                    <!-- \"Header\" of the question. -->\n                    <ion-item-divider>\n                        <ion-label>\n                            <h2 *ngIf=\"question.number\">{{ 'core.question.questionno' | translate:{$a: question.number} }}</h2>\n                            <h2 *ngIf=\"!question.number\">{{ 'core.question.information' | translate }}</h2>\n                        </ion-label>\n                        <div class=\"ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note\" slot=\"end\"\n                            *ngIf=\"question.status || question.readableMark\">\n                            <p *ngIf=\"question.status\">{{question.status}}</p>\n                            <p *ngIf=\"question.readableMark\">{{question.readableMark}}</p>\n                        </div>\n                    </ion-item-divider>\n\n                    <!-- Body of the question. -->\n                    <core-question class=\"ion-text-wrap\" [question]=\"question\" [component]=\"component\" [componentId]=\"cmId\"\n                        [attemptId]=\"attempt.id\" [usageId]=\"attempt.uniqueid\" [offlineEnabled]=\"false\" contextLevel=\"module\"\n                        [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" [review]=\"true\"\n                        [preferredBehaviour]=\"quiz?.preferredbehaviour\">\n                    </core-question>\n                </ion-card>\n            </div>\n\n            <!-- Arrows to go to next/previous. -->\n            <ng-container *ngTemplateOutlet=\"navArrows\"></ng-container>\n        </div>\n    </core-loading>\n</ion-content>\n\n<!-- Arrows to go to next/previous. -->\n<ng-template #navArrows>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-text-start\">\n                <ion-button color=\"light\" *ngIf=\"previousPage >= 0\" (click)=\"changePage(previousPage)\"\n                    [title]=\"'core.previous' | translate\">\n                    <ion-icon name=\"fas-chevron-left\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </ion-col>\n            <ion-col class=\"ion-text-end\">\n                <ion-button color=\"light\" *ngIf=\"nextPage >= -1\" (click)=\"changePage(nextPage)\"\n                    [attr.aria-label]=\"'core.next' | translate\">\n                    <ion-icon name=\"fas-chevron-right\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ng-template>\n");

/***/ }),

/***/ "./src/addons/mod/quiz/pages/review/review.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/review/review.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonModQuizReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizReviewPageModule", function() { return AddonModQuizReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/question/components/components.module */ "./src/core/features/question/components/components.module.ts");
/* harmony import */ var _review_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review.page */ "./src/addons/mod/quiz/pages/review/review.page.ts");
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
        component: _review_page__WEBPACK_IMPORTED_MODULE_5__["AddonModQuizReviewPage"],
    },
];
let AddonModQuizReviewPageModule = class AddonModQuizReviewPageModule {
};
AddonModQuizReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionComponentsModule"],
        ],
        declarations: [
            _review_page__WEBPACK_IMPORTED_MODULE_5__["AddonModQuizReviewPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModQuizReviewPageModule);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/review/review.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/review/review.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonModQuizReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizReviewPage", function() { return AddonModQuizReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/navigation-modal/navigation-modal */ "./src/addons/mod/quiz/components/navigation-modal/navigation-modal.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_quiz_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/quiz-helper */ "./src/addons/mod/quiz/services/quiz-helper.ts");
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
 * Page that allows reviewing a quiz attempt.
 */
let AddonModQuizReviewPage = class AddonModQuizReviewPage {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.component = _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuizProvider"].COMPONENT; // Component to link the files to.
        this.showAll = false; // Whether to view all questions in the same page.
        this.showCompleted = false; // Whether to show completed time.
        this.loaded = false; // Whether data has been loaded.
        this.navigation = []; // List of questions to navigate them.
        this.questions = []; // Questions of the current page.
        this.nextPage = -2; // Next page.
        this.previousPage = -2; // Previous page.
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('courseId');
            this.attemptId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('attemptId');
            this.currentPage = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('page') || -1;
            this.showAll = this.currentPage == -1;
            try {
                yield this.fetchData();
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].logViewAttemptReview(this.attemptId, this.quiz.id, this.quiz.name));
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param page Page to load. -1 means all questions in same page.
     * @param fromModal Whether the page was selected using the navigation modal.
     * @param slot Slot of the question to scroll to.
     */
    changePage(page, fromModal, slot) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (typeof slot != 'undefined' && (this.attempt.currentpage == -1 || page == this.currentPage)) {
                // Scrol to a certain question in the current page.
                this.scrollToQuestion(slot);
                return;
            }
            else if (page == this.currentPage) {
                // If the user is navigating to the current page and no question specified, we do nothing.
                return;
            }
            this.loaded = false;
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            try {
                yield this.loadPage(page);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
            finally {
                this.loaded = true;
                if (typeof slot != 'undefined') {
                    // Scroll to the question. Give some time to the questions to render.
                    setTimeout(() => {
                        this.scrollToQuestion(slot);
                    }, 2000);
                }
            }
        });
    }
    /**
     * Convenience function to get the quiz data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.quiz = yield _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getQuiz(this.courseId, this.cmId);
                this.options = yield _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getCombinedReviewOptions(this.quiz.id, { cmId: this.cmId });
                // Load the navigation data.
                yield this.loadNavigation();
                // Load questions.
                yield this.loadPage(this.currentPage);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
            }
        });
    }
    /**
     * Load a page questions.
     *
     * @param page The page to load.
     * @return Promise resolved when done.
     */
    loadPage(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getAttemptReview(this.attemptId, { page, cmId: this.quiz.coursemodule });
            this.attempt = data.attempt;
            this.attempt.currentpage = page;
            this.currentPage = page;
            // Set the summary data.
            this.setSummaryCalculatedData(data);
            this.questions = data.questions;
            this.nextPage = page == -1 ? -2 : page + 1;
            this.previousPage = page - 1;
            this.questions.forEach((question) => {
                // Get the readable mark for each question.
                question.readableMark = _services_quiz_helper__WEBPACK_IMPORTED_MODULE_12__["AddonModQuizHelper"].getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__["CoreQuestionHelper"].extractQuestionInfoBox(question, '.info');
            });
        });
    }
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @return Promise resolved when done.
     */
    loadNavigation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get all questions in single page to retrieve all the questions.
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getAttemptReview(this.attemptId, { page: -1, cmId: this.quiz.coursemodule });
            this.navigation = data.questions;
            this.navigation.forEach((question) => {
                question.stateClass = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__["CoreQuestionHelper"].getQuestionStateClass(question.state || '');
            });
            const lastQuestion = data.questions[data.questions.length - 1];
            this.numPages = lastQuestion ? lastQuestion.page + 1 : 0;
        });
    }
    /**
     * Refreshes data.
     *
     * @param refresher Refresher
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].invalidateQuizData(this.courseId));
            promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].invalidateAttemptReview(this.attemptId));
            if (this.quiz) {
                promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].invalidateCombinedReviewOptionsForUser(this.quiz.id));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(Promise.all(promises));
            try {
                yield this.fetchData();
            }
            finally {
                refresher.complete();
            }
        });
    }
    /**
     * Scroll to a certain question.
     *
     * @param slot Slot of the question to scroll to.
     */
    scrollToQuestion(slot) {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].scrollToElementBySelector(this.elementRef.nativeElement, this.content, `#addon-mod_quiz-question-${slot}`);
    }
    /**
     * Calculate review summary data.
     *
     * @param data Result of getAttemptReview.
     */
    setSummaryCalculatedData(data) {
        if (!this.attempt || !this.quiz) {
            return;
        }
        this.readableState = _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getAttemptReadableStateName(this.attempt.state || '');
        if (this.attempt.state != _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuizProvider"].ATTEMPT_FINISHED) {
            return;
        }
        this.showCompleted = true;
        this.additionalData = data.additionaldata;
        const timeTaken = (this.attempt.timefinish || 0) - (this.attempt.timestart || 0);
        if (timeTaken > 0) {
            // Format time taken.
            this.timeTaken = _services_utils_time__WEBPACK_IMPORTED_MODULE_7__["CoreTimeUtils"].formatTime(timeTaken);
            // Calculate overdue time.
            if (this.quiz.timelimit && timeTaken > this.quiz.timelimit + 60) {
                this.overTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_7__["CoreTimeUtils"].formatTime(timeTaken - this.quiz.timelimit);
            }
        }
        else {
            this.timeTaken = undefined;
        }
        // Treat grade.
        if (this.options.someoptions.marks >= _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuizProvider"].QUESTION_OPTIONS_MARK_AND_MAX &&
            _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].quizHasGrades(this.quiz)) {
            if (data.grade === null || typeof data.grade == 'undefined') {
                this.readableGrade = _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(data.grade, this.quiz.decimalpoints);
            }
            else {
                // Show raw marks only if they are different from the grade (like on the entry page).
                if (this.quiz.grade != this.quiz.sumgrades) {
                    this.readableMark = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_quiz.outofshort', { $a: {
                            grade: _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(this.attempt.sumgrades, this.quiz.decimalpoints),
                            maxgrade: _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(this.quiz.sumgrades, this.quiz.decimalpoints),
                        } });
                }
                // Now the scaled grade.
                const gradeObject = {
                    grade: _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(Number(data.grade), this.quiz.decimalpoints),
                    maxgrade: _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(this.quiz.grade, this.quiz.decimalpoints),
                };
                if (this.quiz.grade != 100) {
                    gradeObject.percent = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].roundToDecimals(this.attempt.sumgrades * 100 / this.quiz.sumgrades, 0);
                    this.readableGrade = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_quiz.outofpercent', { $a: gradeObject });
                }
                else {
                    this.readableGrade = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_quiz.outof', { $a: gradeObject });
                }
            }
        }
        // Treat additional data.
        this.additionalData.forEach((data) => {
            // Remove help links from additional data.
            data.content = _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].removeElementFromHtml(data.content, '.helptooltip');
        });
    }
    /**
     * Switch mode: all questions in same page OR one page at a time.
     */
    switchMode() {
        this.showAll = !this.showAll;
        // Load all questions or first page, depending on the mode.
        this.loadPage(this.showAll ? -1 : 0);
    }
    openNavigation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Create the navigation modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].openSideModal({
                component: _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_10__["AddonModQuizNavigationModalComponent"],
                componentProps: {
                    navigation: this.navigation,
                    summaryShown: false,
                    currentPage: (_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage,
                    isReview: true,
                    numPages: this.numPages,
                    showAll: this.showAll,
                },
            });
            if (!modalData) {
                return;
            }
            if (modalData.action == _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_10__["AddonModQuizNavigationModalComponent"].CHANGE_PAGE) {
                this.changePage(modalData.page, true, modalData.slot);
            }
            else if (modalData.action == _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_10__["AddonModQuizNavigationModalComponent"].SWITCH_MODE) {
                this.switchMode();
            }
        });
    }
};
AddonModQuizReviewPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonModQuizReviewPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],] }]
};
AddonModQuizReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./review.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/review/review.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./review.scss */ "./src/addons/mod/quiz/pages/review/review.scss")).default]
    })
], AddonModQuizReviewPage);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/review/review.scss":
/*!******************************************************!*\
  !*** ./src/addons/mod/quiz/pages/review/review.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-mod_quiz-question-note p {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL3F1aXovcGFnZXMvcmV2aWV3L3Jldmlldy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FkZG9ucy9tb2QvcXVpei9wYWdlcy9yZXZpZXcvcmV2aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmFkZG9uLW1vZF9xdWl6LXF1ZXN0aW9uLW5vdGUgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-review-review-module.js.map