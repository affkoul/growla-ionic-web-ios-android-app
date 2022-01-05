(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-discussion-discussion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <h2>{{ 'addon.messages.groupinfo' | translate }}</h2>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"closeModal()\" [attr.aria-label]=\"'core.close' | translate\">\n                <ion-icon name=\"fas-times\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item class=\"ion-text-center\" *ngIf=\"conversation\">\n            <ion-label>\n                <div class=\"large-avatar\">\n                    <img class=\"avatar\" [src]=\"conversation!.imageurl\" core-external-content [alt]=\"conversation!.name\"\n                    onError=\"this.src='assets/img/group-avatar.png'\">\n                </div>\n                <h2>\n                    <core-format-text [text]=\"conversation!.name\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\n                </h2>\n                <p>\n                    <core-format-text *ngIf=\"conversation!.subname\" [text]=\"conversation!.subname\" contextLevel=\"system\"\n                        [contextInstanceId]=\"0\">\n                    </core-format-text>\n                </p>\n                <p>{{ 'addon.messages.numparticipants' | translate:{$a: conversation!.membercount} }}</p>\n            </ion-label>\n        </ion-item>\n\n        <ion-item class=\"ion-text-wrap addon-messages-conversation-item\" *ngFor=\"let member of members\"\n            (click)=\"closeModal(member.id)\" detail=\"true\" button>\n            <core-user-avatar [user]=\"member\" [linkProfile]=\"false\" [checkOnline]=\"member.showonlinestatus\" slot=\"start\">\n            </core-user-avatar>\n            <ion-label>\n                <p class=\"item-heading\">\n                    {{ member.fullname }}\n                    <ion-icon name=\"fas-user-slash\" *ngIf=\"member.isblocked\"\n                        [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\n                    </ion-icon>\n                </p>\n            </ion-label>\n        </ion-item>\n\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMoreMembers($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <img *ngIf=\"loaded && !otherMember && conversationImage\" class=\"core-bar-button-image\" [src]=\"conversationImage\"\n                alt=\"\" onError=\"this.src='assets/img/group-avatar.png'\" core-external-content role=\"presentation\"\n                [siteId]=\"siteId || null\">\n            <core-user-avatar *ngIf=\"loaded && otherMember\" class=\"core-bar-button-image\" [user]=\"otherMember\"\n                [linkProfile]=\"false\" [checkOnline]=\"otherMember.showonlinestatus\">\n            </core-user-avatar>\n            <core-format-text [text]=\"title\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\n            <ion-icon *ngIf=\"conversation && conversation.isfavourite\" name=\"fas-star\"\n                [attr.aria-label]=\"'core.favourites' | translate\">\n            </ion-icon>\n            <ion-icon *ngIf=\"conversation && conversation.ismuted\" name=\"fas-bell-slash\"\n                [attr.aria-label]=\"'addon.messages.mutedconversation' | translate\">\n            </ion-icon>\n        </h1>\n        <ion-buttons slot=\"end\"></ion-buttons>\n    </ion-toolbar>\n    <core-navbar-buttons slot=\"end\">\n        <core-context-menu [attr.aria-label]=\"'addon.messages.conversationactions' | translate\">\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || isGroup\" [priority]=\"1000\"\n                [content]=\"'addon.messages.info' | translate\" (action)=\"viewInfo()\"\n                iconAction=\"fas-info-circle\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || !isGroup\" [priority]=\"1000\"\n                [content]=\"'addon.messages.groupinfo' | translate\" (action)=\"viewInfo()\"\n                iconAction=\"fas-info-circle\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversation\" [priority]=\"800\"\n                [content]=\"(conversation && conversation.isfavourite ? 'addon.messages.removefromfavourites' :\n                'addon.messages.addtofavourites') | translate\"\n                (action)=\"changeFavourite($event)\" [closeOnClick]=\"false\" [iconAction]=\"favouriteIcon\"\n                [iconSlash]=\"favouriteIconSlash\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || otherMember.isblocked\" [priority]=\"700\"\n                [content]=\"'addon.messages.blockuser' | translate\" (action)=\"blockUser()\" [iconAction]=\"blockIcon\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.isblocked\" [priority]=\"700\"\n                [content]=\"'addon.messages.unblockuser' | translate\" (action)=\"unblockUser()\" [iconAction]=\"blockIcon\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !muteEnabled || !conversation\" [priority]=\"600\"\n                [content]=\"(conversation && conversation.ismuted ? 'addon.messages.unmuteconversation' :\n                'addon.messages.muteconversation') | translate\" (action)=\"changeMute($event)\" [closeOnClick]=\"false\"\n                [iconAction]=\"muteIcon\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!canDelete || !messages || !messages.length\" [priority]=\"400\"\n                [content]=\"'addon.messages.showdeletemessages' | translate\" (action)=\"toggleDelete()\"\n                [iconAction]=\"(showDelete ? 'far-check-square' : 'far-square')\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversationId || isGroup || !messages || !messages.length\"\n                [priority]=\"200\" [content]=\"'addon.messages.deleteconversation' | translate\" (action)=\"deleteConversation($event)\"\n                [closeOnClick]=\"false\" [iconAction]=\"deleteIcon\"></core-context-menu-item>\n            <core-context-menu-item\n                [hidden]=\"isSelf || !otherMember || otherMember.iscontact || requestContactSent || requestContactReceived\"\n                [priority]=\"100\" [content]=\"'addon.messages.addtoyourcontacts' | translate\" (action)=\"createContactRequest()\"\n                [iconAction]=\"addRemoveIcon\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.iscontact\" [priority]=\"100\"\n                [content]=\"'addon.messages.removefromyourcontacts' | translate\" (action)=\"removeContact()\"\n                [iconAction]=\"addRemoveIcon\" [iconSlash]=\"true\"></core-context-menu-item>\n        </core-context-menu>\n    </core-navbar-buttons>\n</ion-header>\n<ion-content class=\"has-footer\" (ionScroll)=\"scrollFunction()\">\n    <core-loading [hideUntil]=\"loaded\" class=\"safe-area-page\">\n        <!-- Load previous messages. -->\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadPrevious($event)\" position=\"top\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n\n        <ng-container *ngIf=\"isSelf && !canLoadMore\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.selfconversation' | translate }}</p>\n            <p class=\"ion-text-center\"><i>{{ 'addon.messages.selfconversationdefaultmessage' | translate }}</i></p>\n        </ng-container>\n\n        <h2 class=\"sr-only\">{{ title }}</h2>\n\n        <ion-list class=\"addon-messages-discussion-container\" [class.addon-messages-discussion-group]=\"isGroup\"\n            [attr.aria-live]=\"'polite'\">\n            <ng-container *ngFor=\"let message of messages; index as index; last as last\">\n                <h3 class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\n                    {{ message.timecreated | coreFormatDate: \"strftimedayshort\" }}\n                </h3>\n\n                <ion-chip class=\"addon-messages-unreadfrom\" *ngIf=\"unreadMessageFrom && message.id == unreadMessageFrom\"\n                    color=\"light\">\n                    <ion-label>{{ 'addon.messages.newmessages' | translate }}</ion-label>\n                    <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\n                </ion-chip>\n\n                <ion-note [class.addon-message-mine]=\"message.useridfrom == currentUserId\" *ngIf=\"!message.pending\">{{ message.timecreated | coreFormatDate: \"strftimetime\" }}</ion-note>\n                <ion-note [class.addon-message-mine]=\"message.useridfrom == currentUserId\" *ngIf=\"message.pending\">\n                    <ion-icon name=\"fas-clock\" [attr.aria-label]=\"'core.notsent' | translate\" role=\"status\"></ion-icon>\n                </ion-note>\n                <ion-item class=\"ion-text-wrap addon-message\" (longPress)=\"copyMessage(message)\"\n                    [class.addon-message-mine]=\"message.useridfrom == currentUserId\"\n                    [class.addon-message-not-mine]=\"message.useridfrom != currentUserId\"\n                    [class.addon-message-no-user]=\"!message.showUserData\"\n                    [@coreSlideInOut]=\"message.useridfrom == currentUserId ? '' : 'fromLeft'\">\n                    <ion-label>\n                        <!-- User data. -->\n                        <div *ngIf=\"message.showUserData\" class=\"item-heading addon-message-user\">\n                            <core-user-avatar slot=\"start\" [user]=\"members[message.useridfrom]\" [linkProfile]=\"false\"\n                                aria-hidden=\"true\">\n                            </core-user-avatar>\n                            <div>{{ members[message.useridfrom].fullname }}</div>\n                        </div>\n                        <div *ngIf=\"!message.showUserData\" class=\"sr-only\">\n                            {{ message.useridfrom == currentUserId\n                            ? ('addon.messages.you' | translate)\n                            : members[message.useridfrom].fullname }}\n                        </div>\n\n                        <!-- Some messages have <p> and some others don't. Add a <p> so they all have same styles. -->\n                        <p class=\"addon-message-text\">\n                            <core-format-text (afterRender)=\"last && scrollToBottom()\" [text]=\"message.text\" contextLevel=\"system\"\n                                [contextInstanceId]=\"0\"></core-format-text>\n                        </p>\n                    </ion-label>\n                    \n                    <ion-button fill=\"clear\" *ngIf=\"!message.sending && showDelete\" (click)=\"deleteMessage(message, index)\"\n                        class=\"addon-messages-delete-button\" [@coreSlideInOut]=\"'fromRight'\"\n                        [attr.aria-label]=\" 'addon.messages.deletemessage' | translate\" slot=\"end\">\n                        <ion-icon name=\"fas-trash\" color=\"danger\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n\n                    <div class=\"tail\" *ngIf=\"message.showTail\"></div>\n                </ion-item>\n            </ng-container>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"!messages || messages.length <= 0\" icon=\"far-comments\"\n            [message]=\"'addon.messages.nomessagesfound' | translate\"></core-empty-box>\n    </core-loading>\n    <!-- Scroll bottom. -->\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"loaded && newMessages > 0\">\n        <ion-fab-button size=\"small\" (click)=\"scrollToFirstUnreadMessage()\" color=\"light\"\n            [attr.aria-label]=\"'addon.messages.newmessages' | translate\">\n            <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'addon.messages.newmessages' | translate }}</span>\n            <span class=\"core-discussion-messages-badge\">{{ newMessages }}</span>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<ion-footer color=\"light\" class=\"footer-adjustable\" *ngIf=\"loaded && (!conversationId || conversation)\">\n    <ion-toolbar color=\"light\">\n        <p *ngIf=\"footerType == 'unable'\" class=\"ion-text-center ion-margin-horizontal\">\n            {{ 'addon.messages.unabletomessage' | translate }}\n        </p>\n        <div *ngIf=\"footerType == 'blocked'\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.youhaveblockeduser' | translate }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"unblockUser()\">\n                {{ 'addon.messages.unblockuser' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requiresContact' && otherMember\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">\n                <strong>{{ 'addon.messages.isnotinyourcontacts' | translate: {$a: otherMember.fullname} }}</strong>\n            </p>\n            <p class=\"ion-text-center\">{{ 'addon.messages.requirecontacttomessage' | translate: {$a: otherMember.fullname} }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"createContactRequest()\">\n                {{ 'addon.messages.sendcontactrequest' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requestReceived' && otherMember\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.userwouldliketocontactyou' | translate: {$a: otherMember.fullname} }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"confirmContactRequest()\">\n                {{ 'addon.messages.acceptandaddcontact' | translate }}\n            </ion-button>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" color=\"light\" (click)=\"declineContactRequest()\">\n                {{ 'addon.messages.decline' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requestSent' || (footerType == 'message' && requestContactSent)\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\"><strong>{{ 'addon.messages.contactrequestsent' | translate }}</strong></p>\n            <p class=\"ion-text-center\" *ngIf=\"otherMember\">\n                {{ 'addon.messages.yourcontactrequestpending' | translate: {$a: otherMember.fullname} }}\n            </p>\n        </div>\n        <core-send-message-form *ngIf=\"footerType == 'message'\" (onSubmit)=\"sendMessage($event)\" [showKeyboard]=\"showKeyboard\"\n            [placeholder]=\"'addon.messages.newmessage' | translate\"></core-send-message-form>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"startingPost\">\n            <core-format-text contextLevel=\"module\" [text]=\"startingPost.subject\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <!-- The context menu will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<core-navbar-buttons slot=\"end\">\n    <core-context-menu>\n        <core-context-menu-item *ngIf=\"discussionLoaded && !postHasOffline && isOnline\"\n            [priority]=\"650\" [content]=\"'addon.mod_forum.refreshposts' | translate\" [iconAction]=\"refreshIcon\" [closeOnClick]=\"false\"\n            (action)=\"doRefresh(null, $event)\">\n        </core-context-menu-item>\n        <core-context-menu-item *ngIf=\"discussionLoaded && isMobile && postHasOffline && isOnline\"\n            [priority]=\"550\" [content]=\"'core.settings.synchronizenow' | translate\" [iconAction]=\"syncIcon\" [closeOnClick]=\"false\"\n            (action)=\"doRefresh(null, $event, true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'flat-oldest'\"\n            [priority]=\"500\" [content]=\"'addon.mod_forum.modeflatoldestfirst' | translate\" iconAction=\"fas-arrow-down\"\n            (action)=\"changeSort('flat-oldest')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'flat-newest'\"\n            [priority]=\"450\" [content]=\"'addon.mod_forum.modeflatnewestfirst' | translate\" iconAction=\"fas-arrow-up\"\n            (action)=\"changeSort('flat-newest')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'nested'\"\n            [priority]=\"400\" [content]=\"'addon.mod_forum.modenested' | translate\" iconAction=\"fas-exchange-alt\"\n            (action)=\"changeSort('nested')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || discussion.locked\"\n            [priority]=\"300\" [content]=\"'addon.mod_forum.lockdiscussion' | translate\" iconAction=\"fas-lock\"\n            (action)=\"setLockState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || !discussion.locked\"\n            [priority]=\"300\" [content]=\"'addon.mod_forum.unlockdiscussion' | translate\" iconAction=\"fas-unlock\"\n            (action)=\"setLockState(false)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || discussion.pinned\"\n            [priority]=\"250\" [content]=\"'addon.mod_forum.pindiscussion' | translate\" iconAction=\"fas-map-pin\"\n            (action)=\"setPinState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || !discussion.pinned\"\n            [priority]=\"250\" [content]=\"'addon.mod_forum.unpindiscussion' | translate\" [iconSlash]=\"true\" iconAction=\"fas-map-pin\"\n            (action)=\"setPinState(false)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || discussion.starred\"\n            [priority]=\"200\" [content]=\"'addon.mod_forum.addtofavourites' | translate\" iconAction=\"fas-star\"\n            (action)=\"toggleFavouriteState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || !discussion.starred\"\n            [priority]=\"200\" [content]=\"'addon.mod_forum.removefromfavourites' | translate\" iconAction=\"fas-star\" [iconSlash]=\"true\"\n            (action)=\"toggleFavouriteState(false)\">\n        </core-context-menu-item>\n    </core-context-menu>\n</core-navbar-buttons>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!discussionLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"discussionLoaded\">\n        <!-- Discussion replies found to be synchronized -->\n        <ion-card class=\"core-warning-card\" *ngIf=\"postHasOffline || hasOfflineRatings\">\n            <ion-item>\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: discussionStr} }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <!-- Cut-off date or due date message -->\n        <ion-card class=\"core-info-card\" *ngIf=\"availabilityMessage\">\n            <ion-item>\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ availabilityMessage }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <ion-card class=\"core-info-card\" *ngIf=\"discussion && discussion.locked\">\n            <ion-item>\n                <ion-icon name=\"fas-lock\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'addon.mod_forum.discussionlocked' | translate }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <div *ngIf=\"startingPost\" class=\"ion-margin-bottom\">\n            <addon-mod-forum-post\n                [post]=\"startingPost\" [discussion]=\"discussion\" [courseId]=\"courseId\" [highlight]=\"true\"\n                [discussionId]=\"discussionId\" [component]=\"component\" [componentId]=\"cmId\"\n                [replyData]=\"replyData\" [originalData]=\"originalData\" [forum]=\"forum\" [accessInfo]=\"accessInfo\"\n                [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\" [leavingPage]=\"leavingPage\"\n                (onPostChange)=\"postListChanged()\">\n            </addon-mod-forum-post>\n        </div>\n\n        <ion-card *ngIf=\"sort != 'nested'\">\n            <ng-container *ngFor=\"let post of posts; first as first\">\n                <core-spacer *ngIf=\"!first\"></core-spacer>\n                <addon-mod-forum-post\n                    [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\"\n                    [component]=\"component\" [componentId]=\"cmId\" [replyData]=\"replyData\"\n                    [originalData]=\"originalData\" [parentSubject]=\"postSubjects[post.parentid]\"\n                    [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\n                    [leavingPage]=\"leavingPage\"\n                    (onPostChange)=\"postListChanged()\">\n                </addon-mod-forum-post>\n            </ng-container>\n        </ion-card>\n\n        <ng-container *ngIf=\"sort == 'nested'\">\n            <ng-container *ngFor=\"let post of posts\">\n                <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: post}\"></ng-container>\n            </ng-container>\n        </ng-container>\n\n        <ng-template #nestedPosts let-post=\"post\">\n            <ion-card>\n                <addon-mod-forum-post\n                    [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\" [component]=\"component\"\n                    [componentId]=\"cmId\" [replyData]=\"replyData\" [originalData]=\"originalData\"\n                    [parentSubject]=\"postSubjects[post.parentid]\" [forum]=\"forum\" [accessInfo]=\"accessInfo\"\n                    [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\" [leavingPage]=\"leavingPage\"\n                    (onPostChange)=\"postListChanged()\">\n                </addon-mod-forum-post>\n            </ion-card>\n            <div class=\"ion-padding-start\" *ngIf=\"post.children && post.children.length && post.children[0].subject\">\n                <ng-container *ngFor=\"let child of post.children\">\n                    <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: child}\"></ng-container>\n                </ng-container>\n            </div>\n        </ng-template>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/messages/components/components.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/messages/components/components.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonMessagesComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesComponentsModule", function() { return AddonMessagesComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation-info/conversation-info */ "./src/addons/messages/components/conversation-info/conversation-info.ts");
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




let AddonMessagesComponentsModule = class AddonMessagesComponentsModule {
};
AddonMessagesComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesConversationInfoComponent"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
    })
], AddonMessagesComponentsModule);



