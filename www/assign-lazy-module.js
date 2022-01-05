(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assign-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/edit/edit.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/edit/edit.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"moduleId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"save()\">\n                {{ 'core.save' | translate }}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-list *ngIf=\"userSubmission && userSubmission.plugins && userSubmission.plugins.length\">\n            <!-- @todo: plagiarism_print_disclosure -->\n            <form name=\"addon-mod_assign-edit-form\" #editSubmissionForm>\n                <!-- Submission statement. -->\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"submissionStatement\">\n                    <ion-label>\n                        <core-format-text [text]=\"submissionStatement\" [filter]=\"false\">\n                        </core-format-text>\n                    </ion-label>\n                    <ion-checkbox slot=\"end\" name=\"submissionstatement\" [(ngModel)]=\"submissionStatementAccepted\"></ion-checkbox>\n                    <!-- ion-checkbox doesn't use an input. Create a hidden input to hold the value. -->\n                    <input type=\"hidden\" [ngModel]=\"submissionStatementAccepted\" name=\"submissionstatement\">\n                </ion-item>\n\n                <addon-mod-assign-submission-plugin *ngFor=\"let plugin of userSubmission.plugins\" [assign]=\"assign\"\n                    [submission]=\"userSubmission\" [plugin]=\"plugin\" [edit]=\"true\" [allowOffline]=\"allowOffline\">\n                </addon-mod-assign-submission-plugin>\n            </form>\n        </ion-list>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/index/index.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/index/index.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!activityComponent?.loaded\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-assign-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"></addon-mod-assign-index>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-list/submission-list.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-list/submission-list.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"moduleId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n\n        <ion-buttons slot=\"end\"></ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded || !submissions.loaded\" (ionRefresh)=\"refreshList($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"loaded && submissions.loaded\">\n            <core-empty-box *ngIf=\"!submissions || submissions.empty\" icon=\"fas-file-signature\"\n                [message]=\"'addon.mod_assign.submissionstatus_' | translate\">\n            </core-empty-box>\n\n            <ion-list>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"(groupInfo.separateGroups || groupInfo.visibleGroups)\">\n                    <ion-label id=\"addon-assign-groupslabel\" *ngIf=\"groupInfo.separateGroups\">\n                        {{ 'core.groupsseparate' | translate }}\n                    </ion-label>\n                    <ion-label id=\"addon-assign-groupslabel\" *ngIf=\"groupInfo.visibleGroups\">\n                        {{ 'core.groupsvisible' | translate }}\n                    </ion-label>\n                    <ion-select [(ngModel)]=\"groupId\" (ionChange)=\"setGroup(groupId)\" aria-labelledby=\"addon-assign-groupslabel\"\n                        interface=\"action-sheet\" slot=\"end\" [interfaceOptions]=\"{header: 'core.group' | translate}\">\n                        <ion-select-option *ngFor=\"let groupOpt of groupInfo.groups\" [value]=\"groupOpt.id\">\n                            {{groupOpt.name}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <!-- List of submissions. -->\n                <ng-container *ngFor=\"let submission of submissions.items\">\n                    <ion-item class=\"ion-text-wrap\" (click)=\"submissions.select(submission)\" button\n                        [attr.aria-current]=\"submissions.getItemAriaCurrent(submission)\" detail=\"true\">\n                        <core-user-avatar [user]=\"submission\" [linkProfile]=\"false\" slot=\"start\"></core-user-avatar>\n                        <ion-label>\n                            <p class=\"item-heading\" *ngIf=\"submission.userfullname\">{{submission.userfullname}}</p>\n                            <p class=\"item-heading\" *ngIf=\"!submission.userfullname\">\n                                {{ 'addon.mod_assign.hiddenuser' | translate }}{{submission.blindid}}\n                            </p>\n                            <p *ngIf=\"assign && assign!.teamsubmission\">\n                                <span *ngIf=\"submission.groupname\">{{submission.groupname}}</span>\n                                <span *ngIf=\"assign!.preventsubmissionnotingroup && !submission.groupname && submission.noGroups\n                                    && !submission.blindid\" class=\"text-danger\">\n                                    {{ 'addon.mod_assign.noteam' | translate }}\n                                </span>\n                                <span *ngIf=\"assign!.preventsubmissionnotingroup && !submission.groupname && submission.manyGroups\n                                    && !submission.blindid\" class=\"text-danger\">\n                                    {{ 'addon.mod_assign.multipleteams' | translate }}\n                                </span>\n                                <span *ngIf=\"!assign!.preventsubmissionnotingroup && !submission.groupname\">\n                                    {{ 'addon.mod_assign.defaultteam' | translate }}\n                                </span>\n                            </p>\n                            <ion-badge class=\"ion-text-center ion-text-wrap\" [color]=\"submission.statusColor\"\n                                *ngIf=\"submission.statusTranslated\">\n                                {{ submission.statusTranslated }}\n                            </ion-badge>\n                            <ion-badge class=\"ion-text-center ion-text-wrap\" [color]=\"submission.gradingColor\"\n                                *ngIf=\"submission.gradingStatusTranslationId\">\n                                {{ submission.gradingStatusTranslationId | translate }}\n                            </ion-badge>\n                        </ion-label>\n                    </ion-item>\n                </ng-container>\n\n                <ion-card class=\"ion-text-wrap core-warning-card\" *ngIf=\"!haveAllParticipants\">\n                    <ion-item>\n                        <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                        <ion-label>{{ 'addon.mod_assign.notallparticipantsareshown' | translate }}</ion-label>\n                    </ion-item>\n                </ion-card>\n            </ion-list>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-review/submission-review.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-review/submission-review.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"moduleId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n\n        <ion-buttons slot=\"end\"></ion-buttons>\n    </ion-toolbar>\n\n    <core-navbar-buttons slot=\"end\">\n        <ion-button [hidden]=\"!canSaveGrades\" fill=\"clear\" (click)=\"submitGrade()\">\n            {{ 'core.done' | translate }}\n        </ion-button>\n    </core-navbar-buttons>\n</ion-header>\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshSubmission($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <addon-mod-assign-submission [courseId]=\"courseId\" [moduleId]=\"moduleId\" [submitId]=\"submitId\" [blindId]=\"blindId\">\n        </addon-mod-assign-submission>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/assign/assign-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/mod/assign/assign-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonModAssignLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignLazyModule", function() { return AddonModAssignLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/assign/components/components.module.ts");
/* harmony import */ var _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit/edit */ "./src/addons/mod/assign/pages/edit/edit.ts");
/* harmony import */ var _pages_index_index_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/index/index.page */ "./src/addons/mod/assign/pages/index/index.page.ts");
/* harmony import */ var _pages_submission_list_submission_list_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/submission-list/submission-list.page */ "./src/addons/mod/assign/pages/submission-list/submission-list.page.ts");
/* harmony import */ var _pages_submission_review_submission_review__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/submission-review/submission-review */ "./src/addons/mod/assign/pages/submission-review/submission-review.ts");
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












