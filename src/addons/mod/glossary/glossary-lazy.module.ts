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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreSharedModule } from '@/core/shared.module';
import { AddonModGlossaryComponentsModule } from './components/components.module';
import { AddonModGlossaryIndexPage } from './pages/index/index';
import { conditionalRoutes } from '@/app/app-routing.module';
import { CoreScreen } from '@services/screen';

const mobileRoutes: Routes = [
    {
        path: ':courseId/:cmId',
        component: AddonModGlossaryIndexPage,
    },
    {
        path: ':courseId/:cmId/entry/:entryId',
        loadChildren: () => import('./pages/entry/entry.module').then(m => m.AddonModGlossaryEntryPageModule),
    },
    {
        path: ':courseId/:cmId/edit/:timecreated',
        loadChildren: () => import('./pages/edit/edit.module').then(m => m.AddonModGlossaryEditPageModule),
    },
];

const tabletRoutes: Routes = [
    {
        path: ':courseId/:cmId',
        component: AddonModGlossaryIndexPage,
        children: [
            {
                path: 'entry/:entryId',
                loadChildren: () => import('./pages/entry/entry.module').then(m => m.AddonModGlossaryEntryPageModule),
            },
            {
                path: 'edit/:timecreated',
                loadChildren: () => import('./pages/edit/edit.module').then(m => m.AddonModGlossaryEditPageModule),
            },
        ],
    },
];

const routes: Routes = [
    ...conditionalRoutes(mobileRoutes, () => CoreScreen.isMobile),
    ...conditionalRoutes(tabletRoutes, () => CoreScreen.isTablet),
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CoreSharedModule,
        AddonModGlossaryComponentsModule,
    ],
    declarations: [
        AddonModGlossaryIndexPage,
    ],
})
export class AddonModGlossaryLazyModule {}
