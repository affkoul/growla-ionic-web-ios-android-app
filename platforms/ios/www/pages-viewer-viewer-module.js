(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-viewer-viewer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <ion-button *ngIf=\"canDeleteComments\" slot=\"end\" fill=\"clear\" (click)=\"toggleDelete()\"\n                [attr.aria-label]=\"'core.toggledelete' | translate\">\n                <ion-icon name=\"fas-pen\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <core-context-menu>\n                <core-context-menu-item [hidden]=\"!(commentsLoaded && !hasOffline)\" [priority]=\"100\"\n                    [content]=\"'core.refresh' | translate\" (action)=\"refreshComments(false)\" [iconAction]=\"refreshIcon\"\n                    [closeOnClick]=\"true\">\n                </core-context-menu-item>\n                <core-context-menu-item [hidden]=\"!(commentsLoaded && hasOffline)\" [priority]=\"100\"\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"refreshComments(true)\" [iconAction]=\"syncIcon\"\n                    [closeOnClick]=\"false\">\n                </core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!commentsLoaded\" (ionRefresh)=\"refreshComments(false, $event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"commentsLoaded\">\n        <core-empty-box *ngIf=\"!comments || !comments.length\" icon=\"fas-comments\"\n            [message]=\"'core.comments.nocomments' | translate\">\n        </core-empty-box>\n\n        <!-- Load previous messages. -->\n        <core-infinite-loading [enabled]=\"canLoadMore\" position=\"top\" (action)=\"loadPrevious($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n\n        <ion-list class=\"addon-messages-discussion-container\">\n            <ng-container *ngFor=\"let comment of comments; index as index; last as last\">\n\n                <p class=\"ion-text-center addon-messages-date\" *ngIf=\"comment.showDate\">\n                    {{ comment.timecreated * 1000 | coreFormatDate: \"strftimedayshort\" }}\n                </p>\n\n                <ion-item class=\"ion-text-wrap addon-message\"\n                    [class.addon-message-mine]=\"comment.userid == currentUserId\"\n                    [class.addon-message-not-mine]=\"comment.userid != currentUserId\"\n                    [class.addon-message-no-user]=\"!comment.showUserData\"\n                    [@coreSlideInOut]=\"comment.userid == currentUserId ? '' : 'fromLeft'\">\n                    <ion-label>\n                        <!-- User data. -->\n                        <h2 class=\"addon-message-user\" *ngIf=\"comment.showUserData\">\n                            <core-user-avatar slot=\"start\" [user]=\"comment\" [linkProfile]=\"false\">\n                            </core-user-avatar>\n                            <div>{{ comment.fullname }}</div>\n                        </h2>\n\n                        <p class=\"addon-message-text\">\n                            <core-format-text [text]=\"comment.content\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\"\n                                [courseId]=\"courseId\">\n                            </core-format-text>\n                        </p>\n                    </ion-label>\n                    <ion-note>\n                        <ng-container *ngIf=\"!comment.deleted\">\n                            {{ comment.timecreated * 1000 | coreFormatDate: 'strftimetime' }}\n                        </ng-container>\n                        <ng-container *ngIf=\"comment.deleted\">\n                            <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon> <span class=\"ion-text-wrap\">\n                                {{ 'core.deletedoffline' | translate }}\n                            </span>\n                        </ng-container>\n                    </ion-note>\n                    <div class=\"tail\" *ngIf=\"comment.showTail\"></div>\n                    <ion-button *ngIf=\"showDelete && !comment.deleted && comment.delete\" slot=\"end\" fill=\"clear\"\n                        [@coreSlideInOut]=\"'fromRight'\" color=\"danger\" (click)=\"deleteComment($event, comment)\"\n                        [attr.aria-label]=\"'core.delete' | translate\" class=\"addon-messages-delete-button\">\n                        <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                    <ion-button *ngIf=\"showDelete && comment.deleted\" slot=\"end\" fill=\"clear\" color=\"danger\"\n                        (click)=\"undoDeleteComment($event, comment)\" [attr.aria-label]=\"'core.restore' | translate\"\n                        class=\"addon-messages-delete-button\">\n                        <ion-icon name=\"fas-undo-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                </ion-item>\n            </ng-container>\n\n            <ion-item\n                *ngIf=\"offlineComment\"\n                class=\"ion-text-wrap addon-message addon-message-mine\"\n            >\n                <ion-label>\n                    <!-- User data. -->\n                    <p class=\"ion-text-center\">\n                        <ion-icon name=\"fas-exclamation-triangle\" aria-hidden=\"true\"></ion-icon>\n                        {{ 'core.thereisdatatosync' | translate:{$a: 'core.comments.comments' | translate | lowercase } }}\n                    </p>\n\n                    <p class=\"addon-message-text\">\n                        <core-format-text [text]=\"offlineComment.content\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\"\n                            [courseId]=\"courseId\">\n                        </core-format-text>\n                    </p>\n                </ion-label>\n                <ion-note>\n                    <ion-icon name=\"fas-clock\" aria-hidden=\"true\"></ion-icon> {{ 'core.notsent' | translate }}\n                </ion-note>\n                <div class=\"tail\"></div>\n                <ion-button *ngIf=\"showDelete\" slot=\"end\" fill=\"clear\"\n                    [@coreSlideInOut]=\"'fromRight'\" color=\"danger\" (click)=\"deleteComment($event, offlineComment)\"\n                    [attr.aria-label]=\"'core.delete' | translate\" class=\"addon-messages-delete-button\">\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ion-list>\n\n    </core-loading>\n</ion-content>\n<ion-footer color=\"light\" class=\"footer-adjustable\" *ngIf=\"commentsLoaded && canAddComments\">\n    <ion-toolbar color=\"light\">\n        <core-send-message-form [sendDisabled]=\"sending\" [message]=\"newComment\"\n            (onSubmit)=\"addComment($event)\" [placeholder]=\"'core.comments.addcomment' | translate\">\n        </core-send-message-form>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.module.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.module.ts ***!
  \******************************************************************/
/*! exports provided: CoreCommentsViewerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPageModule", function() { return CoreCommentsViewerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _viewer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer.page */ "./src/core/features/comments/pages/viewer/viewer.page.ts");
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
        component: _viewer_page__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsViewerPage"],
    },
];
let CoreCommentsViewerPageModule = class CoreCommentsViewerPageModule {
};
CoreCommentsViewerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _viewer_page__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsViewerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCommentsViewerPageModule);



