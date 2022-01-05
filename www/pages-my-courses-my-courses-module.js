(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-courses-my-courses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my-courses/my-courses.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my-courses/my-courses.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.courses.mycourses' | translate }}</h1>\n\n        <ion-buttons slot=\"end\">\n            <core-navbar-buttons>\n                <ion-button *ngIf=\"searchEnabled\" (click)=\"openSearch()\"\n                    [attr.aria-label]=\"'core.courses.searchcourses' | translate\">\n                    <ion-icon name=\"fas-search\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n                <ion-button [hidden]=\"!downloadAllCoursesEnabled || !courses || courses.length < 2 || downloadAllCoursesLoading\"\n                    (click)=\"prefetchCourses()\" [attr.aria-label]=\"'core.courses.downloadcourses' | translate\">\n                    <ion-icon [name]=\"downloadAllCoursesIcon\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n                <ion-spinner [hidden]=\"!downloadAllCoursesEnabled || !courses || courses.length < 2 ||\n                    downloadAllCoursesBadge != '' || !downloadAllCoursesLoading\"\n                    [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n                <ion-badge [hidden]=\"!downloadAllCoursesEnabled || !courses || courses.length < 2 || !downloadAllCoursesLoading ||\n                    downloadAllCoursesBadge == '' || !downloadAllCoursesLoading\"\n                    role=\"progressbar\" [attr.aria-valuemax]=\"downloadAllCoursesTotal\"\n                    [attr.aria-valuenow]=\"downloadAllCoursesCount\" [attr.aria-valuetext]=\"downloadAllCoursesBadgeA11yText\">\n                    {{downloadAllCoursesBadge}}\n                </ion-badge>\n            </core-navbar-buttons>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!coursesLoaded\" (ionRefresh)=\"refreshCourses($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"coursesLoaded\">\n        <ion-searchbar #searchbar *ngIf=\"courses && courses.length > 5\" [(ngModel)]=\"filter\" (ionInput)=\"filterChanged($event)\"\n            (ionCancel)=\"filterChanged()\" [placeholder]=\"'core.courses.filtermycourses' | translate\">\n        </ion-searchbar>\n        <ion-grid class=\"ion-no-padding safe-area-page\">\n            <ion-row class=\"ion-no-padding\">\n                <ion-col *ngFor=\"let course of filteredCourses\" class=\"ion-no-padding\"\n                    size=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"4\">\n                    <core-courses-course-progress [course]=\"course\" class=\"core-courseoverview\" showAll=\"true\">\n                    </core-courses-course-progress>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <core-empty-box *ngIf=\"!courses || !courses.length\" icon=\"fas-graduation-cap\"\n            [message]=\"'core.courses.nocourses' | translate\">\n            <p *ngIf=\"searchEnabled\">{{ 'core.courses.searchcoursesadvice' | translate }}</p>\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/courses/pages/my-courses/my-courses.module.ts":
/*!*************************************************************************!*\
  !*** ./src/core/features/courses/pages/my-courses/my-courses.module.ts ***!
  \*************************************************************************/
/*! exports provided: CoreCoursesMyCoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesMyCoursesPageModule", function() { return CoreCoursesMyCoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _my_courses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-courses */ "./src/core/features/courses/pages/my-courses/my-courses.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/core/features/courses/components/components.module.ts");
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
        component: _my_courses__WEBPACK_IMPORTED_MODULE_4__["CoreCoursesMyCoursesPage"],
    },
];
let CoreCoursesMyCoursesPageModule = class CoreCoursesMyCoursesPageModule {
};
CoreCoursesMyCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesComponentsModule"],
        ],
        declarations: [
            _my_courses__WEBPACK_IMPORTED_MODULE_4__["CoreCoursesMyCoursesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCoursesMyCoursesPageModule);



/***/ }),

/***/ "./src/core/features/courses/pages/my-courses/my-courses.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/courses/pages/my-courses/my-courses.ts ***!
  \******************************************************************/
/*! exports provided: CoreCoursesMyCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesMyCoursesPage", function() { return CoreCoursesMyCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _services_courses_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _features_course_services_course_options_delegate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/course/services/course-options-delegate */ "./src/core/features/course/services/course-options-delegate.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays the list of courses the user is enrolled in.
 */
