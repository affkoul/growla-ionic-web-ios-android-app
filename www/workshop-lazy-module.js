(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workshop-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/assessment/assessment.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/assessment/assessment.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"workshop && workshop.coursemodule\"\n                [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\" [hidden]=\"!evaluating\">\n            <ion-button fill=\"clear\" (click)=\"saveEvaluation()\">\n                {{ 'core.save' | translate }}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshAssessment($event.target)\" *ngIf=\"!evaluating\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n\n        <ion-item class=\"ion-text-wrap\">\n            <core-user-avatar *ngIf=\"profile\" [user]=\"profile\" slot=\"start\" [courseId]=\"courseId\" [userId]=\"profile.id\">\n            </core-user-avatar>\n\n            <ion-label>\n                <h2 *ngIf=\"profile && profile.fullname\">{{profile.fullname}}</h2>\n\n                <p *ngIf=\"workshop && assessment && showGrade(assessment.grade)\">\n                    {{ 'addon.mod_workshop.submissiongradeof' | translate:{$a: workshop.grade } }}: {{assessment.grade}}\n                </p>\n                <p *ngIf=\"workshop && access && access.canviewallsubmissions && assessment && showGrade(assessment.gradinggrade)\"\n                    [class.core-has-overriden-grade]=\" showGrade(assessment.gradinggrade)\">\n                    {{ 'addon.mod_workshop.gradinggradeof' | translate:{$a: workshop.gradinggrade } }}: {{assessment.gradinggrade}}\n                </p>\n                <p *ngIf=\"access && access.canviewallsubmissions && assessment && showGrade(assessment.gradinggradeover)\"\n                    class=\"core-overriden-grade\">\n                    {{ 'addon.mod_workshop.gradinggradeover' | translate }}: {{assessment.gradinggradeover}}\n                </p>\n                <p *ngIf=\"assessment && assessment.weight && assessment.weight != 1\">\n                    {{ 'addon.mod_workshop.weightinfo' | translate:{$a: assessment.weight } }}\n                </p>\n                <ion-badge *ngIf=\"!assessment || !showGrade(assessment.grade)\" color=\"danger\">\n                    {{ 'addon.mod_workshop.notassessed' | translate }}\n                </ion-badge>\n            </ion-label>\n        </ion-item>\n\n        <addon-mod-workshop-assessment-strategy\n            *ngIf=\"assessment && assessmentId && showGrade(assessment.grade) && workshop && access\" [workshop]=\"workshop\"\n            [access]=\"access\" [assessmentId]=\"assessmentId\" [userId]=\"profile && profile.id\" [strategy]=\"strategy\">\n        </addon-mod-workshop-assessment-strategy>\n\n        <form [formGroup]=\"evaluateForm\" *ngIf=\"evaluating\" #evaluateFormEl>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label><h2>{{ 'addon.mod_workshop.assessmentsettings' | translate }}</h2></ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"access?.canallocate\">\n                <ion-label position=\"stacked\">\n                    <span core-mark-required=\"true\">\n                        {{ 'addon.mod_workshop.assessmentweight' | translate }}\n                    </span>\n                </ion-label>\n                <ion-select formControlName=\"weight\" required=\"true\" interface=\"action-sheet\"\n                    [interfaceOptions]=\"{header: 'addon.mod_workshop.assessmentweight' | translate}\">\n                    <ion-select-option *ngFor=\"let w of weights\" [value]=\"w\">{{ w }}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <h2>{{ 'addon.mod_workshop.gradinggradecalculated' | translate }}</h2>\n                    <p>{{ gradingGrade }}</p>\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"access?.canoverridegrades\">\n                <ion-label position=\"stacked\">{{ 'addon.mod_workshop.gradinggradeover' | translate }}</ion-label>\n                <ion-select formControlName=\"grade\" interface=\"action-sheet\"\n                    [interfaceOptions]=\"{header: 'addon.mod_workshop.gradinggradeover' | translate}\">\n                    <ion-select-option *ngFor=\"let grade of evaluationGrades\" [value]=\"grade.value\">\n                        {{grade.label}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item *ngIf=\"access?.canoverridegrades\">\n                <ion-label position=\"stacked\">{{ 'addon.mod_workshop.feedbackreviewer' | translate }}</ion-label>\n                <core-rich-text-editor [control]=\"evaluateForm.controls['text']\" name=\"text\"\n                    [autoSave]=\"true\" contextLevel=\"module\" [contextInstanceId]=\"workshop?.coursemodule\"\n                    elementId=\"feedbackreviewer_editor\" [draftExtraParams]=\"{asid: assessmentId}\">\n                </core-rich-text-editor>\n            </ion-item>\n        </form>\n        <ion-list *ngIf=\"!evaluating && evaluate && evaluate.text\">\n            <ion-item class=\"ion-text-wrap\">\n                <core-user-avatar *ngIf=\"evaluateByProfile\" [user]=\"evaluateByProfile\" slot=\"start\"\n                    [courseId]=\"courseId\" [userId]=\"evaluateByProfile.id\"></core-user-avatar>\n                <ion-label>\n                    <h2 *ngIf=\"evaluateByProfile && evaluateByProfile.fullname\">\n                        {{ 'addon.mod_workshop.feedbackby' | translate : {$a: evaluateByProfile.fullname} }}\n                    </h2>\n                    <core-format-text [text]=\"evaluate.text\" contextLevel=\"module\" [contextInstanceId]=\"workshop?.coursemodule\"\n                        [courseId]=\"courseId\">\n                    </core-format-text>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/edit-submission/edit-submission.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/edit-submission/edit-submission.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.mod_workshop.editsubmission' | translate }}</h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"save()\" [attr.aria-label]=\"'core.save' | translate\">\n                {{ 'core.save' | translate }}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <form [formGroup]=\"editForm\" *ngIf=\"workshop\" #editFormEl>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label position=\"stacked\">\n                    <span core-mark-required=\"true\">\n                        {{ 'addon.mod_workshop.submissiontitle' | translate }}\n                    </span>\n                </ion-label>\n                <ion-input name=\"title\" type=\"text\" [placeholder]=\"'addon.mod_workshop.submissiontitle' | translate\"\n                    formControlName=\"title\">\n                </ion-input>\n            </ion-item>\n\n            <ion-item *ngIf=\"textAvailable\">\n                <ion-label position=\"stacked\">\n                    <span [core-mark-required]=\"textRequired\">\n                        {{ 'addon.mod_workshop.submissioncontent' | translate }}\n                    </span>\n                </ion-label>\n                <core-rich-text-editor [control]=\"editForm.controls['content']\" name=\"content\"\n                    [placeholder]=\"'addon.mod_workshop.submissioncontent' | translate\" name=\"content\" [component]=\"component\"\n                    [componentId]=\"componentId\" [autoSave]=\"true\" contextLevel=\"module\" [contextInstanceId]=\"module.id\"\n                    elementId=\"content_editor\" [draftExtraParams]=\"editorExtraParams\"></core-rich-text-editor>\n            </ion-item>\n\n            <core-attachments *ngIf=\"fileAvailable\" [files]=\"attachments\" [maxSize]=\"workshop.maxbytes\"\n                [maxSubmissions]=\"workshop.nattachments\" [component]=\"component\" [componentId]=\"workshop.coursemodule\"\n                allowOffline=\"true\" [acceptedTypes]=\"workshop.submissionfiletypes\" [required]=\"fileRequired\">\n            </core-attachments>\n        </form>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/index/index.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/index/index.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!activityComponent?.loaded\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-workshop-index [module]=\"module\" [courseId]=\"courseId\" [group]=\"selectedGroup\" (dataRetrieved)=\"updateData($event)\">\n    </addon-mod-workshop-index>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/workshop/pages/assessment/assessment.ts":
/*!****************************************************************!*\
  !*** ./src/addons/mod/workshop/pages/assessment/assessment.ts ***!
  \****************************************************************/
/*! exports provided: AddonModWorkshopAssessmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWorkshopAssessmentPage", function() { return AddonModWorkshopAssessmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/grades/services/grades-helper */ "./src/core/features/grades/services/grades-helper.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_workshop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/workshop */ "./src/addons/mod/workshop/services/workshop.ts");
/* harmony import */ var _services_workshop_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/workshop-helper */ "./src/addons/mod/workshop/services/workshop-helper.ts");
/* harmony import */ var _services_workshop_offline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/workshop-offline */ "./src/addons/mod/workshop/services/workshop-offline.ts");
/* harmony import */ var _services_workshop_sync__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/workshop-sync */ "./src/addons/mod/workshop/services/workshop-sync.ts");
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
 * Page that displays a workshop assessment.
 */