/***/ }),

/***/ "./src/addons/messages/components/conversation-info/conversation-info.ts":
/*!*******************************************************************************!*\
  !*** ./src/addons/messages/components/conversation-info/conversation-info.ts ***!
  \*******************************************************************************/
/*! exports provided: AddonMessagesConversationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesConversationInfoComponent", function() { return AddonMessagesConversationInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Component that displays the list of conversations, including group conversations.
 */
let AddonMessagesConversationInfoComponent = class AddonMessagesConversationInfoComponent {
    constructor(route) {
        this.route = route;
        this.conversationId = 0;
        this.loaded = false;
        this.members = [];
        this.canLoadMore = false;
        this.loadMoreError = false;
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Fetch the required data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the conversation data first.
            try {
                const conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getConversation(this.conversationId, false, true, 0, 0);
                this.conversation = conversation;
                // Now get the members.
                yield this.fetchMembers();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting members.');
            }
        });
    }
    /**
     * Get conversation members.
     *
     * @param loadingMore Whether we are loading more data or just the first ones.
     * @return Promise resolved when done.
     */
    fetchMembers(loadingMore) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            const limitFrom = loadingMore ? this.members.length : 0;
            const data = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getConversationMembers(this.conversationId, limitFrom);
            if (loadingMore) {
                this.members = this.members.concat(data.members);
            }
            else {
                this.members = data.members;
            }
            this.canLoadMore = data.canLoadMore;
        });
    }
    /**
     * Function to load more members.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadMoreMembers(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchMembers(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting members.');
                this.loadMoreError = true;
            }
            finally {
                infiniteComplete && infiniteComplete();
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
            const promises = [];
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateConversation(this.conversationId));
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateConversationMembers(this.conversationId));
            yield Promise.all(promises);
            yield this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Close modal.
     *
     * @param userId User conversation to load.
     */
    closeModal(userId) {
        _singletons__WEBPACK_IMPORTED_MODULE_5__["ModalController"].dismiss(userId);
    }
};
AddonMessagesConversationInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddonMessagesConversationInfoComponent.propDecorators = {
    conversationId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddonMessagesConversationInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-conversation-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./conversation-info.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html")).default,
    })
], AddonMessagesConversationInfoComponent);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.module.ts":
/*!*******************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddonMessagesDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPageModule", function() { return AddonMessagesDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discussion.page */ "./src/addons/messages/pages/discussion/discussion.page.ts");
/* harmony import */ var _addons_messages_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/messages/components/components.module */ "./src/addons/messages/components/components.module.ts");
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
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionPage"],
    },
];
let AddonMessagesDiscussionPageModule = class AddonMessagesDiscussionPageModule {
};
AddonMessagesDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _addons_messages_components_components_module__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesComponentsModule"],
        ],
        declarations: [
            _discussion_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesDiscussionPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.page.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddonMessagesDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPage", function() { return AddonMessagesDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages-offline */ "./src/addons/messages/services/messages-offline.ts");
/* harmony import */ var _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/messages-sync */ "./src/addons/messages/services/messages-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/infinite-loading/infinite-loading */ "./src/core/components/infinite-loading/infinite-loading.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/conversation-info/conversation-info */ "./src/addons/messages/components/conversation-info/conversation-info.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
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
 * Page that displays a message discussion page.
 */
let AddonMessagesDiscussionPage = class AddonMessagesDiscussionPage {
    constructor(route, elementRef) {
        this.route = route;
        this.elementRef = elementRef;
        this.fetching = false;
        this.messagesBeingSent = 0;
        this.pagesLoaded = 1;
        this.lastMessage = { text: '', timecreated: 0 };
        this.keepMessageMap = {};
        this.oldContentHeight = 0;
        this.scrollBottom = true;
        this.viewDestroyed = false;
        this.showLoadingModal = false; // Whether to show a loading modal while fetching data.
        this.showInfo = false;
        this.loaded = false;
        this.showKeyboard = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.messages = [];
        this.showDelete = false;
        this.canDelete = false;
        this.isGroup = false;
        this.members = {}; // Members that wrote a message, indexed by ID.
        this.favouriteIcon = 'fa-star';
        this.deleteIcon = 'fas-trash';
        this.blockIcon = 'fas-user-lock';
        this.addRemoveIcon = 'fas-user-plus';
        this.muteIcon = 'fas-bell-slash';
        this.favouriteIconSlash = false;
        this.muteEnabled = false;
        this.footerType = 'unable';
        this.requestContactSent = false;
        this.requestContactReceived = false;
        this.isSelf = false;
        this.newMessages = 0;
        this.unreadMessageFrom = 0;
        this.initialized = false;
        this.hostElement = elementRef.nativeElement;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        this.groupMessagingEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isGroupMessagingEnabled();
        this.muteEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isMuteConversationEnabled();
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_12__["CoreLogger"].getInstance('AddonMessagesDiscussionPage');
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSyncProvider"].AUTO_SYNCED, (data) => {
            if ((data.userId && data.userId == this.userId) ||
                (data.conversationId && data.conversationId == this.conversationId)) {
                // Fetch messages.
                this.fetchMessages();
                // Show first warning if any.
                if (data.warnings && data.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(data.warnings[0]);
                }
            }
        }, this.siteId);
        // Refresh data if info of a mamber of the conversation have changed.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.userId && (this.members[data.userId] || this.otherMember && data.userId == this.otherMember.id)) {
                this.fetchData();
            }
        }, this.siteId);
        // Recalculate footer position when keyboard is shown or hidden.
        this.keyboardObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].KEYBOARD_CHANGE, () => {
            // @todo probably not needed.
            // this.content.resize();
        });
    }
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const oldConversationId = this.conversationId;
                const oldUserId = this.userId;
                let forceScrollToBottom = false;
                this.conversationId = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteNumberParam('conversationId', { params }) || undefined;
                this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteNumberParam('userId', { params }) || undefined;
                this.showInfo = !params.hideInfo;
                if (oldConversationId != this.conversationId || oldUserId != this.userId) {
                    // Showing reload again can break animations.
                    this.loaded = false;
                    this.initialized = false;
                    forceScrollToBottom = true;
                }
                this.showKeyboard = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteBooleanParam('showKeyboard', { params }) || false;
                yield this.fetchData();
                this.scrollToBottom(forceScrollToBottom);
            }));
        });
    }
    /**
     * View has been initialized.
     */
    ngAfterViewInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
        });
    }
    /**
     * Adds a new message to the message list.
     *
     * @param message Message to be added.
     * @param keep If set the keep flag or not.
     * @return If message is not mine and was recently added.
     */
    addMessage(message, keep = true) {
        /* Create a hash to identify the message. The text of online messages isn't reliable because it can have random data
           like VideoJS ID. Try to use id and fallback to text for offline messages. */
        const id = 'id' in message ? message.id : '';
        message.hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__["Md5"].hashAsciiStr(String(id || message.text || '')) + '#' + message.timecreated + '#' +
            message.useridfrom;
        let added = false;
        if (typeof this.keepMessageMap[message.hash] === 'undefined') {
            // Message not added to the list. Add it now.
            this.messages.push(message);
            added = message.useridfrom != this.currentUserId;
        }
        // Message needs to be kept in the list.
        this.keepMessageMap[message.hash] = keep;
        return added;
    }
    /**
     * Remove a message if it shouldn't be in the list anymore.
     *
     * @param hash Hash of the message to be removed.
     */
    removeMessage(hash) {
        if (this.keepMessageMap[hash]) {
            // Selected to keep it, clear the flag.
            this.keepMessageMap[hash] = false;
            return;
        }
        delete this.keepMessageMap[hash];
        const position = this.messages.findIndex((message) => message.hash == hash);
        if (position >= 0) {
            this.messages.splice(position, 1);
        }
    }
    /**
     * Convenience function to fetch the conversation data.
     *
     * @return Resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader;
            if (this.showLoadingModal) {
                loader = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading();
            }
            if (!this.groupMessagingEnabled && this.userId) {
                // Get the user profile to retrieve the user fullname and image.
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId, undefined, true).then((user) => {
                    if (!this.title) {
                        this.title = user.fullname;
                    }
                    this.conversationImage = user.profileimageurl;
                    this.members[user.id] = user;
                    return;
                }).catch(() => {
                    // Ignore errors.
                });
            }
            // Synchronize messages if needed.
            try {
                const syncResult = yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].syncDiscussion(this.conversationId, this.userId);
                if (syncResult.warnings && syncResult.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(syncResult.warnings[0]);
                }
            }
            catch (_a) {
                // Ignore errors;
            }
            try {
                const promises = [];
                if (this.groupMessagingEnabled) {
                    // Get the conversation ID if it exists and we don't have it yet.
                    const exists = yield this.getConversation(this.conversationId, this.userId);
                    if (exists) {
                        // Fetch the messages for the first time.
                        promises.push(this.fetchMessages());
                    }
                    if (this.userId) {
                        // Get the member info. Invalidate first to make sure we get the latest status.
                        promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateMemberInfo(this.userId).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getMemberInfo(this.userId);
                            if (!exists && this.otherMember) {
                                this.conversationImage = this.otherMember.profileimageurl;
                                this.title = this.otherMember.fullname;
                            }
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    else {
                        this.otherMember = undefined;
                    }
                }
                else {
                    if (this.userId) {
                        // Fake the user member info.
                        promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId).then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = {
                                id: user.id,
                                fullname: user.fullname,
                                profileurl: '',
                                profileimageurl: user.profileimageurl || '',
                                profileimageurlsmall: user.profileimageurlsmall || '',
                                isonline: false,
                                showonlinestatus: false,
                                isblocked: false,
                                iscontact: false,
                                isdeleted: false,
                                canmessageevenifblocked: true,
                                canmessage: true,
                                requirescontact: false,
                            };
                            this.otherMember.isblocked = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isBlocked(this.userId);
                            this.otherMember.iscontact = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isContact(this.userId);
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    // Fetch the messages for the first time.
                    promises.push(this.fetchMessages().then(() => {
                        if (!this.title && this.messages.length) {
                            // Didn't receive the fullname via argument. Try to get it from messages.
                            // It's possible that name cannot be resolved when no messages were yet exchanged.
                            const firstMessage = this.messages[0];
                            if ('usertofullname' in firstMessage) {
                                if (firstMessage.useridto != this.currentUserId) {
                                    this.title = firstMessage.usertofullname || '';
                                }
                                else {
                                    this.title = firstMessage.userfromfullname || '';
                                }
                            }
                        }
                        return;
                    }));
                }
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
            }
            finally {
                this.checkCanDelete();
                this.loaded = true;
                this.setPolling(); // Make sure we're polling messages.
                this.setContactRequestInfo();
                this.setFooterType();
                loader && loader.dismiss();
            }
        });
    }
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        this.setPolling();
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.unsetPolling();
    }
    /**
     * Convenience function to fetch messages.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @return Resolved when done.
     */
    fetchMessages(messagesAreNew = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (this.messagesBeingSent > 0) {
                // We do not poll while a message is being sent or we could confuse the user.
                // Otherwise, his message would disappear from the list, and he'd have to wait for the interval to check for messages.
                return;
            }
            else if (this.fetching) {
                // Already fetching.
                return;
            }
            else if (this.groupMessagingEnabled && !this.conversationId) {
                // Don't have enough data to fetch messages.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No enough data provided to fetch messages');
            }
            if (this.conversationId) {
                this.logger.debug(`Polling new messages for conversation '${this.conversationId}'`);
            }
            else if (this.userId) {
                this.logger.debug(`Polling new messages for discussion with user '${this.userId}'`);
            }
            else {
                // Should not happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No enough data provided to fetch messages');
            }
            this.fetching = true;
            try {
                // Wait for synchronization process to finish.
                yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].waitForSyncConversation(this.conversationId, this.userId);
                let messages = [];
                // Fetch messages. Invalidate the cache before fetching.
                if (this.groupMessagingEnabled) {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversationMessages(this.conversationId);
                    messages = yield this.getConversationMessages(this.pagesLoaded);
                }
                else {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateDiscussionCache(this.userId);
                    messages = yield this.getDiscussionMessages(this.pagesLoaded);
                }
                this.loadMessages(messages, messagesAreNew);
            }
            finally {
                this.fetching = false;
            }
        });
    }
    /**
     * Format and load a list of messages into the view.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @param messages Messages to load.
     */
    loadMessages(messages, messagesAreNew = true) {
        var _a, _b;
        if (this.viewDestroyed) {
            return;
        }
        // Don't use domUtils.getScrollHeight because it gives an outdated value after receiving a new message.
        const scrollHeight = this.scrollElement ? this.scrollElement.scrollHeight : 0;
        // Check if we are at the bottom to scroll it after render.
        // Use a 5px error margin because in iOS there is 1px difference for some reason.
        this.scrollBottom = Math.abs(scrollHeight - (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0) -
            (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0)) < 5;
        if (this.messagesBeingSent > 0) {
            // Ignore polling due to a race condition.
            return;
        }
        // Add new messages to the list and mark the messages that should still be displayed.
        const newMessages = messages.reduce((val, message) => val + (this.addMessage(message) ? 1 : 0), 0);
        // Set the new badges message if we're loading new messages.
        if (messagesAreNew) {
            this.setNewMessagesBadge(this.newMessages + newMessages);
        }
        // Remove messages that shouldn't be in the list anymore.
        for (const hash in this.keepMessageMap) {
            this.removeMessage(hash);
        }
        // Sort the messages.
        _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortMessages(this.messages);
        // Calculate which messages need to display the date or user data.
        this.messages.forEach((message, index) => {
            message.showDate = this.showDate(message, this.messages[index - 1]);
            message.showUserData = this.showUserData(message, this.messages[index - 1]);
            message.showTail = this.showTail(message, this.messages[index + 1]);
        });
        // If we received a new message while using group messaging, force mark messages as read.
        const last = this.messages[this.messages.length - 1];
        const forceMark = this.groupMessagingEnabled && last && last.useridfrom != this.currentUserId && this.lastMessage.text != ''
            && (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated);
        // Notify that there can be a new message.
        this.notifyNewMessage();
        // Mark retrieved messages as read if they are not.
        this.markMessagesAsRead(forceMark);
    }
    /**
     * Set the new message badge number and set scroll listener if needed.
     *
     * @param addMessages NUmber of messages still to be read.
     */
    setNewMessagesBadge(addMessages) {
        if (this.newMessages == 0 && addMessages > 0) {
            // Setup scrolling.
            this.content.scrollEvents = true;
            this.scrollFunction();
        }
        else if (this.newMessages > 0 && addMessages == 0) {
            // Remove scrolling.
            this.content.scrollEvents = false;
        }
        this.newMessages = addMessages;
    }
    /**
     * The scroll was moved. Update new messages count.
     */
    scrollFunction() {
        var _a, _b, _c, _d;
        if (this.newMessages > 0) {
            const scrollBottom = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0) + (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0);
            const scrollHeight = (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollHeight) || 0);
            if (scrollBottom > scrollHeight - 40) {
                // At the bottom, reset.
                this.setNewMessagesBadge(0);
                return;
            }
            const scrollElRect = (_d = this.scrollElement) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect();
            const scrollBottomPos = (scrollElRect && scrollElRect.bottom) || 0;
            if (scrollBottomPos == 0) {
                return;
            }
            const messages = Array.from(this.hostElement.querySelectorAll('.addon-message-not-mine'))
                .slice(-this.newMessages)
                .reverse();
            const newMessagesUnread = messages.findIndex((message) => {
                const elementRect = message.getBoundingClientRect();
                if (!elementRect) {
                    return false;
                }
                return elementRect.bottom <= scrollBottomPos;
            });
            if (newMessagesUnread > 0 && newMessagesUnread < this.newMessages) {
                this.setNewMessagesBadge(newMessagesUnread);
            }
        }
    }
    /**
     * Get the conversation.
     *
     * @param conversationId Conversation ID.
     * @param userId User ID.
     * @return Promise resolved with a boolean: whether the conversation exists or not.
     */
    getConversation(conversationId, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let fallbackConversation;
            // Try to get the conversationId if we don't have it.
            if (!conversationId && userId) {
                try {
                    if (userId == this.currentUserId && _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isSelfConversationEnabled()) {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getSelfConversation();
                    }
                    else {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationBetweenUsers(userId, undefined, true);
                    }
                    conversationId = fallbackConversation.id;
                }
                catch (error) {
                    // Probably conversation does not exist or user is offline. Try to load offline messages.
                    this.isSelf = userId == this.currentUserId;
                    const messages = yield _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesOffline"].getMessages(userId);
                    if (messages && messages.length) {
                        // We have offline messages, this probably means that the conversation didn't exist. Don't display error.
                        messages.forEach((message) => {
                            message.pending = true;
                            message.text = message.smallmessage;
                        });
                        this.loadMessages(messages);
                    }
                    else if (error.errorcode != 'errorconversationdoesnotexist') {
                        // Display the error.
                        throw error;
                    }
                    return false;
                }
            }
            // Retrieve the conversation. Invalidate data first to get the right unreadcount.
            yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversation(conversationId);
            try {
                this.conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(conversationId, undefined, true);
            }
            catch (error) {
                // Get conversation failed, use the fallback one if we have it.
                if (fallbackConversation) {
                    this.conversation = fallbackConversation;
                }
                else {
                    throw error;
                }
            }
            if (this.conversation) {
                this.conversationId = this.conversation.id;
                this.title = this.conversation.name;
                this.conversationImage = this.conversation.imageurl;
                this.isGroup = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP;
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                if (!this.isGroup) {
                    this.userId = this.conversation.userid;
                }
                this.isSelf = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_SELF;
                return true;
            }
            else {
                return false;
            }
        });
    }
    /**
     * Get the messages of the conversation. Used if group messaging is supported.
     *
     * @param pagesToLoad Number of "pages" to load.
     * @param offset Offset for message list.
     * @return Promise resolved with the list of messages.
     */
    getConversationMessages(pagesToLoad, offset = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversationId) {
                return [];
            }
            const excludePending = offset > 0;
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationMessages(this.conversationId, {
                excludePending: excludePending,
                limitFrom: offset,
            });
            pagesToLoad--;
            // Treat members. Don't use CoreUtilsProvider.arrayToObject because we don't want to override the existing object.
            if (result.members) {
                result.members.forEach((member) => {
                    this.members[member.id] = member;
                });
            }
            const messages = result.messages;
            if (pagesToLoad > 0 && result.canLoadMore) {
                offset += _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].LIMIT_MESSAGES;
                // Get more messages.
                const nextMessages = yield this.getConversationMessages(pagesToLoad, offset);
                return messages.concat(nextMessages);
            }
            // No more messages to load, return them.
            this.canLoadMore = !!result.canLoadMore;
            return messages;
        });
    }
    /**
     * Get a discussion. Can load several "pages".
     *
     * @param pagesToLoad Number of pages to load.
     * @param lfReceivedUnread Number of unread received messages already fetched, so fetch will be done from this.
     * @param lfReceivedRead Number of read received messages already fetched, so fetch will be done from this.
     * @param lfSentUnread Number of unread sent messages already fetched, so fetch will be done from this.
     * @param lfSentRead Number of read sent messages already fetched, so fetch will be done from this.
     * @return Resolved when done.
     */
    getDiscussionMessages(pagesToLoad, lfReceivedUnread = 0, lfReceivedRead = 0, lfSentUnread = 0, lfSentRead = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Only get offline messages if we're loading the first "page".
            const excludePending = lfReceivedUnread > 0 || lfReceivedRead > 0 || lfSentUnread > 0 || lfSentRead > 0;
            // Get next messages.
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getDiscussion(this.userId, excludePending, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
            pagesToLoad--;
            if (pagesToLoad > 0 && result.canLoadMore) {
                // More pages to load. Calculate new limit froms.
                result.messages.forEach((message) => {
                    if (!message.pending && 'read' in message) {
                        if (message.useridfrom == this.userId) {
                            if (message.read) {
                                lfReceivedRead++;
                            }
                            else {
                                lfReceivedUnread++;
                            }
                        }
                        else {
                            if (message.read) {
                                lfSentRead++;
                            }
                            else {
                                lfSentUnread++;
                            }
                        }
                    }
                });
                // Get next messages.
                const nextMessages = yield this.getDiscussionMessages(pagesToLoad, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
                return result.messages.concat(nextMessages);
            }
            else {
                // No more messages to load, return them.
                this.canLoadMore = result.canLoadMore;
                return result.messages;
            }
        });
    }
    /**
     * Mark messages as read.
     */
    markMessagesAsRead(forceMark) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let readChanged = false;
            if (_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isMarkAllMessagesReadEnabled()) {
                let messageUnreadFound = false;
                // Mark all messages at a time if there is any unread message.
                if (forceMark) {
                    messageUnreadFound = true;
                }
                else if (this.groupMessagingEnabled) {
                    messageUnreadFound = !!((((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) &&
                        (this.conversationId && this.conversationId > 0));
                }
                else {
                    // If an unread message is found, mark all messages as read.
                    messageUnreadFound = this.messages.some((message) => message.useridfrom != this.currentUserId && ('read' in message && !message.read));
                }
                if (messageUnreadFound) {
                    this.setUnreadLabelPosition();
                    if (this.groupMessagingEnabled) {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllConversationMessagesRead(this.conversationId);
                    }
                    else {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllMessagesRead(this.userId);
                        // Mark all messages as read.
                        this.messages.forEach((message) => {
                            if ('read' in message) {
                                message.read = true;
                            }
                        });
                    }
                    readChanged = true;
                }
            }
            else {
                this.setUnreadLabelPosition();
                const promises = [];
                // Mark each message as read one by one.
                this.messages.forEach((message) => {
                    // If the message is unread, call AddonMessages.markMessageRead.
                    if (message.useridfrom != this.currentUserId && 'read' in message && !message.read) {
                        promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markMessageRead(message.id).then(() => {
                            readChanged = true;
                            message.read = true;
                            return;
                        }));
                    }
                });
                yield Promise.all(promises);
            }
            if (readChanged) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].READ_CHANGED_EVENT, {
                    conversationId: this.conversationId,
                    userId: this.userId,
                }, this.siteId);
            }
        });
    }
    /**
     * Notify the last message found so discussions list controller can tell if last message should be updated.
     */
    notifyNewMessage() {
        var _a, _b;
        const last = this.messages[this.messages.length - 1];
        let trigger = false;
        if (!last) {
            this.lastMessage = { text: '', timecreated: 0 };
            trigger = true;
        }
        else if (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated) {
            this.lastMessage = { text: last.text || '', timecreated: last.timecreated };
            trigger = true;
        }
        if (trigger) {
            // Update discussions last message.
            _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, {
                conversationId: this.conversationId,
                userId: this.userId,
                message: this.lastMessage.text,
                timecreated: this.lastMessage.timecreated,
                isfavourite: !!((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.isfavourite),
                type: (_b = this.conversation) === null || _b === void 0 ? void 0 : _b.type,
            }, this.siteId);
            // Update navBar links and buttons.
            const newCanDelete = (last && 'id' in last && last.id && this.messages.length == 1) || this.messages.length > 1;
            if (this.canDelete != newCanDelete) {
                this.checkCanDelete();
            }
        }
    }
    /**
     * Set the place where the unread label position has to be.
     */
    setUnreadLabelPosition() {
        var _a, _b;
        if (this.unreadMessageFrom != 0) {
            return;
        }
        if (this.groupMessagingEnabled) {
            // Use the unreadcount from the conversation to calculate where should the label be placed.
            if (this.conversation && (((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) && this.messages) {
                // Iterate over messages to find the right message using the unreadcount. Skip offline messages and own messages.
                let found = 0;
                for (let i = this.messages.length - 1; i >= 0; i--) {
                    const message = this.messages[i];
                    if (!message.pending && message.useridfrom != this.currentUserId && 'id' in message) {
                        found++;
                        if (found == this.conversation.unreadcount) {
                            this.unreadMessageFrom = Number(message.id);
                            break;
                        }
                    }
                }
            }
        }
        else {
            let previousMessageRead = false;
            for (const x in this.messages) {
                const message = this.messages[x];
                if (message.useridfrom != this.currentUserId && 'read' in message) {
                    const unreadFrom = !message.read && previousMessageRead;
                    if (unreadFrom) {
                        // Save where the label is placed.
                        this.unreadMessageFrom = Number(message.id);
                        break;
                    }
                    previousMessageRead = !!message.read;
                }
            }
        }
        // Do not update the message unread from label on next refresh.
        if (this.unreadMessageFrom == 0) {
            // Using negative to indicate the label is not placed but should not be placed.
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Check if there's any message in the list that can be deleted.
     */
    checkCanDelete() {
        // All messages being sent should be at the end of the list.
        const first = this.messages[0];
        this.canDelete = first && !first.sending;
    }
    /**
     * Hide unread label when sending messages.
     */
    hideUnreadLabel() {
        if (this.unreadMessageFrom > 0) {
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Wait until fetching is false.
     *
     * @return Resolved when done.
     */
    waitForFetch() {
        if (!this.fetching) {
            return Promise.resolve();
        }
        const deferred = _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].promiseDefer();
        setTimeout(() => this.waitForFetch().finally(() => {
            deferred.resolve();
        }), 400);
        return deferred.promise;
    }
    /**
     * Set a polling to get new messages every certain time.
     */
    setPolling() {
        if (this.groupMessagingEnabled && !this.conversationId) {
            // Don't have enough data to poll messages.
            return;
        }
        if (!this.polling) {
            // Start polling.
            this.polling = window.setInterval(() => {
                this.fetchMessages().catch(() => {
                    // Ignore errors.
                });
            }, _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].POLL_INTERVAL);
        }
    }
    /**
     * Unset polling.
     */
    unsetPolling() {
        if (this.polling) {
            this.logger.debug(`Cancelling polling for conversation with user '${this.userId}'`);
            clearInterval(this.polling);
            this.polling = undefined;
        }
    }
    /**
     * Copy message to clipboard.
     *
     * @param message Message to be copied.
     */
    copyMessage(message) {
        const text = 'smallmessage' in message ? message.smallmessage || message.text || '' : message.text || '';
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].copyToClipboard(_services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].decodeHTMLEntities(text));
    }
    /**
     * Function to delete a message.
     *
     * @param message Message object to delete.
     * @param index Index where the message is to delete it from the view.
     */
    deleteMessage(message, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const canDeleteAll = this.conversation && this.conversation.candeletemessagesforallusers;
            const langKey = message.pending || canDeleteAll || this.isSelf ? 'core.areyousure' :
                'addon.messages.deletemessageconfirmation';
            const options = {};
            if (canDeleteAll && !message.pending) {
                // Show delete for all checkbox.
                options.inputs = [{
                        type: 'checkbox',
                        name: 'deleteforall',
                        checked: false,
                        value: true,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.deleteforeveryone'),
                    }];
            }
            try {
                const data = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant(langKey), undefined, undefined, undefined, options);
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.deleting', true);
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteMessage(message, data && data[0]);
                    // Remove message from the list without having to wait for re-fetch.
                    this.messages.splice(index, 1);
                    this.removeMessage(message.hash);
                    this.notifyNewMessage();
                    this.fetchMessages(); // Re-fetch messages to update cached data.
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errordeletemessage', true);
            }
        });
    }
    /**
     * Function to load previous messages.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadPrevious(infiniteComplete) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.initialized) {
                // Don't load previous if the view isn't fully initialized.
                // Don't put the initialized condition in the "enabled" input because then the load more is hidden and
                // the scroll height changes when it appears.
                infiniteComplete && infiniteComplete();
                return;
            }
            let infiniteHeight = ((_a = this.infinite) === null || _a === void 0 ? void 0 : _a.hostElement.getBoundingClientRect().height) || 0;
            const scrollHeight = (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0);
            // If there is an ongoing fetch, wait for it to finish.
            try {
                yield this.waitForFetch();
            }
            finally {
                this.pagesLoaded++;
                try {
                    yield this.fetchMessages(false);
                    // Try to keep the scroll position.
                    const scrollBottom = scrollHeight - (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollTop) || 0);
                    const height = ((_d = this.infinite) === null || _d === void 0 ? void 0 : _d.hostElement.getBoundingClientRect().height) || 0;
                    if (this.canLoadMore && infiniteHeight && this.infinite) {
                        // The height of the infinite is different while spinner is shown. Add that difference.
                        infiniteHeight = infiniteHeight - height;
                    }
                    else if (!this.canLoadMore) {
                        // Can't load more, take into account the full height of the infinite loading since it will disappear now.
                        infiniteHeight = infiniteHeight || height;
                    }
                    this.keepScroll(scrollHeight, scrollBottom, infiniteHeight);
                }
                catch (error) {
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                    this.pagesLoaded--;
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
                }
                finally {
                    infiniteComplete && infiniteComplete();
                }
            }
        });
    }
    /**
     * Keep scroll position after loading previous messages.
     */
    keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries = 0) {
        setTimeout(() => {
            var _a;
            const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
            if (newScrollHeight == oldScrollHeight) {
                // Height hasn't changed yet. Retry if max retries haven't been reached.
                if (retries <= 10) {
                    this.keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries + 1);
                }
                return;
            }
            // Scroll has changed, but maybe it hasn't reached the full height yet.
            setTimeout(() => {
                var _a;
                const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
                const scrollTo = newScrollHeight - oldScrollBottom + infiniteHeight;
                this.content.scrollToPoint(0, scrollTo, 0);
            }, 30);
        }, 30);
    }
    /**
     * Scroll bottom when render has finished.
     *
     * @param force Whether to force scroll to bottom.
     */
    scrollToBottom(force = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if scroll is at bottom. If so, scroll bottom after rendering since there might be something new.
            if (this.scrollBottom || force) {
                this.scrollBottom = false;
                // Reset the badge.
                this.setNewMessagesBadge(0);
                // Leave time for the view to be rendered.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].nextTicks(5);
                if (!this.viewDestroyed) {
                    this.content.scrollToBottom(0);
                }
                if (force) {
                    this.initialized = true;
                }
            }
        });
    }
    /**
     * Scroll to the first new unread message.
     */
    scrollToFirstUnreadMessage() {
        if (this.newMessages > 0) {
            const messages = Array.from(this.hostElement.querySelectorAll('.addon-message-not-mine'));
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].scrollToElement(this.content, messages[messages.length - this.newMessages]);
        }
    }
    /**
     * Sends a message to the server.
     *
     * @param text Message text.
     */
    sendMessage(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hideUnreadLabel();
            this.showDelete = false;
            this.scrollBottom = true;
            this.setNewMessagesBadge(0);
            const message = {
                id: -1,
                pending: true,
                sending: true,
                useridfrom: this.currentUserId,
                smallmessage: text,
                text: text,
                timecreated: new Date().getTime(),
            };
            message.showDate = this.showDate(message, this.messages[this.messages.length - 1]);
            this.addMessage(message, false);
            this.messagesBeingSent++;
            // If there is an ongoing fetch, wait for it to finish.
            // Otherwise, if a message is sent while fetching it could disappear until the next fetch.
            try {
                yield this.waitForFetch();
            }
            finally {
                try {
                    let data;
                    if (this.conversationId) {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessageToConversation(this.conversation, text);
                    }
                    else {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessage(this.userId, text);
                    }
                    this.messagesBeingSent--;
                    let failure = false;
                    if (data.sent) {
                        try {
                            if (!this.conversationId && data.message && 'conversationid' in data.message) {
                                // Message sent to a new conversation, try to load the conversation.
                                yield this.getConversation(data.message.conversationid, this.userId);
                                // Now fetch messages.
                                try {
                                    yield this.fetchMessages();
                                }
                                finally {
                                    // Start polling messages now that the conversation exists.
                                    this.setPolling();
                                }
                            }
                            else {
                                // Message was sent, fetch messages right now.
                                yield this.fetchMessages();
                            }
                        }
                        catch (_a) {
                            failure = true;
                        }
                    }
                    if (failure || !data.sent) {
                        // Fetch failed or is offline message, mark the message as sent.
                        // If fetch is successful there's no need to mark it because the fetch will already show the message received.
                        message.sending = false;
                        if (data.sent) {
                            // Message sent to server, not pending anymore.
                            message.pending = false;
                        }
                        else if (data.message) {
                            message.timecreated = data.message.timecreated || 0;
                        }
                        this.notifyNewMessage();
                    }
                }
                catch (error) {
                    this.messagesBeingSent--;
                    // Only close the keyboard if an error happens.
                    // We want the user to be able to send multiple messages without the keyboard being closed.
                    _services_app__WEBPACK_IMPORTED_MODULE_13__["CoreApp"].closeKeyboard();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.messagenotsent', true);
                    this.removeMessage(message.hash);
                }
            }
        });
    }
    /**
     * Check date should be shown on message list for the current message.
     * If date has changed from previous to current message it should be shown.
     *
     * @param message Current message where to show the date.
     * @param prevMessage Previous message where to compare the date with.
     * @return If date has changed and should be shown.
     */
    showDate(message, prevMessage) {
        if (!prevMessage) {
            // First message, show it.
            return true;
        }
        // Check if day has changed.
        return !moment__WEBPACK_IMPORTED_MODULE_16___default()(message.timecreated).isSame(prevMessage.timecreated, 'day');
    }
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed for group conversations if the previous message was from another user.
     *
     * @param message Current message where to show the user info.
     * @param prevMessage Previous message.
     * @return Whether user data should be shown.
     */
    showUserData(message, prevMessage) {
        return this.isGroup && message.useridfrom != this.currentUserId && this.members[(message.useridfrom || 0)] &&
            (!prevMessage || prevMessage.useridfrom != message.useridfrom || !!message.showDate);
    }
    /**
     * Check if a css tail should be shown.
     *
     * @param message Current message where to show the user info.
     * @param nextMessage Next message.
     * @return Whether user data should be shown.
     */
    showTail(message, nextMessage) {
        return !nextMessage || nextMessage.useridfrom != message.useridfrom || !!nextMessage.showDate;
    }
    /**
     * Toggles delete state.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * View info. If it's an individual conversation, go to the user profile.
     * If it's a group conversation, view info about the group.
     */
    viewInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGroup) {
                // Display the group information.
                const userId = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                    component: _components_conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_22__["AddonMessagesConversationInfoComponent"],
                    componentProps: {
                        conversationId: this.conversationId,
                    },
                });
                if (typeof userId != 'undefined') {
                    const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].isCurrentPathInTablet('**/messages/**/discussion');
                    // Open user conversation.
                    if (splitViewLoaded) {
                        // Notify the left pane to load it, this way the right conversation will be highlighted.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].OPEN_CONVERSATION_EVENT, { userId }, this.siteId);
                    }
                    else {
                        // Open the discussion in a new view.
                        _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath('/messages/discussion', { params: { userId } });
                    }
                }
            }
            else {
                // Open the user profile.
                _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath('/user/profile', { params: { userId: this.userId } });
            }
        });
    }
    /**
     * Change the favourite state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeFavourite(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.favouriteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].setFavouriteConversation(this.conversation.id, !this.conversation.isfavourite);
                this.conversation.isfavourite = !this.conversation.isfavourite;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'favourite',
                    value: this.conversation.isfavourite,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing favourite state.');
            }
            finally {
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                done && done();
            }
        });
    }
    /**
     * Change the mute state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeMute(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.muteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].muteConversation(this.conversation.id, !this.conversation.ismuted);
                this.conversation.ismuted = !this.conversation.ismuted;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'mute',
                    value: this.conversation.ismuted,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing muted state.');
            }
            finally {
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                done && done();
            }
        });
    }
    /**
     * Calculate whether there are pending contact requests.
     */
    setContactRequestInfo() {
        var _a, _b;
        this.requestContactSent = false;
        this.requestContactReceived = false;
        if (this.otherMember && !this.otherMember.iscontact) {
            this.requestContactSent = !!((_a = this.otherMember.contactrequests) === null || _a === void 0 ? void 0 : _a.some((request) => request.userid == this.currentUserId && request.requesteduserid == this.otherMember.id));
            this.requestContactReceived = !!((_b = this.otherMember.contactrequests) === null || _b === void 0 ? void 0 : _b.some((request) => request.userid == this.otherMember.id && request.requesteduserid == this.currentUserId));
        }
    }
    /**
     * Calculate what to display in the footer.
     */
    setFooterType() {
        if (!this.otherMember) {
            // Group conversation or group messaging not available.
            this.footerType = 'message';
        }
        else if (this.otherMember.isblocked) {
            this.footerType = 'blocked';
        }
        else if (this.requestContactReceived) {
            this.footerType = 'requestReceived';
        }
        else if (this.otherMember.canmessage) {
            this.footerType = 'message';
        }
        else if (this.requestContactSent) {
            this.footerType = 'requestSent';
        }
        else if (this.otherMember.requirescontact) {
            this.footerType = 'requiresContact';
        }
        else {
            this.footerType = 'unable';
        }
    }
    /**
     * Displays a confirmation modal to block the user of the individual conversation.
     *
     * @return Promise resolved when user is blocked or dialog is cancelled.
     */
    blockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be blocked.');
            }
            if (this.otherMember.canmessageevenifblocked) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.cantblockuser', { $a: this.otherMember.fullname }));
                return;
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.blockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.blockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].blockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Delete the conversation.
     *
     * @param done Function to call when done.
     */
    deleteConversation(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            const confirmMessage = 'addon.messages.' + (this.isSelf ? 'deleteallselfconfirm' : 'deleteallconfirm');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm(confirmMessage);
                this.deleteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteConversation(this.conversation.id);
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                            conversationId: this.conversation.id,
                            action: 'delete',
                        }, this.siteId);
                        this.messages = [];
                    }
                    finally {
                        done && done();
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting conversation.');
                }
                finally {
                    this.deleteIcon = 'fas-trash';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to unblock the user of the individual conversation.
     *
     * @return Promise resolved when user is unblocked or dialog is cancelled.
     */
    unblockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be unblocked.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.unblockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.unblockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].unblockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to send a contact request to the other user of the individual conversation.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    createContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be requested.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.addcontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('core.add');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].createContactRequest(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Confirms the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    confirmContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be confirmed.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].confirmContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Declines the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    declineContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be declined.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].declineContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Displays a confirmation modal to remove the other user of the conversation from contacts.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    removeContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be removed.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.removecontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('core.remove');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].removeContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c;
        // Unset again, just in case.
        this.unsetPolling();
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.keyboardObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.memberInfoObserver) === null || _c === void 0 ? void 0 : _c.off();
        this.viewDestroyed = true;
    }
};
AddonMessagesDiscussionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonMessagesDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__["CoreInfiniteLoadingComponent"],] }]
};
AddonMessagesDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_17__["CoreAnimations"].SLIDE_IN_OUT],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/messages/pages/discussion/discussion.scss")).default]
    })
], AddonMessagesDiscussionPage);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.scss":
/*!**************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host ion-content {\n  --background: var(--background-alternative);\n}\n:host ion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n:host .addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 15px;\n  background: var(--background-alternative);\n}\n:host .addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host ion-note {\n  color: var(--addon-messages-message-note-text);\n  font-size: 10px;\n  margin: 0;\n  margin: 8px 0 0 8px;\n}\n:host ion-note.addon-message-mine {\n  margin: 8px 8px 0 0;\n  align-self: flex-end;\n}\n:host ion-item.addon-message {\n  border: 0;\n  border-radius: 4px;\n  padding: 0 8px 0 8px;\n  margin: 10px 8px 0 8px;\n  --background: var(--addon-messages-message-bg);\n  background: var(--background);\n  align-self: flex-start;\n  width: 90%;\n  max-width: 90%;\n  --min-height: var(--a11y-min-target-size);\n  position: relative;\n  transition: width 500ms ease-in-out;\n  overflow: visible;\n}\n:host ion-item.addon-message::part(native) {\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  padding: 0;\n  margin: 0;\n}\n:host ion-item.addon-message core-format-text > p:only-child {\n  display: inline;\n}\n:host ion-item.addon-message .addon-message-user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .addon-message-user core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--addon-messages-avatar-size);\n  margin: 0;\n}\n:host ion-item.addon-message .addon-message-user div {\n  font-weight: 500;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message .addon-message-user div {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0.5rem;\n    padding-inline-start: 0.5rem;\n    -webkit-padding-end: 0.5rem;\n    padding-inline-end: 0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable]:active {\n  --background: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message ion-label {\n  margin: 0;\n  padding: 8px 0;\n}\n:host ion-item.addon-message .addon-message-text {\n  display: inline-flex;\n}\n:host ion-item.addon-message .addon-message-text * {\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .tail {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.5rem solid transparent;\n  position: absolute;\n  touch-action: none;\n  bottom: 0;\n}\n:host ion-item.addon-message.addon-message-mine {\n  --background: var(--yellow);\n  align-self: flex-end;\n  --ion-text-color:#FFFFFF;\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active {\n  --background: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-mine .spinner {\n  float: right;\n  margin-left: 5px;\n  margin-right: -3px;\n  margin-top: 2px;\n  margin-bottom: -2px;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .spinner {\n  float: left;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .spinner {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 5px;\n    margin-inline-start: 5px;\n    -webkit-margin-end: -3px;\n    margin-inline-end: -3px;\n  }\n}\n:host ion-item.addon-message.addon-message-mine .spinner svg {\n  width: 16px;\n  height: 16px;\n}\n:host ion-item.addon-message.addon-message-mine .tail {\n  right: -8px;\n  margin-right: -0.5rem;\n  border-bottom-color: var(--addon-messages-message-mine-bg);\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .tail {\n  left: unset;\n  right: unset;\n  left: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .tail {\n    margin-right: unset;\n    -webkit-margin-end: -0.5rem;\n    margin-inline-end: -0.5rem;\n  }\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active .tail {\n  border-bottom-color: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-not-mine .tail {\n  border-bottom-color: var(--addon-messages-message-bg);\n  left: -8px;\n  margin-left: -0.5rem;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-not-mine .tail {\n  left: unset;\n  right: unset;\n  right: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-not-mine .tail {\n    margin-left: unset;\n    -webkit-margin-start: -0.5rem;\n    margin-inline-start: -0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable].addon-message-not-mine.activated .tail {\n  border-bottom-color: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message .addon-messages-delete-button {\n  min-height: initial;\n  line-height: initial;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: var(--a11y-min-target-size) !important;\n  align-self: flex-end;\n}\n:host ion-item.addon-message .addon-messages-delete-button ion-icon {\n  font-size: 1.4em;\n  line-height: initial;\n  color: var(--ion-color-danger);\n}\n:host ion-item.addon-message.addon-message-no-user {\n  margin: 0 10px 8px 10px;\n  width: auto;\n  max-width: 80%;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine {\n  padding-top: 0;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine .item-heading,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine .item-heading {\n  margin-bottom: 0;\n}\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-messages-unreadfrom {\n  color: var(--ion-color-primary);\n  background-color: transparent;\n  margin-top: 6px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host .addon-messages-unreadfrom ion-icon {\n  color: var(--ion-color-primary);\n  background-color: transparent;\n}\n:host .has-fab .scroll-content {\n  padding-bottom: 0;\n}\n:host ion-fab ion-fab-button::part(native) {\n  contain: unset;\n  overflow: visible;\n}\n:host ion-fab ion-fab-button .core-discussion-messages-badge {\n  position: absolute;\n  border-radius: 50%;\n  color: var(--addon-messages-discussion-badge-text);\n  background-color: var(--addon-messages-discussion-badge);\n  display: block;\n  line-height: 20px;\n  height: 20px;\n  width: 20px;\n  right: -6px;\n  top: -6px;\n}\n[dir=rtl] :host ion-fab ion-fab-button .core-discussion-messages-badge {\n  left: unset;\n  right: unset;\n  left: -6px;\n}\n:host ion-header ion-toolbar h1 {\n  display: flex;\n  align-items: center;\n  padding: 0;\n}\n:host ion-header ion-toolbar h1 .core-bar-button-image {\n  margin-right: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar h1 .core-bar-button-image {\n    margin-right: unset;\n    -webkit-margin-end: 6px;\n    margin-inline-end: 6px;\n  }\n}\n:host ion-header ion-toolbar h1 core-format-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n}\n:host ion-header ion-toolbar h1 core-format-text p {\n  margin-bottom: 0px;\n}\n:host ion-header ion-toolbar h1 ion-icon {\n  margin-left: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar h1 ion-icon {\n    margin-left: unset;\n    -webkit-margin-start: 6px;\n    margin-inline-start: 6px;\n  }\n}\n:host-context(.ios) ion-header ion-toolbar h1 {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS9jb21wb25lbnRzL2Rpc2N1c3Npb24uc2NzcyIsInNyYy9hZGRvbnMvbWVzc2FnZXMvcGFnZXMvZGlzY3Vzc2lvbi9kaXNjdXNzaW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQXVGQTs7OztFQUFBO0FDcEZJO0VBQ0ksMkNBQUE7QUM4QlI7QUQ1QlE7RUFDSSw0QkFBQTtBQzhCWjtBRDFCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7QUM0QlI7QUR6Qkk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDMkJSO0FEekJJO0VBQ0ksOENBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDMkJSO0FEekJJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQzJCUjtBRHhCSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUpkSixtQ0FBQTtFSWlCSSxpQkFBQTtBQzZCUjtBRDNCUTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQzZCWjtBRDFCUTtFQUNJLGVBQUE7QUM0Qlo7QUR6QlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUMyQlo7QUR6Qlk7RUFDSSxjQUFBO0VBQ0EscURBQUE7RUFDQSxTQUFBO0FDMkJoQjtBRHhCWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFSGtQUixvQkdqUG9DO0VIa1BwQyxxQkdsUG9DO0VBQzVCLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzJCaEI7QUp1Tlk7RUFDSTtJQUVRLG1CQUFBO0lBR0Esb0JBQUE7SUFHSiw2Qkc5UHdCO0lIK1B4Qiw0QkcvUHdCO0lIZ1F4QiwyQkdoUXdCO0lIaVF4QiwwQkdqUXdCO0VDdUMxQztBQUNGO0FEakNRO0VBQ0ksd0RBQUE7QUNtQ1o7QURoQ1E7RUFDSSxTQUFBO0VBQ0EsY0FBQTtBQ2tDWjtBRC9CUTtFQUNJLG9CQUFBO0FDaUNaO0FEaENZO0VBQ0ksNEJBQUE7QUNrQ2hCO0FEOUJRO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ2dDWjtBRDVCUTtFQUNJLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQzhCWjtBRDdCWTtFQUNJLDZEQUFBO0FDK0JoQjtBRDVCWTtFSDJYQSxZQUFBO0VBcExKLGdCR3JNeUM7RUhzTXpDLGtCR3RNNkI7RUhzT2pDLGVHdE80QjtFSHVPNUIsbUJHdk91QztBQ2lDM0M7QUptSFE7RUF3T0ksV0FBQTtBSXhWWjtBSnFLWTtFQUNJO0lBRVEsa0JBQUE7SUFHQSxtQkFBQTtJQUdKLHlCR2xONkI7SUhtTjdCLHdCR25ONkI7SUhvTjdCLHdCR3BOaUI7SUhxTmpCLHVCR3JOaUI7RUM4Q25DO0FBQ0Y7QUQ3Q2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUMrQ3BCO0FEM0NZO0VIbVJBLFdHbFI0QjtFSDZMaEMscUJHNUx5QztFQUNqQywwREFBQTtBQzZDaEI7QUo0RlE7RUEwSUksV0FBQTtFQUNBLFlBQUE7RUFFQSxVR3hSNEI7QUNvRHhDO0FKNElZO0VBQ0k7SUFLUSxtQkFBQTtJQUtKLDJCRzFNNkI7SUgyTTdCLDBCRzNNNkI7RUMwRC9DO0FBQ0Y7QUR2RFk7RUFDSSxvRUFBQTtBQ3lEaEI7QURyRFE7RUFDSSxxREFBQTtFSHNRQSxVR3JRb0M7RUhnTHhDLG9CRy9LK0I7QUN1RHZDO0FKdUVRO0VBMElJLFdBQUE7RUFDQSxZQUFBO0VBR0EsV0c3UW9DO0FDNkRoRDtBSnVIWTtFQUNJO0lBRVEsa0JBQUE7SUFNSiw2Qkc1TG1CO0lINkxuQiw0Qkc3TG1CO0VDbUVyQztBQUNGO0FEakVRO0VBQ0ksK0RBQUE7QUNtRVo7QURoRVE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VIdU1SLGFHdE13QjtFSHVNeEIsZ0JHdk1pQztFQUN6Qiw4Q0FBQTtFQUNBLG9CQUFBO0FDbUVaO0FEakVZO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FDbUVoQjtBRC9EUTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNpRVo7QUQ3REk7O0VBS0ksY0FBQTtBQzREUjtBRC9EUTs7RUFDSSxnQkFBQTtBQ2tFWjtBRDFESTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQzZEUjtBTnRQQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBdUZBOzs7O0VBQUE7QUVsRkk7RUFDSSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFvUlI7QUFuUlE7RUFDSSwrQkFBQTtFQUNBLDZCQUFBO0FBcVJaO0FBalJHO0VBQ0ssaUJBQUE7QUFtUlI7QUEvUVE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFpUlo7QUE5UVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSx3REFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VKa1hBLFdJalh3QjtFSnFZaEMsU0lyWTBCO0FBaVI5QjtBSnZDUTtFQTBJSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVJdlh3QjtBQXNScEM7QUFsUkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBcVJSO0FBblJRO0VKbVJBLGlCSWxScUM7QUFxUjdDO0FKQVk7RUFDSTtJQUtRLG1CQUFBO0lBS0osdUJJaFN5QjtJSmlTekIsc0JJalN5QjtFQTJSM0M7QUFDRjtBQXpSUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUEyUlo7QUExUlk7RUFDSSxrQkFBQTtBQTRSaEI7QUF4UlE7RUpvUUEsZ0JJblErQjtBQTBSdkM7QUpuQlk7RUFDSTtJQUVRLGtCQUFBO0lBTUoseUJJaFJtQjtJSmlSbkIsd0JJalJtQjtFQWdTckM7QUFDRjtBQTNSSTtFQUNJLHVCQUFBO0FBOFJSIiwiZmlsZSI6InNyYy9hZGRvbnMvbWVzc2FnZXMvcGFnZXMvZGlzY3Vzc2lvbi9kaXNjdXNzaW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLm1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XG4iLCIvKlxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKi9cblxuIEBtaXhpbiBjb3JlLWZvY3VzKCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xuICAgIH1cbiB9XG5cbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgMXB4IHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG59XG5cbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHdoZXJlOiBhbGwsICR0aW1lOiA1MDBtcykge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbn1cblxuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGNvbG9yOiBkZWRlZGUsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkc3ZnOiBcIjxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMiUyMDIwJz48cGF0aCUyMGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonJTIwZmlsbD0nJTIzI3skY29sb3J9Jy8+PC9zdmc+XCI7XG4gICAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICAkZmxpcHBlZC1zdmc6IFwiPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDEyJTIwMjAnPjxwYXRoJTIwdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjAsJTIwMCklMjBzY2FsZSgtMSwlMjAxKSclMjBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyUyMGZpbGw9JyUyMyN7JGNvbG9yfScvPjwvc3ZnPlwiO1xuXG4gICAgICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRzdmd9XCIpO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGJvcmRlci1zdGFydCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cbn1cblxuXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRweH0pO1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb24tZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcik7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnYsICR0eXBlLCAkY29sb3IpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JHB4fSk7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnYsICR0eXBlLCAkY29sb3IpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1lbmQtZW52OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbiAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydC1lbnYsICRzYWZlLWFyZWEtZW5kLWVudik7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LWVudiwgJGVuZCk7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICAkc2FmZS1hcmVhLWVuZC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZC1lbnYpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gICAgQGluY2x1ZGUgc2FmZS1wb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gICAgdG9wOiAkdG9wO1xuICAgIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb3JlLWFzLWl0ZW1zKCkge1xuICAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlzdC1tZC1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRoYWlybGluZXMtd2lkdGggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQgLml0ZW0gPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gY29yZS1pdGVtcygpIHtcbiAgICAmLml0ZW0tbWQuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaXN0LW1kLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLml0ZW0taW9zLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRoYWlybGluZXMtd2lkdGggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG59XG5cbkBtaXhpbiBkYXJrbW9kZSgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290IGJvZHkuZGFyayB7XG4gICAgICAgICN7JHJvb3R9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW9uLXRleHQtd3JhcCBpb24tbGFiZWwge1xuICAgICAgICAuaXRlbS1oZWFkaW5nLCBoMiwgcCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIENvbG9yIG1peGlucy5cbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcbn1cblxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcbiAgICAkYnJpZ2h0bmVzczogZ2V0X2JyaWdodG5lc3MoJGNvbG9yKTtcblxuICAgIEByZXR1cm4gaWYoJGJyaWdodG5lc3MgPCAxMjcsIHdoaXRlLCBibGFjayk7XG59XG4iLCIvKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICogRXh0cmFjdGVkIGZyb20gaW9uaWMubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcbiAqL1xuXG4vLyBSZXNwb25zaXZlIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICB3aWR0aDogJHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XG4gIH1cbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xufVxuXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XG59XG5cblxuIC8vIElvbmljIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxuLy8gY29sb3JzIG1hcFxuXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcbiAgICAkYmFzZTogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XG5cbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XG4gICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUoJGJhc2UpO1xuICAgICR0aW50OiBnZXQtY29sb3ItdGludCgkYmFzZSk7XG5cbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0sICN7JGJhc2V9KTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG5cbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlKTtcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYik7XG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xuICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XG4gICAgfVxufVxuXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gICAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAgIEBpZiAkbWluIHtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gICAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgICBAaWYgJG1heCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gICAgQGNvbnRlbnQ7XG5cbiAgICAvLyAkcm9vdDogI3smfTtcbiAgICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gICAgLy8gICAjeyRyb290fSB7XG4gICAgLy8gICAgIEBjb250ZW50O1xuICAgIC8vICAgfVxuICAgIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290IFtkaXI9cnRsXSB7XG4gICAgICAgICN7JHJvb3R9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICAgIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAgICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAgICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICAgICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAgICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIH0gQGVsc2Uge1xuICAgICAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgICAgIEBhdC1yb290IHtcbiAgICAgICAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgICAgICAgICAmIHtcbiAgICAgICAgICAgICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAgICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gICAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgICAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICAgICAgICByaWdodDogJHN0YXJ0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIHRvcDogJHRvcDtcbiAgICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gICAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICAgJG90aGVyLWRpcjogbnVsbDtcblxuICAgIEBpZiAkZGlyID09IGx0ciB7XG4gICAgICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJG90aGVyLWRpcjogbHRyO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgZGlyZWN0aW9uOiAkZGlyO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAgICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gICAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICAgJGV4dHJhOiBudWxsO1xuXG4gICAgJHg6IG51bGw7XG4gICAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICAgICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAgICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAgICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAgICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAgICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAgICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAgICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4iLCIvKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4kYmxhY2s6ICAgICAgICAgICAjMjgyODI4ICFkZWZhdWx0OyAvLyBIZWFkaW5ncywgc3RhbmRhcmQgdGV4dC5cbiRncmF5LWRhcmtlcjogICAgICM2ODY1NjYgIWRlZmF1bHQ7XG4kZ3JheS1kYXJrOiAgICAgICAjOWU5ZTllICFkZWZhdWx0O1xuJGdyYXk6ICAgICAgICAgICAgI2RkZGRkZCAhZGVmYXVsdDtcbiRncmF5LWxpZ2h0OiAgICAgICNGNUY2RkEgIWRlZmF1bHQ7IC8vIEJhY2tncm91bmQuXG4kZ3JheS1saWdodGVyOiAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHdoaXRlOiAgICAgICAgICAgI2ZmZmZmZiAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZCwgcmV2ZXJzZWQgdGV4dC5cblxuJGJsdWU6ICAgICAgICAgICAgIzAwNjRkMiAhZGVmYXVsdDsgLy8gTGluaywgYmFja2dyb3VuZC5cbiRibHVlLWxpZ2h0OiAgICAgIG1peCgkYmx1ZSwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7IC8vIEJhY2tncm91bmQuXG4kYmx1ZS1kYXJrOiAgICAgICBkYXJrZW4oJGJsdWUsIDEwJSkgIWRlZmF1bHQ7XG5cbiRncmVlbjogICAgICAgICAgICM1ZTgxMDAgIWRlZmF1bHQ7IC8vIEFjY2VudC5cbiRncmVlbi1saWdodDogICAgIG1peCgkZ3JlZW4sIHdoaXRlLCAyMCUpICFkZWZhdWx0O1xuJGdyZWVuLWRhcms6ICAgICAgZGFya2VuKCRncmVlbiwgMTAlKSAhZGVmYXVsdDtcblxuJHJlZDogICAgICAgICAgICAgI2NiM2Q0ZCAhZGVmYXVsdDtcbiRyZWQtbGlnaHQ6ICAgICAgIG1peCgkcmVkLCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiRyZWQtZGFyazogICAgICAgIGRhcmtlbigkcmVkLCAxMCUpICFkZWZhdWx0O1xuXG4keWVsbG93OiAgICAgICAgICAjNGRiZWMxICFkZWZhdWx0OyAvLyBBY2NlbnQgKG5ldmVyIHRleHQpLlxuJHllbGxvdy1saWdodDogICAgbWl4KCR5ZWxsb3csIHdoaXRlLCAyMCUpICFkZWZhdWx0O1xuJHllbGxvdy1kYXJrOiAgICAgbWl4KCR5ZWxsb3csIGJsYWNrLCA0MCUpICFkZWZhdWx0O1xuXG4kYnJhbmQtY29sb3I6ICAgICM0ZGJlYzEgIWRlZmF1bHQ7XG5cbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLWRhcms6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3IpICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgIG1peCgjZmZmZmZmLCAjMDAwMDAwLCAxMCUpICFkZWZhdWx0OyAvLyAjMWExYTFhXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRpb24taXRlbS1iYWNrZ3JvdW5kOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6IG1peCgjZmZmZmZmLCAjMDAwMDAwLCAyMCUpICFkZWZhdWx0OyAvLyAjMzMzMzMzXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAkYnJhbmQtY29sb3IgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaWdodDogICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJG1lZGl1bTogICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICRibGFjayAhZGVmYXVsdDtcblxuJGNvbG9yczogIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBzdWNjZXNzOiAkc3VjY2VzcyxcbiAgICB3YXJuaW5nOiAkd2FybmluZyxcbiAgICBkYW5nZXI6ICAkZGFuZ2VyLFxuICAgIGluZm86ICRpbmZvLFxuICAgIGxpZ2h0OiAkbGlnaHQsXG4gICAgbWVkaXVtOiAkbWVkaXVtLFxuICAgIGRhcms6ICRkYXJrXG4pICFkZWZhdWx0O1xuXG4kcHJpbWFyeS1kYXJrOiAgICAkYnJhbmQtY29sb3IgIWRlZmF1bHQ7XG4kZGFuZ2VyLWRhcms6ICAgICBtaXgoJHJlZCwgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XG4kd2FybmluZy1kYXJrOiAgICBtaXgoJHllbGxvdywgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XG4kc3VjY2Vzcy1kYXJrOiAgICBtaXgoJGdyZWVuLCB3aGl0ZSwgNDAlKSAhZGVmYXVsdDtcbiRpbmZvLWRhcms6ICAgICAgIG1peCgkYmx1ZSwgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XG4kbGlnaHQtZGFyazogICAgICAkZGFyayAhZGVmYXVsdDtcbiRtZWRpdW0tZGFyazogICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJGRhcmstZGFyazogICAgICAgJGxpZ2h0ICFkZWZhdWx0O1xuXG4kY29sb3JzLWRhcms6ICAoXG4gICAgcHJpbWFyeTogJHByaW1hcnktZGFyayxcbiAgICBzdWNjZXNzOiAkc3VjY2Vzcy1kYXJrLFxuICAgIHdhcm5pbmc6ICR3YXJuaW5nLWRhcmssXG4gICAgZGFuZ2VyOiAkZGFuZ2VyLWRhcmssXG4gICAgaW5mbzogJGluZm8tZGFyayxcbiAgICBsaWdodDogJGxpZ2h0LWRhcmssXG4gICAgbWVkaXVtOiAkbWVkaXVtLWRhcmssXG4gICAgZGFyazogJGRhcmstZGFyayxcbikgIWRlZmF1bHQ7XG5cbi8qKlxuICogTGF5b3V0IEJyZWFrcG9pbnRzXG4gKlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXG4gKi9cblxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJHNjcmVlbi1icmVha3BvaW50czogKFxuICAgIHhzOiAwLFxuICAgIHNtOiA1NzZweCxcbiAgICBtZDogNzY4cHgsXG4gICAgbGc6IDk5MnB4LFxuICAgIHRhYmxldDogOTkycHgsXG4gICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XG4kY29yZS10ZXh0LWhpZ2h0bGlnaHQtYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcblxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWRhc2hib2FyZC1sb2dvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtc2hvdy1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1zZWN0aW9uLXNlbGVjdG9yOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLXRodW1iLW9uLWNhcmRzLWJhY2tncm91bmQ6IG51bGwgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbG9naW4gcGFnZS5cbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvcjogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLW5lZWQtaGVscDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLlxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7IiwiQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcblxuICAgICAgICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgICB9XG5cbiAgICAuYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgICBpb24tbm90ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtdGV4dCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW46IDhweCAwIDAgOHB4O1xuICAgIH1cbiAgICBpb24tbm90ZS5hZGRvbi1tZXNzYWdlLW1pbmV7XG4gICAgICAgIG1hcmdpbjogOHB4IDhweCAwIDA7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAvLyBNZXNzYWdlIGl0ZW0uXG4gICAgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDhweCAwIDhweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWJnKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHZhcigtLWExMXktbWluLXRhcmdldC1zaXplKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBAaW5jbHVkZSBjb3JlLXRyYW5zaXRpb24od2lkdGgpO1xuICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCB0byBkaXNwbGF5IGJ1YmJsZSB0YWlscy5cbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICAgICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb3JlLWZvcm1hdC10ZXh0ID4gcDpvbmx5LWNoaWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlLXVzZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcblxuICAgICAgICAgICAgY29yZS11c2VyLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgLS1jb3JlLWF2YXRhci1zaXplOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1hdmF0YXItc2l6ZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCguNXJlbSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJlt0YXBwYWJsZV06YWN0aXZlIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2UtdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFpbCB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmVzIHdoZW4gYW4gaXRlbS1tZXNzYWdlIGlzIHRoZSB1c2VyJ3MuXG4gICAgICAgICYuYWRkb24tbWVzc2FnZS1taW5lIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0teWVsbG93KTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgLS1pb24tdGV4dC1jb2xvcjojRkZGRkZGO1xuICAgICAgICAgICAgJlt0YXBwYWJsZV06YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxvYXQoZW5kKTtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4oMnB4LCAtM3B4LCAtMnB4LCA1cHgpO1xuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWlsIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihudWxsLCAtOHB4LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbChudWxsLCAtMC41cmVtKTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUgLnRhaWwge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIC50YWlsIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24obnVsbCwgbnVsbCwgbnVsbCwgLThweCk7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgtMC41cmVtLCBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbdGFwcGFibGVdLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUuYWN0aXZhdGVkIC50YWlsIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYWN0aXZhdGVkLWJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlcy1kZWxldGUtYnV0dG9uIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbigwLCBudWxsLCAwLCBudWxsKTtcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5hZGRvbi1tZXNzYWdlLW5vLXVzZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggOHB4IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW1pbmUsXG4gICAgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vdC1taW5lICsgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vLXVzZXIuYWRkb24tbWVzc2FnZS1ub3QtbWluZSB7XG4gICAgICAgIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG5cbn1cblxuOmhvc3QtY29udGV4dCguaW9zKSB7XG4gICAgaW9uLWZvb3RlciAudG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwifnRoZW1lL2NvbXBvbmVudHMvZGlzY3Vzc2lvbi5zY3NzXCI7XG5AaW1wb3J0IFwifnRoZW1lL2dsb2JhbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG5cbiAgICAuYWRkb24tbWVzc2FnZXMtdW5yZWFkZnJvbSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgLmhhcy1mYWIgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICAgICAgICBjb250YWluOiB1bnNldDtcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvcmUtZGlzY3Vzc2lvbi1tZXNzYWdlcy1iYWRnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtZGlzY3Vzc2lvbi1iYWRnZS10ZXh0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tYmFkZ2UpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oLTZweCwgLTZweCwgbnVsbCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIGgxIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAuY29yZS1iYXItYnV0dG9uLWltYWdlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIDZweCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb3JlLWZvcm1hdC10ZXh0IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCg2cHgsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIGgxIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.module.ts":
/*!********************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.module.ts ***!
  \********************************************************************/