const commonRoutes = [
    {
        path: ':courseId/:cmId',
        component: _pages_index_index_page__WEBPACK_IMPORTED_MODULE_9__["AddonModAssignIndexPage"],
    },
    {
        path: ':courseId/:cmId/edit',
        component: _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__["AddonModAssignEditPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/submission',
        component: _pages_submission_list_submission_list_page__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignSubmissionListPage"],
    },
    {
        path: ':courseId/:cmId/submission/:submitId',
        component: _pages_submission_review_submission_review__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignSubmissionReviewPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/submission',
        component: _pages_submission_list_submission_list_page__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignSubmissionListPage"],
        children: [
            {
                path: ':submitId',
                component: _pages_submission_review_submission_review__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignSubmissionReviewPage"],
                canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet),
];
let AddonModAssignLazyModule = class AddonModAssignLazyModule {
};
AddonModAssignLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["AddonModAssignComponentsModule"],
        ],
        declarations: [
            _pages_index_index_page__WEBPACK_IMPORTED_MODULE_9__["AddonModAssignIndexPage"],
            _pages_submission_list_submission_list_page__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignSubmissionListPage"],
            _pages_submission_review_submission_review__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignSubmissionReviewPage"],
            _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__["AddonModAssignEditPage"],
        ],
    })
], AddonModAssignLazyModule);



