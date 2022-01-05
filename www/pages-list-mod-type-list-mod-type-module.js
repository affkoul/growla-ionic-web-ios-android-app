(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-mod-type-list-mod-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/list-mod-type/list-mod-type.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/list-mod-type/list-mod-type.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ title }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <core-empty-box *ngIf=\"!sections || !sections.length\" icon=\"fas-box-open\"\n            [message]=\"'core.course.nocontentavailable' | translate\">\n        </core-empty-box>\n\n        <ion-list>\n            <ng-container *ngFor=\"let section of sections\" >\n                <ng-container *ngFor=\"let module of section.modules\">\n                    <core-course-module *ngIf=\"module.visibleoncoursepage !== 0\" [module]=\"module\" [section]=\"section\"\n                        [courseId]=\"courseId\" [downloadEnabled]=\"downloadEnabled\">\n                    </core-course-module>\n                </ng-container>\n            </ng-container>\n        </ion-list>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/course/pages/list-mod-type/list-mod-type.module.ts":
/*!******************************************************************************!*\
  !*** ./src/core/features/course/pages/list-mod-type/list-mod-type.module.ts ***!
  \******************************************************************************/
/*! exports provided: CoreCourseListModTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseListModTypePageModule", function() { return CoreCourseListModTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _list_mod_type_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-mod-type.page */ "./src/core/features/course/pages/list-mod-type/list-mod-type.page.ts");
/* harmony import */ var _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/components/components.module */ "./src/core/features/course/components/components.module.ts");
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
        component: _list_mod_type_page__WEBPACK_IMPORTED_MODULE_4__["CoreCourseListModTypePage"],
    },
];
let CoreCourseListModTypePageModule = class CoreCourseListModTypePageModule {
};
CoreCourseListModTypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_mod_type_page__WEBPACK_IMPORTED_MODULE_4__["CoreCourseListModTypePage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreCourseComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCourseListModTypePageModule);



/***/ }),

/***/ "./src/core/features/course/pages/list-mod-type/list-mod-type.page.ts":
/*!****************************************************************************!*\
  !*** ./src/core/features/course/pages/list-mod-type/list-mod-type.page.ts ***!
  \****************************************************************************/
/*! exports provided: CoreCourseListModTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseListModTypePage", function() { return CoreCourseListModTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_module_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/services/module-delegate */ "./src/core/features/course/services/module-delegate.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that displays all modules of a certain type in a course.
 */
let CoreCourseListModTypePage = class CoreCourseListModTypePage {
    constructor() {
        this.sections = [];
        this.title = '';
        this.loaded = false;
        this.downloadEnabled = false;
        this.archetypes = {}; // To speed up the check of modules.
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('title') || '';
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('courseId');
            this.modName = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('modName');
            this.downloadEnabled = !((_a = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.isOfflineDisabled());
            try {
                yield this.fetchData();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Fetches the data.
     *
     * @return Resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.courseId) {
                return;
            }
            try {
                // Get all the modules in the course.
                let sections = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].getSections(this.courseId, false, true);
                sections = sections.filter((section) => {
                    if (!section.modules) {
                        return false;
                    }
                    section.modules = section.modules.filter((mod) => {
                        if (mod.uservisible === false || !_features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].moduleHasView(mod)) {
                            // Ignore this module.
                            return false;
                        }
                        if (this.modName === 'resources') {
                            // Check that the module is a resource.
                            if (typeof this.archetypes[mod.modname] == 'undefined') {
                                this.archetypes[mod.modname] = _features_course_services_module_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModuleDelegate"].supportsFeature(mod.modname, _core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].FEATURE_MOD_ARCHETYPE, _core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].MOD_ARCHETYPE_OTHER);
                            }
                            if (this.archetypes[mod.modname] == _core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].MOD_ARCHETYPE_RESOURCE) {
                                return true;
                            }
                        }
                        else if (mod.modname == this.modName) {
                            return true;
                        }
                    });
                    return section.modules.length > 0;
                });
                const result = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_6__["CoreCourseHelper"].addHandlerDataForModules(sections, this.courseId);
                this.sections = result.sections;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting data');
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
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].invalidateSections(this.courseId || 0));
            try {
                yield this.fetchData();
            }
            finally {
                refresher.complete();
            }
        });
    }
};
CoreCourseListModTypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-course-list-mod-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-mod-type.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/list-mod-type/list-mod-type.html")).default,
    })
], CoreCourseListModTypePage);



/***/ })

}]);
//# sourceMappingURL=pages-list-mod-type-list-mod-type-module.js.map