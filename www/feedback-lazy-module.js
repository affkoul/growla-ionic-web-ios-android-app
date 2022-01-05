(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!activityComponent?.loaded\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-feedback-index [module]=\"module\" [courseId]=\"courseId\" [group]=\"selectedGroup\" [tab]=\"selectedTab\"\n        (dataRetrieved)=\"updateData($event)\"></addon-mod-feedback-index>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/respondents/respondents.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/respondents/respondents.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.mod_feedback.responses' |translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshFeedback($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"loaded\">\n            <ion-list class=\"ion-no-margin\">\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"groupInfo && (groupInfo.separateGroups || groupInfo.visibleGroups)\">\n                    <ion-label id=\"addon-feedback-groupslabel\">\n                        <ng-container *ngIf=\"groupInfo.separateGroups\">{{'core.groupsseparate' | translate }}</ng-container>\n                        <ng-container *ngIf=\"groupInfo.visibleGroups\">{{'core.groupsvisible' | translate }}</ng-container>\n                    </ion-label>\n                    <ion-select [(ngModel)]=\"selectedGroup\" (ionChange)=\"loadAttempts(selectedGroup)\"\n                        aria-labelledby=\"addon-feedback-groupslabel\" interface=\"action-sheet\"\n                        [interfaceOptions]=\"{header: 'core.group' | translate}\">\n                        <ion-select-option *ngFor=\"let groupOpt of groupInfo.groups\" [value]=\"groupOpt.id\">\n                            {{groupOpt.name}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ng-container *ngIf=\"responses.responses.total > 0\">\n                    <ion-item-divider>\n                        <ion-label>\n                            <h2>{{ 'addon.mod_feedback.non_anonymous_entries' | translate : {$a: responses.responses.total } }}</h2>\n                        </ion-label>\n                    </ion-item-divider>\n                    <ion-item *ngFor=\"let attempt of responses.responses.attempts\" class=\"ion-text-wrap\" button detail=\"true\"\n                        (click)=\"responses.select(attempt)\" [attr.aria-current]=\"responses.getItemAriaCurrent(attempt)\">\n                        <core-user-avatar [user]=\"attempt\" slot=\"start\"></core-user-avatar>\n                        <ion-label>\n                            <p class=\"item-heading\">{{ attempt.fullname }}</p>\n                            <p *ngIf=\"attempt.timemodified\">{{attempt.timemodified * 1000 | coreFormatDate }}</p>\n                        </ion-label>\n                    </ion-item>\n\n                    <!-- Button and spinner to show more attempts. -->\n                    <ion-button *ngIf=\"responses.responses.canLoadMore && !loadingMore\" class=\"ion-margin\" expand=\"block\"\n                        (click)=\"loadAttempts()\">\n                        {{ 'core.loadmore' | translate }}\n                    </ion-button>\n                    <ion-item *ngIf=\"responses.responses.canLoadMore && loadingMore\" class=\"ion-text-center\">\n                        <ion-label><ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner></ion-label>\n                    </ion-item>\n                </ng-container>\n\n                <ng-container *ngIf=\"responses.anonResponses.total > 0\">\n                    <ion-item-divider>\n                        <ion-label>\n                            <h2>{{ 'addon.mod_feedback.anonymous_entries' |translate : {$a: responses.anonResponses.total } }}</h2>\n                        </ion-label>\n                    </ion-item-divider>\n                    <ion-item *ngFor=\"let attempt of responses.anonResponses.attempts\" class=\"ion-text-wrap\" button detail=\"true\"\n                        (click)=\"responses.select(attempt)\" [attr.aria-current]=\"responses.getItemAriaCurrent(attempt)\">\n                        <ion-label>\n                            <h2>{{ 'addon.mod_feedback.response_nr' |translate }}: {{attempt.number}}</h2>\n                        </ion-label>\n                    </ion-item>\n\n                    <!-- Button and spinner to show more attempts. -->\n                    <ion-button *ngIf=\"responses.anonResponses.canLoadMore && !loadingMore\" class=\"ion-margin\" expand=\"block\"\n                        (click)=\"loadAttempts()\">\n                        {{ 'core.loadmore' | translate }}\n                    </ion-button>\n                    <ion-item *ngIf=\"responses.anonResponses.canLoadMore && loadingMore\" class=\"ion-text-center\">\n                        <ion-label><ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner></ion-label>\n                    </ion-item>\n                </ng-container>\n            </ion-list>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/feedback/feedback-lazy.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/feedback/feedback-lazy.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonModFeedbackLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackLazyModule", function() { return AddonModFeedbackLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/feedback/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/feedback/pages/index/index.ts");
/* harmony import */ var _pages_respondents_respondents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/respondents/respondents */ "./src/addons/mod/feedback/pages/respondents/respondents.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
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
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModFeedbackIndexPage"],
    },
    {
        path: ':courseId/:cmId/form',
        loadChildren: () => Promise.all(/*! import() | pages-form-form-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-form-form-module")]).then(__webpack_require__.bind(null, /*! ./pages/form/form.module */ "./src/addons/mod/feedback/pages/form/form.module.ts")).then(m => m.AddonModFeedbackFormPageModule),
    },
    {
        path: ':courseId/:cmId/nonrespondents',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-nonrespondents-nonrespondents-module */ "pages-nonrespondents-nonrespondents-module").then(__webpack_require__.bind(null, /*! ./pages/nonrespondents/nonrespondents.module */ "./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.module.ts"))
            .then(m => m.AddonModFeedbackNonRespondentsPageModule),
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/respondents',
        component: _pages_respondents_respondents__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackRespondentsPage"],
    },
    {
        path: ':courseId/:cmId/respondents/attempt/:attemptId',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-attempt-attempt-module */ "pages-attempt-attempt-module").then(__webpack_require__.bind(null, /*! ./pages/attempt/attempt.module */ "./src/addons/mod/feedback/pages/attempt/attempt.module.ts")).then(m => m.AddonModFeedbackAttemptPageModule),
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/respondents',
        component: _pages_respondents_respondents__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackRespondentsPage"],
        children: [
            {
                path: 'attempt/:attemptId',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-attempt-attempt-module */ "pages-attempt-attempt-module").then(__webpack_require__.bind(null, /*! ./pages/attempt/attempt.module */ "./src/addons/mod/feedback/pages/attempt/attempt.module.ts")).then(m => m.AddonModFeedbackAttemptPageModule),
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet),
];
let AddonModFeedbackLazyModule = class AddonModFeedbackLazyModule {
};
AddonModFeedbackLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModFeedbackIndexPage"],
            _pages_respondents_respondents__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackRespondentsPage"],
        ],
    })
], AddonModFeedbackLazyModule);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/index/index.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/feedback/pages/index/index.ts ***!
  \******************************************************/
