(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/profile/profile.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/profile/profile.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"title\">{{ title }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!userLoaded\" (ionRefresh)=\"refreshUser($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"userLoaded\">\n        <ion-list *ngIf=\"user && !isDeleted && isEnrolled\">\n            <ion-item class=\"ion-text-center core-user-profile-maininfo\">\n                <core-user-avatar [user]=\"user\" [userId]=\"user.id\" [linkProfile]=\"false\" [checkOnline]=\"true\">\n                    <ion-button\n                        class=\"edit-avatar\"\n                        *ngIf=\"canChangeProfilePicture\"\n                        (click)=\"changeProfilePicture()\"\n                        [attr.aria-label]=\"'core.user.newpicture' | translate\"\n                        fill=\"clear\"\n                        color=\"dark\"\n                    >\n                        <ion-icon slot=\"icon-only\" name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                </core-user-avatar>\n                <ion-label>\n                    <h2>{{ user.fullname }}</h2>\n                    <p *ngIf=\"user.address\">{{ user.address }}</p>\n                    <p *ngIf=\"rolesFormatted\" class=\"ion-text-wrap\">\n                        <strong>{{ 'core.user.roles' | translate}}</strong>{{'core.labelsep' | translate}}\n                        {{ rolesFormatted }}\n                    </p>\n                </ion-label>\n            </ion-item>\n\n            <div class=\"core-user-communication-handlers\"\n                *ngIf=\"(communicationHandlers && communicationHandlers.length) || isLoadingHandlers\">\n                <ion-item *ngIf=\"communicationHandlers && communicationHandlers.length\">\n                    <ion-label>\n                        <ion-button *ngFor=\"let handler of communicationHandlers\" expand=\"block\" size=\"default\"\n                            [ngClass]=\"['core-user-profile-handler', handler.class || '']\" (click)=\"handlerClicked($event, handler)\"\n                            [hidden]=\"handler.hidden\" [attr.aria-label]=\"handler.title | translate\" [disabled]=\"handler.spinner\">\n                            <ion-icon *ngIf=\"handler.icon\" [name]=\"handler.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                            {{ handler.title | translate }}\n                        </ion-button>\n                    </ion-label>\n                </ion-item>\n                <div *ngIf=\"isLoadingHandlers\" class=\"ion-text-center core-loading-handlers\">\n                    <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n                </div>\n            </div>\n\n\n            <ion-item button class=\"ion-text-wrap core-user-profile-handler\" (click)=\"openUserDetails()\"\n                [attr.aria-label]=\"'core.user.details' | translate\" detail=\"true\">\n                <ion-icon name=\"fas-user\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'core.user.details' | translate }}</p>\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-center core-loading-handlers\" *ngIf=\"isLoadingHandlers\">\n                <ion-label><ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner></ion-label>\n            </ion-item>\n\n            <ion-item button *ngFor=\"let handler of newPageHandlers\" class=\"ion-text-wrap\" (click)=\"handlerClicked($event, handler)\"\n                [ngClass]=\"['core-user-profile-handler', handler.class || '']\" [hidden]=\"handler.hidden\"\n                [attr.aria-label]=\"handler.title | translate\" detail=\"true\">\n                <ion-icon *ngIf=\"handler.icon\" [name]=\"handler.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <p class=\"item-heading\">{{ handler.title | translate }}</p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item *ngIf=\"actionHandlers && actionHandlers.length\">\n                <ion-label>\n                    <ion-button *ngFor=\"let handler of actionHandlers\" expand=\"block\" fill=\"outline\" size=\"default\"\n                        [ngClass]=\"['core-user-profile-handler', handler.class || '']\" (click)=\"handlerClicked($event, handler)\"\n                        [hidden]=\"handler.hidden\" [attr.aria-label]=\"handler.title | translate\" [disabled]=\"handler.spinner\">\n                        <ion-icon *ngIf=\"handler.icon\" [name]=\"handler.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                        {{ handler.title | translate }}\n                        <ion-spinner *ngIf=\"handler.spinner\" slot=\"end\" [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n                    </ion-button>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"!user && !isDeleted && isEnrolled\" icon=\"far-user\"\n            [message]=\" 'core.user.detailsnotavailable' | translate\">\n        </core-empty-box>\n        <core-empty-box *ngIf=\"isDeleted\" icon=\"far-user\" [message]=\"'core.userdeleted' | translate\"></core-empty-box>\n        <core-empty-box *ngIf=\"!isEnrolled\" icon=\"far-user\" [message]=\"'core.notenrolledprofile' | translate\"></core-empty-box>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/user/pages/profile/profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/user/pages/profile/profile.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreUserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserProfilePageModule", function() { return CoreUserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.page */ "./src/core/features/user/pages/profile/profile.page.ts");
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
        component: _profile_page__WEBPACK_IMPORTED_MODULE_4__["CoreUserProfilePage"],
    },
];
let CoreUserProfilePageModule = class CoreUserProfilePageModule {
};
CoreUserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _profile_page__WEBPACK_IMPORTED_MODULE_4__["CoreUserProfilePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreUserProfilePageModule);



/***/ }),