let CoreCoursesMyCoursesPage = class CoreCoursesMyCoursesPage {
    constructor() {
        this.courses = [];
        this.filteredCourses = [];
        this.searchEnabled = false;
        this.filter = '';
        this.showFilter = false;
        this.coursesLoaded = false;
        this.downloadAllCoursesIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_NOT_DOWNLOADED;
        this.downloadAllCoursesLoading = false;
        this.downloadAllCoursesBadge = '';
        this.downloadAllCoursesEnabled = false;
        this.downloadAllCoursesBadgeA11yText = '';
        this.isDestroyed = false;
        this.courseIds = '';
        // Update list if user enrols in a course.
        this.myCoursesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesProvider"].EVENT_MY_COURSES_UPDATED, (data) => {
            if (data.action == _services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesProvider"].ACTION_ENROL) {
                this.fetchCourses();
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
        // Refresh the enabled flags if site is updated.
        this.siteUpdatedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].SITE_UPDATED, () => {
            this.searchEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isSearchCoursesDisabledInSite();
            this.downloadAllCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCoursesDisabledInSite();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.searchEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isSearchCoursesDisabledInSite();
        this.downloadAllCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCoursesDisabledInSite();
        this.fetchCourses().finally(() => {
            this.coursesLoaded = true;
        });
    }
    /**
     * Fetch the user courses.
     *
     * @return Promise resolved when done.
     */
    fetchCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const courses = yield _services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getUserCourses();
                const courseIds = courses.map((course) => course.id);
                this.courseIds = courseIds.join(',');
                yield _services_courses_helper__WEBPACK_IMPORTED_MODULE_7__["CoreCoursesHelper"].loadCoursesExtraInfo(courses);
                if (_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].canGetAdminAndNavOptions()) {
                    const options = yield _services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getCoursesAdminAndNavOptions(courseIds);
                    courses.forEach((course) => {
                        course.navOptions = options.navOptions[course.id];
                        course.admOptions = options.admOptions[course.id];
                    });
                }
                this.courses = courses;
                this.filteredCourses = this.courses;
                this.filter = '';
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
            }
        });
    }
    /**
     * Refresh the courses.
     *
     * @param refresher Refresher.
     */
    refreshCourses(refresher) {
        const promises = [];
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].invalidateUserCourses());
        promises.push(_features_course_services_course_options_delegate__WEBPACK_IMPORTED_MODULE_10__["CoreCourseOptionsDelegate"].clearAndInvalidateCoursesOptions());
        if (this.courseIds) {
            promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].invalidateCoursesByField('ids', this.courseIds));
        }
        Promise.all(promises).finally(() => {
            this.fetchCourses().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Show or hide the filter.
     */
    switchFilter() {
        this.filter = '';
        this.showFilter = !this.showFilter;
        this.filteredCourses = this.courses;
        if (this.showFilter) {
            setTimeout(() => {
                this.searchbar.setFocus();
            }, 500);
        }
    }
    /**
     * The filter has changed.
     *
     * @param Received Event.
     */
    filterChanged(event) {
        const target = (event === null || event === void 0 ? void 0 : event.target) || null;
        const newValue = target ? String(target.value).trim().toLowerCase() : null;
        if (!newValue || !this.courses) {
            this.filteredCourses = this.courses;
        }
        else {
            // Use displayname if available, or fullname if not.
            if (this.courses.length > 0 && typeof this.courses[0].displayname != 'undefined') {
                this.filteredCourses = this.courses.filter((course) => course.displayname.toLowerCase().indexOf(newValue) > -1);
            }
            else {
                this.filteredCourses = this.courses.filter((course) => course.fullname.toLowerCase().indexOf(newValue) > -1);
            }
        }
    }
    /**
     * Prefetch all the courses.
     *
     * @return Promise resolved when done.
     */
    prefetchCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.downloadAllCoursesLoading = true;
            try {
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__["CoreCourseHelper"].confirmAndPrefetchCourses(this.courses, (progress) => {
                    this.downloadAllCoursesBadge = progress.count + ' / ' + progress.total;
                    this.downloadAllCoursesBadgeA11yText =
                        _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.course.downloadcoursesprogressdescription', progress);
                    this.downloadAllCoursesCount = progress.count;
                    this.downloadAllCoursesTotal = progress.total;
                });
            }
            catch (error) {
                if (!this.isDestroyed) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                }
            }
            this.downloadAllCoursesBadge = '';
            this.downloadAllCoursesLoading = false;
        });
    }
    /**
     * Go to search courses.
     */
    openSearch() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSitePath('courses/search');
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b;
        this.isDestroyed = true;
        (_a = this.myCoursesObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.siteUpdatedObserver) === null || _b === void 0 ? void 0 : _b.off();
    }
};
CoreCoursesMyCoursesPage.ctorParameters = () => [];
CoreCoursesMyCoursesPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"],] }]
};
CoreCoursesMyCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-my-courses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-courses.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my-courses/my-courses.html")).default,
    })
], CoreCoursesMyCoursesPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-courses-my-courses-module.js.map