/***/ }),

/***/ "./src/addons/mod/assign/pages/edit/edit.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/assign/pages/edit/edit.ts ***!
  \**************************************************/
/*! exports provided: AddonModAssignEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignEditPage", function() { return AddonModAssignEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader-helper */ "./src/core/features/fileuploader/services/fileuploader-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/assign */ "./src/addons/mod/assign/services/assign.ts");
/* harmony import */ var _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/assign-helper */ "./src/addons/mod/assign/services/assign-helper.ts");
/* harmony import */ var _services_assign_offline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/assign-offline */ "./src/addons/mod/assign/services/assign-offline.ts");
/* harmony import */ var _services_assign_sync__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/assign-sync */ "./src/addons/mod/assign/services/assign-sync.ts");
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
 * Page that allows adding or editing an assigment submission.
 */
let AddonModAssignEditPage = class AddonModAssignEditPage {
    constructor(route) {
        this.route = route;
        this.allowOffline = false; // Whether offline is allowed.
        this.submissionStatementAccepted = false; // Whether submission statement is accepted.
        this.loaded = false; // Whether data has been loaded.
        this.isBlind = false; // Whether blind is used.
        this.saveOffline = false; // Whether to save data in offline.
        this.hasOffline = false; // Whether the assignment has offline data.
        this.isDestroyed = false; // Whether the component has been destroyed.
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.userId = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteUserId(); // Right now we can only edit current user's submissions.
        this.editText = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_assign.editsubmission');
        this.title = this.editText;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.moduleId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('cmId');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('courseId');
        this.isBlind = !!_services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('blindId');
        this.fetchAssignment().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave) {
                return true;
            }
            // Check if data has changed.
            const changed = yield this.hasDataChanged();
            if (changed) {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.confirmcanceledit'));
            }
            // Nothing has changed or user confirmed to leave. Clear temporary data from plugins.
            _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].clearSubmissionPluginTmpData(this.assign, this.userSubmission, this.getInputData());
            _singletons_form__WEBPACK_IMPORTED_MODULE_9__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Fetch assignment data.
     *
     * @return Promise resolved when done.
     */
    fetchAssignment() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteUserId();
            try {
                // Get assignment data.
                this.assign = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getAssignment(this.courseId, this.moduleId);
                this.title = this.assign.name || this.title;
                if (!this.isDestroyed) {
                    // Block the assignment.
                    _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].blockOperation(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].COMPONENT, this.assign.id);
                }
                // Wait for sync to be over (if any).
                yield _services_assign_sync__WEBPACK_IMPORTED_MODULE_15__["AddonModAssignSync"].waitForSync(this.assign.id);
                // Get submission status. Ignore cache to get the latest data.
                const options = {
                    userId: this.userId,
                    isBlind: this.isBlind,
                    cmId: this.assign.cmid,
                    filter: false,
                    readingStrategy: 2 /* ONLY_NETWORK */,
                };
                let submissionStatus;
                try {
                    submissionStatus = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionStatus(this.assign.id, options);
                    this.userSubmission =
                        _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionObjectFromAttempt(this.assign, submissionStatus.lastattempt);
                }
                catch (error) {
                    // Cannot connect. Get cached data.
                    options.filter = true;
                    options.readingStrategy = 1 /* PREFER_CACHE */;
                    submissionStatus = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionStatus(this.assign.id, options);
                    this.userSubmission =
                        _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionObjectFromAttempt(this.assign, submissionStatus.lastattempt);
                    // Check if the user can edit it in offline.
                    const canEditOffline = yield _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].canEditSubmissionOffline(this.assign, this.userSubmission);
                    if (!canEditOffline) {
                        // Submission cannot be edited in offline, reject.
                        this.allowOffline = false;
                        throw error;
                    }
                }
                if (!((_a = submissionStatus.lastattempt) === null || _a === void 0 ? void 0 : _a.canedit)) {
                    // Can't edit. Reject.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.nopermissions', { $a: this.editText }));
                }
                this.allowOffline = true; // If offline isn't allowed we shouldn't have reached this point.
                // Only show submission statement if we are editing our own submission.
                if (this.assign.requiresubmissionstatement && !this.assign.submissiondrafts && this.userId == currentUserId) {
                    this.submissionStatement = this.assign.submissionstatement;
                }
                else {
                    this.submissionStatement = undefined;
                }
                try {
                    // Check if there's any offline data for this submission.
                    const offlineData = yield _services_assign_offline__WEBPACK_IMPORTED_MODULE_14__["AddonModAssignOffline"].getSubmission(this.assign.id, this.userId);
                    this.hasOffline = (offlineData === null || offlineData === void 0 ? void 0 : offlineData.plugindata) && Object.keys(offlineData.plugindata).length > 0;
                }
                catch (_b) {
                    // No offline data found.
                    this.hasOffline = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting assigment data.');
                // Leave the player.
                this.leaveWithoutCheck();
            }
        });
    }
    /**
     * Get the input data.
     *
     * @return Input data.
     */
    getInputData() {
        return _singletons_form__WEBPACK_IMPORTED_MODULE_9__["CoreForms"].getDataFromForm(document.forms['addon-mod_assign-edit-form']);
    }
    /**
     * Check if data has changed.
     *
     * @return Promise resolved with boolean: whether data has changed.
     */
    hasDataChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Usually the hasSubmissionDataChanged call will be resolved inmediately, causing the modal to be shown just an instant.
            // We'll wait a bit before showing it to prevent this "blink".
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            const data = this.getInputData();
            return _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].hasSubmissionDataChanged(this.assign, this.userSubmission, data).finally(() => {
                modal.dismiss();
            });
        });
    }
    /**
     * Leave the view without checking for changes.
     */
    leaveWithoutCheck() {
        this.forceLeave = true;
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
    }
    /**
     * Get data to submit based on the input data.
     *
     * @param inputData The input data.
     * @return Promise resolved with the data to submit.
     */
    prepareSubmissionData(inputData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If there's offline data, always save it in offline.
            this.saveOffline = this.hasOffline;
            try {
                return yield _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].prepareSubmissionPluginData(this.assign, this.userSubmission, inputData, this.hasOffline);
            }
            catch (error) {
                if (this.allowOffline && !this.saveOffline) {
                    // Cannot submit in online, prepare for offline usage.
                    this.saveOffline = true;
                    return yield _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].prepareSubmissionPluginData(this.assign, this.userSubmission, inputData, true);
                }
                throw error;
            }
        });
    }
    /**
     * Save the submission.
     */
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if data has changed.
            const changed = yield this.hasDataChanged();
            if (!changed) {
                // Nothing to save, just go back.
                this.leaveWithoutCheck();
                return;
            }
            try {
                yield this.saveSubmission();
                this.leaveWithoutCheck();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error saving submission.');
            }
        });
    }
    /**
     * Save the submission.
     *
     * @return Promise resolved when done.
     */
    saveSubmission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputData = this.getInputData();
            if (this.submissionStatement && (!inputData.submissionstatement || inputData.submissionstatement === 'false')) {
                throw _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_assign.acceptsubmissionstatement');
            }
            let modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            let size = -1;
            // Get size to ask for confirmation.
            try {
                size = yield _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].getSubmissionSizeForEdit(this.assign, this.userSubmission, inputData);
            }
            catch (error) {
                // Error calculating size, return -1.
                size = -1;
            }
            modal.dismiss();
            try {
                // Confirm action.
                yield _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploaderHelper"].confirmUploadFile(size, true, this.allowOffline);
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                const pluginData = yield this.prepareSubmissionData(inputData);
                if (!Object.keys(pluginData).length) {
                    // Nothing to save.
                    return;
                }
                let sent;
                if (this.saveOffline) {
                    // Save submission in offline.
                    sent = false;
                    yield _services_assign_offline__WEBPACK_IMPORTED_MODULE_14__["AddonModAssignOffline"].saveSubmission(this.assign.id, this.courseId, pluginData, this.userSubmission.timemodified, !this.assign.submissiondrafts, this.userId);
                }
                else {
                    // Try to send it to server.
                    sent = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].saveSubmission(this.assign.id, this.courseId, pluginData, this.allowOffline, this.userSubmission.timemodified, !!this.assign.submissiondrafts, this.userId);
                }
                // Clear temporary data from plugins.
                _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].clearSubmissionPluginTmpData(this.assign, this.userSubmission, inputData);
                if (sent) {
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'assign' });
                }
                // Submission saved, trigger events.
                _singletons_form__WEBPACK_IMPORTED_MODULE_9__["CoreForms"].triggerFormSubmittedEvent(this.formElement, sent, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].SUBMISSION_SAVED_EVENT, {
                    assignmentId: this.assign.id,
                    submissionId: this.userSubmission.id,
                    userId: this.userId,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                if (!this.assign.submissiondrafts) {
                    // No drafts allowed, so it was submitted. Trigger event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].SUBMITTED_FOR_GRADING_EVENT, {
                        assignmentId: this.assign.id,
                        submissionId: this.userSubmission.id,
                        userId: this.userId,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                }
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
        this.isDestroyed = true;
        // Unblock the assignment.
        if (this.assign) {
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].unblockOperation(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].COMPONENT, this.assign.id);
        }
    }
};
AddonModAssignEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddonModAssignEditPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editSubmissionForm',] }]
};
AddonModAssignEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-assign-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/edit/edit.html")).default,
    })
], AddonModAssignEditPage);



