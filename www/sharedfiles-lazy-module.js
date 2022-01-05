(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sharedfiles-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/sharedfiles/pages/list/list.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/sharedfiles/pages/list/list.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ title }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-shared-files-list [siteId]=\"siteId\" [mimetypes]=\"mimetypes\" [isModal]=\"false\" [manage]=\"manage\" [pick]=\"false\"\n        [path]=\"path\" [showSitePicker]=\"showSitePicker\" (onPathChanged)=\"calculateTitle($event)\">\n    </core-shared-files-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/sharedfiles/pages/list/list.ts":
/*!**********************************************************!*\
  !*** ./src/core/features/sharedfiles/pages/list/list.ts ***!
  \**********************************************************/
/*! exports provided: CoreSharedFilesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSharedFilesListPage", function() { return CoreSharedFilesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/file */ "./src/core/services/file.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page to display the list of shared files.
 */
let CoreSharedFilesListPage = class CoreSharedFilesListPage {
    constructor() {
        this.manage = false;
        this.showSitePicker = false;
        this.path = '';
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.siteId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('siteId');
        this.mimetypes = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('mimetypes');
        this.manage = !!_services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteBooleanParam('manage');
        this.path = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('path') || '';
        this.showSitePicker = !_services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('hideSitePicker');
        this.calculateTitle(this.path);
    }
    /**
     * Calculate the title.
     *
     * @param path Path to use.
     */
    calculateTitle(path) {
        if (path) {
            this.title = _services_file__WEBPACK_IMPORTED_MODULE_2__["CoreFile"].getFileAndDirectoryFromPath(path).name;
        }
        else {
            this.title = _singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.sharedfiles.sharedfiles');
        }
    }
};
CoreSharedFilesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-shared-files-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/sharedfiles/pages/list/list.html")).default,
    })
], CoreSharedFilesListPage);



/***/ }),

/***/ "./src/core/features/sharedfiles/sharedfiles-lazy.module.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/sharedfiles/sharedfiles-lazy.module.ts ***!
  \******************************************************************/
/*! exports provided: CoreSharedFilesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSharedFilesLazyModule", function() { return CoreSharedFilesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/core/features/sharedfiles/components/components.module.ts");
/* harmony import */ var _pages_list_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/list/list */ "./src/core/features/sharedfiles/pages/list/list.ts");
/* harmony import */ var _pages_choose_site_choose_site__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/choose-site/choose-site */ "./src/core/features/sharedfiles/pages/choose-site/choose-site.ts");
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
        path: 'choosesite',
        component: _pages_choose_site_choose_site__WEBPACK_IMPORTED_MODULE_6__["CoreSharedFilesChooseSitePage"],
    },
    {
        path: 'list/:hash',
        component: _pages_list_list__WEBPACK_IMPORTED_MODULE_5__["CoreSharedFilesListPage"],
    },
];
let CoreSharedFilesLazyModule = class CoreSharedFilesLazyModule {
};
CoreSharedFilesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedFilesComponentsModule"],
        ],
        declarations: [
            _pages_list_list__WEBPACK_IMPORTED_MODULE_5__["CoreSharedFilesListPage"],
            _pages_choose_site_choose_site__WEBPACK_IMPORTED_MODULE_6__["CoreSharedFilesChooseSitePage"],
        ],
    })
], CoreSharedFilesLazyModule);



/***/ })

}]);
//# sourceMappingURL=sharedfiles-lazy-module.js.map