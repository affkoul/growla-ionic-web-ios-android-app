(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-35-contacts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts-35/contacts.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts-35/contacts.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.messages.contacts' | translate }}</h1>\n        <ion-buttons slot=\"end\">\n            <!-- Add an empty context menu so discussion page can add items in split view,\n                otherwise the menu disappears in some cases. -->\n            <core-context-menu></core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n\n        <core-search-box (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\"\n            [placeholder]=\"'addon.messages.contactname' | translate\" autocorrect=\"off\" spellcheck=\"false\" lengthCheck=\"2\"\n            [disabled]=\"!loaded\" searchArea=\"AddonMessagesContacts\"></core-search-box>\n\n        <core-loading [hideUntil]=\"loaded\" [message]=\"loadingMessage\">\n            <core-empty-box *ngIf=\"!hasContacts && searchString == ''\" icon=\"fas-address-book\"\n                [message]=\"'addon.messages.contactlistempty' | translate\"></core-empty-box>\n\n            <core-empty-box *ngIf=\"!hasContacts && searchString != ''\" icon=\"fas-address-book\"\n                [message]=\"'addon.messages.nousersfound' | translate\"></core-empty-box>\n\n            <ion-list *ngFor=\"let contactType of contactTypes\" class=\"ion-no-margin\">\n                <ng-container *ngIf=\"contacts[contactType] && (contacts[contactType].length > 0 || contactType === searchType)\">\n                    <ion-item-divider>\n                        <ion-label><p class=\"item-heading\">{{ 'addon.messages.type_' + contactType | translate }}</p></ion-label>\n                        <ion-note slot=\"end\" class=\"ion-padding-end\"><ion-badge>{{ contacts[contactType].length }}</ion-badge></ion-note>\n                    </ion-item-divider>\n                    <ng-container *ngFor=\"let contact of contacts[contactType]\">\n                        <!-- Don't show deleted users -->\n                        <ion-item class=\"ion-text-wrap addon-messages-conversation-item\"\n                            *ngIf=\"contact.profileimageurl || contact.profileimageurlsmall\"\n                            [attr.aria-label]=\"contact.fullname\" (click)=\"gotoDiscussion(contact.id)\" detail=\"true\" button\n                            [attr.aria-current]=\"contact.id == discussionUserId ? 'page' : 'false'\">\n                            <core-user-avatar [user]=\"contact\" slot=\"start\" [checkOnline]=\"contact.showonlinestatus\"></core-user-avatar>\n                            <ion-label><p class=\"item-heading\">{{ contact.fullname }}</p></ion-label>\n                        </ion-item>\n                    </ng-container>\n                </ng-container>\n            </ion-list>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/messages/pages/contacts-35/contacts.module.ts":
/*!******************************************************************!*\
  !*** ./src/addons/messages/pages/contacts-35/contacts.module.ts ***!
  \******************************************************************/
/*! exports provided: AddonMessagesContacts35PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesContacts35PageModule", function() { return AddonMessagesContacts35PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addons/messages/messages-lazy.module */ "./src/addons/messages/messages-lazy.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts.page */ "./src/addons/messages/pages/contacts-35/contacts.page.ts");
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
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesContacts35Page"],
    },
    _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionRoute"],
];
const tabletRoutes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesContacts35Page"],
        children: [
            _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionRoute"],
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
];
let AddonMessagesContacts35PageModule = class AddonMessagesContacts35PageModule {
};
AddonMessagesContacts35PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreSearchComponentsModule"],
        ],
        declarations: [
            _contacts_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesContacts35Page"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesContacts35PageModule);



/***/ }),

/***/ "./src/addons/messages/pages/contacts-35/contacts.page.ts":
/*!****************************************************************!*\
  !*** ./src/addons/messages/pages/contacts-35/contacts.page.ts ***!
  \****************************************************************/
/*! exports provided: AddonMessagesContacts35Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesContacts35Page", function() { return AddonMessagesContacts35Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the list of contacts.
 */
