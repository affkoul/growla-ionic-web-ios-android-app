(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-lazy-module"],{

/***/ "./src/core/features/courses/courses-lazy.module.ts":
/*!**********************************************************!*\
  !*** ./src/core/features/courses/courses-lazy.module.ts ***!
  \**********************************************************/
/*! exports provided: CoreCoursesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesLazyModule", function() { return CoreCoursesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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
        redirectTo: 'my',
        pathMatch: 'full',
    },
    {
        path: 'categories',
        redirectTo: 'categories/root',
        pathMatch: 'full',
    },
    {
        path: 'categories/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-categories-categories-module */ "pages-categories-categories-module").then(__webpack_require__.bind(null, /*! ./pages/categories/categories.module */ "./src/core/features/courses/pages/categories/categories.module.ts"))
            .then(m => m.CoreCoursesCategoriesPageModule),
    },
    {
        path: 'all',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-available-courses-available-courses-module */ "pages-available-courses-available-courses-module").then(__webpack_require__.bind(null, /*! ./pages/available-courses/available-courses.module */ "./src/core/features/courses/pages/available-courses/available-courses.module.ts"))
            .then(m => m.CoreCoursesAvailableCoursesPageModule),
    },
    {
        path: 'search',
        loadChildren: () => Promise.all(/*! import() | pages-search-search-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-search-search-module")]).then(__webpack_require__.bind(null, /*! ./pages/search/search.module */ "./src/core/features/courses/pages/search/search.module.ts"))
            .then(m => m.CoreCoursesSearchPageModule),
    },
    {
        path: 'my',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-my-courses-my-courses-module */ "pages-my-courses-my-courses-module").then(__webpack_require__.bind(null, /*! ./pages/my-courses/my-courses.module */ "./src/core/features/courses/pages/my-courses/my-courses.module.ts"))
            .then(m => m.CoreCoursesMyCoursesPageModule),
    },
];
let CoreCoursesLazyModule = class CoreCoursesLazyModule {
};
CoreCoursesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], CoreCoursesLazyModule);



/***/ })

}]);
//# sourceMappingURL=courses-lazy-module.js.map