(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competency-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencies/competencies.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencies/competencies.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ title }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!competencies.loaded\" (ionRefresh)=\"refreshCompetencies($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"competencies.loaded\">\n            <ion-list>\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let competency of competencies.items\"\n                    [attr.aria-label]=\"competency.competency.shortname\" (click)=\"competencies.select(competency)\"\n                    [attr.aria-current]=\"competencies.getItemAriaCurrent(competency)\" button detail=\"true\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ competency.competency.shortname }} <em>{{competency.competency.idnumber}}</em></p>\n                    </ion-label>\n                    <ion-badge slot=\"end\" *ngIf=\"competency.usercompetency\"\n                        [color]=\"competency.usercompetency.proficiency ? 'success' : 'danger'\">\n                        {{ competency.usercompetency.gradename }}\n                    </ion-badge>\n                    <ion-badge slot=\"end\" *ngIf=\"competency.usercompetencycourse\"\n                        [color]=\"competency.usercompetencycourse.proficiency ? 'success' : 'danger'\">\n                        {{ competency.usercompetencycourse.gradename }}\n                    </ion-badge>\n                </ion-item>\n            </ion-list>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competency/competency.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competency/competency.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"competency\">\n            {{ competency.competency.competency.shortname }} <small>{{ competency.competency.competency.idnumber }}</small>\n        </h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!competencyLoaded\" (ionRefresh)=\"refreshCompetency($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"competencyLoaded\">\n        <ion-card *ngIf=\"user\">\n            <ion-item class=\"ion-text-wrap\">\n                <core-user-avatar [user]=\"user\" slot=\"start\"></core-user-avatar>\n                <ion-label><h2>{{ user.fullname }}</h2></ion-label>\n            </ion-item>\n        </ion-card>\n\n        <ion-card *ngIf=\"competency\">\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"competency.competency.competency.description\">\n                <ion-label>\n                    <core-format-text [text]=\"competency.competency.competency.description\" [contextLevel]=\"contextLevel\"\n                        [contextInstanceId]=\"contextInstanceId\">\n                    </core-format-text>\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap only-links\">\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'addon.competency.path' | translate }}</p>\n                    <p>\n                        <a *ngIf=\"competency.competency.comppath.showlinks\"\n                            [href]=\"competency.competency.comppath.pluginbaseurl + '/competencies.php?competencyframeworkid=' +\n                            competency.competency.comppath.framework.id + '&pagecontextid=' +\n                            competency.competency.comppath.pagecontextid\"\n                            core-link>\n                            {{ competency.competency.comppath.framework.name }}\n                        </a>\n                        <ng-container *ngIf=\"!competency.competency.comppath.showlinks\">\n                            {{ competency.competency.comppath.framework.name }}\n                        </ng-container>\n                        &nbsp;/&nbsp;\n                        <ng-container *ngFor=\"let ancestor of competency.competency.comppath.ancestors\">\n                            <button *ngIf=\"competency.competency.comppath.showlinks\" (click)=\"openCompetencySummary(ancestor.id)\"\n                                class=\"as-link\">\n                                {{ ancestor.name }}\n                            </button>\n                            <ng-container *ngIf=\"!competency.competency.comppath.showlinks\">{{ ancestor.name }}</ng-container>\n                            <ng-container *ngIf=\"!ancestor.last\">&nbsp;/&nbsp;</ng-container>\n                        </ng-container>\n                    </p>\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'addon.competency.crossreferencedcompetencies' | translate }}</p>\n                    <p *ngIf=\"!competency.competency.hasrelatedcompetencies\">\n                        {{ 'addon.competency.nocrossreferencedcompetencies' | translate }}\n                    </p>\n                    <ng-container *ngIf=\"competency.competency.hasrelatedcompetencies\">\n                        <p *ngFor=\"let relatedcomp of competency.competency.relatedcompetencies\">\n                            <button (click)=\"openCompetencySummary(relatedcomp.id)\" class=\"as-link\">\n                                {{ relatedcomp.shortname }} - {{ relatedcomp.idnumber }}\n                            </button>\n                        </p>\n                    </ng-container>\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"coursemodules\">\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'addon.competency.activities' | translate }}</p>\n                    <p *ngIf=\"coursemodules.length == 0\">\n                        {{ 'addon.competency.noactivities' | translate }}\n                    </p>\n                    <ion-item class=\"ion-text-wrap\" *ngFor=\"let activity of coursemodules\" [href]=\"activity.url\"\n                        [attr.aria-label]=\"activity.name\" core-link capture=\"true\">\n                        <img slot=\"start\" core-external-content [src]=\"activity.iconurl\" alt=\"\" *ngIf=\"activity.iconurl\"\n                            class=\"core-module-icon\">\n                        <ion-label>\n                            <core-format-text [text]=\"activity.name\" contextLevel=\"module\" [contextInstanceId]=\"activity.id\"\n                                [courseId]=\"courseId\">\n                            </core-format-text>\n                        </ion-label>\n                    </ion-item>\n                </ion-label>\n            </ion-item>\n            <ng-container *ngIf=\"userCompetency\">\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"competency.usercompetency && competency.usercompetency!.status\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ 'addon.competency.reviewstatus' | translate }}</p>\n                        <p>{{ competency.usercompetency!.statusname }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ 'addon.competency.proficient' | translate }}</p>\n                    </ion-label>\n                    <ion-badge slot=\"end\" color=\"success\" *ngIf=\"userCompetency.proficiency\">\n                        {{ 'core.yes' | translate }}\n                    </ion-badge>\n                    <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"!userCompetency.proficiency\">\n                        {{ 'core.no' | translate }}\n                    </ion-badge>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ 'addon.competency.rating' | translate }}</p>\n                    </ion-label>\n                    <ion-badge color=\"dark\" slot=\"end\">{{ userCompetency.gradename }}</ion-badge>\n                </ion-item>\n            </ng-container>\n        </ion-card>\n\n        <div *ngIf=\"competency\">\n            <h3 class=\"ion-margin-horizontal\">{{ 'addon.competency.evidence' | translate }}</h3>\n            <p class=\"ion-margin-horizontal\" *ngIf=\"competency.evidence.length == 0\">\n                {{ 'addon.competency.noevidence' | translate }}\n            </p>\n            <ion-card *ngFor=\"let evidence of competency.evidence\">\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"evidence.actionuser\" core-user-link [userId]=\"evidence.actionuser.id\"\n                    [courseId]=\"courseId\">\n                    <core-user-avatar [user]=\"evidence.actionuser\" slot=\"start\"></core-user-avatar>\n                    <ion-label>\n                        <p class=\"item-heading\">{{ evidence.actionuser.fullname }}</p>\n                        <p>{{ evidence.timemodified * 1000 | coreFormatDate }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p><ion-badge color=\"dark\">{{ evidence.gradename }}</ion-badge></p>\n                        <p class=\"ion-margin-top\" *ngIf=\"evidence.description\">{{ evidence.description }}</p>\n                        <blockquote *ngIf=\"evidence.note\">{{ evidence.note }}</blockquote>\n                    </ion-label>\n                </ion-item>\n            </ion-card>\n        </div>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencysummary/competencysummary.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencysummary/competencysummary.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"competency\">\n            {{ competency.competency.shortname }} <small>{{ competency.competency.idnumber }}</small>\n        </h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!competencyLoaded\" (ionRefresh)=\"refreshCompetency($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"competencyLoaded\">\n        <ion-card *ngIf=\"competency\">\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"competency.competency.description\">\n                <ion-label>\n                    <core-format-text [text]=\"competency.competency.description\" [contextLevel]=\"contextLevel\"\n                        [contextInstanceId]=\"contextInstanceId\">\n                    </core-format-text>\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'addon.competency.path' | translate }}</p>\n                    <p>{{ competency.comppath.framework.name }}\n                        <ng-container *ngFor=\"let ancestor of competency.comppath.ancestors\">\n                            &nbsp;/&nbsp;\n                            <button class=\"as-link\" (click)=\"openCompetencySummary(ancestor.id)\">\n                                {{ ancestor.name }}\n                            </button>\n                        </ng-container>\n                    </p>\n                </ion-label>\n            </ion-item>\n        </ion-card>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/plan/plan.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/plan/plan.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"plan\">{{plan.plan.name}}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshLearningPlan($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-card *ngIf=\"user\">\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <core-user-avatar [user]=\"user\" slot=\"start\"></core-user-avatar>\n                    <h2>{{ user.fullname }}</h2>\n                </ion-label>\n            </ion-item>\n       </ion-card>\n        <ion-card *ngIf=\"plan\">\n            <ion-list>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"plan.plan.description\" lines=\"none\">\n                    <ion-label>\n                        <p>\n                            <core-format-text [text]=\"plan.plan.description\" contextLevel=\"user\"\n                                [contextInstanceId]=\"plan.plan.userid\">\n                            </core-format-text>\n                        </p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" lines=\"none\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ 'addon.competency.status' | translate }}</p>\n                        <p>{{ plan.plan.statusname }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"plan.plan.duedate > 0\" lines=\"none\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ 'addon.competency.duedate' | translate }}</p>\n                        <p>{{ plan.plan.duedate * 1000 | coreFormatDate }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"plan.plan.template\" lines=\"none\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ 'addon.competency.template' | translate }}</p>\n                        <p>{{ plan.plan.template.shortname }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" lines=\"none\">\n                    <ion-label id=\"addon-competency-plan-{{plan.plan.id}}-progress\">\n                        <p class=\"item-heading\">{{ 'addon.competency.progress' | translate }}</p>\n                        <p>\n                            {{ 'addon.competency.xcompetenciesproficientoutofy' | translate:\n                                {$a: {x: plan.proficientcompetencycount, y: plan.competencycount} } }}\n                        </p>\n                        <core-progress-bar [progress]=\"plan.proficientcompetencypercentage\"\n                            [text]=\"plan.proficientcompetencypercentageformatted\"\n                            ariaDescribedBy=\"addon-competency-plan-{{plan.plan.id}}-progress\">\n                        </core-progress-bar>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n        <ion-card *ngIf=\"plan\">\n            <ion-card-header class=\"ion-text-wrap\">\n                <ion-card-title>{{ 'addon.competency.learningplancompetencies' | translate }}</ion-card-title>\n            </ion-card-header>\n            <ion-list>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"plan.competencycount == 0\">\n                    <ion-label>\n                        <p>{{ 'addon.competency.nocompetencies' | translate }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let competency of plan.competencies\"\n                    (click)=\"openCompetency(competency.competency.id)\"\n                    [attr.aria-label]=\"competency.competency.shortname\" detail=\"true\" button>\n                    <ion-label>\n                        <p class=\"item-heading\">{{competency.competency.shortname}} <em>{{competency.competency.idnumber}}</em></p>\n                    </ion-label>\n                    <ion-badge *ngIf=\"competency.usercompetencyplan\" slot=\"end\"\n                        [color]=\"competency.usercompetencyplan.proficiency ? 'success' : 'danger'\">\n                            {{ competency.usercompetencyplan.gradename }}\n                        </ion-badge>\n                    <ion-badge *ngIf=\"!competency.usercompetencyplan\" slot=\"end\"\n                        [color]=\"competency.usercompetency.proficiency ? 'success' : 'danger'\">\n                        {{ competency.usercompetency.gradename }}\n                    </ion-badge>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/planlist/planlist.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/planlist/planlist.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.competency.userplans' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!plans.loaded\" (ionRefresh)=\"refreshLearningPlans($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"plans.loaded\">\n            <core-empty-box *ngIf=\"plans.empty\" icon=\"fas-route\" [message]=\"'addon.competency.noplanswerecreated' | translate\">\n\n            </core-empty-box>\n            <ion-list *ngIf=\"!plans.empty\" class=\"ion-no-margin\">\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let plan of plans.items\" [attr.aria-label]=\"plan.name\"\n                    (click)=\"plans.select(plan)\" [attr.aria-current]=\"plans.getItemAriaCurrent(plan)\" button detail=\"true\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ plan.name }}</p>\n                        <p *ngIf=\"plan.duedate > 0\">\n                            {{ 'addon.competency.duedate' | translate }}:&nbsp;\n                            {{ plan.duedate * 1000 | coreFormatDate :'strftimedatetimeshort' }}\n                        </p>\n                    </ion-label>\n                    <ion-badge slot=\"end\" class=\"ion-text-wrap\" [color]=\"plan.statuscolor\">{{ plan.statusname }}</ion-badge>\n                </ion-item>\n            </ion-list>\n        </core-loading>\n    </core-split-view>\n    </ion-content>\n");

