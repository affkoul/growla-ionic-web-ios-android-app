(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/components/actions/addon-notifications-actions.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/components/actions/addon-notifications-actions.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row *ngIf=\"actions && actions.length > 0\" class=\"justify-content-around\">\n    <ion-col *ngFor=\"let action of actions\">\n        <ion-button fill=\"clear\" expand=\"block\" (click)=\"action.action()\">\n            <ion-icon slot=\"start\" name=\"{{action.icon}}\" aria-hidden=\"true\"></ion-icon>\n            {{ action.message | translate }}\n        </ion-button>\n    </ion-col>\n</ion-row>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/list/list.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/list/list.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.notifications.notifications' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!notificationsLoaded\" (ionRefresh)=\"refreshNotifications($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"notificationsLoaded\">\n        <div class=\"ion-padding\" *ngIf=\"canMarkAllNotificationsAsRead\">\n            <ion-button [disabled]=\"loadingMarkAllNotificationsAsRead\" expand=\"block\" (click)=\"markAllNotificationsAsRead()\"\n                color=\"light\">\n                <ion-icon slot=\"start\" name=\"fas-check\" aria-hidden=\"true\" *ngIf=\"!loadingMarkAllNotificationsAsRead\"></ion-icon>\n                <ion-spinner slot=\"start\" [attr.aria-label]=\"'core.loading' | translate\" *ngIf=\"loadingMarkAllNotificationsAsRead\">\n                </ion-spinner>\n                {{ 'addon.notifications.markallread' | translate }}\n            </ion-button>\n        </div>\n\n        <ion-card *ngFor=\"let notification of notifications\">\n            <ion-item class=\"ion-text-wrap\" lines=\"none\"\n                [attr.aria-label]=\"\n                    notification.timeread\n                    ? notification.subject\n                    : 'addon.notifications.unreadnotification' | translate: {$a: notification.subject}\">\n                <core-user-avatar *ngIf=\"notification.useridfrom > 0\" [user]=\"notification\" slot=\"start\"\n                    [profileUrl]=\"notification.profileimageurlfrom\" [fullname]=\"notification.userfromfullname\"\n                    [userId]=\"notification.useridfrom\" [extraIcon]=\"notification.iconurl\"></core-user-avatar>\n\n                <img *ngIf=\"notification.useridfrom <= 0 && notification.iconurl\" [src]=\"notification.iconurl\" alt=\"\"\n                    role=\"presentation\" class=\"core-notification-icon\" slot=\"start\">\n\n                <ion-label>\n                    <p class=\"item-heading\">{{ notification.subject }}</p>\n                    <p *ngIf=\"notification.userfromfullname\">{{ notification.userfromfullname }}</p>\n                </ion-label>\n                <ion-note slot=\"end\" class=\"ion-float-end ion-text-end\">\n                    {{ notification.timecreated | coreDateDayOrTime }}\n                    <span *ngIf=\"!notification.timeread\">\n                        <ion-icon name=\"fas-circle\" color=\"primary\" aria-hidden=\"true\"></ion-icon>\n                    </span>\n                </ion-note>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <core-format-text [text]=\"notification.mobiletext | coreCreateLinks\" contextLevel=\"system\"\n                    [contextInstanceId]=\"0\" [maxHeight]=\"notification.displayfullhtml ? 120 : null\">\n                    </core-format-text>\n                </ion-label>\n            </ion-item>\n            <addon-notifications-actions [contextUrl]=\"notification.contexturl\" [courseId]=\"notification.courseid\"\n                [data]=\"notification.customdata\">\n            </addon-notifications-actions>\n        </ion-card>\n\n        <core-empty-box *ngIf=\"!notifications || notifications.length <= 0\" icon=\"far-bell\"\n            [message]=\"'addon.notifications.therearentnotificationsyet' | translate\">\n        </core-empty-box>\n\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMoreNotifications($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/notifications/components/actions/actions.ts":
/*!****************************************************************!*\
  !*** ./src/addons/notifications/components/actions/actions.ts ***!
  \****************************************************************/
/*! exports provided: AddonNotificationsActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsActionsComponent", function() { return AddonNotificationsActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_contentlinks_services_contentlinks_delegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-delegate */ "./src/core/features/contentlinks/services/contentlinks-delegate.ts");
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
 * Component that displays the actions for a notification.
 */