/*! exports provided: AddonModFeedbackIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackIndexPage", function() { return AddonModFeedbackIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/feedback/components/index/index.ts");
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
 * Page that displays a feedback.
 */
let AddonModFeedbackIndexPage = class AddonModFeedbackIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    /**
     * Component being initialized.
     */
    ngOnInit() {
        super.ngOnInit();
        this.selectedTab = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('tab');
        this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('group');
    }
};
AddonModFeedbackIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackIndexComponent"],] }]
};
AddonModFeedbackIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html")).default,
    })
], AddonModFeedbackIndexPage);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/respondents/respondents.ts":
/*!******************************************************************!*\
  !*** ./src/addons/mod/feedback/pages/respondents/respondents.ts ***!
  \******************************************************************/
/*! exports provided: AddonModFeedbackRespondentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackRespondentsPage", function() { return AddonModFeedbackRespondentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
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
 * Page that displays feedback respondents.
 */
let AddonModFeedbackRespondentsPage = class AddonModFeedbackRespondentsPage {
    constructor(route) {
        this.page = 0;
        this.loaded = false;
        this.loadingMore = false;
        this.responses = new AddonModFeedbackResponsesManager(route.component);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('courseId');
            this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('group') || 0;
            yield this.fetchData();
            this.responses.start(this.splitView);
        });
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param refresh Empty events array first.
     * @return Promise resolved when done.
     */
    fetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.page = 0;
            this.responses.resetItems();
            try {
                this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_9__["AddonModFeedback"].getFeedback(this.courseId, this.cmId);
                this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_5__["CoreGroups"].getActivityGroupInfo(this.cmId);
                this.selectedGroup = _services_groups__WEBPACK_IMPORTED_MODULE_5__["CoreGroups"].validateGroupId(this.selectedGroup, this.groupInfo);
                yield this.loadGroupAttempts(this.selectedGroup);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                if (!refresh) {
                    // Some call failed on first fetch, go back.
                    _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                }
            }
        });
    }
    /**
     * Load Group attempts.
     *
     * @param groupId If defined it will change group if not, it will load more attempts for the same group.
     * @return Resolved with the attempts loaded.
     */
    loadGroupAttempts(groupId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (typeof groupId == 'undefined') {
                this.page++;
                this.loadingMore = true;
            }
            else {
                this.selectedGroup = groupId;
                this.page = 0;
                this.responses.resetItems();
            }
            try {
                const responses = yield _services_feedback_helper__WEBPACK_IMPORTED_MODULE_10__["AddonModFeedbackHelper"].getResponsesAnalysis(this.feedback.id, {
                    groupId: this.selectedGroup,
                    page: this.page,
                    cmId: this.cmId,
                });
                this.responses.setResponses(responses);
            }
            finally {
                this.loadingMore = false;
                this.loaded = true;
            }
        });
    }
    /**
     * Change selected group or load more attempts.
     *
     * @param groupId Group ID selected. If not defined, it will load more attempts.
     */
    loadAttempts(groupId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.loadGroupAttempts(groupId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
        });
    }
    /**
     * Refresh the attempts.
     *
     * @param refresher Refresher.
     */
    refreshFeedback(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_groups__WEBPACK_IMPORTED_MODULE_5__["CoreGroups"].invalidateActivityGroupInfo(this.cmId));
            if (this.feedback) {
                promises.push(_services_feedback__WEBPACK_IMPORTED_MODULE_9__["AddonModFeedback"].invalidateResponsesAnalysisData(this.feedback.id));
            }
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(Promise.all(promises));
                yield this.fetchData(true);
            }
            finally {
                refresher.complete();
            }
        });
    }
};
AddonModFeedbackRespondentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddonModFeedbackRespondentsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__["CoreSplitViewComponent"],] }]
};
AddonModFeedbackRespondentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-respondents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./respondents.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/respondents/respondents.html")).default,
    })
], AddonModFeedbackRespondentsPage);