/***/ }),

/***/ "./src/addons/competency/competency-lazy.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/competency/competency-lazy.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonCompetencyLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyLazyModule", function() { return AddonCompetencyLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_plan_plan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/plan/plan */ "./src/addons/competency/pages/plan/plan.ts");
/* harmony import */ var _pages_planlist_planlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/planlist/planlist */ "./src/addons/competency/pages/planlist/planlist.ts");
/* harmony import */ var _pages_competencies_competencies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/competencies/competencies */ "./src/addons/competency/pages/competencies/competencies.ts");
/* harmony import */ var _pages_competency_competency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/competency/competency */ "./src/addons/competency/pages/competency/competency.ts");
/* harmony import */ var _pages_competencysummary_competencysummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/competencysummary/competencysummary */ "./src/addons/competency/pages/competencysummary/competencysummary.ts");
/* harmony import */ var _pages_coursecompetencies_coursecompetencies_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/coursecompetencies/coursecompetencies.page */ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts");
/* harmony import */ var _pages_coursecompetencies_coursecompetencies_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/coursecompetencies/coursecompetencies.module */ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.module.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/addons/competency/services/handlers/mainmenu.ts");
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
        pathMatch: 'full',
        data: {
            mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_13__["AddonCompetencyMainMenuHandlerService"].PAGE_NAME,
        },
        component: _pages_planlist_planlist__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyPlanListPage"],
    },
    {
        path: 'competencies',
        component: _pages_competencies_competencies__WEBPACK_IMPORTED_MODULE_8__["AddonCompetencyCompetenciesPage"],
    },
    {
        path: 'competencies/:competencyId',
        component: _pages_competency_competency__WEBPACK_IMPORTED_MODULE_9__["AddonCompetencyCompetencyPage"],
    },
    {
        path: 'course/:courseId',
        component: _pages_coursecompetencies_coursecompetencies_page__WEBPACK_IMPORTED_MODULE_11__["AddonCompetencyCourseCompetenciesPage"],
    },
    {
        path: 'summary/:competencyId',
        component: _pages_competencysummary_competencysummary__WEBPACK_IMPORTED_MODULE_10__["AddonCompetencyCompetencySummaryPage"],
    },
    {
        path: ':planId',
        component: _pages_plan_plan__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyPlanPage"],
    },
];
const tabletRoutes = [
    {
        path: 'summary/:competencyId',
        component: _pages_competencysummary_competencysummary__WEBPACK_IMPORTED_MODULE_10__["AddonCompetencyCompetencySummaryPage"],
    },
    {
        path: 'competencies',
        component: _pages_competencies_competencies__WEBPACK_IMPORTED_MODULE_8__["AddonCompetencyCompetenciesPage"],
        children: [
            {
                path: ':competencyId',
                component: _pages_competency_competency__WEBPACK_IMPORTED_MODULE_9__["AddonCompetencyCompetencyPage"],
            },
        ],
    },
    {
        path: 'course/:courseId',
        component: _pages_coursecompetencies_coursecompetencies_page__WEBPACK_IMPORTED_MODULE_11__["AddonCompetencyCourseCompetenciesPage"],
    },
    {
        path: '',
        data: {
            mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_13__["AddonCompetencyMainMenuHandlerService"].PAGE_NAME,
        },
        component: _pages_planlist_planlist__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyPlanListPage"],
        children: [
            {
                path: ':planId',
                component: _pages_plan_plan__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyPlanPage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isTablet),
];
let AddonCompetencyLazyModule = class AddonCompetencyLazyModule {
};
AddonCompetencyLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _pages_coursecompetencies_coursecompetencies_module__WEBPACK_IMPORTED_MODULE_12__["AddonCompetencyCourseCompetenciesPageModule"],
        ],
        declarations: [
            _pages_plan_plan__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyPlanPage"],
            _pages_planlist_planlist__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyPlanListPage"],
            _pages_competencies_competencies__WEBPACK_IMPORTED_MODULE_8__["AddonCompetencyCompetenciesPage"],
            _pages_competency_competency__WEBPACK_IMPORTED_MODULE_9__["AddonCompetencyCompetencyPage"],
            _pages_competencysummary_competencysummary__WEBPACK_IMPORTED_MODULE_10__["AddonCompetencyCompetencySummaryPage"],
        ],
    })
], AddonCompetencyLazyModule);