let AddonModWorkshopAssessmentPage = class AddonModWorkshopAssessmentPage {
    constructor(fb) {
        this.fb = fb;
        this.evaluating = false;
        this.loaded = false;
        this.title = '';
        this.evaluate = {
            text: '',
            grade: -1,
            weight: 1,
        };
        this.weights = [];
        this.evaluationGrades = [];
        this.originalEvaluation = {
            text: '',
            grade: -1,
            weight: 1,
        };
        this.hasOffline = false;
        this.isDestroyed = false;
        this.forceLeave = false;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId();
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteUserId();
        this.showGrade = _services_workshop_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopHelper"].showGrade;
        this.evaluateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.evaluateForm.addControl('weight', this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        this.evaluateForm.addControl('grade', this.fb.control(''));
        this.evaluateForm.addControl('text', this.fb.control(''));
        // Refresh workshop on sync.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].on(_services_workshop_sync__WEBPACK_IMPORTED_MODULE_17__["AddonModWorkshopSyncProvider"].AUTO_SYNCED, (data) => {
            // Update just when all database is synced.
            if (this.workshopId === data.workshopId) {
                this.loaded = false;
                this.refreshAllData();
            }
        }, this.siteId);
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.assessment = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('assessment');
        this.submission = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('submission');
        this.profile = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('profile');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('courseId');
        this.assessmentId = this.assessment.id;
        this.workshopId = this.submission.workshopid;
        this.fetchAssessmentData();
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || !this.evaluating) {
                return true;
            }
            if (!this.hasEvaluationChanged()) {
                return true;
            }
            // Show confirmation if some data has been modified.
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.confirmcanceledit'));
            _singletons_form__WEBPACK_IMPORTED_MODULE_13__["CoreForms"].triggerFormCancelledEvent(this.formElement, this.siteId);
            return true;
        });
    }
    /**
     * Fetch the assessment data.
     *
     * @return Resolved when done.
     */
    fetchAssessmentData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.workshop = yield _services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].getWorkshopById(this.courseId, this.workshopId);
                this.title = this.workshop.name;
                this.strategy = this.workshop.strategy;
                const gradeInfo = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getModuleBasicGradeInfo(this.workshop.coursemodule);
                this.maxGrade = gradeInfo === null || gradeInfo === void 0 ? void 0 : gradeInfo.grade;
                this.access = yield _services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].getWorkshopAccessInformation(this.workshopId, { cmId: this.workshop.coursemodule });
                // Load Weights selector.
                if (this.assessmentId && (this.access.canallocate || this.access.canoverridegrades)) {
                    if (!this.isDestroyed) {
                        // Block the workshop.
                        _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].blockOperation(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshopProvider"].COMPONENT, this.workshopId);
                    }
                    this.evaluating = true;
                }
                else {
                    this.evaluating = false;
                }
                if (!this.evaluating && this.workshop.phase != _services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshopPhase"].PHASE_CLOSED) {
                    return;
                }
                // Get all info of the assessment.
                const assessment = yield _services_workshop_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopHelper"].getReviewerAssessmentById(this.workshopId, this.assessmentId, {
                    userId: this.profile && this.profile.id,
                    cmId: this.workshop.coursemodule,
                });
                this.assessment = _services_workshop_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopHelper"].realGradeValue(this.workshop, assessment);
                this.evaluate.text = this.assessment.feedbackreviewer || '';
                this.evaluate.weight = this.assessment.weight;
                this.gradingGrade = (_a = this.assessment.gradinggrade) !== null && _a !== void 0 ? _a : '-';
                if (this.evaluating) {
                    if (this.access.canallocate) {
                        this.weights = [];
                        for (let i = 16; i >= 0; i--) {
                            this.weights[i] = i;
                        }
                    }
                    if (this.access.canoverridegrades) {
                        const defaultGrade = _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_workshop.notoverridden');
                        this.evaluationGrades =
                            yield _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_4__["CoreGradesHelper"].makeGradesMenu(this.workshop.gradinggrade, undefined, defaultGrade, -1);
                    }
                    try {
                        const offlineAssess = yield _services_workshop_offline__WEBPACK_IMPORTED_MODULE_16__["AddonModWorkshopOffline"].getEvaluateAssessment(this.workshopId, this.assessmentId);
                        this.hasOffline = true;
                        this.evaluate.weight = offlineAssess.weight;
                        if (this.access.canoverridegrades) {
                            this.evaluate.text = offlineAssess.feedbacktext || '';
                            this.evaluate.grade = parseInt(offlineAssess.gradinggradeover, 10) || -1;
                        }
                    }
                    catch (_b) {
                        this.hasOffline = false;
                        // No offline, load online.
                        if (this.access.canoverridegrades) {
                            this.evaluate.text = this.assessment.feedbackreviewer || '';
                            this.evaluate.grade = parseInt(String(this.assessment.gradinggradeover), 10) || -1;
                        }
                    }
                    finally {
                        this.originalEvaluation.weight = this.evaluate.weight;
                        if (this.access.canoverridegrades) {
                            this.originalEvaluation.text = this.evaluate.text;
                            this.originalEvaluation.grade = this.evaluate.grade;
                        }
                        this.evaluateForm.controls['weight'].setValue(this.evaluate.weight);
                        if (this.access.canoverridegrades) {
                            this.evaluateForm.controls['grade'].setValue(this.evaluate.grade);
                            this.evaluateForm.controls['text'].setValue(this.evaluate.text);
                        }
                    }
                }
                else if (this.workshop.phase == _services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshopPhase"].PHASE_CLOSED && this.assessment.gradinggradeoverby) {
                    this.evaluateByProfile = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_5__["CoreUser"].getProfile(this.assessment.gradinggradeoverby, this.courseId, true);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'mm.course.errorgetmodule', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Force leaving the page, without checking for changes.
     */
    forceLeavePage() {
        this.forceLeave = true;
        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
    }
    /**
     * Check if data has changed.
     *
     * @return True if changed, false otherwise.
     */
    hasEvaluationChanged() {
        if (!this.loaded || !this.evaluating) {
            return false;
        }
        const inputData = this.evaluateForm.value;
        if (this.originalEvaluation.weight != inputData.weight) {
            return true;
        }
        if (this.access && this.access.canoverridegrades) {
            if (this.originalEvaluation.text != inputData.text) {
                return true;
            }
            if (this.originalEvaluation.grade != inputData.grade) {
                return true;
            }
        }
        return false;
    }
    /**
     * Convenience function to refresh all the data.
     *
     * @return Resolved when done.
     */
    refreshAllData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].invalidateWorkshopData(this.courseId));
            promises.push(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].invalidateWorkshopAccessInformationData(this.workshopId));
            promises.push(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].invalidateReviewerAssesmentsData(this.workshopId));
            if (this.assessmentId) {
                promises.push(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].invalidateAssessmentFormData(this.workshopId, this.assessmentId));
                promises.push(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].invalidateAssessmentData(this.workshopId, this.assessmentId));
            }
            try {
                yield Promise.all(promises);
            }
            finally {
                _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].trigger(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshopProvider"].ASSESSMENT_INVALIDATED, null, this.siteId);
                yield this.fetchAssessmentData();
            }
        });
    }
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    refreshAssessment(refresher) {
        if (this.loaded) {
            this.refreshAllData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
    }
    /**
     * Save the assessment evaluation.
     */
    saveEvaluation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if data has changed.
            if (this.hasEvaluationChanged()) {
                yield this.sendEvaluation();
            }
            // Go back.
            this.forceLeavePage();
        });
    }
    /**
     * Sends the evaluation to be saved on the server.
     *
     * @return Resolved when done.
     */
    sendEvaluation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            const inputData = this.evaluateForm.value;
            const grade = inputData.grade >= 0 ? String(inputData.grade) : '';
            // Add some HTML to the message if needed.
            const text = _services_utils_text__WEBPACK_IMPORTED_MODULE_10__["CoreTextUtils"].formatHtmlLines(inputData.text);
            try {
                // Try to send it to server.
                const result = yield _services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].evaluateAssessment(this.workshopId, this.assessmentId, this.courseId, text, inputData.weight, grade);
                _singletons_form__WEBPACK_IMPORTED_MODULE_13__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !!result, this.siteId);
                const data = {
                    workshopId: this.workshopId,
                    assessmentId: this.assessmentId,
                    userId: this.currentUserId,
                };
                return _services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshop"].invalidateAssessmentData(this.workshopId, this.assessmentId).finally(() => {
                    _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].trigger(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshopProvider"].ASSESSMENT_SAVED, data, this.siteId);
                });
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Cannot save assessment evaluation');
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a;
        this.isDestroyed = true;
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        // Restore original back functions.
        _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].unblockOperation(_services_workshop__WEBPACK_IMPORTED_MODULE_14__["AddonModWorkshopProvider"].COMPONENT, this.workshopId);
    }
};
AddonModWorkshopAssessmentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonModWorkshopAssessmentPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['evaluateFormEl',] }]
};
AddonModWorkshopAssessmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-workshop-assessment-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assessment.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/assessment/assessment.html")).default,
    })
], AddonModWorkshopAssessmentPage);



