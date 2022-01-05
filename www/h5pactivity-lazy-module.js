(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["h5pactivity-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/index/index.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/index/index.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!activityComponent?.loaded\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-h5pactivity-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\">\n    </addon-mod-h5pactivity-index>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/h5pactivity/h5pactivity-lazy.module.ts":
/*!***************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/h5pactivity-lazy.module.ts ***!
  \***************************************************************/
/*! exports provided: AddonModH5PActivityLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityLazyModule", function() { return AddonModH5PActivityLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/h5pactivity/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/h5pactivity/pages/index/index.ts");
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
        path: ':courseId/:cmId',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityIndexPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/userattempts/:userId',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-user-attempts-user-attempts-module */ "pages-user-attempts-user-attempts-module").then(__webpack_require__.bind(null, /*! ./pages/user-attempts/user-attempts.module */ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.module.ts"))
            .then(m => m.AddonModH5PActivityUserAttemptsPageModule),
    },
    {
        path: ':courseId/:cmId/attemptresults/:attemptId',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-attempt-results-attempt-results-module */ "pages-attempt-results-attempt-results-module").then(__webpack_require__.bind(null, /*! ./pages/attempt-results/attempt-results.module */ "./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.module.ts"))
            .then(m => m.AddonModH5PActivityAttemptResultsPageModule),
    },
];
let AddonModH5PActivityLazyModule = class AddonModH5PActivityLazyModule {
};
AddonModH5PActivityLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["AddonModH5PActivityComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityIndexPage"],
        ],
    })
], AddonModH5PActivityLazyModule);



/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/index/index.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/index/index.ts ***!
  \*********************************************************/
/*! exports provided: AddonModH5PActivityIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityIndexPage", function() { return AddonModH5PActivityIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/index */ "./src/addons/mod/h5pactivity/components/index/index.ts");
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
 * Page that displays an H5P activity.
 */
let AddonModH5PActivityIndexPage = class AddonModH5PActivityIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    /**
     * @inheritdoc
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.activityComponent || !this.activityComponent.playing || this.activityComponent.isOpeningPage) {
                return true;
            }
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.confirmleaveunknownchanges'));
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
};
AddonModH5PActivityIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index__WEBPACK_IMPORTED_MODULE_5__["AddonModH5PActivityIndexComponent"],] }]
};
AddonModH5PActivityIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-h5pactivity-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/index/index.html")).default,
    })
], AddonModH5PActivityIndexPage);



/***/ })

}]);
//# sourceMappingURL=h5pactivity-lazy-module.js.map