/***/ }),

/***/ "./src/addons/competency/pages/competencies/competencies.ts":
/*!******************************************************************!*\
  !*** ./src/addons/competency/pages/competencies/competencies.ts ***!
  \******************************************************************/
/*! exports provided: AddonCompetencyCompetenciesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetenciesPage", function() { return AddonCompetencyCompetenciesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_competency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
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
var AddonCompetencyCompetenciesPage_1;










/**
 * Page that displays the list of competencies of a learning plan.
 */
let AddonCompetencyCompetenciesPage = AddonCompetencyCompetenciesPage_1 = class AddonCompetencyCompetenciesPage {
    constructor(route) {
        this.route = route;
        this.competenciesLoaded = false;
        this.title = '';
        this.planId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('planId', { route });
        if (!this.planId) {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('courseId', { route });
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('userId', { route });
        }
        this.competencies =
            new AddonCompetencyListManager(AddonCompetencyCompetenciesPage_1, this.planId, this.courseId, this.userId);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchCompetencies();
            this.competencies.start(this.splitView);
        });
    }
    /**
     * Fetches the competencies and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchCompetencies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.planId) {
                    const response = yield _services_competency__WEBPACK_IMPORTED_MODULE_4__["AddonCompetency"].getLearningPlan(this.planId);
                    if (response.competencycount <= 0) {
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_9__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.competency.errornocompetenciesfound'));
                    }
                    this.title = response.plan.name;
                    this.userId = response.plan.userid;
                    this.competencies.setItems(response.competencies);
                }
                else if (this.courseId) {
                    const response = yield _services_competency__WEBPACK_IMPORTED_MODULE_4__["AddonCompetency"].getCourseCompetencies(this.courseId, this.userId);
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.competency.coursecompetencies');
                    this.competencies.setItems(response.competencies);
                }
                else {
                    throw null;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting competencies data.');
            }
        });
    }
    /**
     * Refreshes the competencies.
     *
     * @param refresher Refresher.
     */
    refreshCompetencies(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.planId) {
                    yield _services_competency__WEBPACK_IMPORTED_MODULE_4__["AddonCompetency"].invalidateLearningPlan(this.planId);
                }
                else {
                    yield _services_competency__WEBPACK_IMPORTED_MODULE_4__["AddonCompetency"].invalidateCourseCompetencies(this.courseId, this.userId);
                }
            }
            finally {
                this.fetchCompetencies().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            }
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.competencies.destroy();
    }
};
AddonCompetencyCompetenciesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AddonCompetencyCompetenciesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"],] }]
};
AddonCompetencyCompetenciesPage = AddonCompetencyCompetenciesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-competencies',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./competencies.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencies/competencies.html")).default,
    })
], AddonCompetencyCompetenciesPage);

