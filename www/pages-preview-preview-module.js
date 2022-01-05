(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preview-preview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/preview/preview.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/preview/preview.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"course?.fullname\" contextLevel=\"course\" [contextInstanceId]=\"course?.id\"></core-format-text>\n        </h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!dataLoaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"dataLoaded\">\n        <div *ngIf=\"courseImageUrl\" class=\"core-course-thumb-parallax\">\n            <div (click)=\"openCourse()\" class=\"core-course-thumb\">\n                <img [src]=\"courseImageUrl\" core-external-content alt=\"\"/>\n            </div>\n        </div>\n        <div class=\"core-course-thumb-parallax-content\" *ngIf=\"course\">\n            <ion-item class=\"ion-text-wrap\" (click)=\"openCourse()\" [attr.aria-label]=\"course.fullname\"\n                [detail]=\"!avoidOpenCourse && canAccessCourse\" [button]=\"!avoidOpenCourse && canAccessCourse\">\n                <ion-icon name=\"fas-graduation-cap\" fixed-width slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>\n                    <h2>\n                        <core-format-text [text]=\"course.fullname\" contextLevel=\"course\" [contextInstanceId]=\"course.id\">\n                        </core-format-text>\n                    </h2>\n                    <p *ngIf=\"course.categoryname\"><core-format-text [text]=\"course.categoryname\"\n                        contextLevel=\"coursecat\" [contextInstanceId]=\"course.categoryid\"></core-format-text></p>\n                    <p *ngIf=\"course.startdate\">\n                        {{course.startdate * 1000 | coreFormatDate:\"strftimedatefullshort\" }}\n                        <span *ngIf=\"course.enddate\"> - {{course.enddate * 1000 | coreFormatDate:\"strftimedatefullshort\" }}</span>\n                    </p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"course.summary\" detail=\"false\">\n                <ion-label>\n                    <core-format-text [text]=\"course.summary\" maxHeight=\"120\" contextLevel=\"course\" [contextInstanceId]=\"course.id\">\n                    </core-format-text>\n                </ion-label>\n            </ion-item>\n\n            <ng-container class=\"ion-text-wrap\" *ngIf=\"course.contacts && course.contacts.length\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'core.teachers' | translate }}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let contact of course.contacts\" core-user-link [userId]=\"contact.id\"\n                    [courseId]=\"isEnrolled ? course.id : null\" [attr.aria-label]=\"'core.viewprofile' | translate\" detail=\"true\">\n                    <core-user-avatar [user]=\"contact\" slot=\"start\" [userId]=\"contact.id\"\n                        [courseId]=\"isEnrolled ? course.id : null\">\n                    </core-user-avatar>\n                    <ion-label>\n                        <p class=\"item-heading\">{{contact.fullname}}</p>\n                    </ion-label>\n                </ion-item>\n                <core-spacer></core-spacer>\n            </ng-container>\n\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"course.customfields\">\n                <ion-label>\n                <ng-container *ngFor=\"let field of course.customfields\">\n                    <div *ngIf=\"field.value\"\n                        class=\"core-customfield core-customfield_{{field.type}} core-customfield_{{field.shortname}}\">\n                        <span class=\"core-customfieldname\">\n                            <core-format-text [text]=\"field.name\" contextLevel=\"course\" [contextInstanceId]=\"course.id\">\n                            </core-format-text>\n                        </span><span class=\"core-customfieldseparator\">: </span>\n                        <span class=\"core-customfieldvalue\">\n                            <core-format-text [text]=\"field.value\" maxHeight=\"120\" contextLevel=\"course\"\n                            [contextInstanceId]=\"course.id\">\n                            </core-format-text>\n                        </span>\n                    </div>\n                </ng-container>\n                </ion-label>\n            </ion-item>\n\n            <div *ngIf=\"!isEnrolled\" detail=\"false\">\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let instance of selfEnrolInstances\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ instance.name }}</p>\n                        <ion-button expand=\"block\" class=\"ion-margin-top\" (click)=\"selfEnrolClicked(instance.id)\">\n                            {{ 'core.courses.enrolme' | translate }}\n                        </ion-button>\n                    </ion-label>\n                </ion-item>\n            </div>\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"!isEnrolled && paypalEnabled\">\n                <ion-label>\n                    <h2>{{ 'core.courses.paypalaccepted' | translate }}</h2>\n                    <p>{{ 'core.paymentinstant' | translate }}</p>\n                    <ion-button expand=\"block\" class=\"ion-margin-top\" (click)=\"paypalEnrol()\" *ngIf=\"isMobile\">\n                        {{ 'core.courses.sendpaymentbutton' | translate }}\n                    </ion-button>\n                </ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"!isEnrolled && !selfEnrolInstances.length && !paypalEnabled\">\n                <ion-label><p>{{ 'core.courses.notenrollable' | translate }}</p></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"canAccessCourse && downloadCourseEnabled\" (click)=\"prefetchCourse()\" detail=\"false\"\n                    [attr.aria-label]=\"prefetchCourseData.statusTranslatable | translate\" button>\n                <ion-icon *ngIf=\"(prefetchCourseData.status != statusDownloaded) && !prefetchCourseData.loading\"\n                    [name]=\"prefetchCourseData.icon\" slot=\"start\" aria-hidden=\"true\">\n                </ion-icon>\n                <ion-icon *ngIf=\"(prefetchCourseData.status == statusDownloaded) && !prefetchCourseData.loading\"\n                    slot=\"start\" [name]=\"prefetchCourseData.icon\" color=\"success\"\n                    aria-hidden=\"true\" role=\"status\">\n                </ion-icon>\n                <ion-spinner *ngIf=\"prefetchCourseData.loading\" slot=\"start\"\n                    [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n                <ion-label><h2>{{ 'core.course.downloadcourse' | translate }}</h2></ion-label>\n            </ion-item>\n            <ion-item button (click)=\"openCourse()\" [attr.aria-label]=\"course.fullname\" *ngIf=\"!avoidOpenCourse && canAccessCourse\"\n                detail=\"true\">\n                <ion-icon name=\"fas-briefcase\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label><h2>{{ 'core.course.contents' | translate }}</h2></ion-label>\n            </ion-item>\n            <ion-item [href]=\"courseUrl\" core-link [attr.aria-label]=\"course.fullname\" button detail=\"false\">\n                <ion-icon name=\"fas-external-link-alt\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label><h2>{{ 'core.openinbrowser' | translate }}</h2></ion-label>\n            </ion-item>\n        </div>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/course/pages/preview/preview.module.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/course/pages/preview/preview.module.ts ***!
  \******************************************************************/
/*! exports provided: CoreCoursePreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursePreviewPageModule", function() { return CoreCoursePreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _preview_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview.page */ "./src/core/features/course/pages/preview/preview.page.ts");
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
        component: _preview_page__WEBPACK_IMPORTED_MODULE_4__["CoreCoursePreviewPage"],
    },
];
let CoreCoursePreviewPageModule = class CoreCoursePreviewPageModule {
};
CoreCoursePreviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _preview_page__WEBPACK_IMPORTED_MODULE_4__["CoreCoursePreviewPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCoursePreviewPageModule);



/***/ }),