/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.page.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.page.ts ***!
  \****************************************************************/
/*! exports provided: CoreCommentsViewerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPage", function() { return CoreCommentsViewerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/comments/services/comments */ "./src/core/features/comments/services/comments.ts");
/* harmony import */ var _features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/comments/services/comments-sync */ "./src/core/features/comments/services/comments-sync.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @features/comments/services/comments-offline */ "./src/core/features/comments/services/comments-offline.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);
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
 * Page that displays comments.
 */
let CoreCommentsViewerPage = class CoreCommentsViewerPage {
    constructor(route) {
        this.route = route;
        this.comments = [];
        this.commentsLoaded = false;
        this.itemId = 0;
        this.area = '';
        this.page = 0;
        this.title = '';
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.canAddComments = false;
        this.canDeleteComments = false;
        this.showDelete = false;
        this.hasOffline = false;
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
        this.sending = false;
        this.newComment = '';
        this.addDeleteCommentsAvailable = false;
        this.viewDestroyed = false;
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
        // Refresh data if comments are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__["CoreCommentsSyncProvider"].AUTO_SYNCED, (data) => {
            if (data.contextLevel == this.contextLevel && data.instanceId == this.instanceId &&
                data.componentName == this.componentName && data.itemId == this.itemId && data.area == this.area) {
                // Show the sync warnings.
                this.showSyncWarnings(data.warnings);
                // Refresh the data.
                this.commentsLoaded = false;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
                this.page = 0;
                this.comments = [];
                this.fetchComments(false);
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Is implicit the user can delete if he can add.
            this.addDeleteCommentsAvailable = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].isAddCommentsAvailable();
            this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
            this.commentsLoaded = false;
            this.contextLevel = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('contextLevel');
            this.instanceId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('instanceId');
            this.componentName = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('componentName');
            this.itemId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('itemId');
            this.area = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('area') || '';
            this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('title') ||
                _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.comments.comments');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('courseId');
            yield this.fetchComments(true);
        });
    }
    /**
     * Fetches the comments.
     *
     * @param sync When to resync comments.
     * @param showErrors When to display errors or not.
     * @return Resolved when done.
     */
    fetchComments(sync, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (sync) {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].ignoreErrors(this.syncComments(showErrors));
            }
            try {
                // Get comments data.
                const commentsResponse = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].getComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area, this.page);
                this.canAddComments = this.addDeleteCommentsAvailable && !!commentsResponse.canpost;
                let comments = commentsResponse.comments.sort((a, b) => a.timecreated - b.timecreated);
                if (typeof commentsResponse.count != 'undefined') {
                    this.canLoadMore = (this.comments.length + comments.length) < commentsResponse.count;
                }
                else {
                    // Old style.
                    this.canLoadMore = commentsResponse.comments.length > 0 &&
                        commentsResponse.comments.length >= _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].pageSize;
                }
                comments = yield Promise.all(comments.map((comment) => this.loadCommentProfile(comment)));
                this.comments = comments.concat(this.comments);
                this.comments.forEach((comment, index) => {
                    comment.showDate = this.showDate(comment, this.comments[index - 1]);
                    comment.showUserData = this.showUserData(comment, this.comments[index - 1]);
                    comment.showTail = this.showTail(comment, this.comments[index + 1]);
                });
                this.canDeleteComments = this.addDeleteCommentsAvailable &&
                    (this.hasOffline || this.comments.some((comment) => !!comment.delete));
                yield this.loadOfflineData();
            }
            catch (error) {
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                if (error && this.componentName == 'assignsubmission_comments') {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showAlertTranslated('core.notice', 'core.comments.commentsnotworking');
                }
                else {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.error') + ': get_comments');
                }
            }
            finally {
                this.commentsLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_SYNC;
                if (this.page == 0) {
                    this.scrollToBottom();
                }
            }
        });
    }
    /**
     * Function to load more commemts.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadPrevious(infiniteComplete) {
        this.page++;
        this.canLoadMore = false;
        return this.fetchComments(true).finally(() => {
            infiniteComplete && infiniteComplete();
        });
    }
    /**
     * Refresh the comments.
     *
     * @param showErrors Whether to display errors or not.
     * @param refresher Refresher.
     * @return Resolved when done.
     */
    refreshComments(showErrors, refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.commentsLoaded = false;
            this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
            try {
                yield this.invalidateComments();
            }
            finally {
                this.page = 0;
                this.comments = [];
                try {
                    yield this.fetchComments(true, showErrors);
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            }
        });
    }
    /**
     * Show sync warnings if any.
     *
     * @param warnings the warnings
     */
    showSyncWarnings(warnings) {
        const message = _services_utils_text__WEBPACK_IMPORTED_MODULE_15__["CoreTextUtils"].buildMessage(warnings);
        if (message) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModal(message);
        }
    }
    /**
     * Tries to synchronize comments.
     *
     * @param showErrors Whether to display errors or not.
     * @return Promise resolved if sync is successful, rejected otherwise.
     */
    syncComments(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__["CoreCommentsSync"].syncComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
                this.showSyncWarnings((result === null || result === void 0 ? void 0 : result.warnings) || []);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_16__["CoreError"](error);
            }
        });
    }
    /**
     * Send the comment or store it offline.
     *
     * @param text Comment text to add.
     */
    addComment(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_19__["CoreApp"].closeKeyboard();
            const loadingModal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showModalLoading('core.sending', true);
            // Freeze the add comment button.
            this.sending = true;
            try {
                const commentsResponse = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].addComment(text, this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showToast(commentsResponse ? 'core.comments.eventcommentcreated' : 'core.datastoredoffline', true, 3000);
                if (commentsResponse) {
                    this.invalidateComments();
                    const addedComments = yield this.loadCommentProfile(commentsResponse);
                    addedComments.showDate = this.showDate(addedComments, this.comments[this.comments.length - 1]);
                    addedComments.showUserData = this.showUserData(addedComments, this.comments[this.comments.length - 1]);
                    addedComments.showTail = this.showTail(addedComments, this.comments[this.comments.length + 1]);
                    // Add the comment to the top.
                    this.comments = this.comments.concat([addedComments]);
                    this.canDeleteComments = this.addDeleteCommentsAvailable;
                    _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].trigger(_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].COMMENTS_COUNT_CHANGED_EVENT, {
                        contextLevel: this.contextLevel,
                        instanceId: this.instanceId,
                        component: this.componentName,
                        itemId: this.itemId,
                        area: this.area,
                        countChange: 1,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
                }
                else if (commentsResponse === false) {
                    // Comments added in offline mode.
                    yield this.loadOfflineData();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                loadingModal.dismiss();
                this.sending = false;
                // New comments.
                this.scrollToBottom();
            }
        });
    }
    /**
     * Delete a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    deleteComment(e, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const modified = 'lastmodified' in comment
                ? comment.lastmodified
                : comment.timecreated;
            const time = _services_utils_time__WEBPACK_IMPORTED_MODULE_18__["CoreTimeUtils"].userDate(modified * 1000, 'core.strftimerecentfull');
            const deleteComment = {
                contextlevel: this.contextLevel,
                instanceid: this.instanceId,
                component: this.componentName,
                itemid: this.itemId,
                area: this.area,
                content: comment.content,
                id: 'id' in comment ? comment.id : undefined,
            };
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showDeleteConfirm('core.comments.deletecommentbyon', {
                    $a: { user: comment.fullname || '', time: time },
                });
            }
            catch (_a) {
                // User cancelled, nothing to do.
                return;
            }
            try {
                const deletedOnline = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].deleteComment(deleteComment);
                this.showDelete = false;
                if (deletedOnline && 'id' in comment) {
                    const index = this.comments.findIndex((commentinList) => commentinList.id == comment.id);
                    if (index >= 0) {
                        this.comments.splice(index, 1);
                        _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].trigger(_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].COMMENTS_COUNT_CHANGED_EVENT, {
                            contextLevel: this.contextLevel,
                            instanceId: this.instanceId,
                            component: this.componentName,
                            itemId: this.itemId,
                            area: this.area,
                            countChange: -1,
                        }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
                    }
                }
                else {
                    this.loadOfflineData();
                }
                this.invalidateComments();
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showToast('core.comments.eventcommentdeleted', true, 3000);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'Delete comment failed.');
            }
        });
    }
    /**
     * Invalidate comments.
     *
     * @return Resolved when done.
     */
    invalidateComments() {
        return _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].invalidateCommentsData(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
    }
    /**
     * Loads the profile info onto the comment object.
     *
     * @param comment Comment object.
     * @return Promise resolved with modified comment when done.
     */
    loadCommentProfile(comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the user profile image.
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_14__["CoreUser"].getProfile(comment.userid, undefined, true);
                comment.profileimageurl = user.profileimageurl;
                comment.fullname = user.fullname;
            }
            catch (_a) {
                // Ignore errors.
            }
            return comment;
        });
    }
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed if the previous message was from another user.
     *
     * @param comment Comment object.
     * @param prevComment Previous comment object.
     * @return Whether user data should be shown.
     */
    showUserData(comment, prevComment) {
        return comment.userid != this.currentUserId && (!prevComment || prevComment.userid != comment.userid || !!comment.showDate);
    }
    /**
     * Check if a css tail should be shown.
     *
     * @param comment Comment object.
     * @param nextComment Previous comment object.
     * @return Whether user data should be shown.
     */
    showTail(comment, nextComment) {
        return !nextComment || nextComment.userid != comment.userid || !!nextComment.showDate;
    }
    /**
     * Check if the date should be displayed between messages (when the day changes at midnight for example).
     *
     * @param comment Comment object.
     * @param prevComment Previous comment object.
     * @return True if messages are from diferent days, false othetwise.
     */
    showDate(comment, prevComment) {
        if (!prevComment) {
            return true;
        }
        // Check if day has changed.
        return !moment__WEBPACK_IMPORTED_MODULE_20___default()(comment.timecreated * 1000).isSame(prevComment.timecreated * 1000, 'day');
    }
    /**
     * Load offline comments.
     *
     * @return Promise resolved when done.
     */
    loadOfflineData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            let hasDeletedComments = false;
            // Load the only offline comment allowed if any.
            promises.push(_features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].getComment(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then((offlineComment) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.offlineComment = offlineComment;
                if (!offlineComment) {
                    return;
                }
                if (this.newComment == '') {
                    this.newComment = this.offlineComment.content;
                }
                this.offlineComment.userid = this.currentUserId;
                return;
            })));
            // Load deleted comments offline.
            promises.push(_features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].getDeletedComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then((deletedComments) => {
                hasDeletedComments = deletedComments && deletedComments.length > 0;
                if (hasDeletedComments) {
                    deletedComments.forEach((deletedComment) => {
                        const comment = this.comments.find((comment) => comment.id == deletedComment.commentid);
                        if (comment) {
                            comment.deleted = !!deletedComment.deleted;
                        }
                    });
                }
                return;
            }));
            yield Promise.all(promises);
            this.hasOffline = !!this.offlineComment || hasDeletedComments;
        });
    }
    /**
     * Restore a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    undoDeleteComment(e, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            yield _features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].undoDeleteComment(comment.id);
            comment.deleted = false;
            this.showDelete = false;
        });
    }
    /**
     * Scroll bottom when render has finished.
     */
    scrollToBottom() {
        // Need a timeout to leave time to the view to be rendered.
        setTimeout(() => {
            var _a;
            if (!this.viewDestroyed) {
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToBottom();
            }
        }, 100);
    }
    /**
     * Toggle delete.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        this.viewDestroyed = true;
    }
};
CoreCommentsViewerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CoreCommentsViewerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"],] }]
};
CoreCommentsViewerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-comments-viewer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewer.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_3__["CoreAnimations"].SLIDE_IN_OUT],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewer.scss */ "./src/core/features/comments/pages/viewer/viewer.scss")).default]
    })
], CoreCommentsViewerPage);



