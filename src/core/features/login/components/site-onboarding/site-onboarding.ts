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
import { ModalController } from '@singletons';
import { Storage } from '@capacitor/storage';
/**
 * Component that displays onboarding help regarding the CoreLoginSitePage.
 */
@Component({
    selector: 'core-login-site-onboarding',
    templateUrl: 'site-onboarding.html',
    styleUrls: ['site-onboarding.scss', '../../login.scss'],
})
export class CoreLoginSiteOnboardingComponent {

    step = 0;
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
    gotoWeb(e: Event): void {
        e.stopPropagation();

        this.saveOnboardingDone();

        CoreUtils.openInBrowser('https://growlaglobal.com/faqs-growla.php#cn');

        ModalController.dismiss();
    }

    /**
     * Saves the onboarding has finished.
     * 设置是否进入开机模式
     */
    protected saveOnboardingDone(): void {
        // localStorage.setItem("ONBOARDING_DONE","1")
        if(navigator.platform=="iPhone"){
            var options = { key: "ONBOARDING_DONE", value: "1", suite: "group.com.example" };
            (<any>window).UserDefaults.save(
                options,
                () => console.log("success"),
                () => console.log("error")
                );
                
            }else{
             CoreConfig.set(CoreLoginHelperProvider.ONBOARDING_DONE, 1);
            // onboardingDone  = await CoreConfig.get(CoreLoginHelperProvider.ONBOARDING_DONE, false);
         }
     

       
    }

}
