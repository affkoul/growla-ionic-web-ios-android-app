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

import { conditionalRoutes } from '@/app/app-routing.module';
import { APP_INITIALIZER, NgModule, Type } from '@angular/core';
import { Routes } from '@angular/router';
import { CoreContentLinksDelegate } from '@features/contentlinks/services/contentlinks-delegate';
import { COURSE_CONTENTS_PATH } from '@features/course/course.module';
import { CoreCourseContentsRoutingModule } from '@features/course/pages/contents/contents-routing.module';
import { CoreCourseModuleDelegate } from '@features/course/services/module-delegate';
import { CoreCourseModulePrefetchDelegate } from '@features/course/services/module-prefetch-delegate';
import { CoreMainMenuTabRoutingModule } from '@features/mainmenu/mainmenu-tab-routing.module';
import { CoreTagAreaDelegate } from '@features/tag/services/tag-area-delegate';
import { CoreCronDelegate } from '@services/cron';
import { CoreScreen } from '@services/screen';
import { CORE_SITE_SCHEMAS } from '@services/sites';
import { AddonModGlossaryComponentsModule } from './components/components.module';
import { SITE_SCHEMA, OFFLINE_SITE_SCHEMA } from './services/database/glossary';
import { AddonModGlossaryProvider } from './services/glossary';
import { AddonModGlossaryHelperProvider } from './services/glossary-helper';
import { AddonModGlossaryOfflineProvider } from './services/glossary-offline';
import { AddonModGlossarySyncProvider } from './services/glossary-sync';
import { AddonModGlossaryEditLinkHandler } from './services/handlers/edit-link';
import { AddonModGlossaryEntryLinkHandler } from './services/handlers/entry-link';
import { AddonModGlossaryIndexLinkHandler } from './services/handlers/index-link';
import { AddonModGlossaryListLinkHandler } from './services/handlers/list-link';
import { AddonModGlossaryModuleHandler, AddonModGlossaryModuleHandlerService } from './services/handlers/module';
import { AddonModGlossaryPrefetchHandler } from './services/handlers/prefetch';
import { AddonModGlossarySyncCronHandler } from './services/handlers/sync-cron';
import { AddonModGlossaryTagAreaHandler } from './services/handlers/tag-area';

export const ADDON_MOD_GLOSSARY_SERVICES: Type<unknown>[] = [
    AddonModGlossaryProvider,
    AddonModGlossaryOfflineProvider,
    AddonModGlossarySyncProvider,
    AddonModGlossaryHelperProvider,
];

const mainMenuRoutes: Routes = [
    {
        path: `${AddonModGlossaryModuleHandlerService.PAGE_NAME}/entry/:entryId`,
        loadChildren: () => import('./pages/entry/entry.module').then(m => m.AddonModGlossaryEntryPageModule),
    },
    {
        path: `${AddonModGlossaryModuleHandlerService.PAGE_NAME}/edit/:timecreated`,
        loadChildren: () => import('./pages/edit/edit.module').then(m => m.AddonModGlossaryEditPageModule),
    },
    {
        path: AddonModGlossaryModuleHandlerService.PAGE_NAME,
        loadChildren: () => import('./glossary-lazy.module').then(m => m.AddonModGlossaryLazyModule),
    },
    ...conditionalRoutes(
        [
            {
                path: `${COURSE_CONTENTS_PATH}/${AddonModGlossaryModuleHandlerService.PAGE_NAME}/entry/:entryId`,
                loadChildren: () => import('./pages/entry/entry.module').then(m => m.AddonModGlossaryEntryPageModule),
            },
            {
                path: `${COURSE_CONTENTS_PATH}/${AddonModGlossaryModuleHandlerService.PAGE_NAME}/edit/:timecreated`,
                loadChildren: () => import('./pages/edit/edit.module').then(m => m.AddonModGlossaryEditPageModule),
            },
        ],
        () => CoreScreen.isMobile,
    ),
];

const courseContentsRoutes: Routes = conditionalRoutes(
    [
        {
            path: `${AddonModGlossaryModuleHandlerService.PAGE_NAME}/entry/:entryId`,
            loadChildren: () => import('./pages/entry/entry.module').then(m => m.AddonModGlossaryEntryPageModule),
        },
        {
            path: `${AddonModGlossaryModuleHandlerService.PAGE_NAME}/edit/:timecreated`,
            loadChildren: () => import('./pages/edit/edit.module').then(m => m.AddonModGlossaryEditPageModule),
        },
    ],
    () => CoreScreen.isTablet,
);

@NgModule({
    imports: [
        CoreMainMenuTabRoutingModule.forChild(mainMenuRoutes),
        CoreCourseContentsRoutingModule.forChild({ children: courseContentsRoutes }),
        AddonModGlossaryComponentsModule,
    ],
    providers: [
        {
            provide: CORE_SITE_SCHEMAS,
            useValue: [SITE_SCHEMA, OFFLINE_SITE_SCHEMA],
            multi: true,
        },
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [],
            useFactory: () => () => {
                CoreCourseModuleDelegate.registerHandler(AddonModGlossaryModuleHandler.instance);
                CoreCourseModulePrefetchDelegate.registerHandler(AddonModGlossaryPrefetchHandler.instance);
                CoreCronDelegate.register(AddonModGlossarySyncCronHandler.instance);
                CoreContentLinksDelegate.registerHandler(AddonModGlossaryIndexLinkHandler.instance);
                CoreContentLinksDelegate.registerHandler(AddonModGlossaryListLinkHandler.instance);
                CoreContentLinksDelegate.registerHandler(AddonModGlossaryEditLinkHandler.instance);
                CoreContentLinksDelegate.registerHandler(AddonModGlossaryEntryLinkHandler.instance);
                CoreTagAreaDelegate.registerHandler(AddonModGlossaryTagAreaHandler.instance);
            },
        },
    ],
})
export class AddonModGlossaryModule {}