/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.scss":
/*!*************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host ion-content {\n  --background: var(--background-alternative);\n}\n:host ion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n:host .addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 15px;\n  background: var(--background-alternative);\n}\n:host .addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host ion-note {\n  color: var(--addon-messages-message-note-text);\n  font-size: 10px;\n  margin: 0;\n  margin: 8px 0 0 8px;\n}\n:host ion-note.addon-message-mine {\n  margin: 8px 8px 0 0;\n  align-self: flex-end;\n}\n:host ion-item.addon-message {\n  border: 0;\n  border-radius: 4px;\n  padding: 0 8px 0 8px;\n  margin: 10px 8px 0 8px;\n  --background: var(--addon-messages-message-bg);\n  background: var(--background);\n  align-self: flex-start;\n  width: 90%;\n  max-width: 90%;\n  --min-height: var(--a11y-min-target-size);\n  position: relative;\n  transition: width 500ms ease-in-out;\n  overflow: visible;\n}\n:host ion-item.addon-message::part(native) {\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  padding: 0;\n  margin: 0;\n}\n:host ion-item.addon-message core-format-text > p:only-child {\n  display: inline;\n}\n:host ion-item.addon-message .addon-message-user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .addon-message-user core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--addon-messages-avatar-size);\n  margin: 0;\n}\n:host ion-item.addon-message .addon-message-user div {\n  font-weight: 500;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message .addon-message-user div {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0.5rem;\n    padding-inline-start: 0.5rem;\n    -webkit-padding-end: 0.5rem;\n    padding-inline-end: 0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable]:active {\n  --background: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message ion-label {\n  margin: 0;\n  padding: 8px 0;\n}\n:host ion-item.addon-message .addon-message-text {\n  display: inline-flex;\n}\n:host ion-item.addon-message .addon-message-text * {\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .tail {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.5rem solid transparent;\n  position: absolute;\n  touch-action: none;\n  bottom: 0;\n}\n:host ion-item.addon-message.addon-message-mine {\n  --background: var(--yellow);\n  align-self: flex-end;\n  --ion-text-color:#FFFFFF;\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active {\n  --background: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-mine .spinner {\n  float: right;\n  margin-left: 5px;\n  margin-right: -3px;\n  margin-top: 2px;\n  margin-bottom: -2px;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .spinner {\n  float: left;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .spinner {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 5px;\n    margin-inline-start: 5px;\n    -webkit-margin-end: -3px;\n    margin-inline-end: -3px;\n  }\n}\n:host ion-item.addon-message.addon-message-mine .spinner svg {\n  width: 16px;\n  height: 16px;\n}\n:host ion-item.addon-message.addon-message-mine .tail {\n  right: -8px;\n  margin-right: -0.5rem;\n  border-bottom-color: var(--addon-messages-message-mine-bg);\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .tail {\n  left: unset;\n  right: unset;\n  left: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .tail {\n    margin-right: unset;\n    -webkit-margin-end: -0.5rem;\n    margin-inline-end: -0.5rem;\n  }\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active .tail {\n  border-bottom-color: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-not-mine .tail {\n  border-bottom-color: var(--addon-messages-message-bg);\n  left: -8px;\n  margin-left: -0.5rem;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-not-mine .tail {\n  left: unset;\n  right: unset;\n  right: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-not-mine .tail {\n    margin-left: unset;\n    -webkit-margin-start: -0.5rem;\n    margin-inline-start: -0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable].addon-message-not-mine.activated .tail {\n  border-bottom-color: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message .addon-messages-delete-button {\n  min-height: initial;\n  line-height: initial;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: var(--a11y-min-target-size) !important;\n  align-self: flex-end;\n}\n:host ion-item.addon-message .addon-messages-delete-button ion-icon {\n  font-size: 1.4em;\n  line-height: initial;\n  color: var(--ion-color-danger);\n}\n:host ion-item.addon-message.addon-message-no-user {\n  margin: 0 10px 8px 10px;\n  width: auto;\n  max-width: 80%;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine {\n  padding-top: 0;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine .item-heading,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine .item-heading {\n  margin-bottom: 0;\n}\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS9jb21wb25lbnRzL2Rpc2N1c3Npb24uc2NzcyIsInNyYy9jb3JlL2ZlYXR1cmVzL2NvbW1lbnRzL3BhZ2VzL3ZpZXdlci92aWV3ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBdUZBOzs7O0VBQUE7QUNwRkk7RUFDSSwyQ0FBQTtBQzhCUjtBRDVCUTtFQUNJLDRCQUFBO0FDOEJaO0FEMUJJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtBQzRCUjtBRHpCSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUMyQlI7QUR6Qkk7RUFDSSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUMyQlI7QUR6Qkk7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FDMkJSO0FEeEJJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFSmRKLG1DQUFBO0VJaUJJLGlCQUFBO0FDNkJSO0FEM0JRO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDNkJaO0FEMUJRO0VBQ0ksZUFBQTtBQzRCWjtBRHpCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQzJCWjtBRHpCWTtFQUNJLGNBQUE7RUFDQSxxREFBQTtFQUNBLFNBQUE7QUMyQmhCO0FEeEJZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VIa1BSLG9CR2pQb0M7RUhrUHBDLHFCR2xQb0M7RUFDNUIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDMkJoQjtBSnVOWTtFQUNJO0lBRVEsbUJBQUE7SUFHQSxvQkFBQTtJQUdKLDZCRzlQd0I7SUgrUHhCLDRCRy9Qd0I7SUhnUXhCLDJCR2hRd0I7SUhpUXhCLDBCR2pRd0I7RUN1QzFDO0FBQ0Y7QURqQ1E7RUFDSSx3REFBQTtBQ21DWjtBRGhDUTtFQUNJLFNBQUE7RUFDQSxjQUFBO0FDa0NaO0FEL0JRO0VBQ0ksb0JBQUE7QUNpQ1o7QURoQ1k7RUFDSSw0QkFBQTtBQ2tDaEI7QUQ5QlE7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDZ0NaO0FENUJRO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FDOEJaO0FEN0JZO0VBQ0ksNkRBQUE7QUMrQmhCO0FENUJZO0VIMlhBLFlBQUE7RUFwTEosZ0JHck15QztFSHNNekMsa0JHdE02QjtFSHNPakMsZUd0TzRCO0VIdU81QixtQkd2T3VDO0FDaUMzQztBSm1IUTtFQXdPSSxXQUFBO0FJeFZaO0FKcUtZO0VBQ0k7SUFFUSxrQkFBQTtJQUdBLG1CQUFBO0lBR0oseUJHbE42QjtJSG1ON0Isd0JHbk42QjtJSG9ON0Isd0JHcE5pQjtJSHFOakIsdUJHck5pQjtFQzhDbkM7QUFDRjtBRDdDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQytDcEI7QUQzQ1k7RUhtUkEsV0dsUjRCO0VINkxoQyxxQkc1THlDO0VBQ2pDLDBEQUFBO0FDNkNoQjtBSjRGUTtFQTBJSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVHeFI0QjtBQ29EeEM7QUo0SVk7RUFDSTtJQUtRLG1CQUFBO0lBS0osMkJHMU02QjtJSDJNN0IsMEJHM002QjtFQzBEL0M7QUFDRjtBRHZEWTtFQUNJLG9FQUFBO0FDeURoQjtBRHJEUTtFQUNJLHFEQUFBO0VIc1FBLFVHclFvQztFSGdMeEMsb0JHL0srQjtBQ3VEdkM7QUp1RVE7RUEwSUksV0FBQTtFQUNBLFlBQUE7RUFHQSxXRzdRb0M7QUM2RGhEO0FKdUhZO0VBQ0k7SUFFUSxrQkFBQTtJQU1KLDZCRzVMbUI7SUg2TG5CLDRCRzdMbUI7RUNtRXJDO0FBQ0Y7QURqRVE7RUFDSSwrREFBQTtBQ21FWjtBRGhFUTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUh1TVIsYUd0TXdCO0VIdU14QixnQkd2TWlDO0VBQ3pCLDhDQUFBO0VBQ0Esb0JBQUE7QUNtRVo7QURqRVk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNtRWhCO0FEL0RRO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ2lFWjtBRDdESTs7RUFLSSxjQUFBO0FDNERSO0FEL0RROztFQUNJLGdCQUFBO0FDa0VaO0FEMURJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDNkRSIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL2NvbW1lbnRzL3BhZ2VzL3ZpZXdlci92aWV3ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMubWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMubWl4aW5zLmlvbmljLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcbiIsIi8qXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqL1xuXG4gQG1peGluIGNvcmUtZm9jdXMoKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XG4gICAgfVxuIH1cblxuIEBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG4gICAgLy8gVGhpY2tlciBvcHRpb246XG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbn1cblxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkd2hlcmU6IGFsbCwgJHRpbWU6IDUwMG1zKSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xufVxuXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkY29sb3I6IGRlZGVkZSwgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAgICRzdmc6IFwiPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDEyJTIwMjAnPjxwYXRoJTIwZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweiclMjBmaWxsPSclMjMjeyRjb2xvcn0nLz48L3N2Zz5cIjtcbiAgICBAaWYgJGZsaXAtcnRsICE9IHRydWUge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRzdmd9XCIpO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgICRmbGlwcGVkLXN2ZzogXCI8c3ZnJTIweG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUyMHZpZXdCb3g9JzAlMjAwJTIwMTIlMjAyMCc+PHBhdGglMjB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyMCwlMjAwKSUyMHNjYWxlKC0xLCUyMDEpJyUyMGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonJTIwZmlsbD0nJTIzI3skY29sb3J9Jy8+PC9zdmc+XCI7XG5cbiAgICAgICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHN2Z31cIik7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC1zdmd9XCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRweCAkdHlwZSAkY29sb3I7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICBib3JkZXItcmlnaHQ6ICRweCAkdHlwZSAkY29sb3I7XG4gICAgfVxufVxuXG5cbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRweCAkdHlwZSAkY29sb3I7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHB4fSk7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLWVudiwgJHR5cGUsICRjb2xvcik7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skcHh9KTtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcik7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLWVudiwgJHR5cGUsICRjb2xvcik7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0LWVudjogbnVsbDtcbiAgICAkc2FmZS1hcmVhLWVuZC1lbnY6IG51bGw7XG5cbiAgICBAaWYgKCRlbmQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xuICAgICAgICAkc2FmZS1hcmVhLWVuZC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICB9XG4gICAgQGlmICgkc3RhcnQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0LWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xuICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LWVudiwgJHNhZmUtYXJlYS1lbmQtZW52KTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQtZW52LCAkZW5kKTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1lbmQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xuICAgICRzYWZlLWFyZWEtZW5kLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kLWVudik7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgICBAaW5jbHVkZSBzYWZlLXBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgICB0b3A6ICR0b3A7XG4gICAgYm90dG9tOiAkYm90dG9tO1xufVxuXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1peGluIGNvcmUtYXMtaXRlbXMoKSB7XG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaXN0LW1kLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGhhaXJsaW5lcy13aWR0aCBzb2xpZCAkbGlzdC1pb3MtYm9yZGVyLWNvbG9yO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCAuaXRlbSA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb3JlLWl0ZW1zKCkge1xuICAgICYuaXRlbS1tZC5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3QtbWQtYm9yZGVyLWNvbG9yO1xuICAgIH1cblxuICAgICYuaXRlbS1pb3MuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGhhaXJsaW5lcy13aWR0aCBzb2xpZCAkbGlzdC1pb3MtYm9yZGVyLWNvbG9yO1xuICAgIH1cblxuICAgICYuaXRlbS1ibG9jazpsYXN0LWNoaWxkID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cbn1cblxuQG1peGluIGRhcmttb2RlKCkge1xuICAgICRyb290OiAjeyZ9O1xuXG4gICAgQGF0LXJvb3QgYm9keS5kYXJrIHtcbiAgICAgICAgI3skcm9vdH0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBob3Jpem9udGFsX3Njcm9sbF9pdGVtKCR3aWR0aCwgJG1pbi13aWR0aCwgJG1heC13aWR0aCkge1xuICAgIGZsZXg6IDAgMCAkd2lkdGg7XG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcbiAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogMTBweDtcblxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIHZhcigtLWhvcml6b250YWwtbWFyZ2luKTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pb24tdGV4dC13cmFwIGlvbi1sYWJlbCB7XG4gICAgICAgIC5pdGVtLWhlYWRpbmcsIGgyLCBwIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gQ29sb3IgbWl4aW5zLlxuQGZ1bmN0aW9uIGdldF9icmlnaHRuZXNzKCRjb2xvcikge1xuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xufVxuXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yKCRjb2xvcikge1xuICAgICRicmlnaHRuZXNzOiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpO1xuXG4gICAgQHJldHVybiBpZigkYnJpZ2h0bmVzcyA8IDEyNywgd2hpdGUsIGJsYWNrKTtcbn1cbiIsIi8qXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKiBFeHRyYWN0ZWQgZnJvbSBpb25pYy5taXhpbnMuc2Nzc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xuICovXG5cbi8vIFJlc3BvbnNpdmUgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1ha2UtZ3JpZC13aWR0aHMoJHdpZHRoczogJGdyaWQtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcblxuICAgICAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XG4gICAgfVxuICB9XG59XG5cbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xuICBAaWYgJGFscGhhID09IG51bGwge1xuICAgIEByZXR1cm4gdmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0pO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcbiAgfVxufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlKCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50KCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XG59XG5cbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjb2xvci10by1yZ2ItbGlzdCgkY29sb3IpIHtcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcbn1cblxuXG4gLy8gSW9uaWMgQ29sb3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXG4vLyBjb2xvcnMgbWFwXG5cbkBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9ycykge1xuICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcblxuICAgICRjb250cmFzdDogZ2V0X2NvbnRyYXN0X2NvbG9yKCRiYXNlKTtcbiAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZSgkYmFzZSk7XG4gICAgJHRpbnQ6IGdldC1jb2xvci10aW50KCRiYXNlKTtcblxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9OiB2YXIoLS0jeyRjb2xvci1uYW1lfSwgI3skYmFzZX0pO1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcblxuICAgIC5pb24tY29sb3ItI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xuICAgICAgICAtLWlvbi1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2IpO1xuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcbiAgICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZSk7XG4gICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcbiAgICB9XG59XG5cbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgICBAaW5jbHVkZSBtYXJnaW4oMCk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICB9XG59XG5cbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xuICAgICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICAgIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcblxuICAgIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICAgQGlmICRtaW4ge1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICAgIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAgIEBpZiAkbWF4IHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgICBAY29udGVudDtcblxuICAgIC8vICRyb290OiAjeyZ9O1xuICAgIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgICAvLyAgICN7JHJvb3R9IHtcbiAgICAvLyAgICAgQGNvbnRlbnQ7XG4gICAgLy8gICB9XG4gICAgLy8gfVxufVxuXG5AbWl4aW4gcnRsKCkge1xuICAgICRyb290OiAjeyZ9O1xuXG4gICAgQGF0LXJvb3QgW2Rpcj1ydGxdIHtcbiAgICAgICAgI3skcm9vdH0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBsdHIoKSB7XG4gICAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAgICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcblxuICAgIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAgICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcblxuICAgICAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgfSBAZWxzZSB7XG4gICAgICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAgICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICAgICAgQGF0LXJvb3Qge1xuICAgICAgICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xuICAgICAgICAgICAgICAgICYge1xuICAgICAgICAgICAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcbiAgICAgICAgICAgICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICAgICAgICByaWdodDogJGVuZDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICAgICAgICByaWdodDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgICAgICAgbGVmdDogJGVuZDtcbiAgICAgICAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gICAgdG9wOiAkdG9wO1xuICAgIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgICAkb3RoZXItZGlyOiBudWxsO1xuXG4gICAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAgICAgJG90aGVyLWRpcjogcnRsO1xuICAgIH0gQGVsc2Uge1xuICAgICAgICAkb3RoZXItZGlyOiBsdHI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICBkaXJlY3Rpb246ICRkaXI7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICAgIH1cbn1cblxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xuICAgIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XG4gICAgICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICAgICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcbiAgICAgICAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgICAkZXh0cmE6IG51bGw7XG5cbiAgICAkeDogbnVsbDtcbiAgICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICAgIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xuICAgICAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXG4gKi9cbiIsIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRibGFjazogICAgICAgICAgICMyODI4MjggIWRlZmF1bHQ7IC8vIEhlYWRpbmdzLCBzdGFuZGFyZCB0ZXh0LlxuJGdyYXktZGFya2VyOiAgICAgIzY4NjU2NiAhZGVmYXVsdDtcbiRncmF5LWRhcms6ICAgICAgICM5ZTllOWUgIWRlZmF1bHQ7XG4kZ3JheTogICAgICAgICAgICAjZGRkZGRkICFkZWZhdWx0O1xuJGdyYXktbGlnaHQ6ICAgICAgI0Y1RjZGQSAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZC5cbiRncmF5LWxpZ2h0ZXI6ICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kd2hpdGU6ICAgICAgICAgICAjZmZmZmZmICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLCByZXZlcnNlZCB0ZXh0LlxuXG4kYmx1ZTogICAgICAgICAgICAjMDA2NGQyICFkZWZhdWx0OyAvLyBMaW5rLCBiYWNrZ3JvdW5kLlxuJGJsdWUtbGlnaHQ6ICAgICAgbWl4KCRibHVlLCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZC5cbiRibHVlLWRhcms6ICAgICAgIGRhcmtlbigkYmx1ZSwgMTAlKSAhZGVmYXVsdDtcblxuJGdyZWVuOiAgICAgICAgICAgIzVlODEwMCAhZGVmYXVsdDsgLy8gQWNjZW50LlxuJGdyZWVuLWxpZ2h0OiAgICAgbWl4KCRncmVlbiwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tZGFyazogICAgICBkYXJrZW4oJGdyZWVuLCAxMCUpICFkZWZhdWx0O1xuXG4kcmVkOiAgICAgICAgICAgICAjY2IzZDRkICFkZWZhdWx0O1xuJHJlZC1saWdodDogICAgICAgbWl4KCRyZWQsIHdoaXRlLCAyMCUpICFkZWZhdWx0O1xuJHJlZC1kYXJrOiAgICAgICAgZGFya2VuKCRyZWQsIDEwJSkgIWRlZmF1bHQ7XG5cbiR5ZWxsb3c6ICAgICAgICAgICM0ZGJlYzEgIWRlZmF1bHQ7IC8vIEFjY2VudCAobmV2ZXIgdGV4dCkuXG4keWVsbG93LWxpZ2h0OiAgICBtaXgoJHllbGxvdywgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XG4keWVsbG93LWRhcms6ICAgICBtaXgoJHllbGxvdywgYmxhY2ssIDQwJSkgIWRlZmF1bHQ7XG5cbiRicmFuZC1jb2xvcjogICAgIzRkYmVjMSAhZGVmYXVsdDtcblxuJHRleHQtY29sb3I6ICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyay1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAgICAgbWl4KCNmZmZmZmYsICMwMDAwMDAsIDEwJSkgIWRlZmF1bHQ7IC8vICMxYTFhMWFcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogbWl4KCNmZmZmZmYsICMwMDAwMDAsIDIwJSkgIWRlZmF1bHQ7IC8vICMzMzMzMzNcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrKSAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAkcmVkICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4kbWVkaXVtOiAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgJGJsYWNrICFkZWZhdWx0O1xuXG4kY29sb3JzOiAgKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIHN1Y2Nlc3M6ICRzdWNjZXNzLFxuICAgIHdhcm5pbmc6ICR3YXJuaW5nLFxuICAgIGRhbmdlcjogICRkYW5nZXIsXG4gICAgaW5mbzogJGluZm8sXG4gICAgbGlnaHQ6ICRsaWdodCxcbiAgICBtZWRpdW06ICRtZWRpdW0sXG4gICAgZGFyazogJGRhcmtcbikgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5LWRhcms6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcbiRkYW5nZXItZGFyazogICAgIG1peCgkcmVkLCB3aGl0ZSwgNDAlKSAhZGVmYXVsdDtcbiR3YXJuaW5nLWRhcms6ICAgIG1peCgkeWVsbG93LCB3aGl0ZSwgNDAlKSAhZGVmYXVsdDtcbiRzdWNjZXNzLWRhcms6ICAgIG1peCgkZ3JlZW4sIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJGluZm8tZGFyazogICAgICAgbWl4KCRibHVlLCB3aGl0ZSwgNDAlKSAhZGVmYXVsdDtcbiRsaWdodC1kYXJrOiAgICAgICRkYXJrICFkZWZhdWx0O1xuJG1lZGl1bS1kYXJrOiAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kZGFyay1kYXJrOiAgICAgICAkbGlnaHQgIWRlZmF1bHQ7XG5cbiRjb2xvcnMtZGFyazogIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeS1kYXJrLFxuICAgIHN1Y2Nlc3M6ICRzdWNjZXNzLWRhcmssXG4gICAgd2FybmluZzogJHdhcm5pbmctZGFyayxcbiAgICBkYW5nZXI6ICRkYW5nZXItZGFyayxcbiAgICBpbmZvOiAkaW5mby1kYXJrLFxuICAgIGxpZ2h0OiAkbGlnaHQtZGFyayxcbiAgICBtZWRpdW06ICRtZWRpdW0tZGFyayxcbiAgICBkYXJrOiAkZGFyay1kYXJrLFxuKSAhZGVmYXVsdDtcblxuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXG4gICAgeHM6IDAsXG4gICAgc206IDU3NnB4LFxuICAgIG1kOiA3NjhweCxcbiAgICBsZzogOTkycHgsXG4gICAgdGFibGV0OiA5OTJweCxcbiAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaW1hZ2UtYmFja2dyb3VuZDogIzgxZWNlYywgIzc0YjlmZiwgI2EyOWJmZSwgI2RmZTZlOSwgIzAwYjg5NCwgIzA5ODRlMywgI2IyYmVjMywgI2ZkY2I2ZSwgI2ZkNzlhOCwgIzZjNWNlNyAhZGVmYXVsdDtcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xuXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtYWx3YXlzLXNob3ctbWFpbi1tZW51OiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1zaG93LWNvdXJzZWltYWdlLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS1oaWRlLXByb2dyZXNzLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3ItZGFyazogJHRleHQtY29sb3ItZGFyayAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRldXJsOiBmYWxzZSAhZGVmYXVsdDsiLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYWx0ZXJuYXRpdmUpO1xuXG4gICAgICAgICY6OnBhcnQoc2Nyb2xsKSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYWx0ZXJuYXRpdmUpO1xuICAgIH1cblxuICAgIC5hZGRvbi1tZXNzYWdlcy1kYXRlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIGlvbi1ub3RlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2Utbm90ZS10ZXh0KTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbjogOHB4IDAgMCA4cHg7XG4gICAgfVxuICAgIGlvbi1ub3RlLmFkZG9uLW1lc3NhZ2UtbWluZXtcbiAgICAgICAgbWFyZ2luOiA4cHggOHB4IDAgMDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgfVxuICAgIC8vIE1lc3NhZ2UgaXRlbS5cbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggOHB4IDAgOHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIC0tbWluLWhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtdHJhbnNpdGlvbih3aWR0aCk7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGRpc3BsYXkgYnViYmxlIHRhaWxzLlxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvcmUtZm9ybWF0LXRleHQgPiBwOm9ubHktY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2UtdXNlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgICBjb3JlLXVzZXItYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAtLWNvcmUtYXZhdGFyLXNpemU6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWF2YXRhci1zaXplKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKC41cmVtKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkb24tbWVzc2FnZS10ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWlsIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZXMgd2hlbiBhbiBpdGVtLW1lc3NhZ2UgaXMgdGhlIHVzZXIncy5cbiAgICAgICAgJi5hZGRvbi1tZXNzYWdlLW1pbmUge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3cpO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiNGRkZGRkY7XG4gICAgICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbG9hdChlbmQpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbigycHgsIC0zcHgsIC0ycHgsIDVweCk7XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhaWwge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKG51bGwsIC04cHgsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIC0wLjVyZW0pO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1iZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZbdGFwcGFibGVdOmFjdGl2ZSAudGFpbCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLnRhaWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1iZyk7XG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihudWxsLCBudWxsLCBudWxsLCAtOHB4KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKC0wLjVyZW0sIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJlt0YXBwYWJsZV0uYWRkb24tbWVzc2FnZS1ub3QtbWluZS5hY3RpdmF0ZWQgLnRhaWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2VzLWRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luKDAsIG51bGwsIDAsIG51bGwpO1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1hMTF5LW1pbi10YXJnZXQtc2l6ZSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2Utbm8tdXNlciB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweCA4cHggMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2UtbWluZSxcbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIHtcbiAgICAgICAgLml0ZW0taGVhZGluZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cblxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cbi8qXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqL1xuLypcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqIEV4dHJhY3RlZCBmcm9tIGlvbmljLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cbi8qXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXG4gKi9cbi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxuICovXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hbHRlcm5hdGl2ZSk7XG59XG46aG9zdCBpb24tY29udGVudDo6cGFydChzY3JvbGwpIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbjpob3N0IC5hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbn1cbjpob3N0IC5hZGRvbi1tZXNzYWdlcy1kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG46aG9zdCBpb24tbm90ZSB7XG4gIGNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtdGV4dCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW46IDhweCAwIDAgOHB4O1xufVxuOmhvc3QgaW9uLW5vdGUuYWRkb24tbWVzc2FnZS1taW5lIHtcbiAgbWFyZ2luOiA4cHggOHB4IDAgMDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xuICBtYXJnaW46IDEwcHggOHB4IDAgOHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIC0tbWluLWhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2U6OnBhcnQobmF0aXZlKSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIGNvcmUtZm9ybWF0LXRleHQgPiBwOm9ubHktY2hpbGQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlLXVzZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLmFkZG9uLW1lc3NhZ2UtdXNlciBjb3JlLXVzZXItYXZhdGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tY29yZS1hdmF0YXItc2l6ZTogdmFyKC0tYWRkb24tbWVzc2FnZXMtYXZhdGFyLXNpemUpO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlLXVzZXIgZGl2IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIDpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLmFkZG9uLW1lc3NhZ2UtdXNlciBkaXYge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwLjVyZW07XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwLjVyZW07XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwLjVyZW07XG4gIH1cbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2VbdGFwcGFibGVdOmFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlLXRleHQgKiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC50YWlsIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAwLjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBib3R0b206IDA7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0teWVsbG93KTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIC0taW9uLXRleHQtY29sb3I6I0ZGRkZGRjtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lW3RhcHBhYmxlXTphY3RpdmUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1hY3RpdmF0ZWQtYmcpO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnNwaW5uZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogLTNweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xufVxuW2Rpcj1ydGxdIDpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC5zcGlubmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIDpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC5zcGlubmVyIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogNXB4O1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IC0zcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC0zcHg7XG4gIH1cbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC5zcGlubmVyIHN2ZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAudGFpbCB7XG4gIHJpZ2h0OiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1iZyk7XG59XG5bZGlyPXJ0bF0gOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnRhaWwge1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IHVuc2V0O1xuICBsZWZ0OiAtOHB4O1xufVxuXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICA6aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAudGFpbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC0wLjVyZW07XG4gIH1cbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lW3RhcHBhYmxlXTphY3RpdmUgLnRhaWwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYWN0aXZhdGVkLWJnKTtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSAudGFpbCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICBsZWZ0OiAtOHB4O1xuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbn1cbltkaXI9cnRsXSA6aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLnRhaWwge1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IHVuc2V0O1xuICByaWdodDogLThweDtcbn1cblxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIC50YWlsIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogLTAuNXJlbTtcbiAgfVxufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZVt0YXBwYWJsZV0uYWRkb24tbWVzc2FnZS1ub3QtbWluZS5hY3RpdmF0ZWQgLnRhaWwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWFjdGl2YXRlZC1iZyk7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlcy1kZWxldGUtYnV0dG9uIHtcbiAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZXMtZGVsZXRlLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlciB7XG4gIG1hcmdpbjogMCAxMHB4IDhweCAxMHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2UtbWluZSxcbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lICsgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vLXVzZXIuYWRkb24tbWVzc2FnZS1taW5lIC5pdGVtLWhlYWRpbmcsXG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIC5pdGVtLWhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIGlvbi1mb290ZXIgLnRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=pages-viewer-viewer-module.js.map