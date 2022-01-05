(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-siteplugins-pages-course-option-course-option-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/course-option/core-siteplugins-course-option.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/course-option/core-siteplugins-course-option.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!ptrEnabled || !content || !content.dataLoaded\"\n        (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-site-plugins-plugin-content *ngIf=\"component && method\" [component]=\"component\" [method]=\"method\" [args]=\"args\"\n        [initResult]=\"initResult\">\n    </core-site-plugins-plugin-content>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/siteplugins/pages/course-option/course-option.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/core/features/siteplugins/pages/course-option/course-option.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CoreSitePluginsCourseOptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsCourseOptionModule", function() { return CoreSitePluginsCourseOptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _course_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-option */ "./src/core/features/siteplugins/pages/course-option/course-option.ts");
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
        component: _course_option__WEBPACK_IMPORTED_MODULE_5__["CoreSitePluginsCourseOptionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    },
];
/**
 * Module to lazy load the page.
 */
let CoreSitePluginsCourseOptionModule = class CoreSitePluginsCourseOptionModule {
};
CoreSitePluginsCourseOptionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _course_option__WEBPACK_IMPORTED_MODULE_5__["CoreSitePluginsCourseOptionPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreSitePluginsComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSitePluginsCourseOptionModule);



/***/ }),

/***/ "./src/core/features/siteplugins/pages/course-option/course-option.ts":
/*!****************************************************************************!*\
  !*** ./src/core/features/siteplugins/pages/course-option/course-option.ts ***!
  \****************************************************************************/
/*! exports provided: CoreSitePluginsCourseOptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePluginsCourseOptionPage", function() { return CoreSitePluginsCourseOptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_siteplugins_components_plugin_content_plugin_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/siteplugins/components/plugin-content/plugin-content */ "./src/core/features/siteplugins/components/plugin-content/plugin-content.ts");
/* harmony import */ var _features_siteplugins_services_siteplugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/siteplugins/services/siteplugins */ "./src/core/features/siteplugins/services/siteplugins.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the index of a course option site plugin.
 */
let CoreSitePluginsCourseOptionPage = class CoreSitePluginsCourseOptionPage {
    constructor() {
        this.ptrEnabled = true;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('courseId');
        this.handlerUniqueName = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('handlerUniqueName');
        if (!this.handlerUniqueName) {
            return;
        }
        const handler = _features_siteplugins_services_siteplugins__WEBPACK_IMPORTED_MODULE_3__["CoreSitePlugins"].getSitePluginHandler(this.handlerUniqueName);
        if (!handler) {
            return;
        }
        this.component = handler.plugin.component;
        this.method = handler.handlerSchema.method;
        this.args = {
            courseid: this.courseId,
        };
        this.initResult = handler.initResult;
        this.ptrEnabled = !('ptrenabled' in handler.handlerSchema) ||
            !_services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].isFalseOrZero(handler.handlerSchema.ptrenabled);
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.refreshContent(false));
            }
            finally {
                refresher.complete();
            }
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
CoreSitePluginsCourseOptionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_siteplugins_components_plugin_content_plugin_content__WEBPACK_IMPORTED_MODULE_2__["CoreSitePluginsPluginContentComponent"],] }]
};
CoreSitePluginsCourseOptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'core-site-plugins-course-option',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./core-siteplugins-course-option.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/siteplugins/pages/course-option/core-siteplugins-course-option.html")).default,
    })
], CoreSitePluginsCourseOptionPage);



/***/ })

}]);
//# sourceMappingURL=features-siteplugins-pages-course-option-course-option-module.js.map