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

import { Type } from '@angular/core';

import { CoreCourseFormatHandler } from '@features/course/services/format-delegate';
import { CoreSitePluginsCourseFormatHandlerData } from '@features/siteplugins/services/siteplugins';
import { CoreSitePluginsBaseHandler } from './base-handler';
import { CoreSitePluginsCourseFormatComponent } from '../../components/course-format/course-format';

/**
 * Handler to support a course format using a site plugin.
 */
export class CoreSitePluginsCourseFormatHandler extends CoreSitePluginsBaseHandler implements CoreCourseFormatHandler {

    constructor(name: string, public format: string, protected handlerSchema: CoreSitePluginsCourseFormatHandlerData) {
        super(name);
    }

    /**
     * @inheritdoc
     */
    canViewAllSections(): boolean {
        return this.handlerSchema.canviewallsections ?? true;
    }

    /**
     * @inheritdoc
     */
    displayEnableDownload(): boolean {
        return this.handlerSchema.displayenabledownload ?? true;
    }

    /**
     * @inheritdoc
     */
    displaySectionSelector(): boolean {
        return this.handlerSchema.displaysectionselector ?? true;
    }

    /**
     * @inheritdoc
     */
    async getCourseFormatComponent(): Promise<Type<unknown> | undefined> {
        if (this.handlerSchema.method) {
            return CoreSitePluginsCourseFormatComponent;
        }
    }

}
