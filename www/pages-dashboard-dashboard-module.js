(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/dashboard/dashboard.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/dashboard/dashboard.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-navbar-buttons slot=\"end\">\n    <ion-button *ngIf=\"searchEnabled\" (click)=\"openSearch()\" [attr.aria-label]=\"'core.courses.searchcourses' | translate\">\n        <ion-icon name=\"fas-search\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n    </ion-button>\n    <core-context-menu>\n        <core-context-menu-item *ngIf=\"(downloadCourseEnabled || downloadCoursesEnabled)\" [priority]=\"1000\"\n        [content]=\"'core.settings.showdownloadoptions' | translate\" (action)=\"toggleDownload()\"\n        [iconAction]=\"downloadEnabledIcon\"></core-context-menu-item>\n        <core-context-menu-item *ngIf=\"(downloadCourseEnabled || downloadCoursesEnabled)\" [priority]=\"500\"\n        [content]=\"'addon.storagemanager.managestorage' | translate\"\n        (action)=\"manageCoursesStorage()\" iconAction=\"fas-archive\"></core-context-menu-item>\n    </core-context-menu>\n</core-navbar-buttons>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshDashboard($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-list>\n            <ng-container *ngFor=\"let block of blocks\">\n                <core-block *ngIf=\"block.visible\" [block]=\"block\" contextLevel=\"user\" [instanceId]=\"userId\"\n                [extraData]=\"{'downloadEnabled': downloadEnabled}\"></core-block>\n            </ng-container>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"blocks.length == 0\" icon=\"fas-th-large\" [message]=\"'core.course.nocontentavailable' | translate\">\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/courses/pages/dashboard/dashboard.module.ts":
/*!***********************************************************************!*\
  !*** ./src/core/features/courses/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: CoreCoursesDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesDashboardPageModule", function() { return CoreCoursesDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/block/components/components.module */ "./src/core/features/block/components/components.module.ts");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard */ "./src/core/features/courses/pages/dashboard/dashboard.ts");
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
        component: _dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboardPage"],
    },
];
let CoreCoursesDashboardPageModule = class CoreCoursesDashboardPageModule {
};
CoreCoursesDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreBlockComponentsModule"],
        ],
        declarations: [
            _dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboardPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCoursesDashboardPageModule);



/***/ }),

/***/ "./src/core/features/courses/pages/dashboard/dashboard.scss":
/*!******************************************************************!*\
  !*** ./src/core/features/courses/pages/dashboard/dashboard.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9jb3Vyc2VzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/core/features/courses/pages/dashboard/dashboard.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/courses/pages/dashboard/dashboard.ts ***!
  \****************************************************************/
/*! exports provided: CoreCoursesDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesDashboardPage", function() { return CoreCoursesDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/courses/services/dashboard */ "./src/core/features/courses/services/dashboard.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_block_components_block_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/block/components/block/block */ "./src/core/features/block/components/block/block.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the dashboard page.
 */
let CoreCoursesDashboardPage = class CoreCoursesDashboardPage {
    constructor() {
        this.searchEnabled = false;
        this.downloadEnabled = false;
        this.downloadCourseEnabled = false;
        this.downloadCoursesEnabled = false;
        this.downloadEnabledIcon = 'far-square';
        this.blocks = [];
        this.loaded = false;
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        this.searchEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_2__["CoreCourses"].isSearchCoursesDisabledInSite();
        this.downloadCourseEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_2__["CoreCourses"].isDownloadCourseDisabledInSite();
        this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_2__["CoreCourses"].isDownloadCoursesDisabledInSite();
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].SITE_UPDATED, () => {
            this.searchEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_2__["CoreCourses"].isSearchCoursesDisabledInSite();
            this.downloadCourseEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_2__["CoreCourses"].isDownloadCourseDisabledInSite();
            this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_2__["CoreCourses"].isDownloadCoursesDisabledInSite();
            this.switchDownload(this.downloadEnabled && this.downloadCourseEnabled && this.downloadCoursesEnabled);
        }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
        this.loadContent();
    }
    /**
     * Convenience function to fetch the dashboard data.
     *
     * @return Promise resolved when done.
     */
    loadContent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const available = yield _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboard"].isAvailable();
            if (available) {
                this.userId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
                try {
                    this.blocks = yield _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboard"].getDashboardBlocks();
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(error);
                    // Cannot get the blocks, just show dashboard if needed.
                    this.loadFallbackBlocks();
                }
            }
            else if (!_features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboard"].isDisabledInSite()) {
                // Not available, but not disabled either. Use fallback.
                this.loadFallbackBlocks();
            }
            else {
                // Disabled.
                this.blocks = [];
            }
            // this.dashboardEnabled = this.blockDelegate.hasSupportedBlock(this.blocks);
            this.loaded = true;
        });
    }
    /**
     * Load fallback blocks to shown before 3.6 when dashboard blocks are not supported.
     */
    loadFallbackBlocks() {
        this.blocks = [
            {
                name: 'myoverview',
                visible: true,
            },
            {
                name: 'timeline',
                visible: true,
            },
        ];
    }
    /**
     * Refresh the dashboard data.
     *
     * @param refresher Refresher.
     */
    refreshDashboard(refresher) {
        var _a;
        const promises = [];
        promises.push(_features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboard"].invalidateDashboardBlocks());
        // Invalidate the blocks.
        (_a = this.blocksComponents) === null || _a === void 0 ? void 0 : _a.forEach((blockComponent) => {
            promises.push(blockComponent.invalidate().catch(() => {
                // Ignore errors.
            }));
        });
        Promise.all(promises).finally(() => {
            this.loadContent().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Toggle download enabled.
     */
    toggleDownload() {
        this.switchDownload(!this.downloadEnabled);
    }
    /**
     * Convenience function to switch download enabled.
     *
     * @param enable If enable or disable.
     */
    switchDownload(enable) {
        this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && enable;
        this.downloadEnabledIcon = this.downloadEnabled ? 'far-check-square' : 'far-square';
        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_courses__WEBPACK_IMPORTED_MODULE_2__["CoreCoursesProvider"].EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED, { enabled: this.downloadEnabled });
    }
    /**
     * Open page to manage courses storage.
     */
    manageCoursesStorage() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigateToSitePath('/storage');
    }
    /**
     * Go to search courses.
     */
    openSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigateToSitePath('/courses/search');
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
CoreCoursesDashboardPage.propDecorators = {
    blocksComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_features_block_components_block_block__WEBPACK_IMPORTED_MODULE_7__["CoreBlockComponent"],] }]
};
CoreCoursesDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/dashboard/dashboard.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.scss */ "./src/core/features/courses/pages/dashboard/dashboard.scss")).default]
    })
], CoreCoursesDashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map