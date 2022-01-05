(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-lazy-module"],{

/***/ "./src/addons/calendar/calendar-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/calendar/calendar-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonCalendarEditRoute, AddonCalendarEventRoute, AddonCalendarLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEditRoute", function() { return AddonCalendarEditRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventRoute", function() { return AddonCalendarEventRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarLazyModule", function() { return AddonCalendarLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/addons/calendar/services/handlers/mainmenu.ts");
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





const AddonCalendarEditRoute = {
    path: 'edit/:eventId',
    loadChildren: () => Promise.all(/*! import() | addons-calendar-pages-edit-event-edit-event-module */[__webpack_require__.e("common"), __webpack_require__.e("addons-calendar-pages-edit-event-edit-event-module")]).then(__webpack_require__.bind(null, /*! @/addons/calendar/pages/edit-event/edit-event.module */ "./src/addons/calendar/pages/edit-event/edit-event.module.ts")).then(m => m.AddonCalendarEditEventPageModule),
};
const AddonCalendarEventRoute = {
    path: 'event/:id',
    loadChildren: () => __webpack_require__.e(/*! import() | addons-calendar-pages-event-event-module */ "addons-calendar-pages-event-event-module").then(__webpack_require__.bind(null, /*! @/addons/calendar/pages/event/event.module */ "./src/addons/calendar/pages/event/event.module.ts")).then(m => m.AddonCalendarEventPageModule),
};
function buildRoutes(injector) {
    return [
        {
            path: 'index',
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarMainMenuHandlerService"].PAGE_NAME,
            },
            loadChildren: () => __webpack_require__.e(/*! import() | addons-calendar-pages-index-index-module */ "addons-calendar-pages-index-index-module").then(__webpack_require__.bind(null, /*! @/addons/calendar/pages/index/index.module */ "./src/addons/calendar/pages/index/index.module.ts")).then(m => m.AddonCalendarIndexPageModule),
        },
        {
            path: 'list',
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarMainMenuHandlerService"].PAGE_NAME,
            },
            loadChildren: () => __webpack_require__.e(/*! import() | addons-calendar-pages-list-list-module */ "addons-calendar-pages-list-list-module").then(__webpack_require__.bind(null, /*! @/addons/calendar/pages/list/list.module */ "./src/addons/calendar/pages/list/list.module.ts")).then(m => m.AddonCalendarListPageModule),
        },
        {
            path: 'settings',
            loadChildren: () => __webpack_require__.e(/*! import() | addons-calendar-pages-settings-settings-module */ "addons-calendar-pages-settings-settings-module").then(__webpack_require__.bind(null, /*! @/addons/calendar/pages/settings/settings.module */ "./src/addons/calendar/pages/settings/settings.module.ts")).then(m => m.AddonCalendarSettingsPageModule),
        },
        {
            path: 'day',
            loadChildren: () => __webpack_require__.e(/*! import() | addons-calendar-pages-day-day-module */ "addons-calendar-pages-day-day-module").then(__webpack_require__.bind(null, /*! @/addons/calendar/pages/day/day.module */ "./src/addons/calendar/pages/day/day.module.ts")).then(m => m.AddonCalendarDayPageModule),
        },
        AddonCalendarEventRoute,
        AddonCalendarEditRoute,
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__["buildTabMainRoutes"])(injector, {
            redirectTo: 'index',
            pathMatch: 'full',
        }),
    ];
}
let AddonCalendarLazyModule = class AddonCalendarLazyModule {
};
AddonCalendarLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], AddonCalendarLazyModule);



/***/ })

}]);
//# sourceMappingURL=calendar-lazy-module.js.map