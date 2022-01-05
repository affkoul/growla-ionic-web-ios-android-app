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

import { CoreAutoFocusDirective } from './auto-focus';
import { CoreAutoRowsDirective } from './auto-rows';
import { CoreExternalContentDirective } from './external-content';
import { CoreFabDirective } from './fab';
import { CoreFaIconDirective } from './fa-icon';
import { CoreFormatTextDirective } from './format-text';
import { CoreLinkDirective } from './link';
import { CoreLongPressDirective } from './long-press';
import { CoreSupressEventsDirective } from './supress-events';
import { CoreUserLinkDirective } from './user-link';
import { CoreAriaButtonClickDirective } from './aria-button';
import { CoreOnResizeDirective } from './on-resize';
import { CoreDownloadFileDirective } from './download-file';

@NgModule({
    declarations: [
        CoreAutoFocusDirective,
        CoreAutoRowsDirective,
        CoreExternalContentDirective,
        CoreFabDirective,
        CoreFaIconDirective,
        CoreFormatTextDirective,
        CoreLinkDirective,
        CoreLongPressDirective,
        CoreSupressEventsDirective,
        CoreUserLinkDirective,
        CoreAriaButtonClickDirective,
        CoreOnResizeDirective,
        CoreDownloadFileDirective,
    ],
    exports: [
        CoreAutoFocusDirective,
        CoreAutoRowsDirective,
        CoreExternalContentDirective,
        CoreFabDirective,
        CoreFaIconDirective,
        CoreFormatTextDirective,
        CoreLinkDirective,
        CoreLongPressDirective,
        CoreSupressEventsDirective,
        CoreUserLinkDirective,
        CoreAriaButtonClickDirective,
        CoreOnResizeDirective,
        CoreDownloadFileDirective,
    ],
})
export class CoreDirectivesModule {}