/**
 * Helper class to manage competencies list.
 */
class AddonCompetencyListManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_6__["CorePageItemsListManager"] {
    constructor(pageComponent, planId, courseId, userId) {
        super(pageComponent);
        this.planId = planId;
        this.courseId = courseId;
        this.userId = userId;
    }
    /**
     * @inheritdoc
     */
    getItemPath(competency) {
        return String(competency.competency.id);
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        if (this.planId) {
            return { planId: this.planId };
        }
        else {
            return { courseId: this.courseId, userId: this.userId };
        }
    }
}


/***/ }),

/***/ "./src/addons/competency/pages/competency/competency.ts":
/*!**************************************************************!*\
  !*** ./src/addons/competency/pages/competency/competency.ts ***!
  \**************************************************************/
/*! exports provided: AddonCompetencyCompetencyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetencyPage", function() { return AddonCompetencyCompetencyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _addons_competency_services_competency_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addons/competency/services/competency-helper */ "./src/addons/competency/services/competency-helper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/competency/services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/competency/services/handlers/mainmenu */ "./src/addons/competency/services/handlers/mainmenu.ts");
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
 * Page that displays the competency information.
 */
let AddonCompetencyCompetencyPage = class AddonCompetencyCompetencyPage {
    constructor() {
        this.competencyLoaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.competencyId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('competencyId');
            this.planId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('planId');
            if (!this.planId) {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('courseId');
                this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('userId');
            }
            try {
                yield this.fetchCompetency();
                const name = this.competency && this.competency.competency && this.competency.competency.competency &&
                    this.competency.competency.competency.shortname;
                if (this.planId) {
                    _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].logCompetencyInPlanView(this.planId, this.competencyId, this.planStatus, name, this.userId));
                }
                else {
                    _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].logCompetencyInCourseView(this.courseId, this.competencyId, name, this.userId));
                }
            }
            finally {
                this.competencyLoaded = true;
            }
        });
    }
    /**
     * Fetches the competency and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchCompetency() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let competency;
                if (this.planId) {
                    this.planStatus = undefined;
                    competency = yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].getCompetencyInPlan(this.planId, this.competencyId);
                }
                else if (this.courseId) {
                    competency = yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].getCompetencyInCourse(this.courseId, this.competencyId, this.userId);
                }
                else {
                    throw null;
                }
                // Calculate the context.
                if (this.courseId) {
                    this.contextLevel = "course" /* COURSE */;
                    this.contextInstanceId = this.courseId;
                }
                else {
                    this.contextLevel = "user" /* USER */;
                    this.contextInstanceId = this.userId || competency.usercompetencysummary.user.id;
                }
                this.competency = competency.usercompetencysummary;
                this.userCompetency = this.competency.usercompetencyplan || this.competency.usercompetency;
                if ('plan' in competency) {
                    this.planStatus = competency.plan.status;
                    this.competency.usercompetency.statusname =
                        _addons_competency_services_competency_helper__WEBPACK_IMPORTED_MODULE_1__["AddonCompetencyHelper"].getCompetencyStatusName(this.competency.usercompetency.status);
                }
                else {
                    this.userCompetency = this.competency.usercompetencycourse;
                    this.coursemodules = competency.coursemodules;
                }
                if (this.competency.user.id != _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteUserId()) {
                    // Get the user profile from the returned object.
                    this.user = this.competency.user;
                }
                this.competency.evidence.forEach((evidence) => {
                    if (evidence.descidentifier) {
                        const key = 'addon.competency.' + evidence.descidentifier;
                        evidence.description = _singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant(key, { $a: evidence.desca });
                    }
                });
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting competency data.');
            }
        });
    }
    /**
     * Refreshes the competency.
     *
     * @param refresher Refresher.
     */
    refreshCompetency(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.planId) {
                    yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].invalidateCompetencyInPlan(this.planId, this.competencyId);
                }
                else {
                    yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].invalidateCompetencyInCourse(this.courseId, this.competencyId);
                }
            }
            finally {
                this.fetchCompetency().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            }
        });
    }
    /**
     * Opens the summary of a competency.
     *
     * @param competencyId
     */
    openCompetencySummary(competencyId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSitePath('/' + _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__["AddonCompetencyMainMenuHandlerService"].PAGE_NAME + '/summary/' + competencyId, {
            params: { contextLevel: this.contextLevel, contextInstanceId: this.contextInstanceId },
        });
    }
};
AddonCompetencyCompetencyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-competency-competency',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./competency.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competency/competency.html")).default,
    })
], AddonCompetencyCompetencyPage);