/***/ }),

/***/ "./src/addons/mod/workshop/pages/edit-submission/edit-submission.ts":
/*!**************************************************************************!*\
  !*** ./src/addons/mod/workshop/pages/edit-submission/edit-submission.ts ***!
  \**************************************************************************/
/*! exports provided: AddonModWorkshopEditSubmissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWorkshopEditSubmissionPage", function() { return AddonModWorkshopEditSubmissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/file */ "./src/core/services/file.ts");
/* harmony import */ var _services_file_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/file-helper */ "./src/core/services/file-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_workshop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/workshop */ "./src/addons/mod/workshop/services/workshop.ts");
/* harmony import */ var _services_workshop_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/workshop-helper */ "./src/addons/mod/workshop/services/workshop-helper.ts");
/* harmony import */ var _services_workshop_offline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/workshop-offline */ "./src/addons/mod/workshop/services/workshop-offline.ts");
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
 * Page that displays the workshop edit submission.
 */
let AddonModWorkshopEditSubmissionPage = class AddonModWorkshopEditSubmissionPage {
    constructor(fb) {
        this.fb = fb;
        this.loaded = false;
        this.component = _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopProvider"].COMPONENT;
        this.editorExtraParams = {}; // Extra params to identify the draft.
        this.textAvailable = false;
        this.textRequired = false;
        this.fileAvailable = false;
        this.fileRequired = false;
        this.attachments = [];
        this.submissionId = 0;
        this.originalData = {
            title: '',
            content: '',
            attachmentfiles: [],
        };
        this.hasOffline = false;
        this.editing = false;
        this.forceLeave = false;
        this.isDestroyed = false;
        this.userId = _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteUserId();
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId();
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.editForm.addControl('title', this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        this.editForm.addControl('content', this.fb.control(''));
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.module = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('module');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('courseId');
        this.access = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('access');
        this.submissionId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('submissionId') || 0;
        if (this.submissionId > 0) {
            this.editorExtraParams.id = this.submissionId;
        }
        this.workshopId = this.module.instance;
        this.componentId = this.module.id;
        if (!this.isDestroyed) {
            // Block the workshop.
            _services_sync__WEBPACK_IMPORTED_MODULE_9__["CoreSync"].blockOperation(this.component, this.workshopId);
        }
        this.fetchSubmissionData();
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave) {
                return true;
            }
            // Check if data has changed.
            if (this.hasDataChanged()) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.confirmcanceledit'));
            }
            if ((_a = this.submission) === null || _a === void 0 ? void 0 : _a.attachmentfiles) {
                // Delete the local files from the tmp folder.
                _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploader"].clearTmpFiles(this.submission.attachmentfiles);
            }
            _singletons_form__WEBPACK_IMPORTED_MODULE_14__["CoreForms"].triggerFormCancelledEvent(this.formElement, this.siteId);
            return true;
        });
    }
    /**
     * Fetch the submission data.
     *
     * @return Resolved when done.
     */
    fetchSubmissionData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.workshop = yield _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshop"].getWorkshop(this.courseId, this.module.id);
                this.textAvailable = (this.workshop.submissiontypetext != _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopSubmissionType"].SUBMISSION_TYPE_DISABLED);
                this.textRequired = (this.workshop.submissiontypetext == _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopSubmissionType"].SUBMISSION_TYPE_REQUIRED);
                this.fileAvailable = (this.workshop.submissiontypefile != _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopSubmissionType"].SUBMISSION_TYPE_DISABLED);
                this.fileRequired = (this.workshop.submissiontypefile == _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopSubmissionType"].SUBMISSION_TYPE_REQUIRED);
                this.editForm.controls.content.setValidators(this.textRequired ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : null);
                if (this.submissionId > 0) {
                    this.editing = true;
                    this.submission =
                        yield _services_workshop_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModWorkshopHelper"].getSubmissionById(this.workshopId, this.submissionId, { cmId: this.module.id });
                    const canEdit = this.userId == this.submission.authorid &&
                        this.access.cansubmit &&
                        this.access.modifyingsubmissionallowed;
                    if (!canEdit) {
                        // Should not happen, but go back if does.
                        this.forceLeavePage();
                        return;
                    }
                }
                else if (!this.access.cansubmit || !this.access.creatingsubmissionallowed) {
                    // Should not happen, but go back if does.
                    this.forceLeavePage();
                    return;
                }
                const submissionsActions = yield _services_workshop_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModWorkshopOffline"].getSubmissions(this.workshopId);
                if (submissionsActions && submissionsActions.length) {
                    this.hasOffline = true;
                    this.submission = yield _services_workshop_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModWorkshopHelper"].applyOfflineData(this.submission, submissionsActions);
                }
                else {
                    this.hasOffline = false;
                }
                if (this.submission) {
                    this.originalData.title = this.submission.title || '';
                    this.originalData.content = this.submission.content || '';
                    this.originalData.attachmentfiles = [];
                    (this.submission.attachmentfiles || []).forEach((file) => {
                        let filename = _services_file__WEBPACK_IMPORTED_MODULE_5__["CoreFile"].getFileName(file);
                        if (!filename) {
                            // We don't have filename, extract it from the path.
                            filename = _services_file_helper__WEBPACK_IMPORTED_MODULE_6__["CoreFileHelper"].getFilenameFromPath(file) || '';
                        }
                        this.originalData.attachmentfiles.push({
                            filename,
                            fileurl: 'fileurl' in file ? file.fileurl : '',
                        });
                    });
                    this.editForm.controls['title'].setValue(this.submission.title);
                    this.editForm.controls['content'].setValue(this.submission.content);
                    this.attachments = this.submission.attachmentfiles || [];
                }
                this.loaded = true;
            }
            catch (error) {
                this.loaded = false;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                this.forceLeavePage();
            }
        });
    }
    /**
     * Force leaving the page, without checking for changes.
     */
    forceLeavePage() {
        this.forceLeave = true;
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
    }
    /**
     * Get the form input data.
     *
     * @return Object with all the info.
     */
    getInputData() {
        const values = {
            title: this.editForm.value.title,
            content: '',
            attachmentfiles: [],
        };
        if (this.textAvailable) {
            values.content = this.editForm.value.content || '';
        }
        if (this.fileAvailable) {
            values.attachmentfiles = this.attachments;
        }
        return values;
    }
    /**
     * Check if data has changed.
     *
     * @return True if changed or false if not.
     */
    hasDataChanged() {
        if (!this.loaded) {
            return false;
        }
        const inputData = this.getInputData();
        if (this.originalData.title != inputData.title || this.textAvailable && this.originalData.content != inputData.content) {
            return true;
        }
        if (this.fileAvailable) {
            return _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploader"].areFileListDifferent(inputData.attachmentfiles, this.originalData.attachmentfiles);
        }
        return false;
    }
    /**
     * Save the submission.
     */
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if data has changed.
            if (this.hasDataChanged()) {
                try {
                    yield this.saveSubmission();
                    // Go back to entry list.
                    this.forceLeavePage();
                }
                catch (_a) {
                    // Nothing to do.
                }
            }
            else {
                // Nothing to save, just go back.
                this.forceLeavePage();
            }
        });
    }
    /**
     * Send submission and save.
     *
     * @return Resolved when done.
     */
    saveSubmission() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputData = this.getInputData();
            if (!inputData.title) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showAlertTranslated('core.notice', 'addon.mod_workshop.submissionrequiredtitle');
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('addon.mod_workshop.submissionrequiredtitle'));
            }
            const noText = _services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].htmlIsBlank(inputData.content);
            const noFiles = !inputData.attachmentfiles.length;
            if ((this.textRequired && noText) || (this.fileRequired && noFiles) || (noText && noFiles)) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showAlertTranslated('core.notice', 'addon.mod_workshop.submissionrequiredcontent');
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('addon.mod_workshop.submissionrequiredcontent'));
            }
            let saveOffline = false;
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showModalLoading('core.sending', true);
            const submissionId = (_a = this.submission) === null || _a === void 0 ? void 0 : _a.id;
            // Add some HTML to the message if needed.
            if (this.textAvailable) {
                inputData.content = _services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].formatHtmlLines(inputData.content);
            }
            // Upload attachments first if any.
            let allowOffline = !inputData.attachmentfiles.length;
            try {
                let attachmentsId;
                let storeFilesResult;
                try {
                    attachmentsId = yield _services_workshop_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModWorkshopHelper"].uploadOrStoreSubmissionFiles(this.workshopId, inputData.attachmentfiles, false);
                }
                catch (_b) {
                    // Cannot upload them in online, save them in offline.
                    saveOffline = true;
                    allowOffline = true;
                    storeFilesResult = yield _services_workshop_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModWorkshopHelper"].uploadOrStoreSubmissionFiles(this.workshopId, inputData.attachmentfiles, true);
                }
                if (!saveOffline && !this.fileAvailable) {
                    attachmentsId = undefined;
                }
                let newSubmissionId;
                if (this.editing) {
                    if (saveOffline) {
                        // Save submission in offline.
                        yield _services_workshop_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModWorkshopOffline"].saveSubmission(this.workshopId, this.courseId, inputData.title, inputData.content, storeFilesResult, submissionId, _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopAction"].UPDATE);
                        newSubmissionId = false;
                    }
                    else {
                        // Try to send it to server.
                        // Don't allow offline if there are attachments since they were uploaded fine.
                        newSubmissionId = yield _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshop"].updateSubmission(this.workshopId, submissionId, this.courseId, inputData.title, inputData.content, attachmentsId, undefined, allowOffline);
                    }
                }
                else {
                    if (saveOffline) {
                        // Save submission in offline.
                        yield _services_workshop_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModWorkshopOffline"].saveSubmission(this.workshopId, this.courseId, inputData.title, inputData.content, storeFilesResult, undefined, _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopAction"].ADD);
                        newSubmissionId = false;
                    }
                    else {
                        // Try to send it to server.
                        // Don't allow offline if there are attachments since they were uploaded fine.
                        newSubmissionId = yield _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshop"].addSubmission(this.workshopId, this.courseId, inputData.title, inputData.content, attachmentsId, undefined, allowOffline);
                    }
                }
                _singletons_form__WEBPACK_IMPORTED_MODULE_14__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !!newSubmissionId, this.siteId);
                const data = {
                    workshopId: this.workshopId,
                };
                if (newSubmissionId) {
                    // Data sent to server, delete stored files (if any).
                    _services_workshop_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModWorkshopOffline"].deleteSubmissionAction(this.workshopId, this.editing ? _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopAction"].UPDATE : _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopAction"].ADD);
                    _services_workshop_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModWorkshopHelper"].deleteSubmissionStoredFiles(this.workshopId, this.siteId);
                    data.submissionId = newSubmissionId;
                }
                _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'workshop' });
                const promise = newSubmissionId ? _services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshop"].invalidateSubmissionData(this.workshopId, newSubmissionId) :
                    Promise.resolve();
                yield promise.finally(() => {
                    _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].trigger(_services_workshop__WEBPACK_IMPORTED_MODULE_15__["AddonModWorkshopProvider"].SUBMISSION_CHANGED, data, this.siteId);
                    // Delete the local files from the tmp folder.
                    _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploader"].clearTmpFiles(inputData.attachmentfiles);
                });
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'Cannot save submission');
            }
            finally {
                modal.dismiss();
            }
        });
    }
    getFilesComponentId() {
        const id = this.submissionId > 0
            ? this.submissionId
            : 'newsub';
        return this.workshopId + '_' + id;
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        this.isDestroyed = true;
        _services_sync__WEBPACK_IMPORTED_MODULE_9__["CoreSync"].unblockOperation(this.component, this.workshopId);
    }
};
AddonModWorkshopEditSubmissionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonModWorkshopEditSubmissionPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editFormEl',] }]
};
AddonModWorkshopEditSubmissionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-workshop-edit-submission',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-submission.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/edit-submission/edit-submission.html")).default,
    })
], AddonModWorkshopEditSubmissionPage);



