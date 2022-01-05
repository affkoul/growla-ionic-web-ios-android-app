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

import { ActivatedRoute, ActivatedRouteSnapshot, Params, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoreSplitViewComponent } from '@components/split-view/split-view';
import { CoreNavigator } from '@services/navigator';
import { CoreScreen } from '@services/screen';
import { CoreUtils } from '@services/utils/utils';

/**
 * Helper class to manage the state and routing of a list of items in a page, for example on pages using a split view.
 */
export abstract class CorePageItemsListManager<Item> {

    protected itemsList: Item[] | null = null;
    protected itemsMap: Record<string, Item> | null = null;
    protected hasMoreItems = true;
    protected selectedItem: Item | null = null;
    protected pageRouteLocator?: unknown | ActivatedRoute;
    protected splitView?: CoreSplitViewComponent;
    protected splitViewOutletSubscription?: Subscription;

    constructor(pageRouteLocator: unknown | ActivatedRoute) {
        this.pageRouteLocator = pageRouteLocator;
    }

    get items(): Item[] {
        return this.itemsList || [];
    }

    get loaded(): boolean {
        return this.itemsMap !== null;
    }

    get completed(): boolean {
        return !this.hasMoreItems;
    }

    get empty(): boolean {
        return this.itemsList === null || this.itemsList.length === 0;
    }

    /**
     * Process page started operations.
     *
     * @param splitView Split view component.
     */
    async start(splitView: CoreSplitViewComponent): Promise<void> {
        this.watchSplitViewOutlet(splitView);

        // Calculate current selected item.
        const route = this.getCurrentPageRoute();
        this.updateSelectedItem(route?.snapshot ?? null);

        // Select default item if none is selected on a non-mobile layout.
        if (!CoreScreen.isMobile && this.selectedItem === null && !splitView.isNested) {
            const defaultItem = this.getDefaultItem();

            if (defaultItem) {
                this.select(defaultItem);
            }
        }

        // Log activity.
        await CoreUtils.ignoreErrors(this.logActivity());
    }

    /**
     * Process page destroyed operations.
     */
    destroy(): void {
        this.splitViewOutletSubscription?.unsubscribe();
    }

    /**
     * Watch a split view outlet to keep track of the selected item.
     *
     * @param splitView Split view component.
     */
    watchSplitViewOutlet(splitView: CoreSplitViewComponent): void {
        this.splitView = splitView;
        this.splitViewOutletSubscription = splitView.outletRouteObservable.subscribe(
            route => this.updateSelectedItem(this.getPageRouteFromSplitViewOutlet(route)),
        );

        this.updateSelectedItem(this.getPageRouteFromSplitViewOutlet(splitView.outletRoute) ?? null);
    }

    /**
     * Reset items data.
     */
    resetItems(): void {
        this.itemsList = null;
        this.itemsMap = null;
        this.hasMoreItems = true;
        this.selectedItem = null;
    }

    // @todo Implement watchResize.

    /**
     * Check whether the given item is selected or not.
     *
     * @param item Item.
     * @return Whether the given item is selected.
     */
    isSelected(item: Item): boolean {
        return this.selectedItem === item;
    }

    /**
     * Return the current aria value.
     *
     * @param item Item.
     * @return Will return the current value of the item if selected, false otherwise.
     */
    getItemAriaCurrent(item: Item): string {
        return this.isSelected(item) ? 'page' : 'false';
    }

    /**
     * Select an item.
     *
     * @param item Item.
     */
    async select(item: Item): Promise<void> {
        // Get current route in the page.
        const route = this.getCurrentPageRoute();

        if (route === null) {
            return;
        }

        // If this item is already selected, do nothing.
        const itemPath = this.getItemPath(item);
        const selectedItemPath = this.getSelectedItemPath(route.snapshot);

        if (selectedItemPath === itemPath) {
            return;
        }

        // Navigate to item.
        const params = this.getItemQueryParams(item);
        const reset = this.resetNavigation();
        const pathPrefix = selectedItemPath ? selectedItemPath.split('/').fill('../').join('') : '';

        await CoreNavigator.navigate(pathPrefix + itemPath, { params, reset });
    }