/***/ }),

/***/ "./src/addons/competency/pages/competencysummary/competencysummary.ts":
/*!****************************************************************************!*\
  !*** ./src/addons/competency/pages/competencysummary/competencysummary.ts ***!
  \****************************************************************************/
/*! exports provided: AddonCompetencyCompetencySummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetencySummaryPage", function() { return AddonCompetencyCompetencySummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addons/competency/services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/competency/services/handlers/mainmenu */ "./src/addons/competency/services/handlers/mainmenu.ts");
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
 * Page that displays the competency summary.
 */
let AddonCompetencyCompetencySummaryPage = class AddonCompetencyCompetencySummaryPage {
    constructor() {
        this.competencyLoaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.competencyId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('competencyId');
            this.contextLevel = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('contextLevel');
            this.contextInstanceId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('contextInstanceId');
            try {
                yield this.fetchCompetency();
                const name = this.competency.competency && this.competency.competency.shortname;
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__["AddonCompetency"].logCompetencyView(this.competencyId, name));
            }
            finally {
                this.competencyLoaded = true;
            }
        });
    }
    /**
     * Fetches the competency summary and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchCompetency() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__["AddonCompetency"].getCompetencySummary(this.competencyId);
                if (!this.contextLevel || typeof this.contextInstanceId == 'undefined') {
                    // Context not specified, use user context.
                    this.contextLevel = "user" /* USER */;
                    this.contextInstanceId = result.usercompetency.userid;
                }
                this.competency = result.competency;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting competency summary data.');
            }
        });
    }
    /**
     * Refreshes the competency summary.
     *
     * @param refresher Refresher.
     */
    refreshCompetency(refresher) {
        _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__["AddonCompetency"].invalidateCompetencySummary(this.competencyId).finally(() => {
            this.fetchCompetency().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Opens the summary of a competency.
     *
     * @param competencyId
     */
    openCompetencySummary(competencyId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].navigateToSitePath('/' + _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyMainMenuHandlerService"].PAGE_NAME + '/summary/' + competencyId, {
            params: { contextLevel: this.contextLevel, contextInstanceId: this.contextInstanceId },
        });
    }
};
AddonCompetencyCompetencySummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-competency-summary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./competencysummary.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencysummary/competencysummary.html")).default,
    })
], AddonCompetencyCompetencySummaryPage);