/***/ }),

/***/ "./src/addons/mod/assign/pages/index/index.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/assign/pages/index/index.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonModAssignIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignIndexPage", function() { return AddonModAssignIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/assign/components/index/index.ts");
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
 * Page that displays an assign.
 */
let AddonModAssignIndexPage = class AddonModAssignIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModAssignIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_3__["AddonModAssignIndexComponent"],] }]
};
AddonModAssignIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-assign-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/index/index.html")).default,
    })
], AddonModAssignIndexPage);



/***/ }),

/***/ "./src/addons/mod/assign/pages/submission-list/submission-list.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/addons/mod/assign/pages/submission-list/submission-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AddonModAssignSubmissionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignSubmissionListPage", function() { return AddonModAssignSubmissionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/assign */ "./src/addons/mod/assign/services/assign.ts");
/* harmony import */ var _services_assign_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/assign-helper */ "./src/addons/mod/assign/services/assign-helper.ts");
/* harmony import */ var _services_assign_offline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/assign-offline */ "./src/addons/mod/assign/services/assign-offline.ts");
/* harmony import */ var _services_assign_sync__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/assign-sync */ "./src/addons/mod/assign/services/assign-sync.ts");
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
var AddonModAssignSubmissionListPage_1;















/**
 * Page that displays a list of submissions of an assignment.
 */
