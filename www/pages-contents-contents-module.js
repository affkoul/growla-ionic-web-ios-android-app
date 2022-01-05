(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contents-contents-module"],{

/***/ "./src/core/features/course/pages/contents/contents.module.ts":
/*!********************************************************************!*\
  !*** ./src/core/features/course/pages/contents/contents.module.ts ***!
  \********************************************************************/
/*! exports provided: CoreCourseContentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseContentsPageModule", function() { return CoreCourseContentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/components/components.module */ "./src/core/features/course/components/components.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contents */ "./src/core/features/course/pages/contents/contents.ts");
/* harmony import */ var _contents_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contents-routing.module */ "./src/core/features/course/pages/contents/contents-routing.module.ts");
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








function buildRoutes(injector) {
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["resolveModuleRoutes"])(injector, _contents_routing_module__WEBPACK_IMPORTED_MODULE_7__["COURSE_CONTENTS_ROUTES"]);
    return [
        {
            path: '',
            component: _contents__WEBPACK_IMPORTED_MODULE_6__["CoreCourseContentsPage"],
            children: routes.children,
        },
        ...routes.siblings,
    ];
}
let CoreCourseContentsPageModule = class CoreCourseContentsPageModule {
};
CoreCourseContentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_3__["CoreCourseComponentsModule"],
        ],
        declarations: [
            _contents__WEBPACK_IMPORTED_MODULE_6__["CoreCourseContentsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCourseContentsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-contents-contents-module.js.map