/***/ "./src/core/features/user/pages/profile/profile.page.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/user/pages/profile/profile.page.ts ***!
  \**************************************************************/
/*! exports provided: CoreUserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserProfilePage", function() { return CoreUserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/mimetype */ "./src/core/services/utils/mimetype.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user-helper */ "./src/core/features/user/services/user-helper.ts");
/* harmony import */ var _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/user/services/user-delegate */ "./src/core/features/user/services/user-delegate.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader-helper */ "./src/core/features/fileuploader/services/fileuploader-helper.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
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














let CoreUserProfilePage = class CoreUserProfilePage {
    constructor() {
        this.userLoaded = false;
        this.isLoadingHandlers = false;
        this.isDeleted = false;
        this.isEnrolled = true;
        this.canChangeProfilePicture = false;
        this.actionHandlers = [];
        this.newPageHandlers = [];
        this.communicationHandlers = [];
        this.obsProfileRefreshed = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUserProvider"].PROFILE_REFRESHED, (data) => {
            if (!this.user || !data.user) {
                return;
            }
            this.user.email = data.user.email;
            this.user.address = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__["CoreUserHelper"].formatAddress('', data.user.city, data.user.country);
        }, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
    }
    /**
     * On init.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.site = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite();
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteNumberParam('courseId');
            const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteNumberParam('userId');
            if (!this.site) {
                return;
            }
            if (userId === undefined) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal('User ID not supplied');
                _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].back();
                return;
            }
            this.userId = userId;
            // Allow to change the profile image only in the app profile page.
            this.canChangeProfilePicture =
                (!this.courseId || this.courseId == this.site.getSiteHomeId()) &&
                    this.userId == this.site.getUserId() &&
                    this.site.canUploadFiles() &&
                    _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].canUpdatePictureInSite(this.site) &&
                    !_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].isUpdatePictureDisabledInSite(this.site);
            try {
                yield this.fetchUser();
                try {
                    yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].logView(this.userId, this.courseId, this.user.fullname);
                }
                catch (error) {
                    this.isDeleted = (error === null || error === void 0 ? void 0 : error.errorcode) === 'userdeleted';
                    this.isEnrolled = (error === null || error === void 0 ? void 0 : error.errorcode) !== 'notenrolledprofile';
                }
            }
            finally {
                this.userLoaded = true;
            }
        });
    }
    /**
     * Fetches the user and updates the view.
     */
    fetchUser() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].getProfile(this.userId, this.courseId);
                user.address = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__["CoreUserHelper"].formatAddress('', user.city, user.country);
                this.rolesFormatted = 'roles' in user ? _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__["CoreUserHelper"].formatRoleList(user.roles) : '';
                this.user = user;
                this.title = user.fullname;
                // If there's already a subscription, unsubscribe because we'll get a new one.
                (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                this.subscription = _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_9__["CoreUserDelegate"].getProfileHandlersFor(user, this.courseId).subscribe((handlers) => {
                    this.actionHandlers = [];
                    this.newPageHandlers = [];
                    this.communicationHandlers = [];
                    handlers.forEach((handler) => {
                        switch (handler.type) {
                            case _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_9__["CoreUserDelegateService"].TYPE_COMMUNICATION:
                                this.communicationHandlers.push(handler.data);
                                break;
                            case _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_9__["CoreUserDelegateService"].TYPE_ACTION:
                                this.actionHandlers.push(handler.data);
                                break;
                            case _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_9__["CoreUserDelegateService"].TYPE_NEW_PAGE:
                            default:
                                this.newPageHandlers.push(handler.data);
                                break;
                        }
                    });
                    this.isLoadingHandlers = !_features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_9__["CoreUserDelegate"].areHandlersLoaded(user.id);
                });
                yield this.checkUserImageUpdated();
            }
            catch (error) {
                // Error is null for deleted users, do not show the modal.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            }
        });
    }
    /**
     * Check if current user image has changed.
     *
     * @return Promise resolved when done.
     */
    checkUserImageUpdated() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.site || !this.site.getInfo() || !this.user) {
                return;
            }
            if (this.userId != this.site.getUserId() || !this.isUserAvatarDirty()) {
                // Not current user or hasn't changed.
                return;
            }
            // The current user image received is different than the one stored in site info. Assume the image was updated.
            // Update the site info to get the right avatar in there.
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].updateSiteInfo(this.site.getId());
            }
            catch (_a) {
                // Cannot update site info. Assume the profile image is the right one.
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUserProvider"].PROFILE_PICTURE_UPDATED, {
                    userId: this.userId,
                    picture: this.user.profileimageurl,
                }, this.site.getId());
            }
            if (this.isUserAvatarDirty()) {
                // The image is still different, this means that the good one is the one in site info.
                yield this.refreshUser();
            }
            else {
                // Now they're the same, send event to use the right avatar in the rest of the app.
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUserProvider"].PROFILE_PICTURE_UPDATED, {
                    userId: this.userId,
                    picture: this.user.profileimageurl,
                }, this.site.getId());
            }
        });
    }
    /**
     * Opens dialog to change profile picture.
     */
    changeProfilePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const maxSize = -1;
            const title = _singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant('core.user.newpicture');
            const mimetypes = _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_4__["CoreMimetypeUtils"].getGroupMimeInfo('image', 'mimetypes');
            let modal;
            try {
                const result = yield _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_10__["CoreFileUploaderHelper"].selectAndUploadFile(maxSize, title, mimetypes);
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showModalLoading('core.sending', true);
                const profileImageURL = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].changeProfilePicture(result.itemid, this.userId, this.site.getId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUserProvider"].PROFILE_PICTURE_UPDATED, {
                    userId: this.userId,
                    picture: profileImageURL,
                }, this.site.getId());
                _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].updateSiteInfo(this.site.getId());
                this.refreshUser();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Refresh the user.
     *
     * @param event Event.
     * @return Promise resolved when done.
     */
    refreshUser(event) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(Promise.all([
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].invalidateUserCache(this.userId),
                _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_13__["CoreCourses"].invalidateUserNavigationOptions(),
                _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_13__["CoreCourses"].invalidateUserAdministrationOptions(),
            ]));
            yield this.fetchUser();
            event === null || event === void 0 ? void 0 : event.complete();
            if (this.user) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUserProvider"].PROFILE_REFRESHED, {
                    courseId: this.courseId,
                    userId: this.userId,
                    user: this.user,
                }, (_a = this.site) === null || _a === void 0 ? void 0 : _a.getId());
            }
        });
    }
    /**
     * Open the page with the user details.
     */
    openUserDetails() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigateToSitePath('user/about', {
            params: {
                courseId: this.courseId,
                userId: this.userId,
            },
        });
    }
    /**
     * A handler was clicked.
     *
     * @param event Click event.
     * @param handler Handler that was clicked.
     */
    handlerClicked(event, handler) {
        handler.action(event, this.user, this.courseId);
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.obsProfileRefreshed.off();
    }
    /**
     * Check whether the user avatar is not up to date with site info.
     *
     * @return Whether the user avatar differs from site info cache.
     */
    isUserAvatarDirty() {
        var _a;
        if (!this.user || !this.site) {
            return false;
        }
        const courseAvatarUrl = this.normalizeAvatarUrl(this.user.profileimageurl);
        const siteAvatarUrl = this.normalizeAvatarUrl((_a = this.site.getInfo()) === null || _a === void 0 ? void 0 : _a.userpictureurl);
        return courseAvatarUrl !== siteAvatarUrl;
    }
    /**
     * Normalize an avatar url regardless of theme.
     *
     * Given that the default image is the only one that can be changed per theme, any other url will stay the same. Note that
     * the values returned by this function may not be valid urls, given that they are intended for string comparison.
     *
     * @param avatarUrl Avatar url.
     * @return Normalized avatar string (may not be a valid url).
     */
    normalizeAvatarUrl(avatarUrl) {
        var _a;
        if (!avatarUrl) {
            return 'undefined';
        }
        if (avatarUrl.startsWith(`${(_a = this.site) === null || _a === void 0 ? void 0 : _a.siteUrl}/theme/image.php`)) {
            return 'default';
        }
        return avatarUrl;
    }
};
CoreUserProfilePage.ctorParameters = () => [];
CoreUserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-user-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/profile/profile.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.scss */ "./src/core/features/user/pages/profile/profile.scss")).default]
    })
], CoreUserProfilePage);