let AddonModAssignSubmissionListPage = AddonModAssignSubmissionListPage_1 = class AddonModAssignSubmissionListPage {
    constructor() {
        this.title = ''; // Title to display.
        this.loaded = false; // Whether data has been loaded.
        this.haveAllParticipants = true; // Whether all participants have been loaded.
        this.groupId = 0; // Group ID to show.
        this.groupInfo = {
            groups: [],
            separateGroups: false,
            visibleGroups: false,
            defaultGroupId: 0,
        };
        this.submissionsData = {
            canviewsubmissions: false,
        };
        this.submissions = new AddonModAssignSubmissionListManager(AddonModAssignSubmissionListPage_1);
        // Update data if some grade changes.
        this.gradedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].on(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignProvider"].GRADED_EVENT, (data) => {
            if (this.loaded &&
                this.assign &&
                data.assignmentId == this.assign.id &&
                data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteUserId()) {
                // Grade changed, refresh the data.
                this.loaded = false;
                this.refreshAllData(true).finally(() => {
                    this.loaded = true;
                });
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
        // Refresh data if this assign is synchronized.
        const events = [_services_assign_sync__WEBPACK_IMPORTED_MODULE_14__["AddonModAssignSyncProvider"].AUTO_SYNCED, _services_assign_sync__WEBPACK_IMPORTED_MODULE_14__["AddonModAssignSyncProvider"].MANUAL_SYNCED];
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].onMultiple(events, (data) => {
            if (!this.loaded || ('context' in data && data.context == 'submission-list')) {
                return;
            }
            this.loaded = false;
            this.refreshAllData(false).finally(() => {
                this.loaded = true;
            });
        }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Component being initialized.
     */
    ngAfterViewInit() {
        this.moduleId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('cmId');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('courseId');
        this.groupId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('groupId') || 0;
        this.selectedStatus = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('status');
        if (this.selectedStatus) {
            if (this.selectedStatus == _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignProvider"].NEED_GRADING) {
                this.title = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_assign.numberofsubmissionsneedgrading');
            }
            else {
                this.title = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_assign.submissionstatus_' + this.selectedStatus);
            }
        }
        else {
            this.title = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_assign.numberofparticipants');
        }
        this.fetchAssignment(true).finally(() => {
            this.loaded = true;
            this.submissions.start(this.splitView);
        });
    }
    /**
     * Fetch assignment data.
     *
     * @param sync Whether to try to synchronize data.
     * @return Promise resolved when done.
     */
    fetchAssignment(sync = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Get assignment data.
                this.assign = yield _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].getAssignment(this.courseId, this.moduleId);
                this.title = this.assign.name || this.title;
                if (sync) {
                    try {
                        // Try to synchronize data.
                        const result = yield _services_assign_sync__WEBPACK_IMPORTED_MODULE_14__["AddonModAssignSync"].syncAssign(this.assign.id);
                        if (result && result.updated) {
                            _singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].trigger(_services_assign_sync__WEBPACK_IMPORTED_MODULE_14__["AddonModAssignSyncProvider"].MANUAL_SYNCED, {
                                assignId: this.assign.id,
                                warnings: result.warnings,
                                gradesBlocked: result.gradesBlocked,
                                context: 'submission-list',
                            }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                        }
                    }
                    catch (error) {
                        // Ignore errors, probably user is offline or sync is blocked.
                    }
                }
                // Get assignment submissions.
                this.submissionsData = yield _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].getSubmissions(this.assign.id, { cmId: this.assign.cmid });
                if (!this.submissionsData.canviewsubmissions) {
                    // User shouldn't be able to reach here.
                    throw new Error('Cannot view submissions.');
                }
                // Check if groupmode is enabled to avoid showing wrong numbers.
                this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].getActivityGroupInfo(this.assign.cmid, false);
                yield this.setGroup(_services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].validateGroupId(this.groupId, this.groupInfo));
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting assigment data.');
            }
        });
    }
    /**
     * Set group to see the summary.
     *
     * @param groupId Group ID.
     * @return Resolved when done.
     */
    setGroup(groupId) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.groupId = groupId;
            this.haveAllParticipants = true;
            if (!((_a = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.wsAvailable('mod_assign_list_participants'))) {
                // Submissions are not displayed in Moodle 3.1 without the local plugin, see MOBILE-2968.
                this.haveAllParticipants = false;
                this.submissions.resetItems();
                return;
            }
            // Fetch submissions and grades.
            const submissions = yield _services_assign_helper__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignHelper"].getSubmissionsUserData(this.assign, this.submissionsData.submissions, this.groupId);
            // Get assignment grades only if workflow is not enabled to check grading date.
            const grades = !this.assign.markingworkflow
                ? yield _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].getAssignmentGrades(this.assign.id, { cmId: this.assign.cmid })
                : [];
            // Filter the submissions to get only the ones with the right status and add some extra data.
            const getNeedGrading = this.selectedStatus == _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignProvider"].NEED_GRADING;
            const searchStatus = getNeedGrading ? _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignProvider"].SUBMISSION_STATUS_SUBMITTED : this.selectedStatus;
            const promises = [];
            const showSubmissions = [];
            submissions.forEach((submission) => {
                if (!searchStatus || searchStatus == submission.status) {
                    promises.push(_services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_services_assign_offline__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignOffline"].getSubmissionGrade(this.assign.id, submission.userid)).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (getNeedGrading) {
                            // Only show the submissions that need to be graded.
                            const add = yield _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].needsSubmissionToBeGraded(submission, this.assign.id);
                            if (!add) {
                                return;
                            }
                        }
                        // Load offline grades.
                        const notSynced = !!data && submission.timemodified < data.timemodified;
                        if (submission.gradingstatus == 'graded' && !this.assign.markingworkflow) {
                            // Get the last grade of the submission.
                            const grade = grades
                                .filter((grade) => grade.userid == submission.userid)
                                .reduce((a, b) => (a && a.timemodified > b.timemodified ? a : b), undefined);
                            if (grade && grade.timemodified < submission.timemodified) {
                                submission.gradingstatus = _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignProvider"].GRADED_FOLLOWUP_SUBMIT;
                            }
                        }
                        submission.statusColor = _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].getSubmissionStatusColor(submission.status);
                        submission.gradingColor = _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].getSubmissionGradingStatusColor(submission.gradingstatus);
                        // Show submission status if not submitted for grading.
                        if (submission.statusColor != 'success' || !submission.gradingstatus) {
                            submission.statusTranslated = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_assign.submissionstatus_' + submission.status);
                        }
                        else {
                            submission.statusTranslated = '';
                        }
                        if (notSynced) {
                            submission.gradingStatusTranslationId = 'addon.mod_assign.gradenotsynced';
                            submission.gradingColor = '';
                        }
                        else if (submission.statusColor != 'danger' || submission.gradingColor != 'danger') {
                            // Show grading status if one of the statuses is not done.
                            submission.gradingStatusTranslationId = _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].getSubmissionGradingStatusTranslationId(submission.gradingstatus);
                        }
                        else {
                            submission.gradingStatusTranslationId = '';
                        }
                        showSubmissions.push(submission);
                        return;
                    })));
                }
            });
            yield Promise.all(promises);
            this.submissions.setItems(showSubmissions);
        });
    }
    /**
     * Refresh all the data.
     *
     * @param sync Whether to try to synchronize data.
     * @return Promise resolved when done.
     */
    refreshAllData(sync) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateAssignmentData(this.courseId));
            if (this.assign) {
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateAllSubmissionData(this.assign.id));
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateAssignmentUserMappingsData(this.assign.id));
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateAssignmentGradesData(this.assign.id));
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateListParticipantsData(this.assign.id));
            }
            try {
                yield Promise.all(promises);
            }
            finally {
                this.fetchAssignment(sync);
            }
        });
    }
    /**
     * Refresh the list.
     *
     * @param refresher Refresher.
     */
    refreshList(refresher) {
        this.refreshAllData(true).finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.gradedObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.syncObserver) === null || _b === void 0 ? void 0 : _b.off();
        this.submissions.destroy();
    }
};
AddonModAssignSubmissionListPage.ctorParameters = () => [];
AddonModAssignSubmissionListPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"],] }]
};
AddonModAssignSubmissionListPage = AddonModAssignSubmissionListPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-assign-submission-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./submission-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-list/submission-list.html")).default,
    })
], AddonModAssignSubmissionListPage);