/***/ }),

/***/ "./src/addons/competency/pages/plan/plan.ts":
/*!**************************************************!*\
  !*** ./src/addons/competency/pages/plan/plan.ts ***!
  \**************************************************/
/*! exports provided: AddonCompetencyPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyPlanPage", function() { return AddonCompetencyPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_competency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _services_competency_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/competency-helper */ "./src/addons/competency/services/competency-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/competency/services/handlers/mainmenu */ "./src/addons/competency/services/handlers/mainmenu.ts");
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
 * Page that displays a learning plan.
 */
let AddonCompetencyPlanPage = class AddonCompetencyPlanPage {
    constructor() {
        this.loaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.planId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('planId');
        this.fetchLearningPlan().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Fetches the learning plan and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchLearningPlan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const plan = yield _services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetency"].getLearningPlan(this.planId);
                plan.plan.statusname = _services_competency_helper__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyHelper"].getPlanStatusName(plan.plan.status);
                // Get the user profile image.
                this.user = yield _services_competency_helper__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyHelper"].getProfile(plan.plan.userid);
                this.plan = plan;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting learning plan data.');
            }
        });
    }
    /**
     * Navigates to a particular competency.
     *
     * @param competencyId
     */
    openCompetency(competencyId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSitePath('/' + _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyMainMenuHandlerService"].PAGE_NAME + '/competencies/' + competencyId, { params: { planId: this.planId } });
    }
    /**
     * Refreshes the learning plan.
     *
     * @param refresher Refresher.
     */
    refreshLearningPlan(refresher) {
        _services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetency"].invalidateLearningPlan(this.planId).finally(() => {
            this.fetchLearningPlan().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
};
AddonCompetencyPlanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-plan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./plan.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/plan/plan.html")).default,
    })
], AddonCompetencyPlanPage);