/***/ }),

/***/ "./src/core/features/user/pages/profile/profile.scss":
/*!***********************************************************!*\
  !*** ./src/core/features/user/pages/profile/profile.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-user-profile-maininfo::part(native) {\n  flex-direction: column;\n}\n:host ::ng-deep core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--core-large-avatar-size);\n  height: calc(var(--core-avatar-size) + 16px);\n}\n:host ::ng-deep core-user-avatar img {\n  margin: 8px auto;\n}\n:host ::ng-deep core-user-avatar .contact-status {\n  width: 24px !important;\n  height: 24px !important;\n  right: calc(50% - 12px - var(--core-avatar-size) / 2) !important;\n}\n:host ::ng-deep core-user-avatar .edit-avatar {\n  position: absolute;\n  right: calc(50% - 15px - var(--core-avatar-size) / 2);\n  bottom: -12px;\n}\n:host-context([dir=rtl]) :host ::ng-deep core-user-avatar .edit-avatar {\n  left: 0;\n  right: unset;\n}\n:host ::ng-deep core-user-avatar .edit-avatar::part(native) {\n  border-radius: 50%;\n  background: var(--ion-item-background);\n}\n:host-context([dir=rtl]) ::ng-deep core-user-avatar .edit-avatar {\n  left: -24px;\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3VzZXIvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxzQkFBQTtBQURSO0FBSVE7RUFDSSxjQUFBO0VBQ0EsaURBQUE7RUFDQSw0Q0FBQTtBQUZaO0FBSVk7RUFDSSxnQkFBQTtBQUZoQjtBQUtZO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdFQUFBO0FBSGhCO0FBTVk7RUFDSSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtBQUpoQjtBQU1nQjtFQUNJLE9BQUE7RUFDQSxZQUFBO0FBSnBCO0FBTWdCO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtBQUpwQjtBQVlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFUSiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy91c2VyL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gICAgLmNvcmUtdXNlci1wcm9maWxlLW1haW5pbmZvOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICA6Om5nLWRlZXAge1xuICAgICAgICBjb3JlLXVzZXItYXZhdGFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgLS1jb3JlLWF2YXRhci1zaXplOiB2YXIoLS1jb3JlLWxhcmdlLWF2YXRhci1zaXplKTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jb3JlLWF2YXRhci1zaXplKSArIDE2cHgpO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWN0LXN0YXR1cyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICByaWdodDogY2FsYyg1MCUgLSAxMnB4IC0gIHZhcigtLWNvcmUtYXZhdGFyLXNpemUpIC8gMikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmVkaXQtYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IGNhbGMoNTAlIC0gMTVweCAtICB2YXIoLS1jb3JlLWF2YXRhci1zaXplKSAvIDIpO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XG5cbiAgICAgICAgICAgICAgICA6aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pICYge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkgOjpuZy1kZWVwIGNvcmUtdXNlci1hdmF0YXIgLmVkaXQtYXZhdGFyIHtcbiAgICBsZWZ0OiAtMjRweDtcbiAgICByaWdodDogdW5zZXQ7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map