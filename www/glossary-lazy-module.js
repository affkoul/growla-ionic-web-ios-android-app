(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["glossary-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/index/index.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/index/index.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <addon-mod-glossary-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\">\n    </addon-mod-glossary-index>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/glossary/glossary-lazy.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/glossary/glossary-lazy.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonModGlossaryLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryLazyModule", function() { return AddonModGlossaryLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/glossary/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/glossary/pages/index/index.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
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








const mobileRoutes = [
    {
        path: ':courseId/:cmId',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModGlossaryIndexPage"],
    },
    {
        path: ':courseId/:cmId/entry/:entryId',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-entry-entry-module */ "pages-entry-entry-module").then(__webpack_require__.bind(null, /*! ./pages/entry/entry.module */ "./src/addons/mod/glossary/pages/entry/entry.module.ts")).then(m => m.AddonModGlossaryEntryPageModule),
    },
    {
        path: ':courseId/:cmId/edit/:timecreated',
        loadChildren: () => Promise.all(/*! import() | pages-edit-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-edit-edit-module")]).then(__webpack_require__.bind(null, /*! ./pages/edit/edit.module */ "./src/addons/mod/glossary/pages/edit/edit.module.ts")).then(m => m.AddonModGlossaryEditPageModule),
    },
];
const tabletRoutes = [
    {
        path: ':courseId/:cmId',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModGlossaryIndexPage"],
        children: [
            {
                path: 'entry/:entryId',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-entry-entry-module */ "pages-entry-entry-module").then(__webpack_require__.bind(null, /*! ./pages/entry/entry.module */ "./src/addons/mod/glossary/pages/entry/entry.module.ts")).then(m => m.AddonModGlossaryEntryPageModule),
            },
            {
                path: 'edit/:timecreated',
                loadChildren: () => Promise.all(/*! import() | pages-edit-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-edit-edit-module")]).then(__webpack_require__.bind(null, /*! ./pages/edit/edit.module */ "./src/addons/mod/glossary/pages/edit/edit.module.ts")).then(m => m.AddonModGlossaryEditPageModule),
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isTablet),
];
let AddonModGlossaryLazyModule = class AddonModGlossaryLazyModule {
};
AddonModGlossaryLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModGlossaryComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModGlossaryIndexPage"],
        ],
    })
], AddonModGlossaryLazyModule);



/***/ }),

/***/ "./src/addons/mod/glossary/pages/index/index.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/glossary/pages/index/index.ts ***!
  \******************************************************/
/*! exports provided: AddonModGlossaryIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryIndexPage", function() { return AddonModGlossaryIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index */ "./src/addons/mod/glossary/components/index/index.ts");
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
 * Page that displays a glossary.
 */
let AddonModGlossaryIndexPage = class AddonModGlossaryIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModGlossaryIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index__WEBPACK_IMPORTED_MODULE_3__["AddonModGlossaryIndexComponent"],] }]
};
AddonModGlossaryIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-glossary-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/index/index.html")).default,
    })
], AddonModGlossaryIndexPage);



/***/ })

}]);
//# sourceMappingURL=glossary-lazy-module.js.map