(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-tag-pages-search-search-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.tag.searchtags' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <ion-grid class=\"safe-area-page\">\n        <ion-row>\n            <ion-col size=\"12\" [attr.col-sm-6]=\"collections && collections.length > 1 ? '' : null\">\n                <core-search-box (onSubmit)=\"searchTags($event)\" (onClear)=\"searchTags('')\" [initialSearch]=\"query\"\n                    [disabled]=\"searching\" autocorrect=\"off\" [spellcheck]=\"false\" [autoFocus]=\"false\" [lengthCheck]=\"0\"\n                    searchArea=\"CoreTag\"></core-search-box>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"6\" *ngIf=\"collections && collections.length > 1\">\n                <core-combobox [selection]=\"collectionId\" (onChange)=\"searchTags($event)\" [disabled]=\"searching\">\n                    <ion-select-option class=\"ion-text-wrap\" [value]=\"0\">\n                        {{ 'core.tag.inalltagcoll' | translate }}\n                    </ion-select-option>\n                    <ion-select-option class=\"ion-text-wrap\" *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n                        {{ collection.name }}</ion-select-option>\n                </core-combobox>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <core-loading [hideUntil]=\"loaded && !searching\" class=\"safe-area-page\">\n        <core-empty-box *ngIf=\"!cloud || !cloud!.tags || !cloud!.tags.length\" icon=\"fas-tags\"\n            [message]=\"'core.tag.notagsfound' | translate: {$a: query}\"></core-empty-box>\n\n        <ng-container *ngIf=\"cloud && cloud!.tags && cloud!.tags.length > 0\">\n            <div class=\"ion-text-center core-tag-cloud\">\n                <ion-badge *ngFor=\"let tag of cloud!.tags\" (click)=\"openTag(tag)\" class=\"ion-text-wrap\">\n                    <span [class]=\"'size' + tag.size\">{{ tag.name }}</span>\n                </ion-badge>\n            </div>\n            <p *ngIf=\"cloud!.tags.length < cloud!.totalcount\" class=\"ion-text-center\">\n                {{ 'core.tag.showingfirsttags' | translate: {$a: cloud!.tags.length} }}\n            </p>\n        </ng-container>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/tag/pages/search/search.page.module.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/tag/pages/search/search.page.module.ts ***!
  \******************************************************************/
/*! exports provided: CoreTagSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagSearchPageModule", function() { return CoreTagSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.page */ "./src/core/features/tag/pages/search/search.page.ts");
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
        component: _search_page__WEBPACK_IMPORTED_MODULE_5__["CoreTagSearchPage"],
    },
];
let CoreTagSearchPageModule = class CoreTagSearchPageModule {
};
CoreTagSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _search_page__WEBPACK_IMPORTED_MODULE_5__["CoreTagSearchPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreSearchComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreTagSearchPageModule);



/***/ }),

/***/ "./src/core/features/tag/pages/search/search.page.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/tag/pages/search/search.page.ts ***!
  \***********************************************************/
/*! exports provided: CoreTagSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagSearchPage", function() { return CoreTagSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-helper */ "./src/core/features/contentlinks/services/contentlinks-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays most used tags and allows searching.
 */
let CoreTagSearchPage = class CoreTagSearchPage {
    constructor() {
        this.collections = [];
        this.loaded = false;
        this.searching = false;
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.collectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('collectionId') || 0;
        this.query = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteParam('query') || '';
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield Promise.all([
                    this.fetchCollections(),
                    this.fetchTags(),
                ]);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tags.');
            }
        });
    }
    /**
     * Fetch tag collections.
     *
     * @return Resolved when done.
     */
    fetchCollections() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const collections = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].getTagCollections();
            collections.forEach((collection) => {
                if (!collection.name && collection.isdefault) {
                    collection.name = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('core.tag.defautltagcoll');
                }
            });
            this.collections = collections;
        });
    }
    /**
     * Fetch tags.
     *
     * @return Resolved when done.
     */
    fetchTags() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cloud = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].getTagCloud(this.collectionId, undefined, undefined, this.query);
        });
    }
    /**
     * Go to tag index page.
     */
    openTag(tag) {
        const url = _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].decodeURI(tag.viewurl);
        _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_8__["CoreContentLinksHelper"].handleLink(url);
    }
    /**
     * Refresh data.
     *
     * @param refresher Refresher event.
     */
    refreshData(refresher) {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].allPromises([
            _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].invalidateTagCollections(),
            _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].invalidateTagCloud(this.collectionId, undefined, undefined, this.query),
        ]).finally(() => this.fetchData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        }));
    }
    /**
     * Search tags.
     *
     * @param query Search query.
     * @return Resolved when done.
     */
    searchTags(query) {
        this.searching = true;
        this.query = query;
        _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].closeKeyboard();
        return this.fetchTags().catch((error) => {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tags.');
        }).finally(() => {
            this.searching = false;
        });
    }
};
CoreTagSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-tag-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.scss */ "./src/core/features/tag/pages/search/search.scss")).default]
    })
], CoreTagSearchPage);



