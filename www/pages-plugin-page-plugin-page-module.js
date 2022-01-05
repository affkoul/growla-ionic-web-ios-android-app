(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plugin-page-plugin-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/plugin-page/plugin-page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/plugin-page/plugin-page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"title\">{{ title | translate }}</h1>\n\n        <ion-buttons slot=\"end\">\n            <!-- If the site plugin defines some buttons using core-nav-buttons, they will be added here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!ptrEnabled || !content || !content.dataLoaded\"\n        (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-site-plugins-plugin-content [component]=\"component\" [method]=\"method\" [args]=\"args\" [preSets]=\"preSets\"\n        [initResult]=\"initResult\" [data]=\"jsData\" [pageTitle]=\"title\">\n    </core-site-plugins-plugin-content>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/siteplugins/pages/plugin-page/plugin-page.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/core/features/siteplugins/pages/plugin-page/plugin-page.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CoreSitePluginsPluginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsPluginPageModule", function() { return CoreSitePluginsPluginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _plugin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugin-page */ "./src/core/features/siteplugins/pages/plugin-page/plugin-page.ts");
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
        component: _plugin_page__WEBPACK_IMPORTED_MODULE_5__["CoreSitePluginsPluginPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    },
];
/**
 * Module to lazy load the page.
 */
let CoreSitePluginsPluginPageModule = class CoreSitePluginsPluginPageModule {
};
CoreSitePluginsPluginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _plugin_page__WEBPACK_IMPORTED_MODULE_5__["CoreSitePluginsPluginPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreSitePluginsComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSitePluginsPluginPageModule);



/***/ }),

/***/ "./src/core/features/siteplugins/pages/plugin-page/plugin-page.ts":
/*!************************************************************************!*\
  !*** ./src/core/features/siteplugins/pages/plugin-page/plugin-page.ts ***!
  \************************************************************************/
/*! exports provided: CoreSitePluginsPluginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsPluginPage", function() { return CoreSitePluginsPluginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _components_plugin_content_plugin_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/plugin-content/plugin-content */ "./src/core/features/siteplugins/components/plugin-content/plugin-content.ts");
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
 * Page to render a site plugin page.
 */
let CoreSitePluginsPluginPage = class CoreSitePluginsPluginPage {
    constructor() {
        this.ptrEnabled = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('title');
        this.component = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('component');
        this.method = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('method');
        this.args = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('args');
        this.initResult = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('initResult');
        this.jsData = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('jsData');
        this.preSets = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('preSets');
        this.ptrEnabled = !_services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].isFalseOrZero(_services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteBooleanParam('ptrEnabled'));
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        var _a;
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.refreshContent(false).finally(() => {
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
CoreSitePluginsPluginPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_plugin_content_plugin_content__WEBPACK_IMPORTED_MODULE_4__["CoreSitePluginsPluginContentComponent"],] }]
};
CoreSitePluginsPluginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-site-plugins-plugin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./plugin-page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/plugin-page/plugin-page.html")).default,
    })
], CoreSitePluginsPluginPage);



/***/ })

}]);
//# sourceMappingURL=pages-plugin-page-plugin-page-module.js.map