(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-available-courses-available-courses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/available-courses/available-courses.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/available-courses/available-courses.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.courses.availablecourses' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!coursesLoaded\" (ionRefresh)=\"refreshCourses($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"coursesLoaded\">\n        <!-- 现有课程列表 -->\n        <ng-container *ngIf=\"courses.length > 0\">\n            <core-courses-course-list-item *ngFor=\"let course of courses\" [course]=\"course\"></core-courses-course-list-item>\n        </ng-container>\n        <core-empty-box *ngIf=\"!courses.length\" icon=\"fas-graduation-cap\" [message]=\"'core.courses.nocourses' | translate\"></core-empty-box>\n    </core-loading>\n    <ion-infinite-scroll class=\"scroll\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"正在加载...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      <div *ngIf=\"IsILastPage\" >\n        <ion-row>\n            <ion-col text-center class=\"text\">\n              没有更多内容\n            </ion-col>\n        </ion-row>\n      </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/courses/pages/available-courses/available-courses.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/core/features/courses/pages/available-courses/available-courses.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CoreCoursesAvailableCoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesAvailableCoursesPageModule", function() { return CoreCoursesAvailableCoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/core/features/courses/components/components.module.ts");
/* harmony import */ var _available_courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./available-courses */ "./src/core/features/courses/pages/available-courses/available-courses.ts");
// (C) Copyright 2015 GROWLA Pty Ltd.
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
        component: _available_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesAvailableCoursesPage"],
    },
];
let CoreCoursesAvailableCoursesPageModule = class CoreCoursesAvailableCoursesPageModule {
};
CoreCoursesAvailableCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreCoursesComponentsModule"],
        ],
        declarations: [
            _available_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesAvailableCoursesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCoursesAvailableCoursesPageModule);



/***/ }),

/***/ "./src/core/features/courses/pages/available-courses/available-courses.scss":
/*!**********************************************************************************!*\
  !*** ./src/core/features/courses/pages/available-courses/available-courses.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2NvdXJzZXMvcGFnZXMvYXZhaWxhYmxlLWNvdXJzZXMvYXZhaWxhYmxlLWNvdXJzZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvY291cnNlcy9wYWdlcy9hdmFpbGFibGUtY291cnNlcy9hdmFpbGFibGUtY291cnNlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/core/features/courses/pages/available-courses/available-courses.ts":
/*!********************************************************************************!*\
  !*** ./src/core/features/courses/pages/available-courses/available-courses.ts ***!
  \********************************************************************************/
/*! exports provided: CoreCoursesAvailableCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesAvailableCoursesPage", function() { return CoreCoursesAvailableCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
// (C) Copyright 2015 GROWLA Pty Ltd.
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
 * Page that displays available courses in current site.
 */
let CoreCoursesAvailableCoursesPage = class CoreCoursesAvailableCoursesPage {
    constructor() {
        this.courses = [];
        this.coursesLoaded = false;
        this.array = [];
        this.IsILastPage = false;
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.loadCourses().finally(() => {
            this.coursesLoaded = true;
        });
    }
    /**
     * Load the courses.
     *
     * @return Promise resolved when done.
     */
    loadCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const frontpageCourseId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteHomeId();
            try {
                const courses = yield _services_courses__WEBPACK_IMPORTED_MODULE_4__["CoreCourses"].getCoursesByField();
                this.array = yield courses.filter((course) => course.id != frontpageCourseId);
                let arr = yield JSON.parse(JSON.stringify(this.array));
                this.array = yield arr.splice(20);
                this.courses = yield arr;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
            }
        });
    }
    loadData(event) {
        setTimeout(() => {
            event.target.complete();
            let arr = JSON.parse(JSON.stringify(this.array));
            this.array = arr.splice(20);
            this.courses = [...this.courses, ...arr];
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.array.length < 20) {
                this.courses = this.courses.concat(this.array);
                event.target.disabled = true;
                this.IsILastPage = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    /**
     * Refresh the courses.
     *
     * @param refresher Refresher.
     */
    refreshCourses(refresher) {
        const promises = [];
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_4__["CoreCourses"].invalidateUserCourses());
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_4__["CoreCourses"].invalidateCoursesByField());
        Promise.all(promises).finally(() => {
            this.loadCourses().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
};
CoreCoursesAvailableCoursesPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
CoreCoursesAvailableCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-available-courses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./available-courses.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/available-courses/available-courses.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./available-courses.scss */ "./src/core/features/courses/pages/available-courses/available-courses.scss")).default]
    })
], CoreCoursesAvailableCoursesPage);



/***/ })

}]);
//# sourceMappingURL=pages-available-courses-available-courses-module.js.map