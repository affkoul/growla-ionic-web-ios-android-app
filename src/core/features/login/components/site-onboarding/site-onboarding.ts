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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreConfig } from '@services/config';
import { CoreUtils } from '@services/utils/utils';
import { CoreLoginHelperProvider } from '@features/login/services/login-helper';
import { DomSanitizer, ModalController } from '@singletons';
import { Storage } from '@capacitor/storage';
import { Http } from '@singletons';
import { async } from '@angular/core/testing';
import { promises } from 'fs';
/**
 * Component that displays onboarding help regarding the CoreLoginSitePage.
 */
@Component({
    selector: 'core-login-site-onboarding',
    templateUrl: 'site-onboarding.html',
    styleUrls: ['site-onboarding.scss', '../../login.scss'],
})
export class CoreLoginSiteOnboardingComponent {
    iframeSrc: any = ""
    step = 0;
    isShow: boolean = true
    constructor(
        protected router: Router,
    ) { }
    /**
     * Go to next step.
     *
     * @param e Click event.
     */
    next(e: Event): void {
        e.stopPropagation();

        this.step++;
    }

    /**
     * Go to previous step.
     *
     * @param e Click event.
     */
    previous(e: Event): void {
        e.stopPropagation();

        if (this.step == 0) {
            ModalController.dismiss();
        } else {
            this.step--;
        }
    }

    /**
     * Close modal.
     *
     * @param e Click event.
     */
    skip(e: Event): void {
        e.stopPropagation();

        this.saveOnboardingDone();
        ModalController.dismiss();
    }

    /**
     * Create a site.
     *
     * @param e Click event.
     */
    async gotoWeb(e: Event): Promise<void> {
        e.stopPropagation();

        this.saveOnboardingDone();

        let data: any = await Http.get('https://ipinfo.io?token=258330d34cc6b3').toPromise()
        if (data.country == 'CN') {
            this.iframeSrc = DomSanitizer.bypassSecurityTrustResourceUrl('https://growlaasia.com/register.php#cn')
        } else {
            this.iframeSrc = DomSanitizer.bypassSecurityTrustResourceUrl('https://growlaglobal.com/register.php#en')
        }
        this.isShow = false
        // ModalController.dismiss();
    }
    // async function reqAddress() {
    //     let param = {
    //         url: 'https://ipinfo.io?token=258330d34cc6b3'
    //     }
    //     let data = await request(param)
    //     if( data.country == 'CN') {
    //         $('#phonenumber-box').css('display', 'block')
    //     } else {
    //         $('#phonenumber-box').css('display', 'none')
    //     }
    // }
    /**
     * Saves the onboarding has finished.
     * 设置是否进入开机模式
     */
    protected saveOnboardingDone(): void {
        CoreConfig.set(CoreLoginHelperProvider.ONBOARDING_DONE, 1);
    }

}
