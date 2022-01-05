(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tag-lazy-module"],{

/***/ "./src/core/features/tag/tag-lazy.module.ts":
/*!**************************************************!*\
  !*** ./src/core/features/tag/tag-lazy.module.ts ***!
  \**************************************************/
/*! exports provided: CoreTagIndexAreaRoute, CoreTagLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexAreaRoute", function() { return CoreTagIndexAreaRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagLazyModule", function() { return CoreTagLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/core/features/tag/services/handlers/mainmenu.ts");
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





const CoreTagIndexAreaRoute = {
    path: 'index-area',
    loadChildren: () => __webpack_require__.e(/*! import() | features-tag-pages-index-area-index-area-page-module */ "features-tag-pages-index-area-index-area-page-module").then(__webpack_require__.bind(null, /*! @features/tag/pages/index-area/index-area.page.module */ "./src/core/features/tag/pages/index-area/index-area.page.module.ts")).then(m => m.CoreTagIndexAreaPageModule),
};
function buildRoutes(injector) {
    return [
        {
            path: 'index',
            loadChildren: () => __webpack_require__.e(/*! import() | features-tag-pages-index-index-page-module */ "features-tag-pages-index-index-page-module").then(__webpack_require__.bind(null, /*! @features/tag/pages/index/index.page.module */ "./src/core/features/tag/pages/index/index.page.module.ts")).then(m => m.CoreTagIndexPageModule),
        },
        {
            path: 'search',
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_4__["CoreTagMainMenuHandlerService"].PAGE_NAME,
            },
            loadChildren: () => __webpack_require__.e(/*! import() | features-tag-pages-search-search-page-module */ "features-tag-pages-search-search-page-module").then(__webpack_require__.bind(null, /*! @features/tag//pages/search/search.page.module */ "./src/core/features/tag/pages/search/search.page.module.ts")).then(m => m.CoreTagSearchPageModule),
        },
        CoreTagIndexAreaRoute,
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__["buildTabMainRoutes"])(injector, {
            redirectTo: 'search',
            pathMatch: 'full',
        }),
    ];
}
let CoreTagLazyModule = class CoreTagLazyModule {
};
CoreTagLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], CoreTagLazyModule);



/***/ })

}]);
//# sourceMappingURL=tag-lazy-module.js.map