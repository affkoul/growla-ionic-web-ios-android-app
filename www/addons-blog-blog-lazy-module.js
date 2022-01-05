(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-blog-blog-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/blog/pages/entries/entries.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/blog/pages/entries/entries.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ title | translate }}</h1>\n        <ion-buttons slot=\"end\"></ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item *ngIf=\"showMyEntriesToggle\">\n            <ion-label>{{ 'addon.blog.showonlyyourentries' | translate }}</ion-label>\n            <ion-toggle [(ngModel)]=\"onlyMyEntries\" (ionChange)=\"onlyMyEntriesToggleChanged(onlyMyEntries)\"></ion-toggle>\n        </ion-item>\n        <core-empty-box *ngIf=\"entries && entries.length == 0\" icon=\"far-newspaper\"\n            [message]=\"'addon.blog.noentriesyet' | translate\">\n        </core-empty-box>\n        <ng-container *ngFor=\"let entry of entries\">\n            <ion-card *ngIf=\"!onlyMyEntries || entry.userid == currentUserId\">\n                <ion-item class=\"ion-text-wrap\">\n                    <core-user-avatar [user]=\"entry.user\" slot=\"start\" [courseId]=\"entry.courseid\"></core-user-avatar>\n                    <ion-label>\n                        <p class=\"item-heading\">\n                            <core-format-text [text]=\"entry.subject\" [contextLevel]=\"contextLevel\"\n                                [contextInstanceId]=\"contextInstanceId\">\n                            </core-format-text>\n                            <ion-note class=\"ion-float-end ion-padding-start ion-text-end\">\n                                {{ 'addon.blog.' + entry.publishTranslated! | translate}}\n                            </ion-note>\n                        </p>\n                        <p>\n                            <ion-note class=\"ion-float-end ion-text-end\">\n                                {{entry.created | coreDateDayOrTime}}\n                            </ion-note>\n                            {{entry.user && entry.user!.fullname}}\n                        </p>\n                    </ion-label>\n                </ion-item>\n                <ion-card-content>\n                    <ion-item class=\"ion-text-wrap\">\n                        <ion-label>\n                            <core-format-text [text]=\"entry.summary\" [component]=\"this.component\" [componentId]=\"entry.id\"\n                                [contextLevel]=\"contextLevel\" [contextInstanceId]=\"contextInstanceId\">\n                            </core-format-text>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"tagsEnabled && entry.tags && entry.tags!.length > 0\">\n                        <ion-label>\n                            <div slot=\"start\">{{ 'core.tag.tags' | translate }}:</div>\n                            <core-tag-list [tags]=\"entry.tags\"></core-tag-list>\n                        </ion-label>\n                    </ion-item>\n                    <core-comments *ngIf=\"commentsEnabled\" [component]=\"this.component\" [itemId]=\"entry.id\" area=\"format_blog\"\n                        [instanceId]=\"entry.userid\" contextLevel=\"user\" [showItem]=\"true\">\n                    </core-comments>\n                    <core-file *ngFor=\"let file of entry.attachmentfiles\" [file]=\"file\" [component]=\"this.component\"\n                        [componentId]=\"entry.id\">\n                    </core-file>\n                    <ion-item *ngIf=\"entry.uniquehash\" [href]=\"entry.uniquehash\" core-link detail=\"true\">\n                        <ion-label>{{ 'addon.blog.linktooriginalentry' | translate }}</ion-label>\n                    </ion-item>\n                </ion-card-content>\n                <div class=\"ion-text-center ion-margin-bottom\" *ngIf=\"entry.lastmodified > entry.created\">\n                    <ion-note>\n                        <ion-icon name=\"fas-clock\"\n                            [attr.aria-label]=\"'core.lastmodified' | translate\"></ion-icon> {{entry.lastmodified | coreTimeAgo}}\n                    </ion-note>\n                </div>\n            </ion-card>\n        </ng-container>\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMore($event)\" [error]=\"loadMoreError\"></core-infinite-loading>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/blog/blog-lazy.module.ts":
/*!*********************************************!*\
  !*** ./src/addons/blog/blog-lazy.module.ts ***!
  \*********************************************/
/*! exports provided: AddonBlogLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBlogLazyModule", function() { return AddonBlogLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_entries_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/entries/entries */ "./src/addons/blog/pages/entries/entries.ts");
/* harmony import */ var _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/comments/components/components.module */ "./src/core/features/comments/components/components.module.ts");
/* harmony import */ var _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/tag/components/components.module */ "./src/core/features/tag/components/components.module.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/addons/blog/services/handlers/mainmenu.ts");
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









