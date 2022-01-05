(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-user-user-course-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/participants/participants.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/participants/participants.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-navbar-buttons slot=\"end\">\n    <ion-button [hidden]=\"!searchEnabled\" (click)=\"toggleSearch()\" [attr.aria-label]=\"'core.search' | translate\">\n        <ion-icon name=\"fas-search\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n    </ion-button>\n</core-navbar-buttons>\n\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!participants.loaded || searchInProgress\"\n            (ionRefresh)=\"refreshParticipants($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n\n        <core-search-box *ngIf=\"showSearchBox\"\n            [disabled]=\"searchInProgress\" [spellcheck]=\"false\" [autoFocus]=\"true\" [lengthCheck]=\"1\"\n            autocorrect=\"off\" searchArea=\"CoreUserParticipants\"\n            (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\">\n        </core-search-box>\n\n        <core-loading [hideUntil]=\"participants.loaded\">\n            <core-empty-box *ngIf=\"participants.empty && !searchInProgress && !searchQuery\" icon=\"far-user\"\n                [message]=\"'core.user.noparticipants' | translate\">\n            </core-empty-box>\n\n            <core-empty-box *ngIf=\"participants.empty && !searchInProgress && searchQuery\" icon=\"fas-search\"\n                [message]=\"'core.noresults' | translate\">\n            </core-empty-box>\n\n            <ion-list *ngIf=\"!participants.empty\">\n                <ion-item *ngFor=\"let participant of participants.items\"\n                    class=\"ion-text-wrap\" [attr.aria-current]=\"participants.getItemAriaCurrent(participant)\"\n                    [attr.aria-label]=\"participant.fullname\" (click)=\"participants.select(participant)\" button detail=\"true\">\n\n                    <core-user-avatar [user]=\"participant\" [linkProfile]=\"false\" [checkOnline]=\"true\" slot=\"start\">\n                    </core-user-avatar>\n\n                    <ion-label>\n                        <ng-container *ngIf=\"!searchQuery\">\n                            <p class=\"item-heading\">{{ participant.fullname }}</p>\n                            <p *ngIf=\"participant.lastcourseaccess\">\n                                <strong>{{ 'core.lastaccess' | translate }}: </strong>\n                                {{ participant.lastcourseaccess | coreTimeAgo }}\n                            </p>\n                            <p *ngIf=\"!participant.lastcourseaccess && participant.lastaccess\">\n                                <strong>{{ 'core.lastaccess' | translate }}: </strong>\n                                {{ participant.lastaccess | coreTimeAgo }}\n                            </p>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"searchQuery\">\n                            <p class=\"item-heading\">\n                                <core-format-text [text]=\"participant.fullname\" [highlight]=\"searchQuery\" [filter]=\"false\">\n                                </core-format-text>\n                            </p>\n                        </ng-container>\n                    </ion-label>\n\n                </ion-item>\n            </ion-list>\n            <core-infinite-loading [enabled]=\"participants.loaded && !participants.completed\"\n                (action)=\"fetchMoreParticipants($event)\" [error]=\"fetchMoreParticipantsFailed\">\n            </core-infinite-loading>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/user/pages/participants/participants.page.ts":
/*!************************************************************************!*\
  !*** ./src/core/features/user/pages/participants/participants.page.ts ***!
  \************************************************************************/
/*! exports provided: CoreUserParticipantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserParticipantsPage", function() { return CoreUserParticipantsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
var CoreUserParticipantsPage_1;










/**
 * Page that displays the list of course participants.
 */
let CoreUserParticipantsPage = CoreUserParticipantsPage_1 = class CoreUserParticipantsPage {
    constructor() {
        this.searchQuery = null;
        this.searchInProgress = false;
        this.searchEnabled = false;
        this.showSearchBox = false;
        this.fetchMoreParticipantsFailed = false;
        const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('courseId');
        this.participants = new CoreUserParticipantsManager(CoreUserParticipantsPage_1, courseId);
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.searchEnabled = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].canSearchParticipantsInSite();
        });
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchInitialParticipants();
            this.participants.start(this.splitView);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.participants.destroy();
    }
    /**
     * Show or hide search box.
     */
    toggleSearch() {
        this.showSearchBox = !this.showSearchBox;
        if (this.showSearchBox) {
            // Make search bar visible.
            this.splitView.menuContent.scrollToTop();
        }
        else {
            this.clearSearch();
        }
    }
    /**
     * Clear search.
     */
    clearSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.searchQuery === null) {
                // Nothing to clear.
                return;
            }
            this.searchQuery = null;
            this.searchInProgress = false;
            this.participants.resetItems();
            yield this.fetchInitialParticipants();
        });
    }
    /**
     * Start a new search.
     *
     * @param query Text to search for.
     */
    search(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].closeKeyboard();
            this.searchInProgress = true;
            this.searchQuery = query;
            this.participants.resetItems();
            yield this.fetchInitialParticipants();
            this.searchInProgress = false;
        });
    }
    /**
     * Refresh participants.
     *
     * @param refresher Refresher.
     */
    refreshParticipants(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].invalidateParticipantsList(this.participants.courseId));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.fetchParticipants());
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Load a new batch of participants.
     *
     * @param complete Completion callback.
     */
    fetchMoreParticipants(complete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchParticipants(this.participants.items);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading more participants');
                this.fetchMoreParticipantsFailed = true;
            }
            complete();
        });
    }
    /**
     * Obtain the initial batch of participants.
     */
    fetchInitialParticipants() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchParticipants();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading participants');
                this.participants.setItems([]);
            }
        });
    }
    /**
     * Update the list of participants.
     *
     * @param loadedParticipants Participants list to continue loading from.
     */
    fetchParticipants(loadedParticipants = []) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.searchQuery) {
                const { participants, canLoadMore } = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].searchParticipants(this.participants.courseId, this.searchQuery, true, Math.ceil(loadedParticipants.length / _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT), _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT);
                this.participants.setItems(loadedParticipants.concat(participants), canLoadMore);
            }
            else {
                const { participants, canLoadMore } = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getParticipants(this.participants.courseId, loadedParticipants.length);
                this.participants.setItems(loadedParticipants.concat(participants), canLoadMore);
            }
            this.fetchMoreParticipantsFailed = false;
        });
    }
};
CoreUserParticipantsPage.ctorParameters = () => [];
CoreUserParticipantsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_7__["CoreSplitViewComponent"],] }]
};
CoreUserParticipantsPage = CoreUserParticipantsPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-user-participants',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./participants.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/participants/participants.html")).default,
    })
], CoreUserParticipantsPage);

