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

import { APP_INITIALIZER, NgModule } from '@angular/core';

import { CoreSharedModule } from '@/core/shared.module';
import { CoreQuestionDelegate } from '@features/question/services/question-delegate';
import { AddonQtypeMatchComponent } from './component/match';
import { AddonQtypeMatchHandler } from './services/handlers/match';

@NgModule({
    declarations: [
        AddonQtypeMatchComponent,
    ],
    imports: [
        CoreSharedModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [],
            useFactory: () => () => {
                CoreQuestionDelegate.registerHandler(AddonQtypeMatchHandler.instance);
            },
        },
    ],
    exports: [
        AddonQtypeMatchComponent,
    ],
})
export class AddonQtypeMatchModule {}
