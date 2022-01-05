(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-grades-grades-course-lazy-module"],{

/***/ "./src/core/features/grades/grades-course-lazy.module.ts":
/*!***************************************************************!*\
  !*** ./src/core/features/grades/grades-course-lazy.module.ts ***!
  \***************************************************************/
/*! exports provided: CoreGradesCourseLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCourseLazyModule", function() { return CoreGradesCourseLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_course_course_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/course/course.page */ "./src/core/features/grades/pages/course/course.page.ts");
/* harmony import */ var _pages_course_course_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/course/course.module */ "./src/core/features/grades/pages/course/course.module.ts");
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
        component: _pages_course_course_page__WEBPACK_IMPORTED_MODULE_3__["CoreGradesCoursePage"],
        data: {
            useSplitView: false,
            outsideGradesTab: true,
        },
    },
];
let CoreGradesCourseLazyModule = class CoreGradesCourseLazyModule {
};
CoreGradesCourseLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _pages_course_course_module__WEBPACK_IMPORTED_MODULE_4__["CoreGradesCoursePageModule"],
        ],
    })
], CoreGradesCourseLazyModule);



/***/ })

}]);
//# sourceMappingURL=features-grades-grades-course-lazy-module.js.map