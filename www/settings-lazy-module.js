(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/index/index.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/index/index.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.settings.appsettings' | translate }}</h1>\n        <ion-buttons slot=\"end\"></ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-list>\n            <ion-item *ngFor=\"let section of sections.items\" [attr.aria-current]=\"sections.getItemAriaCurrent(section)\" button\n                detail=\"true\" (click)=\"sections.select(section)\">\n                <ion-icon [name]=\"section.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ section.name | translate }}</ion-label>\n            </ion-item>\n        </ion-list>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/settings/pages/index/index.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/settings/pages/index/index.ts ***!
  \*********************************************************/
/*! exports provided: CoreSettingsIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsIndexPage", function() { return CoreSettingsIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _features_sharedfiles_sharedfiles_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/sharedfiles/sharedfiles.module */ "./src/core/features/sharedfiles/sharedfiles.module.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
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
var CoreSettingsIndexPage_1;







let CoreSettingsIndexPage = CoreSettingsIndexPage_1 = class CoreSettingsIndexPage {
    constructor() {
        this.sections = new CoreSettingsSectionsManager(CoreSettingsIndexPage_1);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        this.sections.setItems(this.getSections());
        this.sections.start(this.splitView);
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.sections.destroy();
    }
    /**
     * Get the sections.
     *
     * @returns Sections.
     */
    getSections() {
        const sections = [
            {
                name: 'core.settings.general',
                path: 'general',
                icon: 'fas-wrench',
            },
            {
                name: 'core.settings.spaceusage',
                path: 'spaceusage',
                icon: 'fas-tasks',
            },
            {
                name: 'core.settings.synchronization',
                path: 'sync',
                icon: _core_constants__WEBPACK_IMPORTED_MODULE_4__["CoreConstants"].ICON_SYNC,
            },
        ];
        if (_services_app__WEBPACK_IMPORTED_MODULE_6__["CoreApp"].isIOS()) {
            sections.push({
                name: 'core.sharedfiles.sharedfiles',
                path: _features_sharedfiles_sharedfiles_module__WEBPACK_IMPORTED_MODULE_5__["SHAREDFILES_PAGE_NAME"] + '/list/root',
                icon: 'fas-folder',
                params: { manage: true },
            });
        }
        sections.push({
            name: 'core.settings.about',
            path: 'about',
            icon: 'fas-id-card',
        });
        return sections;
    }
};
CoreSettingsIndexPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"],] }]
};
CoreSettingsIndexPage = CoreSettingsIndexPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-settings-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/index/index.html")).default,
    })
], CoreSettingsIndexPage);

/**
 * Helper class to manage sections.
 */
class CoreSettingsSectionsManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_2__["CorePageItemsListManager"] {
    /**
     * @inheritdoc
     */
    getItemPath(section) {
        return section.path;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(section) {
        return section.params || {};
    }
}


/***/ }),

/***/ "./src/core/features/settings/settings-lazy.module.ts":
/*!************************************************************!*\
  !*** ./src/core/features/settings/settings-lazy.module.ts ***!
  \************************************************************/
/*! exports provided: CoreSettingsLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsLazyModule", function() { return CoreSettingsLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/index */ "./src/core/features/settings/pages/index/index.ts");
/* harmony import */ var _features_sharedfiles_sharedfiles_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/sharedfiles/sharedfiles.module */ "./src/core/features/sharedfiles/sharedfiles.module.ts");
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








const sectionRoutes = [
    {
        path: 'general',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-general-general-module */ "pages-general-general-module").then(__webpack_require__.bind(null, /*! ./pages/general/general.module */ "./src/core/features/settings/pages/general/general.module.ts")).then(m => m.CoreSettingsGeneralPageModule),
    },
    {
        path: 'spaceusage',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-space-usage-space-usage-module */ "pages-space-usage-space-usage-module").then(__webpack_require__.bind(null, /*! ./pages/space-usage/space-usage.module */ "./src/core/features/settings/pages/space-usage/space-usage.module.ts")).then(m => m.CoreSettingsSpaceUsagePageModule),
    },
    {
        path: 'sync',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-synchronization-synchronization-module */ "pages-synchronization-synchronization-module").then(__webpack_require__.bind(null, /*! ./pages/synchronization/synchronization.module */ "./src/core/features/settings/pages/synchronization/synchronization.module.ts"))
            .then(m => m.CoreSettingsSynchronizationPageModule),
    },
    {
        path: _features_sharedfiles_sharedfiles_module__WEBPACK_IMPORTED_MODULE_7__["SHAREDFILES_PAGE_NAME"],
        loadChildren: () => __webpack_require__.e(/*! import() | features-sharedfiles-sharedfiles-lazy-module */ "sharedfiles-lazy-module").then(__webpack_require__.bind(null, /*! @features/sharedfiles/sharedfiles-lazy.module */ "./src/core/features/sharedfiles/sharedfiles-lazy.module.ts")).then(m => m.CoreSharedFilesLazyModule),
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-about-about-module */ "pages-about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "./src/core/features/settings/pages/about/about.module.ts")).then(m => m.CoreSettingsAboutPageModule),
    },
];
const mobileRoutes = [
    {
        path: '',
        component: _pages_index__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsIndexPage"],
    },
    ...sectionRoutes,
];
const tabletRoutes = [
    {
        path: '',
        component: _pages_index__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsIndexPage"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'general',
            },
            ...sectionRoutes,
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
    {
        path: 'about/deviceinfo',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-deviceinfo-deviceinfo-module */ "pages-deviceinfo-deviceinfo-module").then(__webpack_require__.bind(null, /*! ./pages/deviceinfo/deviceinfo.module */ "./src/core/features/settings/pages/deviceinfo/deviceinfo.module.ts")).then(m => m.CoreSettingsDeviceInfoPageModule),
    },
    {
        path: 'about/licenses',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-licenses-licenses-module */ "pages-licenses-licenses-module").then(__webpack_require__.bind(null, /*! ./pages/licenses/licenses.module */ "./src/core/features/settings/pages/licenses/licenses.module.ts")).then(m => m.CoreSettingsLicensesPageModule),
    },
];
let CoreSettingsLazyModule = class CoreSettingsLazyModule {
};
CoreSettingsLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
        ],
        declarations: [
            _pages_index__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsIndexPage"],
        ],
    })
], CoreSettingsLazyModule);



/***/ })

}]);
//# sourceMappingURL=settings-lazy-module.js.map