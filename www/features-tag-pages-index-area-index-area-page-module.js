(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-tag-pages-index-area-index-area-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index-area/index-area.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index-area/index-area.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            {{ 'core.tag.itemstaggedwith' | translate: { $a: {tagarea: areaNameKey | translate, tag: tagName} } }}\n        </h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <ng-container *ngIf=\"loaded\">\n            <core-dynamic-component [component]=\"areaComponent\" [data]=\"{items: items}\"></core-dynamic-component>\n        </ng-container>\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMore($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/tag/pages/index-area/index-area.page.module.ts":
/*!**************************************************************************!*\
  !*** ./src/core/features/tag/pages/index-area/index-area.page.module.ts ***!
  \**************************************************************************/
/*! exports provided: CoreTagIndexAreaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexAreaPageModule", function() { return CoreTagIndexAreaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _index_area_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-area.page */ "./src/core/features/tag/pages/index-area/index-area.page.ts");
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
        component: _index_area_page__WEBPACK_IMPORTED_MODULE_4__["CoreTagIndexAreaPage"],
    },
];
let CoreTagIndexAreaPageModule = class CoreTagIndexAreaPageModule {
};
CoreTagIndexAreaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _index_area_page__WEBPACK_IMPORTED_MODULE_4__["CoreTagIndexAreaPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreTagIndexAreaPageModule);



/***/ }),

/***/ "./src/core/features/tag/pages/index-area/index-area.page.ts":
/*!*******************************************************************!*\
  !*** ./src/core/features/tag/pages/index-area/index-area.page.ts ***!
  \*******************************************************************/
/*! exports provided: CoreTagIndexAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexAreaPage", function() { return CoreTagIndexAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tag-area-delegate */ "./src/core/features/tag/services/tag-area-delegate.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the tag index area.
 *
 * @todo testing.
 */
let CoreTagIndexAreaPage = class CoreTagIndexAreaPage {
    constructor(route) {
        this.route = route;
        this.tagId = 0;
        this.tagName = '';
        this.collectionId = 0;
        this.areaId = 0;
        this.fromContextId = 0;
        this.contextId = 0;
        this.recursive = true;
        this.areaNameKey = '';
        this.loaded = false;
        this.items = [];
        this.nextPage = 0;
        this.canLoadMore = false;
        this.loadMoreError = false;
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                this.loaded = false;
                this.tagId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('tagId') || this.tagId;
                this.tagName = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('tagName') || this.tagName;
                this.collectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('collectionId') || this.collectionId;
                this.areaId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('areaId') || this.areaId;
                this.fromContextId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('fromContextId') || this.fromContextId;
                this.contextId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('contextId') || this.contextId;
                this.recursive = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteBooleanParam('recursive')) !== null && _a !== void 0 ? _a : true;
                this.areaNameKey = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('areaNameKey') || '';
                // Pass the the following parameters to avoid fetching the first page.
                this.componentName = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('componentName');
                this.itemType = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('itemType');
                this.items = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('items') || [];
                this.nextPage = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('nextPage') || 0;
                this.canLoadMore = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteBooleanParam('canLoadMore') || false;
                try {
                    if (!this.componentName || !this.itemType || !this.items.length || this.nextPage == 0) {
                        yield this.fetchData(true);
                    }
                    this.areaComponent = yield _services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreTagAreaDelegate"].getComponent(this.componentName, this.itemType);
                }
                finally {
                    this.loaded = true;
                }
            }));
        });
    }
    /**
     * Fetch next page of the tag index area.
     *
     * @param refresh Whether to refresh the data or fetch a new page.
     * @return Resolved when done.
     */
    fetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            const page = refresh ? 0 : this.nextPage;
            try {
                const areas = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__["CoreTag"].getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, page);
                const area = areas[0];
                const items = yield _services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreTagAreaDelegate"].parseContent(area.component, area.itemtype, area.content);
                if (!items || !items.length) {
                    // Tag area not supported.
                    throw _singletons__WEBPACK_IMPORTED_MODULE_6__["Translate"].instant('core.tag.errorareanotsupported');
                }
                if (page == 0) {
                    this.items = items;
                }
                else {
                    this.items.push(...items);
                }
                this.componentName = area.component;
                this.itemType = area.itemtype;
                this.areaNameKey = _services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreTagAreaDelegate"].getDisplayNameKey(area.component, area.itemtype);
                this.canLoadMore = !!area.nextpageurl;
                this.nextPage = page + 1;
            }
            catch (error) {
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tag index');
            }
        });
    }
    /**
     * Load more items.
     *
     * @param infiniteComplete Infinite scroll complete function.
     * @return Resolved when done.
     */
    loadMore(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchData();
            }
            finally {
                infiniteComplete === null || infiniteComplete === void 0 ? void 0 : infiniteComplete();
            }
        });
    }
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__["CoreTag"].invalidateTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive);
            }
            finally {
                try {
                    yield this.fetchData(true);
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            }
        });
    }
};
CoreTagIndexAreaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CoreTagIndexAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-tag-index-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index-area.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index-area/index-area.html")).default,
    })
], CoreTagIndexAreaPage);



/***/ })

}]);
//# sourceMappingURL=features-tag-pages-index-area-index-area-page-module.js.map