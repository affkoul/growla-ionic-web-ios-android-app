(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forum-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/index/index.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/index/index.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <addon-mod-forum-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"></addon-mod-forum-index>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/forum/forum-lazy.module.ts":
/*!***************************************************!*\
  !*** ./src/addons/mod/forum/forum-lazy.module.ts ***!
  \***************************************************/
/*! exports provided: AddonModForumLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumLazyModule", function() { return AddonModForumLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/forum/components/components.module.ts");
/* harmony import */ var _pages_index_index_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/index/index.page */ "./src/addons/mod/forum/pages/index/index.page.ts");
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
        component: _pages_index_index_page__WEBPACK_IMPORTED_MODULE_7__["AddonModForumIndexPage"],
    },
    {
        path: ':courseId/:cmId/new/:timeCreated',
        loadChildren: () => Promise.all(/*! import() | pages-new-discussion-new-discussion-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-new-discussion-new-discussion-module")]).then(__webpack_require__.bind(null, /*! ./pages/new-discussion/new-discussion.module */ "./src/addons/mod/forum/pages/new-discussion/new-discussion.module.ts")).then(m => m.AddonForumNewDiscussionPageModule),
    },
    {
        path: ':courseId/:cmId/:discussionId',
        loadChildren: () => Promise.all(/*! import() | pages-discussion-discussion-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-discussion-discussion-module")]).then(__webpack_require__.bind(null, /*! ./pages/discussion/discussion.module */ "./src/addons/mod/forum/pages/discussion/discussion.module.ts")).then(m => m.AddonForumDiscussionPageModule),
    },
];
const tabletRoutes = [
    {
        path: ':courseId/:cmId',
        component: _pages_index_index_page__WEBPACK_IMPORTED_MODULE_7__["AddonModForumIndexPage"],
        children: [
            {
                path: 'new/:timeCreated',
                loadChildren: () => Promise.all(/*! import() | pages-new-discussion-new-discussion-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-new-discussion-new-discussion-module")]).then(__webpack_require__.bind(null, /*! ./pages/new-discussion/new-discussion.module */ "./src/addons/mod/forum/pages/new-discussion/new-discussion.module.ts"))
                    .then(m => m.AddonForumNewDiscussionPageModule),
            },
            {
                path: ':discussionId',
                loadChildren: () => Promise.all(/*! import() | pages-discussion-discussion-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-discussion-discussion-module")]).then(__webpack_require__.bind(null, /*! ./pages/discussion/discussion.module */ "./src/addons/mod/forum/pages/discussion/discussion.module.ts")).then(m => m.AddonForumDiscussionPageModule),
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isTablet),
];
let AddonModForumLazyModule = class AddonModForumLazyModule {
};
AddonModForumLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["AddonModForumComponentsModule"],
        ],
        declarations: [
            _pages_index_index_page__WEBPACK_IMPORTED_MODULE_7__["AddonModForumIndexPage"],
        ],
    })
], AddonModForumLazyModule);



/***/ }),

/***/ "./src/addons/mod/forum/pages/index/index.page.ts":
/*!********************************************************!*\
  !*** ./src/addons/mod/forum/pages/index/index.page.ts ***!
  \********************************************************/
/*! exports provided: AddonModForumIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumIndexPage", function() { return AddonModForumIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index */ "./src/addons/mod/forum/components/index/index.ts");
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




let AddonModForumIndexPage = class AddonModForumIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModForumIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index__WEBPACK_IMPORTED_MODULE_3__["AddonModForumIndexComponent"],] }]
};
AddonModForumIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-forum-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/index/index.html")).default,
    })
], AddonModForumIndexPage);



/***/ })

}]);
//# sourceMappingURL=forum-lazy-module.js.map