/*! exports provided: AddonForumDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonForumDiscussionPageModule", function() { return AddonForumDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/mod/forum/components/components.module */ "./src/addons/mod/forum/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussion.page */ "./src/addons/mod/forum/pages/discussion/discussion.page.ts");
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







const routes = [{
        path: '',
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    }];
let AddonForumDiscussionPageModule = class AddonForumDiscussionPageModule {
};
AddonForumDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__["AddonModForumComponentsModule"],
        ],
        declarations: [
            _discussion_page__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        ],
    })
], AddonForumDiscussionPageModule);



/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.page.ts":
/*!******************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.page.ts ***!
  \******************************************************************/
/*! exports provided: AddonModForumDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionPage", function() { return AddonModForumDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _features_rating_services_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/rating/services/rating */ "./src/core/features/rating/services/rating.ts");
/* harmony import */ var _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/rating/services/rating-offline */ "./src/core/features/rating/services/rating-offline.ts");
/* harmony import */ var _features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/rating/services/rating-sync */ "./src/core/features/rating/services/rating-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_array__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons/array */ "./src/core/singletons/array.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_forum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/forum */ "./src/addons/mod/forum/services/forum.ts");
/* harmony import */ var _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/forum-helper */ "./src/addons/mod/forum/services/forum-helper.ts");
/* harmony import */ var _services_forum_offline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/forum-offline */ "./src/addons/mod/forum/services/forum-offline.ts");
/* harmony import */ var _services_forum_sync__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/forum-sync */ "./src/addons/mod/forum/services/forum-sync.ts");
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
 * Page that displays a forum discussion.
 */