/**
 * Entries manager.
 */
class AddonModFeedbackResponsesManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_3__["CorePageItemsListManager"] {
    constructor(pageComponent) {
        super(pageComponent);
        this.responses = {
            attempts: [],
            total: 0,
            canLoadMore: false,
        };
        this.anonResponses = {
            attempts: [],
            total: 0,
            canLoadMore: false,
        };
    }
    /**
     * Update responses.
     *
     * @param responses Responses.
     */
    setResponses(responses) {
        this.responses.total = responses.totalattempts;
        this.anonResponses.total = responses.totalanonattempts;
        if (this.anonResponses.attempts.length < responses.totalanonattempts) {
            this.anonResponses.attempts = this.anonResponses.attempts.concat(responses.anonattempts);
        }
        if (this.responses.attempts.length < responses.totalattempts) {
            this.responses.attempts = this.responses.attempts.concat(responses.attempts);
        }
        this.anonResponses.canLoadMore = this.anonResponses.attempts.length < responses.totalanonattempts;
        this.responses.canLoadMore = this.responses.attempts.length < responses.totalattempts;
        this.setItems(this.responses.attempts.concat(this.anonResponses.attempts));
    }
    /**
     * @inheritdoc
     */
    resetItems() {
        super.resetItems();
        this.responses.total = 0;
        this.responses.attempts = [];
        this.anonResponses.total = 0;
        this.anonResponses.attempts = [];
    }
    /**
     * @inheritdoc
     */
    getItemPath(entry) {
        return `attempt/${entry.id}`;
    }
}


/***/ })

}]);
//# sourceMappingURL=feedback-lazy-module.js.map