/***/ }),

/***/ "./src/core/features/tag/pages/search/search.scss":
/*!********************************************************!*\
  !*** ./src/core/features/tag/pages/search/search.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host core-search-box ion-card {\n  width: 100% !important;\n  margin: 0 !important;\n}\n:host .core-tag-cloud ion-badge {\n  margin: 8px;\n  cursor: pointer;\n}\n:host .core-tag-cloud ion-badge .size20 {\n  font-size: 3.4rem;\n}\n:host .core-tag-cloud ion-badge .size19 {\n  font-size: 3.3rem;\n}\n:host .core-tag-cloud ion-badge .size18 {\n  font-size: 3.2rem;\n}\n:host .core-tag-cloud ion-badge .size17 {\n  font-size: 3.1rem;\n}\n:host .core-tag-cloud ion-badge .size16 {\n  font-size: 3rem;\n}\n:host .core-tag-cloud ion-badge .size15 {\n  font-size: 2.9rem;\n}\n:host .core-tag-cloud ion-badge .size14 {\n  font-size: 2.8rem;\n}\n:host .core-tag-cloud ion-badge .size13 {\n  font-size: 2.7rem;\n}\n:host .core-tag-cloud ion-badge .size12 {\n  font-size: 2.6rem;\n}\n:host .core-tag-cloud ion-badge .size11 {\n  font-size: 2.5rem;\n}\n:host .core-tag-cloud ion-badge .size10 {\n  font-size: 2.4rem;\n}\n:host .core-tag-cloud ion-badge .size9 {\n  font-size: 2.3rem;\n}\n:host .core-tag-cloud ion-badge .size8 {\n  font-size: 2.2rem;\n}\n:host .core-tag-cloud ion-badge .size7 {\n  font-size: 2.1rem;\n}\n:host .core-tag-cloud ion-badge .size6 {\n  font-size: 2rem;\n}\n:host .core-tag-cloud ion-badge .size5 {\n  font-size: 1.9rem;\n}\n:host .core-tag-cloud ion-badge .size4 {\n  font-size: 1.8rem;\n}\n:host .core-tag-cloud ion-badge .size3 {\n  font-size: 1.7rem;\n}\n:host .core-tag-cloud ion-badge .size2 {\n  font-size: 1.6rem;\n}\n:host .core-tag-cloud ion-badge .size1 {\n  font-size: 1.5rem;\n}\n:host .core-tag-cloud ion-badge .size0 {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3RhZy9wYWdlcy9zZWFyY2gvc2VhcmNoLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRFI7QUFHUTtFQUNJLGlCQUFBO0FBRFo7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFLUTtFQUNJLGlCQUFBO0FBSFo7QUFNUTtFQUNJLGlCQUFBO0FBSlo7QUFPUTtFQUNJLGVBQUE7QUFMWjtBQVFRO0VBQ0ksaUJBQUE7QUFOWjtBQVNRO0VBQ0ksaUJBQUE7QUFQWjtBQVVRO0VBQ0ksaUJBQUE7QUFSWjtBQVdRO0VBQ0ksaUJBQUE7QUFUWjtBQVlRO0VBQ0ksaUJBQUE7QUFWWjtBQWFRO0VBQ0ksaUJBQUE7QUFYWjtBQWNRO0VBQ0ksaUJBQUE7QUFaWjtBQWVRO0VBQ0ksaUJBQUE7QUFiWjtBQWdCUTtFQUNJLGlCQUFBO0FBZFo7QUFpQlE7RUFDSSxlQUFBO0FBZlo7QUFrQlE7RUFDSSxpQkFBQTtBQWhCWjtBQW1CUTtFQUNJLGlCQUFBO0FBakJaO0FBb0JRO0VBQ0ksaUJBQUE7QUFsQlo7QUFxQlE7RUFDSSxpQkFBQTtBQW5CWjtBQXNCUTtFQUNJLGlCQUFBO0FBcEJaO0FBdUJRO0VBQ0ksaUJBQUE7QUFyQloiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvdGFnL3BhZ2VzL3NlYXJjaC9zZWFyY2guc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBjb3JlLXNlYXJjaC1ib3ggaW9uLWNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29yZS10YWctY2xvdWQgaW9uLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAuc2l6ZTIwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMy40cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUxOSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMuM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplMTgge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZTE3IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4xcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUxNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZTE1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi45cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUxNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplMTMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZTEyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUxMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplMTAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZTkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZTgge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZTcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZTYge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemU1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemU0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=features-tag-pages-search-search-page-module.js.map