/**
 * Helper class to manage submissions.
 */
class AddonModAssignSubmissionListManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_2__["CorePageItemsListManager"] {
    constructor(pageComponent) {
        super(pageComponent);
    }
    /**
     * @inheritdoc
     */
    getItemPath(submission) {
        return String(submission.submitid);
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(submission) {
        return {
            blindId: submission.blindid,
        };
    }
}


/***/ }),

/***/ "./src/addons/mod/assign/pages/submission-review/submission-review.ts":
/*!****************************************************************************!*\
  !*** ./src/addons/mod/assign/pages/submission-review/submission-review.ts ***!
  \****************************************************************************/
/*! exports provided: AddonModAssignSubmissionReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignSubmissionReviewPage", function() { return AddonModAssignSubmissionReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _components_submission_submission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/submission/submission */ "./src/addons/mod/assign/components/submission/submission.ts");
/* harmony import */ var _services_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/assign */ "./src/addons/mod/assign/services/assign.ts");
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
 * Page that displays a submission.
 */
let AddonModAssignSubmissionReviewPage = class AddonModAssignSubmissionReviewPage {
    constructor(route) {
        this.route = route;
        this.title = ''; // Title to display.
        this.loaded = false; // Whether data has been loaded.
        this.canSaveGrades = false; // Whether the user can save grades.
        this.blindMarking = false; // Whether it uses blind marking.
        this.forceLeave = false; // To allow leaving the page without checking for changes.
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.moduleId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('courseId');
            this.submitId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('submitId') || 0;
            this.blindId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('blindId', { params });
            this.fetchSubmission().finally(() => {
                this.loaded = true;
            });
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.submissionComponent || this.forceLeave) {
                return true;
            }
            // Check if data has changed.
            return this.submissionComponent.canLeave();
        });
    }
    /**
     * User entered the page.
     */
    ionViewDidEnter() {
        var _a;
        (_a = this.submissionComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidEnter();
    }
    /**
     * User left the page.
     */
    ionViewDidLeave() {
        var _a;
        (_a = this.submissionComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidLeave();
    }
    /**
     * Get the submission.
     *
     * @return Promise resolved when done.
     */
    fetchSubmission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.assign = yield _services_assign__WEBPACK_IMPORTED_MODULE_8__["AddonModAssign"].getAssignment(this.courseId, this.moduleId);
            this.title = this.assign.name;
            this.blindMarking = !!this.assign.blindmarking && !this.assign.revealidentities;
            const gradeInfo = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getModuleBasicGradeInfo(this.moduleId);
            if (!gradeInfo) {
                return;
            }
            // Grades can be saved if simple grading.
            if (gradeInfo.advancedgrading && gradeInfo.advancedgrading[0] &&
                typeof gradeInfo.advancedgrading[0].method != 'undefined') {
                const method = gradeInfo.advancedgrading[0].method || 'simple';
                this.canSaveGrades = method == 'simple';
            }
            else {
                this.canSaveGrades = true;
            }
        });
    }
    /**
     * Refresh all the data.
     *
     * @return Promise resolved when done.
     */
    refreshAllData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_8__["AddonModAssign"].invalidateAssignmentData(this.courseId));
            if (this.assign) {
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_8__["AddonModAssign"].invalidateSubmissionData(this.assign.id));
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_8__["AddonModAssign"].invalidateAssignmentUserMappingsData(this.assign.id));
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_8__["AddonModAssign"].invalidateSubmissionStatusData(this.assign.id, this.submitId, undefined, this.blindMarking));
            }
            try {
                yield Promise.all(promises);
            }
            finally {
                this.submissionComponent && this.submissionComponent.invalidateAndRefresh(true);
                yield this.fetchSubmission();
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshSubmission(refresher) {
        this.refreshAllData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Submit a grade and feedback.
     */
    submitGrade() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.submissionComponent) {
                return;
            }
            try {
                yield this.submissionComponent.submitGrade();
                // Grade submitted, leave the view if not in tablet.
                if (!_services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet) {
                    this.forceLeave = true;
                    _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
};
AddonModAssignSubmissionReviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddonModAssignSubmissionReviewPage.propDecorators = {
    submissionComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_submission_submission__WEBPACK_IMPORTED_MODULE_7__["AddonModAssignSubmissionComponent"],] }]
};
AddonModAssignSubmissionReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-assign-submission-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./submission-review.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-review/submission-review.html")).default,
    })
], AddonModAssignSubmissionReviewPage);



/***/ })

}]);
//# sourceMappingURL=assign-lazy-module.js.map