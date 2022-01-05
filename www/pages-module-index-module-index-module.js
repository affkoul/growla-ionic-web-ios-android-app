(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-module-index-module-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/module-index/module-index.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/module-index/module-index.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ title }}</h1>\n\n        <ion-buttons slot=\"end\">\n            <!-- If the site plugin defines some buttons using core-nav-buttons, they will be added here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!content || !content.ptrEnabled || !content.content || !content.content.dataLoaded\"\n        (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-site-plugins-module-index [module]=\"module\" [courseId]=\"courseId\" [pageTitle]=\"title\"></core-site-plugins-module-index>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/siteplugins/pages/module-index/module-index.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/core/features/siteplugins/pages/module-index/module-index.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CoreSitePluginsModuleIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsModuleIndexPageModule", function() { return CoreSitePluginsModuleIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _module_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-index */ "./src/core/features/siteplugins/pages/module-index/module-index.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/core/features/siteplugins/components/components.module.ts");
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
        component: _module_index__WEBPACK_IMPORTED_MODULE_5__["CoreSitePluginsModuleIndexPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    },
];
/**
 * Module to lazy load the page.
 */
let CoreSitePluginsModuleIndexPageModule = class CoreSitePluginsModuleIndexPageModule {
};
CoreSitePluginsModuleIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _module_index__WEBPACK_IMPORTED_MODULE_5__["CoreSitePluginsModuleIndexPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreSitePluginsComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSitePluginsModuleIndexPageModule);



/***/ }),

/***/ "./src/core/features/siteplugins/pages/module-index/module-index.ts":
/*!**************************************************************************!*\
  !*** ./src/core/features/siteplugins/pages/module-index/module-index.ts ***!
  \**************************************************************************/
/*! exports provided: CoreSitePluginsModuleIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsModuleIndexPage", function() { return CoreSitePluginsModuleIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_module_index_module_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/module-index/module-index */ "./src/core/features/siteplugins/components/module-index/module-index.ts");
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
 * Page to render the index page of a module site plugin.
 */
let CoreSitePluginsModuleIndexPage = class CoreSitePluginsModuleIndexPage {
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('title');
        this.module = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('module');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteNumberParam('courseId');
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        var _a;
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.doRefresh().finally(() => {
            refresher.complete();
        });
    }
    /**
     * The page is about to enter and become the active page.
     */
    ionViewWillEnter() {
        var _a;
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewWillEnter');
    }
    /**
     * The page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        var _a;
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewDidEnter');
    }
    /**
     * The page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        var _a;
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewWillLeave');
    }
    /**
     * The page has finished leaving and is no longer the active page.
     */
    ionViewDidLeave() {
        var _a;
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewDidLeave');
    }
    /**
     * The page is about to be destroyed and have its elements removed.
     */
    ionViewWillUnload() {
        var _a;
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewWillUnload');
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.content) {
                return true;
            }
            const result = yield this.content.callComponentFunction('canLeave');
            return result === undefined || result === null ? true : !!result;
        });
    }
};
CoreSitePluginsModuleIndexPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_module_index_module_index__WEBPACK_IMPORTED_MODULE_3__["CoreSitePluginsModuleIndexComponent"],] }]
};
CoreSitePluginsModuleIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-site-plugins-module-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./module-index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/module-index/module-index.html")).default,
    })
], CoreSitePluginsModuleIndexPage);



/***/ })

}]);
//# sourceMappingURL=pages-module-index-module-index-module.js.map