let AddonNotificationsActionsComponent = class AddonNotificationsActionsComponent {
    constructor() {
        this.actions = [];
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.contextUrl && (!this.data || !this.data.appurl)) {
                // No URL, nothing to do.
                return;
            }
            let actions = [];
            // Treat appurl first if any.
            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.appurl) {
                actions = yield _features_contentlinks_services_contentlinks_delegate__WEBPACK_IMPORTED_MODULE_3__["CoreContentLinksDelegate"].getActionsFor(this.data.appurl, this.courseId, undefined, this.data);
            }
            if (!actions.length && this.contextUrl) {
                // No appurl or cannot handle it. Try with contextUrl.
                actions = yield _features_contentlinks_services_contentlinks_delegate__WEBPACK_IMPORTED_MODULE_3__["CoreContentLinksDelegate"].getActionsFor(this.contextUrl, this.courseId, undefined, this.data);
            }
            if (!actions.length) {
                // URL is not supported. Add an action to open it in browser.
                actions.push({
                    message: 'core.view',
                    icon: 'fas-eye',
                    action: this.openInBrowser.bind(this),
                });
            }
            this.actions = actions;
        });
    }
    /**
     * Default action. Open in browser.
     *
     * @param siteId Site ID to use.
     */
    openInBrowser(siteId) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.appurl) || this.contextUrl;
            if (!url) {
                return;
            }
            const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSite(siteId);
            site.openInBrowserWithAutoLogin(url);
        });
    }
};
AddonNotificationsActionsComponent.propDecorators = {
    contextUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    courseId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddonNotificationsActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'addon-notifications-actions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addon-notifications-actions.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/components/actions/addon-notifications-actions.html")).default,
    })
], AddonNotificationsActionsComponent);



/***/ }),

/***/ "./src/addons/notifications/components/components.module.ts":
/*!******************************************************************!*\
  !*** ./src/addons/notifications/components/components.module.ts ***!
  \******************************************************************/
/*! exports provided: AddonNotificationsComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsComponentsModule", function() { return AddonNotificationsComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/actions */ "./src/addons/notifications/components/actions/actions.ts");
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




let AddonNotificationsComponentsModule = class AddonNotificationsComponentsModule {
};
AddonNotificationsComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _actions_actions__WEBPACK_IMPORTED_MODULE_3__["AddonNotificationsActionsComponent"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
        exports: [
            _actions_actions__WEBPACK_IMPORTED_MODULE_3__["AddonNotificationsActionsComponent"],
        ],
    })
], AddonNotificationsComponentsModule);



/***/ }),

/***/ "./src/addons/notifications/pages/list/list.module.ts":
/*!************************************************************!*\
  !*** ./src/addons/notifications/pages/list/list.module.ts ***!
  \************************************************************/
/*! exports provided: AddonNotificationsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsListPageModule", function() { return AddonNotificationsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/addons/notifications/components/components.module.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list */ "./src/addons/notifications/pages/list/list.ts");
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
        component: _list__WEBPACK_IMPORTED_MODULE_5__["AddonNotificationsListPage"],
    },
];
let AddonNotificationsListPageModule = class AddonNotificationsListPageModule {
};
AddonNotificationsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonNotificationsComponentsModule"],
        ],
        declarations: [
            _list__WEBPACK_IMPORTED_MODULE_5__["AddonNotificationsListPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonNotificationsListPageModule);



/***/ }),

