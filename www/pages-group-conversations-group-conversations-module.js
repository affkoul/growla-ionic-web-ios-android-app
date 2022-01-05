(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-conversations-group-conversations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/group-conversations/group-conversations.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/group-conversations/group-conversations.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.messages.messages' | translate }}</h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"gotoSearch()\" [attr.aria-label]=\"'addon.messages.searchcombined' | translate\">\n                <ion-icon name=\"fas-search\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"gotoSettings()\" [attr.aria-label]=\"'addon.messages.messagepreferences' | translate\">\n                <ion-icon name=\"fas-cog\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <!-- Add an empty context menu so discussion page can add items in split view,\n                otherwise the menu disappears in some cases. -->\n            <core-context-menu></core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded || !currentListEl\" (ionRefresh)=\"refreshData($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n\n        <core-loading [hideUntil]=\"loaded\" [message]=\"loadingMessage\">\n            <ion-list>\n                <ion-item class=\"ion-text-wrap addon-message-discussion\" (click)=\"gotoContacts()\" detail=\"true\" button>\n                    <ion-icon name=\"fas-address-book\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label><h2>{{ 'addon.messages.contacts' | translate }}</h2></ion-label>\n                    <ion-badge *ngIf=\"contactRequestsCount > 0\" slot=\"end\" aria-hidden=\"true\">{{contactRequestsCount}}</ion-badge>\n                    <span *ngIf=\"contactRequestsCount > 0\" class=\"sr-only\">\n                        {{ 'addon.messages.pendingcontactrequests' | translate:{$a: contactRequestsCount} }}\n                    </span>\n                </ion-item>\n                <!-- Favourite conversations. -->\n                <ion-item\n                    button\n                    class=\"ion-text-wrap divider\"\n                    (click)=\"toggle(favourites)\"\n                    sticky=\"true\"\n                    [attr.aria-label]=\"(favourites.expanded ? 'core.collapse' : 'core.expand') | translate\"\n                    [attr.aria-expanded]=\"favourites.expanded\"\n                    aria-controls=\"addon-messages-groupconversations-favourite\"\n                    role=\"heading\"\n                    detail=\"false\"\n                >\n                    <ion-icon *ngIf=\"!favourites.expanded\" name=\"fas-caret-right\" flip-rtl slot=\"start\" aria-hidden=\"true\">\n                    </ion-icon>\n                    <ion-icon *ngIf=\"favourites.expanded\" name=\"fas-caret-down\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label><h2>{{ 'core.favourites' | translate }} ({{ favourites.count }})</h2></ion-label>\n                    <ion-badge slot=\"end\" *ngIf=\"favourites.unread\" aria-hidden=\"true\">{{ favourites.unread }}</ion-badge>\n                    <span *ngIf=\"favourites.unread\" class=\"sr-only\">\n                        {{ 'addon.messages.unreadconversations' | translate:{$a: favourites.unread} }}\n                    </span>\n                </ion-item>\n                <div [hidden]=\"!favourites.conversations || !favourites.expanded || favourites.loading\" #favlist\n                    id=\"addon-messages-groupconversations-favourite\">\n                    <ng-container *ngTemplateOutlet=\"conversationsTemplate; context: {conversations: favourites.conversations}\">\n                    </ng-container>\n                    <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\n                    <core-infinite-loading [enabled]=\"favourites.canLoadMore\" (action)=\"loadMoreConversations(favourites, $event)\"\n                        [error]=\"favourites.loadMoreError\"></core-infinite-loading>\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"favourites.conversations && favourites.conversations.length == 0\">\n                        <ion-label><p>{{ 'addon.messages.nofavourites' | translate }}</p></ion-label>\n                    </ion-item>\n                </div>\n                <ion-item class=\"ion-text-center\" *ngIf=\"favourites.loading\">\n                    <ion-label><ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner></ion-label>\n                </ion-item>\n\n                <!-- Group conversations. -->\n                <ion-item\n                    button\n                    class=\"divider ion-text-wrap\"\n                    (click)=\"toggle(group)\"\n                    sticky=\"true\"\n                    [attr.aria-label]=\"(group.expanded ? 'core.collapse' : 'core.expand') | translate\"\n                    [attr.aria-expanded]=\"group.expanded\"\n                    aria-controls=\"addon-messages-groupconversations-group\"\n                    role=\"heading\"\n                    detail=\"false\"\n                >\n                    <ion-icon *ngIf=\"!group.expanded\" name=\"fas-caret-right\" flip-rtl slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-icon *ngIf=\"group.expanded\" name=\"fas-caret-down\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label><h2>{{ 'addon.messages.groupconversations' | translate }} ({{ group.count }})</h2></ion-label>\n                    <ion-badge slot=\"end\" *ngIf=\"group.unread\" aria-hidden=\"true\">{{ group.unread }}</ion-badge>\n                    <span *ngIf=\"group.unread\" class=\"sr-only\">\n                        {{ 'addon.messages.unreadconversations' | translate:{$a: group.unread} }}\n                    </span>\n                </ion-item>\n                <div [hidden]=\"!group.conversations || !group.expanded || group.loading\" #grouplist\n                    id=\"addon-messages-groupconversations-group\">\n                    <ng-container *ngTemplateOutlet=\"conversationsTemplate; context: {conversations: group.conversations}\">\n                    </ng-container>\n                    <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\n                    <core-infinite-loading [enabled]=\"group.canLoadMore\" (action)=\"loadMoreConversations(group, $event)\"\n                        [error]=\"group.loadMoreError\"></core-infinite-loading>\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"group.conversations && group.conversations.length == 0\">\n                        <ion-label><p>{{ 'addon.messages.nogroupconversations' | translate }}</p></ion-label>\n                    </ion-item>\n                </div>\n                <ion-item class=\"ion-text-center\" *ngIf=\"group.loading\">\n                    <ion-label><ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner></ion-label>\n                </ion-item>\n\n                <ion-item\n                    button\n                    class=\"divider ion-text-wrap\"\n                    (click)=\"toggle(individual)\"\n                    sticky=\"true\"\n                    [attr.aria-label]=\"(individual.expanded ? 'core.collapse' : 'core.expand') | translate\"\n                    [attr.aria-expanded]=\"individual.expanded\"\n                    aria-controls=\"addon-messages-groupconversations-individual\"\n                    role=\"heading\"\n                    detail=\"false\"\n                >\n                    <ion-icon *ngIf=\"!individual.expanded\" name=\"fas-caret-right\" flip-rtl slot=\"start\" aria-hidden=\"true\">\n                    </ion-icon>\n                    <ion-icon *ngIf=\"individual.expanded\" name=\"fas-caret-down\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label>\n                        <h2>{{ 'addon.messages.individualconversations' | translate }} ({{ individual.count }})</h2>\n                    </ion-label>\n                    <ion-badge slot=\"end\" *ngIf=\"individual.unread\" aria-hidden=\"true\">{{ individual.unread }}</ion-badge>\n                    <span *ngIf=\"individual.unread\" class=\"sr-only\">\n                        {{ 'addon.messages.unreadconversations' | translate:{$a: individual.unread} }}\n                    </span>\n                </ion-item>\n                <div [hidden]=\"!individual.conversations || !individual.expanded || individual.loading\" #indlist\n                    id=\"addon-messages-groupconversations-individual\">\n                    <ng-container *ngTemplateOutlet=\"conversationsTemplate; context: {conversations: individual.conversations}\">\n                    </ng-container>\n                    <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\n                    <core-infinite-loading [enabled]=\"individual.canLoadMore\" (action)=\"loadMoreConversations(individual, $event)\"\n                        [error]=\"individual.loadMoreError\"></core-infinite-loading>\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"individual.conversations && individual.conversations.length == 0\">\n                        <ion-label><p>{{ 'addon.messages.noindividualconversations' | translate }}</p></ion-label>\n                    </ion-item>\n                </div>\n                <ion-item class=\"ion-text-center\" *ngIf=\"individual.loading\">\n                    <ion-label><ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner></ion-label>\n                </ion-item>\n\n            </ion-list>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n\n<!-- Template to render a list of conversations. -->\n<ng-template #conversationsTemplate let-conversations=\"conversations\">\n    <ion-item class=\"ion-text-wrap addon-message-discussion\" *ngFor=\"let conversation of conversations\" button detail=\"false\"\n        [attr.aria-label]=\"conversation.name\" (click)=\"gotoConversation(conversation.id, conversation.userid)\"\n        [attr.aria-current]=\"((conversation.id && conversation.id == selectedConversationId) ||\n            (conversation.userid && conversation.userid == selectedUserId)) ? 'page': 'false'\"\n        id=\"addon-message-conversation-{{ conversation.id ? conversation.id : 'user-' + conversation.userid }}\">\n        <!-- Group conversation image. -->\n        <ion-avatar slot=\"start\" *ngIf=\"conversation.type == typeGroup\">\n            <img [src]=\"conversation.imageurl\" [alt]=\"conversation.name\" core-external-content\n            onError=\"this.src='assets/img/group-avatar.png'\">\n        </ion-avatar>\n\n        <!-- Avatar for individual conversations. -->\n        <core-user-avatar *ngIf=\"conversation.type != typeGroup\" core-user-avatar [user]=\"conversation.otherUser\"\n            [linkProfile]=\"false\" [checkOnline]=\"conversation.showonlinestatus\" slot=\"start\"></core-user-avatar>\n\n        <ion-label>\n            <div class=\"flex-row ion-justify-content-between\">\n                <p class=\"item-heading\">\n                    <core-format-text [text]=\"conversation.name\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\n                    <ion-icon name=\"fas-user-slash\" *ngIf=\"conversation.isblocked\"\n                        [title]=\"'addon.messages.contactblocked' | translate\"></ion-icon>\n                    <ion-icon *ngIf=\"conversation.ismuted\" name=\"fas-volume-mute\"\n                        [title]=\"'addon.messages.mutedconversation' | translate\"></ion-icon>\n                </p>\n                <ion-note *ngIf=\"conversation.lastmessagedate > 0 || conversation.unreadcount\">\n                    <span *ngIf=\"conversation.lastmessagedate > 0\" class=\"addon-message-last-message-date\">\n                        {{conversation.lastmessagedate | coreDateDayOrTime}}\n                    </span>\n                    <ion-badge *ngIf=\"conversation.unreadcount > 0\" aria-label=\"true\">{{ conversation.unreadcount }}</ion-badge>\n                    <span *ngIf=\"conversation.unreadcount > 0\" class=\"sr-only\">\n                        {{ 'addon.messages.unreadmessages' | translate:{$a: conversation.unreadcount} }}\n                    </span>\n                </ion-note>\n            </div>\n            <p *ngIf=\"conversation.subname\"><core-format-text [text]=\"conversation.subname\" contextLevel=\"system\"\n                [contextInstanceId]=\"0\"></core-format-text></p>\n            <p class=\"addon-message-last-message\">\n                <span *ngIf=\"conversation.sentfromcurrentuser\" class=\"addon-message-last-message-user\">\n                    {{ 'addon.messages.you' | translate }}\n                </span>\n                <span *ngIf=\"!conversation.sentfromcurrentuser && conversation.type == typeGroup && conversation.members[0]\"\n                    class=\"addon-message-last-message-user\">{{ conversation.members[0].fullname + ':' }}</span>\n                <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"conversation.lastmessage\"\n                    class=\"addon-message-last-message-text\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\n            </p>\n        </ion-label>\n    </ion-item>\n</ng-template>\n");

/***/ }),

