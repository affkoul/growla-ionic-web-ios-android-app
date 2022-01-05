(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-tag-pages-index-index-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index/index.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index/index.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.tag.tag' | translate }}: {{ tagName }}</h1>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"loaded\">\n            <ion-list *ngIf=\"hasUnsupportedAreas || areas.length\">\n                <ion-item *ngIf=\"hasUnsupportedAreas\" class=\"core-warning-item\">\n                    <ion-icon slot=\"start\" name=\"fas-exclamation-triangle\" color=\"warning\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label class=\"ion-text-wrap\">{{ 'core.tag.warningareasnotsupported' | translate }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let area of areas\" [attr.aria-label]=\"area.nameKey | translate\"\n                    (click)=\"openArea(area)\" [attr.aria-current]=\"area!.id == selectedAreaId ? 'page' : 'false'\" button\n                    detail=\"true\">\n                    <ion-label>\n                        <h2>{{ area!.nameKey | translate }}</h2>\n                    </ion-label>\n                    <ion-badge slot=\"end\" *ngIf=\"area!.badge\">\n                        <span aria-hidden=\"true\">{{ area!.badge }}</span>\n                        <span class=\"sr-only\">{{ 'core.tag.tagareabadgedescription' | translate:{ count: area!.badge } }}</span>\n                    </ion-badge>\n                </ion-item>\n            </ion-list>\n            <core-empty-box icon=\"fas-tag\" *ngIf=\"!hasUnsupportedAreas && (!areas || !areas.length)\"\n                [message]=\"'core.tag.noresultsfor' | translate: { $a: tagName }\"></core-empty-box>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/tag/pages/index/index.page.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/tag/pages/index/index.page.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreTagIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexPageModule", function() { return CoreTagIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _features_tag_tag_lazy_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/tag/tag-lazy.module */ "./src/core/features/tag/tag-lazy.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.page */ "./src/core/features/tag/pages/index/index.page.ts");
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
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_7__["CoreTagIndexPage"],
    },
    _features_tag_tag_lazy_module__WEBPACK_IMPORTED_MODULE_4__["CoreTagIndexAreaRoute"],
];
const tabletRoutes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_7__["CoreTagIndexPage"],
        children: [
            _features_tag_tag_lazy_module__WEBPACK_IMPORTED_MODULE_4__["CoreTagIndexAreaRoute"],
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
];
let CoreTagIndexPageModule = class CoreTagIndexPageModule {
};
CoreTagIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _index_page__WEBPACK_IMPORTED_MODULE_7__["CoreTagIndexPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreTagIndexPageModule);



/***/ }),

/***/ "./src/core/features/tag/pages/index/index.page.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/tag/pages/index/index.page.ts ***!
  \*********************************************************/
/*! exports provided: CoreTagIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexPage", function() { return CoreTagIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _features_tag_services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/tag/services/tag-area-delegate */ "./src/core/features/tag/services/tag-area-delegate.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the tag index.
 */
let CoreTagIndexPage = class CoreTagIndexPage {
    constructor() {
        this.tagId = 0;
        this.tagName = '';
        this.collectionId = 0;
        this.areaId = 0;
        this.fromContextId = 0;
        this.contextId = 0;
        this.recursive = true;
        this.loaded = false;
        this.hasUnsupportedAreas = false;
        this.areas = [];
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tagId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('tagId') || this.tagId;
            this.tagName = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('tagName') || this.tagName;
            this.collectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('collectionId') || this.collectionId;
            this.areaId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('areaId') || this.areaId;
            this.fromContextId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('fromContextId') || this.fromContextId;
            this.contextId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('contextId') || this.contextId;
            this.recursive = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('recursive')) !== null && _a !== void 0 ? _a : true;
            try {
                yield this.fetchData();
                if (_services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet && this.areas && this.areas.length > 0) {
                    const area = this.areas.find((area) => area.id == this.areaId);
                    this.openArea(area || this.areas[0]);
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Fetch first page of tag index per area.
     *
     * @return Resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const areas = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__["CoreTag"].getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, 0);
                this.areas = [];
                this.hasUnsupportedAreas = false;
                const areasDisplay = [];
                yield Promise.all(areas.map((area) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const items = yield _features_tag_services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreTagAreaDelegate"].parseContent(area.component, area.itemtype, area.content);
                    if (!items || !items.length) {
                        // Tag area not supported, skip.
                        this.hasUnsupportedAreas = true;
                        return;
                    }
                    areasDisplay.push({
                        id: area.ta,
                        componentName: area.component,
                        itemType: area.itemtype,
                        nameKey: _features_tag_services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreTagAreaDelegate"].getDisplayNameKey(area.component, area.itemtype),
                        items,
                        canLoadMore: !!area.nextpageurl,
                        badge: items && items.length ? items.length + (area.nextpageurl ? '+' : '') : '',
                    });
                })));
                this.areas = areasDisplay;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tag index');
            }
        });
    }
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__["CoreTag"].invalidateTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive).finally(() => {
            this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Navigate to an index area.
     *
     * @param area Area.
     */
    openArea(area) {
        this.selectedAreaId = area.id;
        const params = {
            tagId: this.tagId,
            tagName: this.tagName,
            collectionId: this.collectionId,
            areaId: area.id,
            fromContextId: this.fromContextId,
            contextId: this.contextId,
            recursive: this.recursive,
            areaNameKey: area.nameKey,
            componentName: area.componentName,
            itemType: area.itemType,
            items: area.items.slice(),
            canLoadMore: area.canLoadMore,
            nextPage: 1,
        };
        const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].isCurrentPathInTablet('**/tag/index/index-area');
        const path = (splitViewLoaded ? '../' : '') + 'index-area';
        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].navigate(path, { params });
    }
};
CoreTagIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-tag-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index/index.html")).default,
    })
], CoreTagIndexPage);



/***/ })

}]);
//# sourceMappingURL=features-tag-pages-index-index-page-module.js.map