/***/ }),

/***/ "./src/addons/mod/workshop/pages/index/index.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/workshop/pages/index/index.ts ***!
  \******************************************************/
/*! exports provided: AddonModWorkshopIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWorkshopIndexPage", function() { return AddonModWorkshopIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/workshop/components/index/index.ts");
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
 * Page that displays a workshop.
 */
let AddonModWorkshopIndexPage = class AddonModWorkshopIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    constructor() {
        super(...arguments);
        this.selectedGroup = 0;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        super.ngOnInit();
        this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('group') || 0;
    }
};
AddonModWorkshopIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_4__["AddonModWorkshopIndexComponent"],] }]
};
AddonModWorkshopIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-workshop-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/workshop/pages/index/index.html")).default,
    })
], AddonModWorkshopIndexPage);



/***/ }),

/***/ "./src/addons/mod/workshop/workshop-lazy.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/workshop/workshop-lazy.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonModWorkshopLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWorkshopLazyModule", function() { return AddonModWorkshopLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/workshop/pages/index/index.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/workshop/components/components.module.ts");
/* harmony import */ var _pages_submission_submission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/submission/submission */ "./src/addons/mod/workshop/pages/submission/submission.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _pages_assessment_assessment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/assessment/assessment */ "./src/addons/mod/workshop/pages/assessment/assessment.ts");
/* harmony import */ var _pages_edit_submission_edit_submission__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/edit-submission/edit-submission */ "./src/addons/mod/workshop/pages/edit-submission/edit-submission.ts");
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
        path: ':courseId/:cmId',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModWorkshopIndexPage"],
    },
    {
        path: ':courseId/:cmId/:submissionId',
        component: _pages_submission_submission__WEBPACK_IMPORTED_MODULE_7__["AddonModWorkshopSubmissionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_3__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/:submissionId/edit',
        component: _pages_edit_submission_edit_submission__WEBPACK_IMPORTED_MODULE_10__["AddonModWorkshopEditSubmissionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_3__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/:submissionId/:assessmentId',
        component: _pages_assessment_assessment__WEBPACK_IMPORTED_MODULE_9__["AddonModWorkshopAssessmentPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_3__["CanLeaveGuard"]],
    },
];
let AddonModWorkshopLazyModule = class AddonModWorkshopLazyModule {
};
AddonModWorkshopLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["AddonModWorkshopComponentsModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_8__["CoreEditorComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModWorkshopIndexPage"],
            _pages_submission_submission__WEBPACK_IMPORTED_MODULE_7__["AddonModWorkshopSubmissionPage"],
            _pages_assessment_assessment__WEBPACK_IMPORTED_MODULE_9__["AddonModWorkshopAssessmentPage"],
            _pages_edit_submission_edit_submission__WEBPACK_IMPORTED_MODULE_10__["AddonModWorkshopEditSubmissionPage"],
        ],
    })
], AddonModWorkshopLazyModule);



/***/ })

}]);
//# sourceMappingURL=workshop-lazy-module.js.map