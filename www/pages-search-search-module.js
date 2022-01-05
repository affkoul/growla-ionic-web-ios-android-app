(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.messages.searchcombined' | translate }}</h1>\n        <ion-buttons slot=\"end\">\n            <!-- Add an empty context menu so discussion page can add items in split view,\n                otherwise the menu disappears in some cases. -->\n            <core-context-menu></core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <core-search-box (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\" [disabled]=\"disableSearch\" autocorrect=\"off\"\n            [spellcheck]=\"false\" [autoFocus]=\"true\" [lengthCheck]=\"1\" searchArea=\"AddonMessagesSearch\"></core-search-box>\n\n        <core-loading [hideUntil]=\"!displaySearching\" [message]=\"'core.searching' | translate\">\n            <ion-list *ngIf=\"displayResults\">\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: contacts}\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: nonContacts}\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: messages}\"></ng-container>\n                <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\n                <core-infinite-loading [enabled]=\"messages.canLoadMore\" (action)=\"search(query, 'messages', $event)\"\n                    [error]=\"messages.loadMoreError\"></core-infinite-loading>\n            </ion-list>\n\n            <core-empty-box\n                *ngIf=\"displayResults && !contacts.results.length && !nonContacts.results.length && !messages.results.length\"\n                icon=\"fas-search\" [message]=\"'core.noresults' | translate\">\n            </core-empty-box>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n\n<!-- Template to render a list of results -->\n<ng-template #resultsTemplate let-item=\"item\">\n    <ng-container *ngIf=\"item.results.length > 0\">\n        <ion-item-divider class=\"ion-text-wrap\">\n            <ion-label><h2>{{ item.titleString | translate }}</h2></ion-label>\n        </ion-item-divider>\n\n        <!-- List of results -->\n        <ion-item class=\"addon-message-discussion ion-text-wrap\" *ngFor=\"let result of item.results\" [attr.aria-label]=\"result.fullname\"\n            (click)=\"openConversation(result)\" [attr.aria-current]=\"result == selectedResult ? 'page' : 'false'\" detail=\"true\"\n            button>\n            <core-user-avatar slot=\"start\" [user]=\"result\" [checkOnline]=\"true\" [linkProfile]=\"false\"></core-user-avatar>\n            <ion-label>\n                <p class=\"item-heading\">\n                    <core-format-text [text]=\"result.fullname\" [highlight]=\"result.highlightName\" [filter]=\"false\">\n                    </core-format-text>\n                    <ion-icon name=\"fas-ban\" *ngIf=\"result.isblocked\"\n                        [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\n                    </ion-icon>\n                </p>\n                <ion-note *ngIf=\"result.lastmessagedate > 0\">\n                    {{result.lastmessagedate | coreDateDayOrTime}}\n                </ion-note>\n                <p class=\"addon-message-last-message\">\n                    <span *ngIf=\"result.sentfromcurrentuser\" class=\"addon-message-last-message-user\">\n                        {{ 'addon.messages.you' | translate }}\n                    </span>\n                    <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"result.lastmessage\"\n                        [highlight]=\"result.highlightMessage\" contextLevel=\"system\" [contextInstanceId]=\"0\"\n                        class=\"addon-message-last-message-text\"></core-format-text>\n                </p>\n            </ion-label>\n        </ion-item>\n\n        <!-- Load more button for contacts and non-contacts -->\n        <ng-container *ngIf=\"item.type != 'messages'\">\n            <div class=\"ion-padding-horizontal\" *ngIf=\"item.canLoadMore && !item.loadingMore\">\n                <ion-button expand=\"block\" color=\"light\" (click)=\"search(query, item.type)\">\n                    {{ 'core.loadmore' | translate }}\n                </ion-button>\n            </div>\n            <div *ngIf=\"item.loadingMore\" class=\"ion-padding ion-text-center\">\n                <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n            </div>\n        </ng-container>\n    </ng-container>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/search/search.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/search/search.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.courses.searchcourses' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-search-box (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\"\n    [placeholder]=\"'core.courses.search' | translate\" [searchLabel]=\"'core.courses.search' | translate\" autoFocus=\"true\"\n    searchArea=\"CoreCoursesSearch\"></core-search-box>\n\n    <ng-container *ngIf=\"total > 0\">\n        <ion-item-divider>\n            <ion-label><h2>{{ 'core.courses.totalcoursesearchresults' | translate:{$a: total} }}</h2></ion-label>\n        </ion-item-divider>\n        <core-courses-course-list-item *ngFor=\"let course of courses\" [course]=\"course\"></core-courses-course-list-item>\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMoreResults($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n    </ng-container>\n    <core-empty-box *ngIf=\"total == 0\" icon=\"search\" [message]=\"'core.courses.nosearchresults' | translate\"></core-empty-box>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/messages/pages/search/search.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/messages/pages/search/search.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonMessagesSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSearchPageModule", function() { return AddonMessagesSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/messages/messages-lazy.module */ "./src/addons/messages/messages-lazy.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.page */ "./src/addons/messages/pages/search/search.page.ts");
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









const mobileRoutes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
    },
    _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesDiscussionRoute"],
];
const tabletRoutes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
        children: [
            _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesDiscussionRoute"],
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_3__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_3__["CoreScreen"].isTablet),
];
let AddonMessagesSearchPageModule = class AddonMessagesSearchPageModule {
};
AddonMessagesSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreSearchComponentsModule"],
        ],
        declarations: [
            _search_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesSearchPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/search/search.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/messages/pages/search/search.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonMessagesSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSearchPage", function() { return AddonMessagesSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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









/**
 * Page for searching users.
 */
let AddonMessagesSearchPage = class AddonMessagesSearchPage {
    constructor() {
        this.disableSearch = false;
        this.displaySearching = false;
        this.displayResults = false;
        this.query = '';
        this.contacts = {
            type: 'contacts',
            titleString: 'addon.messages.contacts',
            results: [],
            canLoadMore: false,
            loadingMore: false,
        };
        this.nonContacts = {
            type: 'noncontacts',
            titleString: 'addon.messages.noncontacts',
            results: [],
            canLoadMore: false,
            loadingMore: false,
        };
        this.messages = {
            type: 'messages',
            titleString: 'addon.messages.messages',
            results: [],
            canLoadMore: false,
            loadingMore: false,
            loadMoreError: false,
        };
        // Update block status of a user.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (!data.userBlocked && !data.userUnblocked) {
                // The block status has not changed, ignore.
                return;
            }
            const contact = this.contacts.results.find((user) => user.id == data.userId);
            if (contact) {
                contact.isblocked = !!data.userBlocked;
            }
            else {
                const nonContact = this.nonContacts.results.find((user) => user.id == data.userId);
                if (nonContact) {
                    nonContact.isblocked = !!data.userBlocked;
                }
            }
            this.messages.results.forEach((message) => {
                if (message.userid == data.userId) {
                    message.isblocked = !!data.userBlocked;
                }
            });
        }, _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Clear search.
     */
    clearSearch() {
        this.query = '';
        this.displayResults = false;
        // Empty details.
        const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].isCurrentPathInTablet('**/messages/search/discussion');
        if (splitViewLoaded) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate('../');
        }
    }
    /**
     * Start a new search or load more results.
     *
     * @param query Text to search for.
     * @param loadMore Load more contacts, noncontacts or messages. If undefined, start a new search.
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    search(query, loadMore, infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_6__["CoreApp"].closeKeyboard();
            this.query = query;
            this.disableSearch = true;
            this.displaySearching = !loadMore;
            const promises = [];
            let newContacts = [];
            let newNonContacts = [];
            let newMessages = [];
            let canLoadMoreContacts = false;
            let canLoadMoreNonContacts = false;
            let canLoadMoreMessages = false;
            if (!loadMore || loadMore == 'contacts' || loadMore == 'noncontacts') {
                const limitNum = loadMore ? _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].LIMIT_SEARCH : _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].LIMIT_INITIAL_USER_SEARCH;
                let limitFrom = 0;
                if (loadMore == 'contacts') {
                    limitFrom = this.contacts.results.length;
                    this.contacts.loadingMore = true;
                }
                else if (loadMore == 'noncontacts') {
                    limitFrom = this.nonContacts.results.length;
                    this.nonContacts.loadingMore = true;
                }
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].searchUsers(query, limitFrom, limitNum).then((result) => {
                    if (!loadMore || loadMore == 'contacts') {
                        newContacts = result.contacts;
                        canLoadMoreContacts = result.canLoadMoreContacts;
                    }
                    if (!loadMore || loadMore == 'noncontacts') {
                        newNonContacts = result.nonContacts;
                        canLoadMoreNonContacts = result.canLoadMoreNonContacts;
                    }
                    return;
                }));
            }
            if (!loadMore || loadMore == 'messages') {
                let limitFrom = 0;
                if (loadMore == 'messages') {
                    limitFrom = this.messages.results.length;
                    this.messages.loadingMore = true;
                }
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].searchMessages(query, undefined, limitFrom).then((result) => {
                    newMessages = result.messages;
                    canLoadMoreMessages = result.canLoadMore;
                    return;
                }));
            }
            try {
                yield Promise.all(promises);
                if (!loadMore) {
                    this.contacts.results = [];
                    this.nonContacts.results = [];
                    this.messages.results = [];
                }
                this.displayResults = true;
                if (!loadMore || loadMore == 'contacts') {
                    this.contacts.results.push(...newContacts);
                    this.contacts.canLoadMore = canLoadMoreContacts;
                    this.setHighlight(newContacts, true);
                }
                if (!loadMore || loadMore == 'noncontacts') {
                    this.nonContacts.results.push(...newNonContacts);
                    this.nonContacts.canLoadMore = canLoadMoreNonContacts;
                    this.setHighlight(newNonContacts, true);
                }
                if (!loadMore || loadMore == 'messages') {
                    this.messages.results.push(...newMessages);
                    this.messages.canLoadMore = canLoadMoreMessages;
                    this.messages.loadMoreError = false;
                    this.setHighlight(newMessages, false);
                }
                if (!loadMore) {
                    if (this.contacts.results.length > 0) {
                        this.openConversation(this.contacts.results[0], true);
                    }
                    else if (this.nonContacts.results.length > 0) {
                        this.openConversation(this.nonContacts.results[0], true);
                    }
                    else if (this.messages.results.length > 0) {
                        this.openConversation(this.messages.results[0], true);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingusers', true);
                if (loadMore == 'messages') {
                    this.messages.loadMoreError = true;
                }
            }
            finally {
                this.disableSearch = false;
                this.displaySearching = false;
                if (loadMore == 'contacts') {
                    this.contacts.loadingMore = false;
                }
                else if (loadMore == 'noncontacts') {
                    this.nonContacts.loadingMore = false;
                }
                else if (loadMore == 'messages') {
                    this.messages.loadingMore = false;
                }
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Open a conversation in the split view.
     *
     * @param result User or message.
     * @param onInit Whether the tser was selected on initial load.
     */
    openConversation(result, onInit = false) {
        if (!onInit || _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet) {
            this.selectedResult = result;
            const params = {};
            if ('conversationid' in result) {
                params.conversationId = result.conversationid;
            }
            else {
                params.userId = result.id;
            }
            const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].isCurrentPathInTablet('**/messages/search/discussion');
            const path = (splitViewLoaded ? '../' : '') + 'discussion';
            _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate(path, { params });
        }
    }
    /**
     * Set the highlight values for each entry.
     *
     * @param results Results to highlight.
     * @param isUser Whether the results are from a user search or from a message search.
     */
    setHighlight(results, isUser = false) {
        results.forEach((result) => {
            result.highlightName = isUser ? this.query : undefined;
            result.highlightMessage = !isUser ? this.query : undefined;
        });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.memberInfoObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonMessagesSearchPage.ctorParameters = () => [];
AddonMessagesSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html")).default,
    })
], AddonMessagesSearchPage);



