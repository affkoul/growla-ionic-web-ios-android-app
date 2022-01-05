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

import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, UrlTree } from '@angular/router';
import { CoreApp } from '@services/app';
import { CoreRedirectPayload } from '@services/navigator';
import { CoreSites } from '@services/sites';
import { Router } from '@singletons';
import { CoreConstants } from '../constants';

@Injectable({ providedIn: 'root' })
export class CoreRedirectGuard implements CanLoad, CanActivate {

    /**
     * @inheritdoc
     */
    canLoad(): Promise<true | UrlTree> {
        return this.guard();
    }

    /**
     * @inheritdoc
     */
    canActivate(): Promise<true | UrlTree> {
        return this.guard();
    }

    /**
     * Check if there is a pending redirect and trigger it.
     */
    private async guard(): Promise<true | UrlTree> {
        const redirect = CoreApp.consumeMemoryRedirect();

        if (!redirect) {
            return true;
        }

        // Only accept the redirect if it was stored less than 20 seconds ago.
        if (!redirect.timemodified || Date.now() - redirect.timemodified > 20000) {
            return true;
        }

        // Redirect to site path.
        if (redirect.siteId && redirect.siteId !== CoreConstants.NO_SITE_ID) {
            const loggedIn = await CoreSites.loadSite(
                redirect.siteId,
                redirect.page,
                redirect.options,
            );
            const route = Router.parseUrl('/main/home');

            route.queryParams = {
                redirectPath: redirect.page,
                redirectOptions: redirect.options,
            } as CoreRedirectPayload;

            return loggedIn ? route : true;
        }

        // Abort redirect.
        if (!redirect.page) {
            return true;
        }

        // Redirect to non-site path.
        const route = Router.parseUrl(redirect.page);

        route.queryParams = {
            redirectPath: redirect.page,
            redirectOptions: redirect.options,
        } as CoreRedirectPayload;

        return route;
    }

}
