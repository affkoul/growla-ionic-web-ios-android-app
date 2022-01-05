(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-privatefiles-privatefiles-lazy-module"],{

/***/ "./src/addons/privatefiles/privatefiles-lazy.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/privatefiles/privatefiles-lazy.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonPrivateFilesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPrivateFilesLazyModule", function() { return AddonPrivateFilesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/addons/privatefiles/services/handlers/mainmenu.ts");
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
    return [
        {
            path: 'root',
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_4__["AddonPrivateFilesMainMenuHandlerService"].PAGE_NAME,
            },
            loadChildren: () => __webpack_require__.e(/*! import() | pages-index-index-module */ "pages-index-index-module").then(__webpack_require__.bind(null, /*! ./pages/index/index.module */ "./src/addons/privatefiles/pages/index/index.module.ts")).then(m => m.AddonPrivateFilesIndexPageModule),
        },
        {
            path: ':hash',
            loadChildren: () => __webpack_require__.e(/*! import() | pages-index-index-module */ "pages-index-index-module").then(__webpack_require__.bind(null, /*! ./pages/index/index.module */ "./src/addons/privatefiles/pages/index/index.module.ts")).then(m => m.AddonPrivateFilesIndexPageModule),
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__["buildTabMainRoutes"])(injector, {
            redirectTo: 'root',
            pathMatch: 'full',
        }),
    ];
}
let AddonPrivateFilesLazyModule = class AddonPrivateFilesLazyModule {
};
AddonPrivateFilesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
], AddonPrivateFilesLazyModule);



/***/ })

}]);
//# sourceMappingURL=addons-privatefiles-privatefiles-lazy-module.js.map