/***/ }),

/***/ "./src/addons/competency/pages/planlist/planlist.ts":
/*!**********************************************************!*\
  !*** ./src/addons/competency/pages/planlist/planlist.ts ***!
  \**********************************************************/
/*! exports provided: AddonCompetencyPlanListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyPlanListPage", function() { return AddonCompetencyPlanListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_competency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _services_competency_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/competency-helper */ "./src/addons/competency/services/competency-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
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
var AddonCompetencyPlanListPage_1;








/**
 * Page that displays the list of learning plans.
 */
let AddonCompetencyPlanListPage = AddonCompetencyPlanListPage_1 = class AddonCompetencyPlanListPage {
    constructor() {
        this.plans = new AddonCompetencyPlanListManager(AddonCompetencyPlanListPage_1);
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('userId');
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchLearningPlans();
            this.plans.start(this.splitView);
        });
    }
    /**
     * Fetches the learning plans and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchLearningPlans() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const plans = yield _services_competency__WEBPACK_IMPORTED_MODULE_4__["AddonCompetency"].getLearningPlans(this.userId);
                plans.forEach((plan) => {
                    plan.statusname = _services_competency_helper__WEBPACK_IMPORTED_MODULE_5__["AddonCompetencyHelper"].getPlanStatusName(plan.status);
                    switch (plan.status) {
                        case _services_competency__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyProvider"].STATUS_ACTIVE:
                            plan.statuscolor = 'success';
                            break;
                        case _services_competency__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyProvider"].STATUS_COMPLETE:
                            plan.statuscolor = 'danger';
                            break;
                        default:
                            plan.statuscolor = 'warning';
                            break;
                    }
                });
                this.plans.setItems(plans);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting learning plans data.');
            }
        });
    }
    /**
     * Refreshes the learning plans.
     *
     * @param refresher Refresher.
     */
    refreshLearningPlans(refresher) {
        _services_competency__WEBPACK_IMPORTED_MODULE_4__["AddonCompetency"].invalidateLearningPlans(this.userId).finally(() => {
            this.fetchLearningPlans().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.plans.destroy();
    }
};
AddonCompetencyPlanListPage.ctorParameters = () => [];
AddonCompetencyPlanListPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"],] }]
};
AddonCompetencyPlanListPage = AddonCompetencyPlanListPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-planlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./planlist.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/planlist/planlist.html")).default,
    })
], AddonCompetencyPlanListPage);

/**
 * Helper class to manage plan list.
 */
class AddonCompetencyPlanListManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_7__["CorePageItemsListManager"] {
    constructor(pageComponent) {
        super(pageComponent);
    }
    /**
     * @inheritdoc
     */
    getItemPath(plan) {
        return String(plan.id);
    }
}


/***/ })

}]);
//# sourceMappingURL=competency-lazy-module.js.map