    /**
     * Set the list of items.
     *
     * @param items Items.
     * @param hasMoreItems Whether the list has more items that haven't been loaded.
     */
    setItems(items: Item[], hasMoreItems: boolean = false): void {
        this.hasMoreItems = hasMoreItems;
        this.itemsList = items.slice(0);
        this.itemsMap = items.reduce((map, item) => {
            map[this.getItemPath(item)] = item;

            return map;
        }, {});

        this.updateSelectedItem(this.getPageRouteFromSplitViewOutlet(this.splitView?.outletRoute ?? null));
    }

    /**
     * Log activity when the page starts.
     */
    protected async logActivity(): Promise<void> {
        //
    }

    /**
     * Update the selected item given the current route.
     *
     * @param route Current route.
     */
    protected updateSelectedItem(route: ActivatedRouteSnapshot | null): void {
        const selectedItemPath = this.getSelectedItemPath(route);

        this.selectedItem = selectedItemPath
            ? this.itemsMap?.[selectedItemPath] ?? null
            : null;
    }

    /**
     * Check whether to reset navigation when selecting an item.
     *
     * @returns boolean Whether navigation should be reset.
     */
    protected resetNavigation(): boolean {
        if (!CoreScreen.isTablet) {
            return false;
        }

        return !!this.splitView && !this.splitView?.isNested;
    }

    /**
     * Get the item that should be selected by default.
     */
    protected getDefaultItem(): Item | null {
        return this.itemsList?.[0] || null;
    }

    /**
     * Get the query parameters to use when navigating to an item page.
     *
     * @param item Item.
     * @return Query parameters to use when navigating to the item page.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected getItemQueryParams(item: Item): Params {
        return {};
    }

    /**
     * Get the path to use when navigating to an item page.
     *
     * @param item Item.
     * @return Path to use when navigating to the item page.
     */
    protected abstract getItemPath(item: Item): string;

    /**
     * Get the path of the selected item given the current route.
     *
     * @param route Page route.
     * @return Path of the selected item in the given route.
     */
    protected getSelectedItemPath(route?: ActivatedRouteSnapshot | null): string | null {
        const segments: UrlSegment[] = [];

        while ((route = route?.firstChild)) {
            segments.push(...route.url);
        }

        return segments.map(segment => segment.path).join('/').replace(/\/+/, '/').trim() || null;
    }

    /**
     * Get page route.
     *
     * @returns Current page route, if any.
     */
    private getCurrentPageRoute(): ActivatedRoute | null {
        if (this.pageRouteLocator instanceof ActivatedRoute) {
            return CoreNavigator.isRouteActive(this.pageRouteLocator) ? this.pageRouteLocator : null;
        }

        return CoreNavigator.getCurrentRoute({ pageComponent: this.pageRouteLocator });
    }

    /**
     * Get the page route given a child route on the splitview outlet.
     *
     * @param route Child route.
     * @return Page route.
     */
    private getPageRouteFromSplitViewOutlet(route: ActivatedRouteSnapshot | null): ActivatedRouteSnapshot | null {
        const isPageRoute = this.buildRouteMatcher();

        while (route && !isPageRoute(route)) {
            route = route.parent;
        }

        return route;
    }

    /**
     * Build a function to check whether the given snapshot belongs to the page.
     *
     * @returns Route matcher.
     */
    private buildRouteMatcher(): (route: ActivatedRouteSnapshot) => boolean {
        if (this.pageRouteLocator instanceof ActivatedRoute) {
            const pageRoutePath = CoreNavigator.getRouteFullPath(this.pageRouteLocator.snapshot);

            return route => CoreNavigator.getRouteFullPath(route) === pageRoutePath;
        }

        return route => route.component === this.pageRouteLocator;
    }

}