let AddonModForumDiscussionPage = class AddonModForumDiscussionPage {
    constructor(splitView, elementRef) {
        this.splitView = splitView;
        this.elementRef = elementRef;
        this.forum = {};
        this.accessInfo = {};
        this.discussionLoaded = false;
        this.sort = 'nested';
        this.replyData = {
            replyingTo: 0,
            isEditing: false,
            subject: '',
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.originalData = {
            subject: null,
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.discussionStr = '';
        this.component = _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].COMPONENT;
        this.canPin = false;
        this.availabilityMessage = null;
        this.leavingPage = false;
        this.hasOfflineRatings = false;
    }
    get isMobile() {
        return _services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isMobile;
    }
    ngOnInit() {
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('courseId');
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('cmId');
        this.forumId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('forumId');
        this.discussion = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('discussion');
        this.discussionId = this.discussion
            ? this.discussion.discussion
            : _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('discussionId');
        this.trackPosts = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteBooleanParam('trackPosts');
        this.postId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('postId');
        this.parent = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('parent');
        this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_10__["CoreApp"].isOnline();
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_16__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_16__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_10__["CoreApp"].isOnline();
            });
        });
        this.discussionStr = _singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('addon.mod_forum.discussion');
    }
    /**
     * View loaded.
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.parent) {
                this.sort = 'nested'; // Force nested order.
            }
            else {
                this.sort = yield this.getUserSort();
            }
            yield this.fetchPosts(true, false, true);
            const scrollTo = this.postId || this.parent;
            if (scrollTo) {
                // Scroll to the post.
                setTimeout(() => {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].scrollToElementBySelector(this.elementRef.nativeElement, this.content, '#addon-mod_forum-post-' + scrollTo);
                });
            }
        });
    }
    /**
     * User entered the page that contains the component.
     */
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.syncObserver) {
                // Already setup.
                return;
            }
            // The discussion object was not passed as parameter.
            if (!this.discussion) {
                yield this.loadDiscussion(this.forumId, this.cmId, this.discussionId);
            }
            // Refresh data if this discussion is synchronized automatically.
            this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].AUTO_SYNCED, data => {
                if (data.forumId == this.forumId && this.discussionId == data.discussionId
                    && data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
            // Refresh data if this forum discussion is synchronized from discussions list.
            this.syncManualObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].MANUAL_SYNCED, data => {
                if (data.source != 'discussion' && data.forumId == this.forumId &&
                    data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
            // Invalidate discussion list if it was not read.
            if (this.discussion.numunread > 0) {
                _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionsList(this.forumId);
            }
            // Listen for offline ratings saved and synced.
            this.ratingOfflineObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_features_rating_services_rating__WEBPACK_IMPORTED_MODULE_5__["CoreRatingProvider"].RATING_SAVED_EVENT, (data) => {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = true;
                }
            });
            this.ratingSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_7__["CoreRatingSyncProvider"].SYNCED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = false;
                }
            }));
            this.changeDiscObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data => {
                if ((this.forumId && this.forumId === data.forumId) || data.cmId === this.cmId) {
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionsList(this.forumId).finally(() => {
                        var _a, _b;
                        if (typeof data.locked != 'undefined') {
                            this.discussion.locked = data.locked;
                        }
                        if (typeof data.pinned != 'undefined') {
                            this.discussion.pinned = data.pinned;
                        }
                        if (typeof data.starred != 'undefined') {
                            this.discussion.starred = data.starred;
                        }
                        if (typeof data.deleted != 'undefined' && data.deleted) {
                            if (!((_a = data.post) === null || _a === void 0 ? void 0 : _a.parentid)) {
                                if ((_b = this.splitView) === null || _b === void 0 ? void 0 : _b.outletActivated) {
                                    _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('../');
                                }
                                else {
                                    _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
                                }
                            }
                            else {
                                this.discussionLoaded = false;
                                this.refreshPosts();
                            }
                        }
                    });
                }
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
            if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].hasPostDataChanged(this.replyData, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploader"].clearTmpFiles(this.replyData.files);
            this.leavingPage = true;
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.syncObserver && this.syncObserver.off();
        this.syncManualObserver && this.syncManualObserver.off();
        this.ratingOfflineObserver && this.ratingOfflineObserver.off();
        this.ratingSyncObserver && this.ratingSyncObserver.off();
        this.changeDiscObserver && this.changeDiscObserver.off();
        delete this.syncObserver;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    }
    /**
     * Get sort type configured by the current user.
     *
     * @return Promise resolved with the sort type.
     */
    getUserSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const value = yield _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSite().getLocalSiteConfig('AddonModForumDiscussionSort');
                return value;
            }
            catch (error) {
                try {
                    const value = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getUserPreference('forum_displaymode');
                    switch (Number(value)) {
                        case 1:
                            return 'flat-oldest';
                        case -1:
                            return 'flat-newest';
                        case 3:
                            return 'nested';
                        case 2: // Threaded not implemented.
                        default:
                        // Not set, use default sort.
                        // @TODO add fallback to $CFG->forum_displaymode.
                    }
                }
                catch (error) {
                    // Ignore errors.
                }
            }
            return 'flat-oldest';
        });
    }
    /**
     * Convenience function to get the forum.
     *
     * @return Promise resolved with the forum.
     */
    fetchForum() {
        if (this.courseId && this.cmId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getForum(this.courseId, this.cmId);
        }
        if (this.courseId && this.forumId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getForumById(this.courseId, this.forumId);
        }
        throw new Error('Cannot get the forum');
    }
    /**
     * Convenience function to get the posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @param forceMarkAsRead Whether to mark all posts as read.
     * @return Promise resolved when done.
     */
    fetchPosts(sync, showErrors, forceMarkAsRead) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let onlinePosts = [];
            const offlineReplies = [];
            let hasUnreadPosts = false;
            try {
                if (sync) {
                    // Try to synchronize the forum.
                    yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].ignoreErrors(this.syncDiscussion(!!showErrors));
                }
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getDiscussionPosts(this.discussionId, { cmId: this.cmId });
                const replies = yield _services_forum_offline__WEBPACK_IMPORTED_MODULE_21__["AddonModForumOffline"].getDiscussionReplies(this.discussionId);
                this.ratingInfo = response.ratinginfo;
                onlinePosts = response.posts;
                this.courseId = response.courseid || this.courseId;
                this.forumId = response.forumid || this.forumId;
                // Check if there are responses stored in offline.
                this.postHasOffline = !!replies.length;
                const convertPromises = [];
                // Index posts to allow quick access. Also check unread field.
                const onlinePostsMap = {};
                onlinePosts.forEach((post) => {
                    onlinePostsMap[post.id] = post;
                    hasUnreadPosts = hasUnreadPosts || !!post.unread;
                });
                replies.forEach((offlineReply) => {
                    // If we don't have forumId and courseId, get it from the post.
                    if (!this.forumId) {
                        this.forumId = offlineReply.forumid;
                    }
                    if (!this.courseId) {
                        this.courseId = offlineReply.courseid;
                    }
                    convertPromises.push(_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].instance
                        .convertOfflineReplyToOnline(offlineReply)
                        .then((reply) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        offlineReplies.push(reply);
                        // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                        onlinePostsMap[reply.parentid].capabilities.reply = false;
                        return;
                    })));
                });
                yield Promise.all(convertPromises);
                // Convert back to array.
                onlinePosts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].objectToArray(onlinePostsMap);
                let posts = offlineReplies.concat(onlinePosts);
                this.startingPost = _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].extractStartingPost(posts);
                // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
                if (this.sort == 'nested') {
                    // Sort first by creation date to make format tree work.
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].sortDiscussionPosts(posts, 'ASC');
                    const rootId = this.startingPost ? this.startingPost.id : (this.discussion ? this.discussion.id : 0);
                    posts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].formatTree(posts, 'parentid', 'id', rootId);
                }
                else {
                    // Set default reply subject.
                    const direction = this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].sortDiscussionPosts(posts, direction);
                }
                try {
                    // Now try to get the forum.
                    const forum = yield this.fetchForum();
                    // "forum.istracked" is more reliable than "trackPosts".
                    if (typeof forum.istracked != 'undefined') {
                        this.trackPosts = forum.istracked;
                    }
                    this.forumId = forum.id;
                    this.cmId = forum.cmid;
                    this.courseId = forum.course;
                    this.forum = forum;
                    this.availabilityMessage = _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].getAvailabilityMessage(forum);
                    const promises = [];
                    promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].instance
                        .getAccessInformation(this.forumId, { cmId: this.cmId })
                        .then((accessInfo) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.accessInfo = accessInfo;
                        // Disallow replying if cut-off date is reached and the user has not the capability to override it.
                        // Just in case the posts were fetched from WS when the cut-off date was not reached but it is now.
                        if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].isCutoffDateReached(forum) && !accessInfo.cancanoverridecutoff) {
                            posts.forEach((post) => {
                                post.capabilities.reply = false;
                            });
                        }
                        return;
                    })));
                    // The discussion object was not passed as parameter and there is no starting post.
                    if (!this.discussion) {
                        promises.push(this.loadDiscussion(this.forumId, this.cmId, this.discussionId));
                    }
                    yield Promise.all(promises);
                }
                catch (error) {
                    // Ignore errors.
                }
                if (!this.discussion && !this.startingPost) {
                    // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                    throw new Error('Invalid forum discussion.');
                }
                if (this.startingPost && this.startingPost.author && this.forum.type == 'single') {
                    // Hide author and groups for first post and type single.
                    delete this.startingPost.author.fullname;
                    delete this.startingPost.author.groups;
                }
                this.posts = posts;
                this.postSubjects = this.getAllPosts().reduce((postSubjects, post) => {
                    postSubjects[post.id] = post.subject;
                    return postSubjects;
                }, this.startingPost
                    ? { [this.startingPost.id]: this.startingPost.subject }
                    : {});
                if (_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].isSetPinStateAvailableForSite()) {
                    // Use the canAddDiscussion WS to check if the user can pin discussions.
                    try {
                        const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
                        this.canPin = !!response.canpindiscussions;
                    }
                    catch (error) {
                        this.canPin = false;
                    }
                }
                else {
                    this.canPin = false;
                }
                this.hasOfflineRatings =
                    yield _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_6__["CoreRatingOffline"].hasRatings('mod_forum', 'post', "module" /* MODULE */, this.cmId, this.discussionId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.discussionLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_SYNC;
                if (forceMarkAsRead || (hasUnreadPosts && this.trackPosts)) {
                    // // Add log in Moodle and mark unread posts as readed.
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].logDiscussionView(this.discussionId, this.forumId || -1, this.forum.name).catch(() => {
                        // Ignore errors.
                    }).finally(() => {
                        // Trigger mark read posts.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].MARK_READ_EVENT, {
                            courseId: this.courseId,
                            moduleId: this.cmId,
                        }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                    });
                }
            }
        });
    }
    /**
     * Convenience function to load discussion.
     *
     * @param forumId Forum ID.
     * @param cmId Forum cmid.
     * @param discussionId Discussion ID.
     * @return Promise resolved when done.
     */
    loadDiscussion(forumId, cmId, discussionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Fetch the discussion if not passed as parameter.
            if (this.discussion || !forumId) {
                return;
            }
            try {
                const discussion = yield _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].getDiscussionById(forumId, cmId, discussionId);
                this.discussion = discussion;
                this.discussionId = this.discussion.discussion;
            }
            catch (error) {
                // Ignore errors.
            }
        });
    }
    /**
     * Tries to synchronize the posts discussion.
     *
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    syncDiscussion(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSync"].instance
                .syncDiscussionReplies(this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                if (result && result.updated) {
                    // Sync successful, send event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].MANUAL_SYNCED, {
                        forumId: this.forumId,
                        userId: _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId(),
                        source: 'discussion',
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                }
                return;
            }));
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSync"].instance
                .syncRatings(this.cmId, this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                return;
            }));
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
                throw new Error('Failed syncing discussion');
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors If show errors to the user of hide them.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.discussionLoaded) {
                yield this.refreshPosts(true, showErrors).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            }
        });
    }
    /**
     * Refresh posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    refreshPosts(sync, showErrors) {
        this.content.scrollToTop();
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        const promises = [
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateForumData(this.courseId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionPosts(this.discussionId, this.forumId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateAccessInformation(this.forumId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateCanAddDiscussion(this.forumId),
        ];
        return _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].allPromises(promises).catch(() => {
            // Ignore errors.
        }).then(() => this.fetchPosts(sync, showErrors));
    }
    /**
     * Function to change posts sorting
     *
     * @param type Sort type.
     * @return Promised resolved when done.
     */
    changeSort(type) {
        this.discussionLoaded = false;
        this.sort = type;
        _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSite().setLocalSiteConfig('AddonModForumDiscussionSort', this.sort);
        this.content.scrollToTop();
        return this.fetchPosts();
    }
    /**
     * Lock or unlock the discussion.
     *
     * @param locked True to lock the discussion, false to unlock.
     */
    setLockState(locked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].setLockState(this.forumId, this.discussionId, locked);
                this.discussion.locked = response.locked;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    locked: this.discussion.locked,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.lockupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Pin or unpin the discussion.
     *
     * @param pinned True to pin the discussion, false to unpin it.
     */
    setPinState(pinned) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].setPinState(this.discussionId, pinned);
                this.discussion.pinned = pinned;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    pinned: this.discussion.pinned,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.pinupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Star or unstar the discussion.
     *
     * @param starred True to star the discussion, false to unstar it.
     */
    toggleFavouriteState(starred) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].toggleFavouriteState(this.discussionId, starred);
                this.discussion.starred = starred;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    starred: this.discussion.starred,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.favouriteupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * New post added.
     */
    postListChanged() {
        // Trigger an event to notify a new reply.
        const data = {
            forumId: this.forumId,
            discussionId: this.discussionId,
            cmId: this.cmId,
        };
        _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].REPLY_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
        this.discussionLoaded = false;
        this.refreshPosts().finally(() => {
            this.discussionLoaded = true;
        });
    }
    /**
     * Get all the posts contained in the discussion.
     *
     * @return Array containing all the posts of the discussion.
     */
    getAllPosts() {
        const allPosts = this.posts.map(post => this.flattenPostHierarchy(post));
        return _singletons_array__WEBPACK_IMPORTED_MODULE_17__["CoreArray"].flatten(allPosts);
    }
    /**
     * Flatten a post's hierarchy into an array.
     *
     * @param parent Parent post.
     * @return Array containing all the posts within the hierarchy (including the parent).
     */
    flattenPostHierarchy(parent) {
        const posts = [parent];
        const children = parent.children || [];
        for (const child of children) {
            posts.push(...this.flattenPostHierarchy(child));
        }
        return posts;
    }
};
AddonModForumDiscussionPage.ctorParameters = () => [
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
AddonModForumDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"],] }]
};
AddonModForumDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-mod-forum-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/mod/forum/pages/discussion/discussion.scss")).default]
    })
], AddonModForumDiscussionPage);



/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.scss":
/*!***************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-forum-reply-button .label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksU0FBQTtBQURSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gICAgLmFkZG9uLWZvcnVtLXJlcGx5LWJ1dHRvbiAubGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-discussion-discussion-module.js.map