/***/ "./src/core/features/course/pages/preview/preview.page.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/course/pages/preview/preview.page.ts ***!
  \****************************************************************/
/*! exports provided: CoreCoursePreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursePreviewPage", function() { return CoreCoursePreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_course_services_course_options_delegate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/course/services/course-options-delegate */ "./src/core/features/course/services/course-options-delegate.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _courses_components_self_enrol_password_self_enrol_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../courses/components/self-enrol-password/self-enrol-password */ "./src/core/features/courses/components/self-enrol-password/self-enrol-password.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that allows "previewing" a course and enrolling in it if enabled and not enrolled.
 */
let CoreCoursePreviewPage = class CoreCoursePreviewPage {
    constructor(zone) {
        this.zone = zone;
        this.isEnrolled = false;
        this.canAccessCourse = true;
        this.selfEnrolInstances = [];
        this.paypalEnabled = false;
        this.dataLoaded = false;
        this.avoidOpenCourse = false;
        this.prefetchCourseData = {
            icon: '',
            statusTranslatable: 'core.loading',
            status: '',
            loading: true,
        };
        this.statusDownloaded = _core_constants__WEBPACK_IMPORTED_MODULE_12__["CoreConstants"].DOWNLOADED;
        this.courseUrl = '';
        this.isGuestEnabled = false;
        this.enrolmentMethods = [];
        this.waitStart = 0;
        this.enrolUrl = '';
        this.paypalReturnUrl = '';
        this.pageDestroyed = false;
        this.isMobile = _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].isMobile();
        this.downloadCourseEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].isDownloadCourseDisabledInSite();
        if (this.downloadCourseEnabled) {
            // Listen for status change in course.
            this.courseStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].COURSE_STATUS_CHANGED, (data) => {
                if (data.courseId == this.course.id || data.courseId == _features_course_services_course__WEBPACK_IMPORTED_MODULE_9__["CoreCourseProvider"].ALL_COURSES_CLEARED) {
                    this.updateCourseStatus(data.status);
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
        }
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.course = _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].getRouteParam('course');
            this.avoidOpenCourse = !!_services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].getRouteBooleanParam('avoidOpenCourse');
            if (!this.course) {
                _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].back();
                return;
            }
            const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite();
            const currentSiteUrl = currentSite && currentSite.getURL();
            this.paypalEnabled = ((_a = this.course.enrollmentmethods) === null || _a === void 0 ? void 0 : _a.indexOf('paypal')) > -1;
            this.enrolUrl = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].concatenatePaths(currentSiteUrl, 'enrol/index.php?id=' + this.course.id);
            this.courseUrl = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].concatenatePaths(currentSiteUrl, 'course/view.php?id=' + this.course.id);
            this.paypalReturnUrl = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].concatenatePaths(currentSiteUrl, 'enrol/paypal/return.php');
            if (this.course.overviewfiles.length > 0) {
                this.courseImageUrl = this.course.overviewfiles[0].fileurl;
            }
            try {
                yield this.getCourse();
            }
            finally {
                if (this.downloadCourseEnabled) {
                    // Determine course prefetch icon.
                    this.prefetchCourseData = yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_10__["CoreCourseHelper"].getCourseStatusIconAndTitle(this.course.id);
                    if (this.prefetchCourseData.loading) {
                        // Course is being downloaded. Get the download promise.
                        const promise = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_10__["CoreCourseHelper"].getCourseDownloadPromise(this.course.id);
                        if (promise) {
                            // There is a download promise. If it fails, show an error.
                            promise.catch((error) => {
                                if (!this.pageDestroyed) {
                                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                                }
                            });
                        }
                        else {
                            // No download, this probably means that the app was closed while downloading. Set previous status.
                            _features_course_services_course__WEBPACK_IMPORTED_MODULE_9__["CoreCourse"].setCoursePreviousStatus(this.course.id);
                        }
                    }
                }
            }
        });
    }
    /**
     * Check if the user can access as guest.
     *
     * @return Promise resolved if can access as guest, rejected otherwise. Resolve param indicates if
     *         password is required for guest access.
     */
    canAccessAsGuest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isGuestEnabled) {
                throw Error('Guest access is not enabled.');
            }
            // Search instance ID of guest enrolment method.
            const method = this.enrolmentMethods.find((method) => method.type == 'guest');
            this.guestInstanceId = method === null || method === void 0 ? void 0 : method.id;
            if (this.guestInstanceId) {
                const info = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getCourseGuestEnrolmentInfo(this.guestInstanceId);
                if (!info.status) {
                    // Not active, reject.
                    throw Error('Guest access is not enabled.');
                }
                return info.passwordrequired;
            }
            throw Error('Guest enrollment method not found.');
        });
    }
    /**
     * Convenience function to get course. We use this to determine if a user can see the course or not.
     */
    getCourse() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get course enrolment methods.
            this.selfEnrolInstances = [];
            try {
                this.enrolmentMethods = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getCourseEnrolmentMethods(this.course.id);
                this.enrolmentMethods.forEach((method) => {
                    if (method.type === 'self') {
                        this.selfEnrolInstances.push(method);
                    }
                    else if (method.type === 'guest') {
                        this.isGuestEnabled = true;
                    }
                });
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting enrolment data');
            }
            try {
                let course;
                // Check if user is enrolled in the course.
                try {
                    course = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getUserCourse(this.course.id);
                    this.isEnrolled = true;
                }
                catch (_b) {
                    // The user is not enrolled in the course. Use getCourses to see if it's an admin/manager and can see the course.
                    this.isEnrolled = false;
                    course = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getCourse(this.course.id);
                }
                // Success retrieving the course, we can assume the user has permissions to view it.
                this.course.fullname = course.fullname || this.course.fullname;
                this.course.summary = course.summary || this.course.summary;
                this.canAccessCourse = true;
            }
            catch (_c) {
                // The user is not an admin/manager. Check if we can provide guest access to the course.
                try {
                    this.canAccessCourse = !(yield this.canAccessAsGuest());
                }
                catch (_d) {
                    this.canAccessCourse = false;
                }
            }
            if (!((_a = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.isVersionGreaterEqualThan('3.7'))) {
                try {
                    const available = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].isGetCoursesByFieldAvailableInSite();
                    if (available) {
                        const course = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getCourseByField('id', this.course.id);
                        this.course.customfields = course.customfields;
                    }
                }
                catch (_e) {
                    // Ignore errors.
                }
            }
            this.dataLoaded = true;
        });
    }
    /**
     * Open the course.
     */
    openCourse() {
        if (!this.canAccessCourse || this.avoidOpenCourse) {
            // Course cannot be opened or we are avoiding opening because we accessed from inside a course.
            return;
        }
        _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_10__["CoreCourseHelper"].openCourse(this.course);
    }
    /**
     * Enrol using PayPal.
     */
    paypalEnrol() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // We cannot control browser in browser.
            if (!this.isMobile || !_services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite()) {
                return;
            }
            let hasReturnedFromPaypal = false;
            const urlLoaded = (event) => {
                if (event.url.indexOf(this.paypalReturnUrl) != -1) {
                    hasReturnedFromPaypal = true;
                }
                else if (event.url.indexOf(this.courseUrl) != -1 && hasReturnedFromPaypal) {
                    // User reached the course index page after returning from PayPal, close the InAppBrowser.
                    inAppClosed();
                    window.close();
                }
            };
            const inAppClosed = () => {
                // InAppBrowser closed, refresh data.
                unsubscribeAll();
                if (!this.dataLoaded) {
                    return;
                }
                this.dataLoaded = false;
                this.refreshData();
            };
            const unsubscribeAll = () => {
                inAppLoadSubscription === null || inAppLoadSubscription === void 0 ? void 0 : inAppLoadSubscription.unsubscribe();
                inAppExitSubscription === null || inAppExitSubscription === void 0 ? void 0 : inAppExitSubscription.unsubscribe();
            };
            // Open the enrolment page in InAppBrowser.
            const window = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite().openInAppWithAutoLogin(this.enrolUrl);
            // Observe loaded pages in the InAppBrowser to check if the enrol process has ended.
            const inAppLoadSubscription = window.on('loadstart').subscribe((event) => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                this.zone.run(() => urlLoaded(event));
            });
            // Observe window closed.
            const inAppExitSubscription = window.on('exit').subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                this.zone.run(inAppClosed);
            });
        });
    }
    /**
     * User clicked in a self enrol button.
     *
     * @param instanceId The instance ID of the enrolment method.
     */
    selfEnrolClicked(instanceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.courses.confirmselfenrol'));
                this.selfEnrolInCourse('', instanceId);
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Self enrol in a course.
     *
     * @param password Password to use.
     * @param instanceId The instance ID.
     * @return Promise resolved when self enrolled.
     */
    selfEnrolInCourse(password, instanceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showModalLoading('core.loading', true);
            try {
                yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].selfEnrol(this.course.id, password, instanceId);
                // Close modal and refresh data.
                this.isEnrolled = true;
                this.dataLoaded = false;
                // Sometimes the list of enrolled courses takes a while to be updated. Wait for it.
                yield this.waitForEnrolled(true);
                yield this.refreshData().finally(() => {
                    // My courses have been updated, trigger event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCoursesProvider"].EVENT_MY_COURSES_UPDATED, {
                        courseId: this.course.id,
                        course: this.course,
                        action: _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCoursesProvider"].ACTION_ENROL,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
                });
                this.openCourse();
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
            catch (error) {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
                if (error && error.errorcode === _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCoursesProvider"].ENROL_INVALID_KEY) {
                    // Initialize the self enrol modal.
                    // Invalid password, show the modal to enter the password.
                    const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].openModal({
                        component: _courses_components_self_enrol_password_self_enrol_password__WEBPACK_IMPORTED_MODULE_13__["CoreCoursesSelfEnrolPasswordComponent"],
                        componentProps: { password },
                    });
                    if (typeof modalData != 'undefined') {
                        this.selfEnrolInCourse(modalData, instanceId);
                        return;
                    }
                    if (!password) {
                        // No password entered, don't show error.
                        return;
                    }
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorselfenrol', true);
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher The refresher if this was triggered by a Pull To Refresh.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateUserCourses());
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateCourse(this.course.id));
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateCourseEnrolmentMethods(this.course.id));
            promises.push(_features_course_services_course_options_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreCourseOptionsDelegate"].clearAndInvalidateCoursesOptions(this.course.id));
            if (_services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite() && !_services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite().isVersionGreaterEqualThan('3.7')) {
                promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateCoursesByField('id', this.course.id));
            }
            if (this.guestInstanceId) {
                promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateCourseGuestEnrolmentInfo(this.guestInstanceId));
            }
            yield Promise.all(promises).finally(() => this.getCourse()).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Update the course status icon and title.
     *
     * @param status Status to show.
     */
    updateCourseStatus(status) {
        const statusData = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_10__["CoreCourseHelper"].getCoursePrefetchStatusInfo(status);
        this.prefetchCourseData.status = statusData.status;
        this.prefetchCourseData.icon = statusData.icon;
        this.prefetchCourseData.statusTranslatable = statusData.statusTranslatable;
        this.prefetchCourseData.loading = statusData.loading;
    }
    /**
     * Wait for the user to be enrolled in the course.
     *
     * @param first If it's the first call (true) or it's a recursive call (false).
     * @return Promise resolved when enrolled or timeout.
     */
    waitForEnrolled(first) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (first) {
                this.waitStart = Date.now();
            }
            // Check if user is enrolled in the course.
            try {
                _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateUserCourses();
            }
            catch (_a) {
                // Ignore errors.
            }
            try {
                yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getUserCourse(this.course.id);
            }
            catch (_b) {
                // Not enrolled, wait a bit and try again.
                if (this.pageDestroyed || (Date.now() - this.waitStart > 60000)) {
                    // Max time reached or the user left the view, stop.
                    return;
                }
                return new Promise((resolve) => {
                    setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (!this.pageDestroyed) {
                            // Wait again.
                            yield this.waitForEnrolled();
                        }
                        resolve();
                    }), 5000);
                });
            }
        });
    }
    /**
     * Prefetch the course.
     */
    prefetchCourse() {
        _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_10__["CoreCourseHelper"].confirmAndPrefetchCourse(this.prefetchCourseData, this.course).catch((error) => {
            if (!this.pageDestroyed) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
            }
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.pageDestroyed = true;
        if (this.courseStatusObserver) {
            this.courseStatusObserver.off();
        }
    }
};
CoreCoursePreviewPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CoreCoursePreviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-course-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./preview.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/preview/preview.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./preview.scss */ "./src/core/features/course/pages/preview/preview.scss")).default]
    })
], CoreCoursePreviewPage);