/***/ }),

/***/ "./src/core/features/courses/pages/search/search.module.ts":
/*!*****************************************************************!*\
  !*** ./src/core/features/courses/pages/search/search.module.ts ***!
  \*****************************************************************/
/*! exports provided: CoreCoursesSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesSearchPageModule", function() { return CoreCoursesSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/core/features/courses/components/components.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search */ "./src/core/features/courses/pages/search/search.ts");
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
        component: _search__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesSearchPage"],
    },
];
let CoreCoursesSearchPageModule = class CoreCoursesSearchPageModule {
};
CoreCoursesSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreCoursesComponentsModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreSearchComponentsModule"],
        ],
        declarations: [
            _search__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesSearchPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCoursesSearchPageModule);



/***/ }),

/***/ "./src/core/features/courses/pages/search/search.ts":
/*!**********************************************************!*\
  !*** ./src/core/features/courses/pages/search/search.ts ***!
  \**********************************************************/
/*! exports provided: CoreCoursesSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesSearchPage", function() { return CoreCoursesSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
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
 * Page that allows searching for courses.
 */
let CoreCoursesSearchPage = class CoreCoursesSearchPage {
    constructor() {
        this.total = 0;
        this.courses = [];
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.page = 0;
        this.currentSearch = '';
    }
    /**
     * Search a new text.
     *
     * @param text The text to search.
     */
    search(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentSearch = text;
            this.courses = [];
            this.page = 0;
            this.total = 0;
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showModalLoading('core.searching', true);
            this.searchCourses().finally(() => {
                modal.dismiss();
            });
        });
    }
    /**
     * Clear search box.
     */
    clearSearch() {
        this.currentSearch = '';
        this.courses = [];
        this.page = 0;
        this.total = 0;
    }
    /**
     * Load more results.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     */
    loadMoreResults(infiniteComplete) {
        this.searchCourses().finally(() => {
            infiniteComplete && infiniteComplete();
        });
    }
    /**
     * Search courses or load the next page of current search.
     *
     * @return Promise resolved when done.
     */
    searchCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            try {
                const response = yield _services_courses__WEBPACK_IMPORTED_MODULE_3__["CoreCourses"].search(this.currentSearch, this.page);
                if (this.page === 0) {
                    this.courses = response.courses;
                }
                else {
                    this.courses = this.courses.concat(response.courses);
                }
                this.total = response.total;
                this.page++;
                this.canLoadMore = this.courses.length < this.total;
            }
            catch (error) {
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorsearching', true);
            }
        });
    }
};
CoreCoursesSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/search/search.html")).default,
    })
], CoreCoursesSearchPage);



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map