let AddonMessagesContacts35Page = class AddonMessagesContacts35Page {
    constructor(route) {
        this.route = route;
        this.noSearchTypes = ['online', 'offline', 'blocked', 'strangers'];
        this.loaded = false;
        this.contactTypes = ['online', 'offline', 'blocked', 'strangers'];
        this.searchType = 'search';
        this.loadingMessage = '';
        this.hasContacts = false;
        this.contacts = {
            online: [],
            offline: [],
            strangers: [],
            search: [],
        };
        this.searchString = '';
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId();
        this.searchingMessages = _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.searching');
        this.loadingMessages = _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.loading');
        this.loadingMessage = this.loadingMessages;
        // Refresh the list when a contact request is confirmed.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.contactRequestConfirmed) {
                this.refreshData();
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const discussionUserId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('discussionUserId') ||
                _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('userId') || undefined;
            if (this.loaded && this.discussionUserId == discussionUserId) {
                return;
            }
            this.discussionUserId = discussionUserId;
            if (this.discussionUserId) {
                // There is a discussion to load, open the discussion in a new state.
                this.gotoDiscussion(this.discussionUserId);
            }
            try {
                yield this.fetchData();
                if (!this.discussionUserId && this.hasContacts && _services_screen__WEBPACK_IMPORTED_MODULE_9__["CoreScreen"].isTablet) {
                    let contact;
                    for (const x in this.contacts) {
                        if (this.contacts[x].length > 0) {
                            contact = this.contacts[x][0];
                            break;
                        }
                    }
                    if (contact) {
                        // Take first and load it.
                        this.gotoDiscussion(contact.id);
                    }
                }
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
     * @return Promise resolved when done.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.searchString) {
                    // User has searched, update the search.
                    yield this.performSearch(this.searchString);
                }
                else {
                    // Update contacts.
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_3__["AddonMessages"].invalidateAllContactsCache();
                    yield this.fetchData();
                }
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Fetch contacts.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingMessage = this.loadingMessages;
            try {
                const contacts = yield _services_messages__WEBPACK_IMPORTED_MODULE_3__["AddonMessages"].getAllContacts();
                for (const x in contacts) {
                    if (contacts[x].length > 0) {
                        this.contacts[x] = this.sortUsers(contacts[x]);
                    }
                    else {
                        this.contacts[x] = [];
                    }
                }
                this.clearSearch();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
            }
        });
    }
    /**
     * Sort user list by fullname
     *
     * @param list List to sort.
     * @return Sorted list.
     */
    sortUsers(list) {
        return list.sort((a, b) => {
            const compareA = a.fullname.toLowerCase();
            const compareB = b.fullname.toLowerCase();
            return compareA.localeCompare(compareB);
        });
    }
    /**
     * Clear search and show all contacts again.
     */
    clearSearch() {
        this.searchString = ''; // Reset searched string.
        this.contactTypes = this.noSearchTypes;
        this.hasContacts = false;
        for (const x in this.contacts) {
            if (this.contacts[x].length > 0) {
                this.hasContacts = true;
                return;
            }
        }
    }
    /**
     * Search users from the UI.
     *
     * @param query Text to search for.
     * @return Resolved when done.
     */
    search(query) {
        _services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.searchingMessages;
        return this.performSearch(query).finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Perform the search of users.
     *
     * @param query Text to search for.
     * @return Resolved when done.
     */
    performSearch(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_3__["AddonMessages"].searchContacts(query);
                this.hasContacts = result.length > 0;
                this.searchString = query;
                this.contactTypes = ['search'];
                this.contacts.search = this.sortUsers(result);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
            }
        });
    }
    /**
     * Navigate to a particular discussion.
     *
     * @param discussionUserId Discussion Id to load.
     */
    gotoDiscussion(discussionUserId) {
        this.discussionUserId = discussionUserId;
        const params = {
            userId: discussionUserId,
        };
        const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].isCurrentPathInTablet('**/messages/contacts-35/discussion');
        const path = (splitViewLoaded ? '../' : '') + 'discussion';
        // @todo Check why this is failing on ngInit.
        _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].navigate(path, { params });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.memberInfoObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonMessagesContacts35Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
AddonMessagesContacts35Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'addon-messages-contacts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contacts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts-35/contacts.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../messages-common.scss */ "./src/addons/messages/messages-common.scss")).default]
    })
], AddonMessagesContacts35Page);



/***/ })

}]);
//# sourceMappingURL=pages-contacts-35-contacts-module.js.map