/***/ "./src/addons/messages/pages/group-conversations/group-conversations.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/addons/messages/pages/group-conversations/group-conversations.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddonMessagesGroupConversationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesGroupConversationsPageModule", function() { return AddonMessagesGroupConversationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addons/messages/messages-lazy.module */ "./src/addons/messages/messages-lazy.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _group_conversations_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-conversations.page */ "./src/addons/messages/pages/group-conversations/group-conversations.page.ts");
/* harmony import */ var _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/messages/services/handlers/mainmenu */ "./src/addons/messages/services/handlers/mainmenu.ts");
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
        data: {
            mainMenuTabRoot: _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesMainMenuHandlerService"].PAGE_NAME,
        },
        component: _group_conversations_page__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesGroupConversationsPage"],
    },
    _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionRoute"],
];
const tabletRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesMainMenuHandlerService"].PAGE_NAME,
        },
        component: _group_conversations_page__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesGroupConversationsPage"],
        children: [
            _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionRoute"],
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
];
let AddonMessagesGroupConversationsPageModule = class AddonMessagesGroupConversationsPageModule {
};
AddonMessagesGroupConversationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
        ],
        declarations: [
            _group_conversations_page__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesGroupConversationsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesGroupConversationsPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/group-conversations/group-conversations.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/addons/messages/pages/group-conversations/group-conversations.page.ts ***!
  \***********************************************************************************/
/*! exports provided: AddonMessagesGroupConversationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesGroupConversationsPage", function() { return AddonMessagesGroupConversationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages-offline */ "./src/addons/messages/services/messages-offline.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/pushnotifications/services/push-delegate */ "./src/core/features/pushnotifications/services/push-delegate.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
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
 * Page that displays the list of conversations, including group conversations.
 */
let AddonMessagesGroupConversationsPage = class AddonMessagesGroupConversationsPage {
    constructor(route) {
        this.route = route;
        this.loaded = false;
        this.contactRequestsCount = 0;
        this.favourites = {
            type: undefined,
            favourites: true,
            count: 0,
            unread: 0,
            conversations: [],
        };
        this.group = {
            type: _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP,
            favourites: false,
            count: 0,
            unread: 0,
            conversations: [],
        };
        this.individual = {
            type: _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
            favourites: false,
            count: 0,
            unread: 0,
            conversations: [],
        };
        this.typeGroup = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP;
        this.loadingMessage = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.loading');
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        // Update conversations when new message is received.
        this.newMessagesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, (data) => {
            var _a;
            // Check if the new message belongs to the option that is currently expanded.
            const expandedOption = this.getExpandedOption();
            const messageOption = this.getConversationOption(data);
            if (expandedOption != messageOption) {
                return; // Message doesn't belong to current list, stop.
            }
            // Search the conversation to update.
            const conversation = this.findConversation(data.conversationId, data.userId, expandedOption);
            if (typeof conversation == 'undefined') {
                // Probably a new conversation, refresh the list.
                this.loaded = false;
                this.refreshData().finally(() => {
                    this.loaded = true;
                });
                return;
            }
            if (conversation.lastmessage != data.message || conversation.lastmessagedate != data.timecreated / 1000) {
                const isNewer = data.timecreated / 1000 > (conversation.lastmessagedate || 0);
                // An existing conversation has a new message, update the last message.
                conversation.lastmessage = data.message;
                conversation.lastmessagedate = data.timecreated / 1000;
                // Sort the affected list.
                const option = this.getConversationOption(conversation);
                option.conversations = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortConversations(option.conversations || []);
                if (isNewer) {
                    // The last message is newer than the previous one, scroll to top to keep viewing the conversation.
                    (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                }
            }
        }, this.siteId);
        // Update conversations when a message is read.
        this.readChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].READ_CHANGED_EVENT, (data) => {
            if (data.conversationId) {
                const conversation = this.findConversation(data.conversationId);
                if (typeof conversation != 'undefined') {
                    // A conversation has been read reset counter.
                    conversation.unreadcount = 0;
                    // Conversations changed, invalidate them and refresh unread counts.
                    _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversations(this.siteId);
                    _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].refreshUnreadConversationCounts(this.siteId);
                }
            }
        }, this.siteId);
        // Load a discussion if we receive an event to do so.
        this.openConversationObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].OPEN_CONVERSATION_EVENT, (data) => {
            if (data.conversationId || data.userId) {
                this.gotoConversation(data.conversationId, data.userId);
            }
        }, this.siteId);
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = _singletons__WEBPACK_IMPORTED_MODULE_10__["Platform"].resume.subscribe(() => {
            if (!this.loaded) {
                return;
            }
            this.loaded = false;
            this.refreshData().finally(() => {
                this.loaded = true;
            });
        });
        // Update conversations if we receive an event to do so.
        this.updateConversationListObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, (data) => {
            if (data && data.action == 'mute') {
                // If the conversation is displayed, change its muted value.
                const expandedOption = this.getExpandedOption();
                if (expandedOption && expandedOption.conversations) {
                    const conversation = this.findConversation(data.conversationId, undefined, expandedOption);
                    if (conversation) {
                        conversation.ismuted = !!data.value;
                    }
                }
                return;
            }
            this.refreshData();
        }, this.siteId);
        // If a message push notification is received, refresh the view.
        this.pushObserver = _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__["CorePushNotificationsDelegate"].on('receive')
            .subscribe((notification) => {
            // New message received. If it's from current site, refresh the data.
            if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].isFalseOrZero(notification.notif) && notification.site == this.siteId) {
                // Don't refresh unread counts, it's refreshed from the main menu handler in this case.
                this.refreshData(undefined, false);
            }
        });
        // Update unread conversation counts.
        this.cronObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UNREAD_CONVERSATION_COUNTS_EVENT, (data) => {
            this.favourites.unread = data.favourites;
            this.individual.unread = data.individual + data.self; // Self is only returned if it's not favourite.
            this.group.unread = data.group;
        }, this.siteId);
        // Update the contact requests badge.
        this.contactRequestsCountObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].CONTACT_REQUESTS_COUNT_EVENT, (data) => {
            this.contactRequestsCount = data.count;
        }, this.siteId);
        // Update block status of a user.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (!data.userBlocked && !data.userUnblocked) {
                // The block status has not changed, ignore.
                return;
            }
            const expandedOption = this.getExpandedOption();
            if (expandedOption == this.individual || expandedOption == this.favourites) {
                if (!expandedOption.conversations || expandedOption.conversations.length <= 0) {
                    return;
                }
                const conversation = this.findConversation(undefined, data.userId, expandedOption);
                if (conversation) {
                    conversation.isblocked = data.userBlocked;
                }
            }
        }, this.siteId);
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // When a child page loads this callback is triggered too.
                const conversationId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('conversationId', { params });
                const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('userId', { params });
                if (conversationId || userId) {
                    // Update the selected ones.
                    this.selectedConversationId = conversationId;
                    this.selectedUserId = userId;
                }
            }));
            yield this.fetchData();
            if (!this.selectedConversationId && !this.selectedUserId && _services_screen__WEBPACK_IMPORTED_MODULE_14__["CoreScreen"].isTablet) {
                // Load the first conversation.
                let conversation;
                const expandedOption = this.getExpandedOption();
                if (expandedOption && expandedOption.conversations.length) {
                    conversation = expandedOption.conversations[0];
                    if (conversation) {
                        this.gotoConversation(conversation.id);
                    }
                }
            }
        });
    }
    /**
     * Fetch conversations.
     *
     * @param refreshUnreadCounts Whether to refresh unread counts.
     * @return Promise resolved when done.
     */
    fetchData(refreshUnreadCounts = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Load the amount of conversations and contact requests.
            const promises = [];
            promises.push(this.fetchConversationCounts());
            // View updated by the events observers.
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getContactRequestsCount(this.siteId));
            if (refreshUnreadCounts) {
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].refreshUnreadConversationCounts(this.siteId));
            }
            try {
                yield Promise.all(promises);
                // The expanded status hasn't been initialized. Do it now.
                if (typeof this.favourites.expanded == 'undefined' && (this.selectedConversationId || this.selectedUserId)) {
                    // A certain conversation should be opened.
                    // We don't know which option it belongs to, so we need to fetch the data for all of them.
                    const promises = [];
                    promises.push(this.fetchDataForOption(this.favourites, false));
                    promises.push(this.fetchDataForOption(this.group, false));
                    promises.push(this.fetchDataForOption(this.individual, false));
                    yield Promise.all(promises);
                    // All conversations have been loaded, find the one we need to load and expand its option.
                    const conversation = this.findConversation(this.selectedConversationId, this.selectedUserId);
                    if (conversation) {
                        const option = this.getConversationOption(conversation);
                        yield this.expandOption(option);
                        this.loaded = true;
                        return;
                    }
                }
                // Load the data for the expanded option.
                yield this.fetchDataForExpandedOption();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
            }
            this.loaded = true;
        });
    }
    /**
     * Fetch data for the expanded option.
     *
     * @return Promise resolved when done.
     */
    fetchDataForExpandedOption() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (typeof this.favourites.expanded == 'undefined') {
                // Calculate which option should be expanded initially.
                this.favourites.expanded = this.favourites.count != 0 && !this.group.unread && !this.individual.unread;
                this.group.expanded = !this.favourites.expanded && this.group.count != 0 && !this.individual.unread;
                this.individual.expanded = !this.favourites.expanded && !this.group.expanded;
            }
            this.loadCurrentListElement();
            const expandedOption = this.getExpandedOption();
            if (expandedOption) {
                yield this.fetchDataForOption(expandedOption, false);
            }
        });
    }
    /**
     * Fetch data for a certain option.
     *
     * @param option The option to fetch data for.
     * @param loadingMore Whether we are loading more data or just the first ones.
     * @param getCounts Whether to get counts data.
     * @return Promise resolved when done.
     */
    fetchDataForOption(option, loadingMore = false, getCounts = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            option.loadMoreError = false;
            const limitFrom = loadingMore ? option.conversations.length : 0;
            const promises = [];
            let data = {
                conversations: [],
                canLoadMore: false,
            };
            let offlineMessages = [];
            // Get the conversations and, if needed, the offline messages. Always try to get the latest data.
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversations(this.siteId).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversations(option.type, option.favourites, limitFrom, this.siteId);
                return;
            })));
            if (!loadingMore) {
                promises.push(_services_messages_offline__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesOffline"].getAllMessages().then((messages) => {
                    offlineMessages = messages;
                    return;
                }));
            }
            if (getCounts) {
                promises.push(this.fetchConversationCounts());
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].refreshUnreadConversationCounts(this.siteId));
            }
            yield Promise.all(promises);
            if (loadingMore) {
                option.conversations = option.conversations.concat(data.conversations);
                option.canLoadMore = data.canLoadMore;
            }
            else {
                option.conversations = data.conversations;
                option.canLoadMore = data.canLoadMore;
                if (offlineMessages && offlineMessages.length) {
                    yield this.loadOfflineMessages(option, offlineMessages);
                    // Sort the conversations, the offline messages could affect the order.
                    option.conversations = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortConversations(option.conversations);
                }
            }
        });
    }
    /**
     * Fetch conversation counts.
     *
     * @return Promise resolved when done.
     */
    fetchConversationCounts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Always try to get the latest data.
            yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversationCounts(this.siteId);
            const counts = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationCounts(this.siteId);
            this.favourites.count = counts.favourites;
            this.individual.count = counts.individual + counts.self; // Self is only returned if it's not favourite.
            this.group.count = counts.group;
        });
    }
    /**
     * Find a conversation in the list of loaded conversations.
     *
     * @param conversationId The conversation ID to search.
     * @param userId User ID to search (if no conversationId).
     * @param option The option to search in. If not defined, search in all options.
     * @return Conversation.
     */
    findConversation(conversationId, userId, option) {
        if (conversationId) {
            const conversations = option
                ? option.conversations
                : (this.favourites.conversations.concat(this.group.conversations).concat(this.individual.conversations));
            return conversations.find((conv) => conv.id == conversationId);
        }
        const conversations = option
            ? option.conversations
            : this.favourites.conversations.concat(this.individual.conversations);
        return conversations.find((conv) => conv.userid == userId);
    }
    /**
     * Get the option that is currently expanded, undefined if they are all collapsed.
     *
     * @return Option currently expanded.
     */
    getExpandedOption() {
        if (this.favourites.expanded) {
            return this.favourites;
        }
        else if (this.group.expanded) {
            return this.group;
        }
        else if (this.individual.expanded) {
            return this.individual;
        }
    }
    /**
     * Navigate to contacts view.
     */
    gotoContacts() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigateToSitePath('contacts');
    }
    /**
     * Navigate to a particular conversation.
     *
     * @param conversationId Conversation Id to load.
     * @param userId User of the conversation. Only if there is no conversationId.
     * @param messageId Message to scroll after loading the discussion. Used when searching.
     */
    gotoConversation(conversationId, userId, messageId) {
        this.selectedConversationId = conversationId;
        this.selectedUserId = userId;
        const params = {};
        if (conversationId) {
            params.conversationId = conversationId;
        }
        if (userId) {
            params.userId = userId;
        }
        if (messageId) {
            params.message = messageId;
        }
        const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].isCurrentPathInTablet('**/messages/group-conversations/discussion');
        const path = (splitViewLoaded ? '../' : '') + 'discussion';
        _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigate(path, { params });
    }
    /**
     * Navigate to message settings.
     */
    gotoSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigateToSitePath('../preferences');
    }
    /**
     * Function to load more conversations.
     *
     * @param option The option to fetch data for.
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Promise resolved when done.
     */
    loadMoreConversations(option, infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchDataForOption(option, true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
                option.loadMoreError = true;
            }
            infiniteComplete && infiniteComplete();
        });
    }
    /**
     * Load offline messages into the conversations.
     *
     * @param option The option where the messages should be loaded.
     * @param messages Offline messages.
     * @return Promise resolved when done.
     */
    loadOfflineMessages(option, messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            messages.forEach((message) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                if ('conversationid' in message) {
                    // It's an existing conversation. Search it in the current option.
                    let conversation = this.findConversation(message.conversationid, undefined, option);
                    if (conversation) {
                        // Check if it's the last message. Offline messages are considered more recent than sent messages.
                        if (typeof conversation.lastmessage === 'undefined' || conversation.lastmessage === null ||
                            !conversation.lastmessagepending || (conversation.lastmessagedate || 0) <= message.timecreated / 1000) {
                            this.addLastOfflineMessage(conversation, message);
                        }
                    }
                    else {
                        // Conversation not found, it could be an old one or the message could belong to another option.
                        conversation = {
                            id: message.conversationid,
                            type: ((_a = message.conversation) === null || _a === void 0 ? void 0 : _a.type) || _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
                            membercount: ((_b = message.conversation) === null || _b === void 0 ? void 0 : _b.membercount) || 0,
                            ismuted: ((_c = message.conversation) === null || _c === void 0 ? void 0 : _c.ismuted) || false,
                            isfavourite: ((_d = message.conversation) === null || _d === void 0 ? void 0 : _d.isfavourite) || false,
                            isread: ((_e = message.conversation) === null || _e === void 0 ? void 0 : _e.isread) || false,
                            members: ((_f = message.conversation) === null || _f === void 0 ? void 0 : _f.members) || [],
                            messages: ((_g = message.conversation) === null || _g === void 0 ? void 0 : _g.messages) || [],
                            candeletemessagesforallusers: ((_h = message.conversation) === null || _h === void 0 ? void 0 : _h.candeletemessagesforallusers) || false,
                            userid: 0,
                            name: (_j = message.conversation) === null || _j === void 0 ? void 0 : _j.name,
                            imageurl: ((_k = message.conversation) === null || _k === void 0 ? void 0 : _k.imageurl) || '',
                        };
                        if (this.getConversationOption(conversation) == option) {
                            // Message belongs to current option, add the conversation.
                            this.addLastOfflineMessage(conversation, message);
                            this.addOfflineConversation(conversation);
                        }
                    }
                }
                else if (option.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL) {
                    // It's a new conversation. Check if we already created it (there is more than one message for the same user).
                    const conversation = this.findConversation(undefined, message.touserid, option);
                    message.text = message.smallmessage;
                    if (conversation) {
                        // Check if it's the last message. Offline messages are considered more recent than sent messages.
                        if ((conversation.lastmessagedate || 0) <= message.timecreated / 1000) {
                            this.addLastOfflineMessage(conversation, message);
                        }
                    }
                    else {
                        // Get the user data and create a new conversation if it belongs to the current option.
                        promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(message.touserid, undefined, true).catch(() => {
                            // User not found.
                        }).then((user) => {
                            const conversation = {
                                id: 0,
                                type: _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
                                membercount: 0,
                                ismuted: false,
                                isfavourite: false,
                                isread: false,
                                members: [],
                                messages: [],
                                candeletemessagesforallusers: false,
                                userid: message.touserid,
                                name: user ? user.fullname : String(message.touserid),
                                imageurl: user ? user.profileimageurl : '',
                            };
                            this.addLastOfflineMessage(conversation, message);
                            this.addOfflineConversation(conversation);
                            return;
                        }));
                    }
                }
            });
            yield Promise.all(promises);
        });
    }
    /**
     * Add an offline conversation into the right list of conversations.
     *
     * @param conversation Offline conversation to add.
     */
    addOfflineConversation(conversation) {
        const option = this.getConversationOption(conversation);
        option.conversations.unshift(conversation);
    }
    /**
     * Add a last offline message into a conversation.
     *
     * @param conversation Conversation where to put the last message.
     * @param message Offline message to add.
     */
    addLastOfflineMessage(conversation, message) {
        conversation.lastmessage = message.text;
        conversation.lastmessagedate = message.timecreated / 1000;
        conversation.lastmessagepending = true;
        conversation.sentfromcurrentuser = true;
    }
    /**
     * Given a conversation, return its option (favourites, group, individual).
     *
     * @param conversation Conversation to check.
     * @return Option object.
     */
    getConversationOption(conversation) {
        if (conversation.isfavourite) {
            return this.favourites;
        }
        if (conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP) {
            return this.group;
        }
        return this.individual;
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param refreshUnreadCounts Whether to refresh unread counts.
     * @return Promise resolved when done.
     */
    refreshData(refresher, refreshUnreadCounts = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Don't invalidate conversations and so, they always try to get latest data.
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateContactRequestsCountCache(this.siteId);
            }
            finally {
                try {
                    yield this.fetchData(refreshUnreadCounts);
                }
                finally {
                    if (refresher) {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    }
                }
            }
        });
    }
    /**
     * Toogle the visibility of an option (expand/collapse).
     *
     * @param option The option to expand/collapse.
     */
    toggle(option) {
        if (option.expanded) {
            // Already expanded, close it.
            option.expanded = false;
            this.loadCurrentListElement();
        }
        else {
            // Pass getCounts=true to update the counts everytime the user expands an option.
            this.expandOption(option, true).catch((error) => {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
            });
        }
    }
    /**
     * Expand a certain option.
     *
     * @param option The option to expand.
     * @param getCounts Whether to get counts data.
     * @return Promise resolved when done.
     */
    expandOption(option, getCounts = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Collapse all and expand the right one.
            this.favourites.expanded = false;
            this.group.expanded = false;
            this.individual.expanded = false;
            option.expanded = true;
            option.loading = true;
            try {
                yield this.fetchDataForOption(option, false, getCounts);
                this.loadCurrentListElement();
            }
            catch (error) {
                option.expanded = false;
                throw error;
            }
            finally {
                option.loading = false;
            }
        });
    }
    /**
     * Load the current list element based on the expanded list.
     */
    loadCurrentListElement() {
        if (this.favourites.expanded) {
            this.currentListEl = this.favListEl && this.favListEl.nativeElement;
        }
        else if (this.group.expanded) {
            this.currentListEl = this.groupListEl && this.groupListEl.nativeElement;
        }
        else if (this.individual.expanded) {
            this.currentListEl = this.indListEl && this.indListEl.nativeElement;
        }
        else {
            this.currentListEl = undefined;
        }
    }
    /**
     * Navigate to the search page.
     */
    gotoSearch() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigateToSitePath('search');
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        (_a = this.newMessagesObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.appResumeSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.pushObserver) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.readChangedObserver) === null || _d === void 0 ? void 0 : _d.off();
        (_e = this.cronObserver) === null || _e === void 0 ? void 0 : _e.off();
        (_f = this.openConversationObserver) === null || _f === void 0 ? void 0 : _f.off();
        (_g = this.updateConversationListObserver) === null || _g === void 0 ? void 0 : _g.off();
        (_h = this.contactRequestsCountObserver) === null || _h === void 0 ? void 0 : _h.off();
        (_j = this.memberInfoObserver) === null || _j === void 0 ? void 0 : _j.off();
    }
};
AddonMessagesGroupConversationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
AddonMessagesGroupConversationsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    favListEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['favlist',] }],
    groupListEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['grouplist',] }],
    indListEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['indlist',] }]
};
AddonMessagesGroupConversationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-group-conversations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./group-conversations.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/group-conversations/group-conversations.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../messages-common.scss */ "./src/addons/messages/messages-common.scss")).default]
    })
], AddonMessagesGroupConversationsPage);



/***/ })

}]);
//# sourceMappingURL=pages-group-conversations-group-conversations-module.js.map