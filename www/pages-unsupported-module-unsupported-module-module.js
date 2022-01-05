(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-unsupported-module-unsupported-module-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/unsupported-module/unsupported-module.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/unsupported-module/unsupported-module.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"module?.name\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n\n        <ion-buttons slot=\"end\">\n            <core-context-menu>\n                <core-context-menu-item [priority]=\"900\" *ngIf=\"module?.url\" [href]=\"module!.url\"\n                    [content]=\"'core.openinbrowser' | translate\" iconAction=\"fas-external-link-alt\">\n                </core-context-menu-item>\n                <core-context-menu-item [priority]=\"800\" *ngIf=\"module?.description\" [content]=\"'core.moduleintro' | translate\"\n                    (action)=\"expandDescription()\" iconAction=\"fas-arrow-right\">\n                </core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-course-unsupported-module [module]=\"module\" [courseId]=\"courseId\"></core-course-unsupported-module>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/course/pages/unsupported-module/unsupported-module.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/core/features/course/pages/unsupported-module/unsupported-module.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CoreCourseUnsupportedModulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseUnsupportedModulePageModule", function() { return CoreCourseUnsupportedModulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _unsupported_module_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unsupported-module.page */ "./src/core/features/course/pages/unsupported-module/unsupported-module.page.ts");
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
        component: _unsupported_module_page__WEBPACK_IMPORTED_MODULE_4__["CoreCourseUnsupportedModulePage"],
    },
];
let CoreCourseUnsupportedModulePageModule = class CoreCourseUnsupportedModulePageModule {
};
CoreCourseUnsupportedModulePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreCourseComponentsModule"],
        ],
        declarations: [
            _unsupported_module_page__WEBPACK_IMPORTED_MODULE_4__["CoreCourseUnsupportedModulePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCourseUnsupportedModulePageModule);



/***/ }),

/***/ "./src/core/features/course/pages/unsupported-module/unsupported-module.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/core/features/course/pages/unsupported-module/unsupported-module.page.ts ***!
  \**************************************************************************************/
/*! exports provided: CoreCourseUnsupportedModulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseUnsupportedModulePage", function() { return CoreCourseUnsupportedModulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays info about an unsupported module.
 */
let CoreCourseUnsupportedModulePage = class CoreCourseUnsupportedModulePage {
    /**
     * @inheritDoc
     */
    ngOnInit() {
        this.module = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('module');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteNumberParam('courseId');
    }
    /**
     * Expand the description.
     */
    expandDescription() {
        _services_utils_text__WEBPACK_IMPORTED_MODULE_3__["CoreTextUtils"].viewText(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.description'), this.module.description, {
            filter: true,
            contextLevel: 'module',
            instanceId: this.module.id,
            courseId: this.courseId,
        });
    }
};
CoreCourseUnsupportedModulePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-course-unsupported-module',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unsupported-module.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/unsupported-module/unsupported-module.html")).default,
    })
], CoreCourseUnsupportedModulePage);



/***/ })

}]);
//# sourceMappingURL=pages-unsupported-module-unsupported-module-module.js.map