/***/ "./src/addons/notifications/pages/list/list.scss":
/*!*******************************************************!*\
  !*** ./src/addons/notifications/pages/list/list.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-notification-icon {\n  width: 34px;\n  height: 34px;\n  margin: 10px !important;\n}\n:host .item core-format-text ::ng-deep .forumpost {\n  border: 1px solid var(--gray-light);\n  width: 100%;\n  margin: 0 0 1em 0;\n}\n:host .item core-format-text ::ng-deep .forumpost td {\n  padding: 10px;\n}\n:host .item core-format-text ::ng-deep .forumpost .header {\n  background-color: var(--gray-lighter);\n}\n:host .item core-format-text ::ng-deep .forumpost .picture {\n  width: auto;\n  text-align: center;\n}\n:host .item core-format-text ::ng-deep .forumpost .subject {\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n:host .item core-format-text ::ng-deep a {\n  text-decoration: none;\n}\n:host .item core-format-text ::ng-deep .userpicture {\n  border-radius: 50%;\n}\n:host .item core-format-text ::ng-deep .mdl-right {\n  text-align: end;\n}\n:host .item core-format-text ::ng-deep .mdl-right a {\n  display: none;\n}\n:host .item core-format-text ::ng-deep .mdl-right font {\n  font-size: 0.9em;\n}\n:host .item core-format-text ::ng-deep .commands {\n  display: none;\n}\n:host .item core-format-text ::ng-deep hr {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  background-color: var(--gray-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbm90aWZpY2F0aW9ucy9wYWdlcy9saXN0L2xpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUlRO0VBQ0ksbUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQUlZO0VBQ0ksYUFBQTtBQUZoQjtBQUtZO0VBQ0kscUNBQUE7QUFIaEI7QUFNWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUpoQjtBQU9ZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUxoQjtBQVNRO0VBQ0kscUJBQUE7QUFQWjtBQVVRO0VBQ0ksa0JBQUE7QUFSWjtBQVdRO0VBQ0ksZUFBQTtBQVRaO0FBVVk7RUFDSSxhQUFBO0FBUmhCO0FBVVk7RUFDSSxnQkFBQTtBQVJoQjtBQVlRO0VBQ0ksYUFBQTtBQVZaO0FBYVE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7QUFYWiIsImZpbGUiOiJzcmMvYWRkb25zL25vdGlmaWNhdGlvbnMvcGFnZXMvbGlzdC9saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmNvcmUtbm90aWZpY2F0aW9uLWljb24ge1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaXRlbSBjb3JlLWZvcm1hdC10ZXh0IDo6bmctZGVlcCB7XG4gICAgICAgIC5mb3J1bXBvc3Qge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS1saWdodCk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDFlbSAwO1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1saWdodGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1YmplY3Qge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXJwaWN0dXJlIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZGwtcmlnaHQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvbnQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbWFuZHMge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktbGlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/addons/notifications/pages/list/list.ts":
/*!*****************************************************!*\
  !*** ./src/addons/notifications/pages/list/list.ts ***!
  \*****************************************************/
/*! exports provided: AddonNotificationsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsListPage", function() { return AddonNotificationsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/notifications */ "./src/addons/notifications/services/notifications.ts");
/* harmony import */ var _services_notifications_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/notifications-helper */ "./src/addons/notifications/services/notifications-helper.ts");
/* harmony import */ var _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/pushnotifications/services/push-delegate */ "./src/core/features/pushnotifications/services/push-delegate.ts");
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
 * Page that displays the list of notifications.
 */