/***/ }),

/***/ "./src/core/features/course/pages/preview/preview.scss":
/*!*************************************************************!*\
  !*** ./src/core/features/course/pages/preview/preview.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --scroll-factor: 0.5;\n  --translate-z: calc(-2 * var(--scroll-factor))px;\n  --scale: calc(1 + var(--scroll-factor) * 2);\n  perspective: 1px;\n  perspective-origin: center top;\n  transform-style: preserve-3d;\n}\n:host .core-course-thumb {\n  overflow: hidden;\n  text-align: center;\n  cursor: pointer;\n  pointer-events: auto;\n  transform-origin: center top;\n  /**\n   * Calculated with scroll-factor: 0.5;\n   * translate-z: -2 * $scroll-factor px;\n   * scale: 1 + $scroll-factor * 2;\n   */\n}\n:host .core-customfieldvalue core-format-text {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2NvdXJzZS9wYWdlcy9wcmV2aWV3L3ByZXZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQUFKO0FBa0JJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBRUE7Ozs7SUFBQTtBQWJSO0FBc0JJO0VBQ0ksZUFBQTtBQXBCUiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9jb3Vyc2UvcGFnZXMvcHJldmlldy9wcmV2aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLS1zY3JvbGwtZmFjdG9yOiAwLjU7XG4gICAgLS10cmFuc2xhdGUtejogY2FsYygtMiAqIHZhcigtLXNjcm9sbC1mYWN0b3IpKXB4O1xuICAgIC0tc2NhbGU6IGNhbGMoMSArIHZhcigtLXNjcm9sbC1mYWN0b3IpICogMik7XG5cbiAgICBwZXJzcGVjdGl2ZTogMXB4O1xuICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogY2VudGVyIHRvcDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG4gICAgLy8gQHRvZG8gVGhpcyBwYXJhbGxheCBlZmZlY3QgY2F1c2VkIHRoZSBpbWFnZSB0byBiZSBzY2FsZWQgZHVyaW5nIHBhZ2UgdHJhbnNpdGlvbnMsXG4gICAgLy8gYW5kIGluIHNvbWUgZGV2aWNlcyBpdCBzZWVtcyBsaWtlIHRoZSBwcm9ibGVtIHBlcnNpc3RlZCBldmVuIGFmdGVyIHRoZSB0cmFuc2l0aW9uLlxuICAgIC8vIFdlIHNob3VsZCBkZWNpZGUgd2hldGhlciB3ZSB3YW50IHRvIGtlZXAgdGhpcyBwYXJhbGxheCBvciBub3QsIGFuZCBpZiB3ZSBkbyBmaXhcbiAgICAvLyB0aGUgcHJvYmxlbSBvciBmaW5kIGFuIGFsdGVybmF0aXZlIGltcGxlbWVudGF0aW9uLiBGb3Igbm93LCBpdCdzIGRpc2FibGVkLlxuXG4gICAgLy8gLmNvcmUtY291cnNlLXRodW1iLXBhcmFsbGF4LWNvbnRlbnQge1xuICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLy8gICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggLTNweCAzcHggcmdiYSh2YXIoLS1kcm9wLXNoYWRvdykpKTtcbiAgICAvLyAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggLTNweCAzcHggcmdiYSh2YXIoLS1kcm9wLXNoYWRvdykpKTtcbiAgICAvLyB9XG4gICAgLy8gLmNvcmUtY291cnNlLXRodW1iLXBhcmFsbGF4IHtcbiAgICAvLyAgICAgaGVpZ2h0OiA0MHZ3O1xuICAgIC8vICAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIC8vICAgICB6LWluZGV4OiAtMTtcbiAgICAvLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB9XG4gICAgLmNvcmUtY291cnNlLXRodW1iIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjdWxhdGVkIHdpdGggc2Nyb2xsLWZhY3RvcjogMC41O1xuICAgICAgICAgKiB0cmFuc2xhdGUtejogLTIgKiAkc2Nyb2xsLWZhY3RvciBweDtcbiAgICAgICAgICogc2NhbGU6IDEgKyAkc2Nyb2xsLWZhY3RvciAqIDI7XG4gICAgICAgICAqL1xuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCkgc2NhbGUoMik7XG4gICAgfVxuXG5cbiAgICAuY29yZS1jdXN0b21maWVsZHZhbHVlIGNvcmUtZm9ybWF0LXRleHQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-preview-preview-module.js.map