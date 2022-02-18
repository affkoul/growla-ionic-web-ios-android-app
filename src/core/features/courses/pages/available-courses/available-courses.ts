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

import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

import { CoreSites } from '@services/sites';
import { CoreDomUtils } from '@services/utils/dom';
import { CoreCourses, CoreCourseSearchedData } from '../../services/courses';
import { IonInfiniteScroll } from '@ionic/angular';
import { ViewChild } from '@angular/core';
/**
 * Page that displays available courses in current site.
 */
@Component({
    selector: 'page-core-courses-available-courses',
    templateUrl: 'available-courses.html',
    styleUrls: ['./available-courses.scss'],
})

export class CoreCoursesAvailableCoursesPage implements OnInit {
    @ViewChild(IonInfiniteScroll)
    infiniteScroll!: IonInfiniteScroll;
    courses: CoreCourseSearchedData[] = [];
    coursesLoaded = false;
    array: CoreCourseSearchedData[] = [];
    IsILastPage:boolean = false
    /**
     * View loaded.
     */
    ngOnInit(): void {
        this.loadCourses().finally(() => {
            this.coursesLoaded = true;
        });
    }

    /**
     * Load the courses.
     *
     * @return Promise resolved when done.
     */
    protected async loadCourses(): Promise<void> {
        const frontpageCourseId = CoreSites.getCurrentSiteHomeId();

        try {
            const courses = await CoreCourses.getCoursesByField();
             this.array = await courses.filter((course) => course.id != frontpageCourseId);
             
            let arr = await JSON.parse(JSON.stringify(this.array))
             this.array = await arr.splice(20)
             this.courses = await arr
        } catch (error) {
            CoreDomUtils.showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
        }
    }
    loadData(event) {
        setTimeout(() => {
          event.target.complete();
          let arr =JSON.parse(JSON.stringify(this.array))
          this.array = arr.splice(20)
          this.courses = [...this.courses,...arr]
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          if (this.array.length <20) {
           this.courses = this.courses.concat(this.array)
            event.target.disabled = true;
            this.IsILastPage = true
          }
        }, 500);
      }
    toggleInfiniteScroll() {
        
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
      }
    /**
     * Refresh the courses.
     *
     * @param refresher Refresher.
     */
    refreshCourses(refresher: IonRefresher): void {
        const promises: Promise<void>[] = [];

        promises.push(CoreCourses.invalidateUserCourses());
        promises.push(CoreCourses.invalidateCoursesByField());

        Promise.all(promises).finally(() => {
            this.loadCourses().finally(() => {
                refresher?.complete();
            });
        });
    }

}