/**
 * Helper to manage the list of participants.
 */
class CoreUserParticipantsManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_5__["CorePageItemsListManager"] {
    constructor(pageComponent, courseId) {
        super(pageComponent);
        this.courseId = courseId;
    }
    /**
     * @inheritdoc
     */
    select(participant) {
        const _super = Object.create(null, {
            select: { get: () => super.select }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isMobile) {
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigateToSitePath('/user/profile', { params: { userId: participant.id, courseId: this.courseId } });
                return;
            }
            return _super.select.call(this, participant);
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(participant) {
        return participant.id.toString();
    }
    /**
     * @inheritdoc
     */
    logActivity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].logParticipantsView(this.courseId);
        });
    }
}


/***/ }),

/***/ "./src/core/features/user/user-course-lazy.module.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/user/user-course-lazy.module.ts ***!
  \***********************************************************/
/*! exports provided: CoreUserCourseLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserCourseLazyModule", function() { return CoreUserCourseLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _pages_participants_participants_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/participants/participants.page */ "./src/core/features/user/pages/participants/participants.page.ts");
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
        component: _pages_participants_participants_page__WEBPACK_IMPORTED_MODULE_5__["CoreUserParticipantsPage"],
        children: [
            {
                path: ':userId',
                loadChildren: () => __webpack_require__.e(/*! import() | features-user-pages-profile-profile-module */ "pages-profile-profile-module").then(__webpack_require__.bind(null, /*! @features/user/pages/profile/profile.module */ "./src/core/features/user/pages/profile/profile.module.ts")).then(m => m.CoreUserProfilePageModule),
            },
        ],
    },
];
let CoreUserCourseLazyModule = class CoreUserCourseLazyModule {
};
CoreUserCourseLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreSearchComponentsModule"],
        ],
        declarations: [
            _pages_participants_participants_page__WEBPACK_IMPORTED_MODULE_5__["CoreUserParticipantsPage"],
        ],
    })
], CoreUserCourseLazyModule);



/***/ })

}]);
//# sourceMappingURL=features-user-user-course-lazy-module.js.map