function buildRoutes(injector) {
    return [
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_7__["buildTabMainRoutes"])(injector, {
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_8__["AddonBlogMainMenuHandlerService"].PAGE_NAME,
            },
            component: _pages_entries_entries__WEBPACK_IMPORTED_MODULE_4__["AddonBlogEntriesPage"],
        }),
    ];
}
let AddonBlogLazyModule = class AddonBlogLazyModule {
};
AddonBlogLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreCommentsComponentsModule"],
            _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreTagComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
        declarations: [
            _pages_entries_entries__WEBPACK_IMPORTED_MODULE_4__["AddonBlogEntriesPage"],
        ],
    })
], AddonBlogLazyModule);



/***/ }),

/***/ "./src/addons/blog/pages/entries/entries.ts":
/*!**************************************************!*\
  !*** ./src/addons/blog/pages/entries/entries.ts ***!
  \**************************************************/
/*! exports provided: AddonBlogEntriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBlogEntriesPage", function() { return AddonBlogEntriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _addons_blog_services_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addons/blog/services/blog */ "./src/addons/blog/services/blog.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/comments/services/comments */ "./src/core/features/comments/services/comments.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that displays the list of blog entries.
 */
let AddonBlogEntriesPage = class AddonBlogEntriesPage {
    constructor() {
        this.title = '';
        this.filter = {};
        this.pageLoaded = 0;
        this.userPageLoaded = 0;
        this.canLoadMoreEntries = false;
        this.canLoadMoreUserEntries = true;
        this.loaded = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.entries = [];
        this.showMyEntriesToggle = false;
        this.onlyMyEntries = false;
        this.component = _addons_blog_services_blog__WEBPACK_IMPORTED_MODULE_1__["AddonBlogProvider"].COMPONENT;
        this.commentsEnabled = false;
        this.tagsEnabled = false;
        this.contextLevel = "system" /* SYSTEM */;
        this.contextInstanceId = 0;
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteUserId();
        this.siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteHomeId();
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('userId');
            const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('courseId');
            const cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('cmId');
            const entryId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('entryId');
            const groupId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('groupId');
            const tagId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('tagId');
            if (!userId && !courseId && !cmId && !entryId && !groupId && !tagId) {
                this.title = 'addon.blog.siteblogheading';
            }
            else {
                this.title = 'addon.blog.blogentries';
            }
            if (userId) {
                this.filter.userid = userId;
            }
            this.showMyEntriesToggle = !userId;
            if (courseId) {
                this.filter.courseid = courseId;
            }
            if (cmId) {
                this.filter.cmid = cmId;
            }
            if (entryId) {
                this.filter.entryid = entryId;
            }
            if (groupId) {
                this.filter.groupid = groupId;
            }
            if (tagId) {
                this.filter.tagid = tagId;
            }
            // Calculate the context level.
            if (userId && !courseId && !cmId) {
                this.contextLevel = "user" /* USER */;
                this.contextInstanceId = userId;
            }
            else if (courseId && courseId != this.siteHomeId) {
                this.contextLevel = "course" /* COURSE */;
                this.contextInstanceId = courseId;
            }
            else {
                this.contextLevel = "system" /* SYSTEM */;
                this.contextInstanceId = 0;
            }
            this.commentsEnabled = !_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_3__["CoreComments"].areCommentsDisabledInSite();
            this.tagsEnabled = _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_4__["CoreTag"].areTagsAvailableInSite();
            yield this.fetchEntries();
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(_addons_blog_services_blog__WEBPACK_IMPORTED_MODULE_1__["AddonBlog"].logView(this.filter));
        });
    }
    /**
     * Fetch blog entries.
     *
     * @param refresh Empty events array first.
     * @return Promise with the entries.
     */
    fetchEntries(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (refresh) {
                this.pageLoaded = 0;
                this.userPageLoaded = 0;
            }
            const loadPage = this.onlyMyEntries ? this.userPageLoaded : this.pageLoaded;
            try {
                const result = yield _addons_blog_services_blog__WEBPACK_IMPORTED_MODULE_1__["AddonBlog"].getEntries(this.filter, loadPage);
                const promises = result.entries.map((entry) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    switch (entry.publishstate) {
                        case 'draft':
                            entry.publishTranslated = 'publishtonoone';
                            break;
                        case 'site':
                            entry.publishTranslated = 'publishtosite';
                            break;
                        case 'public':
                            entry.publishTranslated = 'publishtoworld';
                            break;
                        default:
                            entry.publishTranslated = 'privacy:unknown';
                            break;
                    }
                    // Calculate the context. This code was inspired by calendar events, Moodle doesn't do this for blogs.
                    if (entry.moduleid || entry.coursemoduleid) {
                        entry.contextLevel = "module" /* MODULE */;
                        entry.contextInstanceId = entry.moduleid || entry.coursemoduleid;
                    }
                    else if (entry.courseid) {
                        entry.contextLevel = "course" /* COURSE */;
                        entry.contextInstanceId = entry.courseid;
                    }
                    else {
                        entry.contextLevel = "user" /* USER */;
                        entry.contextInstanceId = entry.userid;
                    }
                    entry.summary = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].instance.replacePluginfileUrls(entry.summary, entry.summaryfiles || []);
                    return _features_user_services_user__WEBPACK_IMPORTED_MODULE_5__["CoreUser"].getProfile(entry.userid, entry.courseid, true).then((user) => {
                        entry.user = user;
                        return;
                    }).catch(() => {
                        // Ignore errors.
                    });
                }));
                if (refresh) {
                    this.entries = result.entries;
                }
                else {
                    this.entries = _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].uniqueArray(this.entries
                        .concat(result.entries), 'id')
                        .sort((a, b) => b.created - a.created);
                }
                if (this.onlyMyEntries) {
                    const count = this.entries.filter((entry) => entry.userid == this.currentUserId).length;
                    this.canLoadMoreUserEntries = result.totalentries > count;
                    this.canLoadMore = this.canLoadMoreUserEntries;
                    this.userPageLoaded++;
                }
                else {
                    this.canLoadMoreEntries = result.totalentries > this.entries.length;
                    this.canLoadMore = this.canLoadMoreEntries;
                    this.pageLoaded++;
                }
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.blog.errorloadentries', true);
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Toggle between showing only my entries or not.
     *
     * @param enabled If true, filter my entries. False otherwise.
     */
    onlyMyEntriesToggleChanged(enabled) {
        this.canLoadMore = enabled ? this.canLoadMoreUserEntries : this.canLoadMoreEntries;
        if (!enabled) {
            delete this.filter.userid;
            return;
        }
        const count = this.entries.filter((entry) => entry.userid == this.currentUserId).length;
        this.userPageLoaded = Math.floor(count / _addons_blog_services_blog__WEBPACK_IMPORTED_MODULE_1__["AddonBlogProvider"].ENTRIES_PER_PAGE);
        this.filter.userid = this.currentUserId;
        if (count == 0 && this.canLoadMoreUserEntries) {
            // First time but no entry loaded. Try to load some.
            this.loadMore();
        }
    }
    /**
     * Function to load more entries.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadMore(infiniteComplete) {
        return this.fetchEntries().finally(() => {
            infiniteComplete && infiniteComplete();
        });
    }
    /**
     * Refresh blog entries on PTR.
     *
     * @param refresher Refresher instance.
     */
    refresh(refresher) {
        const promises = this.entries.map((entry) => _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_3__["CoreComments"].invalidateCommentsData('user', entry.userid, this.component, entry.id, 'format_blog'));
        promises.push(_addons_blog_services_blog__WEBPACK_IMPORTED_MODULE_1__["AddonBlog"].invalidateEntries(this.filter));
        if (this.showMyEntriesToggle) {
            this.filter['userid'] = this.currentUserId;
            promises.push(_addons_blog_services_blog__WEBPACK_IMPORTED_MODULE_1__["AddonBlog"].invalidateEntries(this.filter));
            if (!this.onlyMyEntries) {
                delete this.filter['userid'];
            }
        }
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].allPromises(promises).finally(() => {
            this.fetchEntries(true).finally(() => {
                if (refresher) {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            });
        });
    }
};
AddonBlogEntriesPage.ctorParameters = () => [];
AddonBlogEntriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-blog-entries',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entries.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/blog/pages/entries/entries.html")).default,
    })
], AddonBlogEntriesPage);



/***/ })

}]);
//# sourceMappingURL=addons-blog-blog-lazy-module.js.map