let AddonNotificationsListPage = class AddonNotificationsListPage {
    constructor() {
        this.notifications = [];
        this.notificationsLoaded = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.canMarkAllNotificationsAsRead = false;
        this.loadingMarkAllNotificationsAsRead = false;
        this.pendingRefresh = false;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.fetchNotifications();
        this.cronObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotificationsProvider"].READ_CRON_EVENT, () => {
            if (!this.isCurrentView) {
                return;
            }
            this.notificationsLoaded = false;
            this.refreshNotifications();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
        this.pushObserver = _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__["CorePushNotificationsDelegate"].on('receive').subscribe((notification) => {
            // New notification received. If it's from current site, refresh the data.
            if (!this.isCurrentView) {
                this.pendingRefresh = true;
                return;
            }
            if (!_services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].isTrueOrOne(notification.notif) || !_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].isCurrentSite(notification.site)) {
                return;
            }
            this.notificationsLoaded = false;
            this.refreshNotifications();
        });
    }
    /**
     * Convenience function to get notifications. Gets unread notifications first.
     *
     * @param refreh Whether we're refreshing data.
     * @return Resolved when done.
     */
    fetchNotifications(refresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            try {
                const result = yield _services_notifications_helper__WEBPACK_IMPORTED_MODULE_8__["AddonNotificationsHelper"].getNotifications(refresh ? [] : this.notifications);
                const notifications = result.notifications.map((notification) => this.formatText(notification));
                if (refresh) {
                    this.notifications = notifications;
                }
                else {
                    this.notifications = this.notifications.concat(notifications);
                }
                this.canLoadMore = result.canLoadMore;
                this.markNotificationsAsRead(notifications);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'addon.notifications.errorgetnotifications', true);
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
            }
            finally {
                this.notificationsLoaded = true;
            }
        });
    }
    /**
     * Mark all notifications as read.
     *
     * @return Promise resolved when done.
     */
    markAllNotificationsAsRead() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingMarkAllNotificationsAsRead = true;
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotifications"].markAllNotificationsAsRead());
            _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotificationsProvider"].READ_CHANGED_EVENT, {}, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
            // All marked as read, refresh the list.
            this.notificationsLoaded = false;
            yield this.refreshNotifications();
        });
    }
    /**
     * Mark notifications as read.
     *
     * @param notifications Array of notification objects.
     */
    markNotificationsAsRead(notifications) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (notifications.length > 0) {
                const promises = notifications.map((notification) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (notification.read) {
                        // Already read, don't mark it.
                        return;
                    }
                    yield _services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotifications"].markNotificationRead(notification.id);
                }));
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(Promise.all(promises));
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotifications"].invalidateNotificationsList());
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotificationsProvider"].READ_CHANGED_EVENT, {}, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
            }
            // Check if mark all notifications as read is enabled and there are some to read.
            if (!_services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotifications"].isMarkAllNotificationsAsReadEnabled()) {
                this.canMarkAllNotificationsAsRead = false;
                return;
            }
            try {
                this.loadingMarkAllNotificationsAsRead = true;
                const unread = yield _services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotifications"].getUnreadNotificationsCount();
                this.canMarkAllNotificationsAsRead = unread > 0;
            }
            finally {
                this.loadingMarkAllNotificationsAsRead = false;
            }
        });
    }
    /**
     * Refresh notifications.
     *
     * @param refresher Refresher.
     * @return Promise<any> Promise resolved when done.
     */
    refreshNotifications(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_notifications__WEBPACK_IMPORTED_MODULE_7__["AddonNotifications"].invalidateNotificationsList());
            try {
                yield this.fetchNotifications(true);
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Load more results.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     */
    loadMoreNotifications(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchNotifications();
            }
            finally {
                infiniteComplete === null || infiniteComplete === void 0 ? void 0 : infiniteComplete();
            }
        });
    }
    /**
     * Formats the text of a notification.
     *
     * @param notification The notification object.
     */
    formatText(notification) {
        const formattedNotification = notification;
        formattedNotification.displayfullhtml = this.shouldDisplayFullHtml(notification);
        formattedNotification.iconurl = formattedNotification.iconurl || undefined; // Make sure the property exists.
        formattedNotification.mobiletext = formattedNotification.displayfullhtml ?
            notification.fullmessagehtml :
            _services_utils_text__WEBPACK_IMPORTED_MODULE_4__["CoreTextUtils"].replaceNewLines(formattedNotification.mobiletext.replace(/-{4,}/ig, ''), '<br>');
        return formattedNotification;
    }
    /**
     * Check whether we should display full HTML of the notification.
     *
     * @param notification Notification.
     * @return Whether to display full HTML.
     */
    shouldDisplayFullHtml(notification) {
        return notification.component == 'mod_forum' && notification.eventtype == 'digests';
    }
    /**
     * User entered the page.
     */
    ionViewDidEnter() {
        this.isCurrentView = true;
        if (!this.pendingRefresh) {
            return;
        }
        this.pendingRefresh = false;
        this.notificationsLoaded = false;
        this.refreshNotifications();
    }
    /**
     * User left the page.
     */
    ionViewDidLeave() {
        this.isCurrentView = false;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.cronObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.pushObserver) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
};
AddonNotificationsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-notifications-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/list/list.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.scss */ "./src/addons/notifications/pages/list/list.scss")).default]
    })
], AddonNotificationsListPage);



/***/ })

}]);
//# sourceMappingURL=pages-list-list-module.js.map