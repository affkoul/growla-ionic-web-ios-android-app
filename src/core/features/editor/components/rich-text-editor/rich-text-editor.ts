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

import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    OnInit,
    AfterContentInit,
    OnDestroy,
    Optional,
    AfterViewInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonTextarea, IonContent, IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { CoreApp } from '@services/app';
import { CoreSites } from '@services/sites';
import { CoreFilepool } from '@services/filepool';
import { CoreDomUtils } from '@services/utils/dom';
import { CoreUrlUtils } from '@services/utils/url';
import { CoreUtils } from '@services/utils/utils';
import { Platform, Translate } from '@singletons';
import { CoreEventFormActionData, CoreEventObserver, CoreEvents } from '@singletons/events';
import { CoreEditorOffline } from '../../services/editor-offline';

/**
 * Component to display a rich text editor if enabled.
 *
 * If enabled, this component will show a rich text editor. Otherwise it'll show a regular textarea.
 *
 * Example:
 * <core-rich-text-editor [control]="control" [placeholder]="field.name"></core-rich-text-editor>
 */
@Component({
    selector: 'core-rich-text-editor',
    templateUrl: 'core-editor-rich-text-editor.html',
    styleUrls: ['rich-text-editor.scss'],
})
export class CoreEditorRichTextEditorComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

    // Based on: https://github.com/judgewest2000/Ionic3RichText/
    // @todo: Anchor button, fullscreen...
    // @todo: Textarea height is not being updated when editor is resized. Height is calculated if any css is changed.
    // @todo: Implement ControlValueAccessor https://angular.io/api/forms/ControlValueAccessor.

    @Input() placeholder = ''; // Placeholder to set in textarea.
    @Input() control?: FormControl; // Form control.
    @Input() name = 'core-rich-text-editor'; // Name to set to the textarea.
    @Input() component?: string; // The component to link the files to.
    @Input() componentId?: number; // An ID to use in conjunction with the component.
    @Input() autoSave?: boolean | string; // Whether to auto-save the contents in a draft. Defaults to true.
    @Input() contextLevel?: string; // The context level of the text.
    @Input() contextInstanceId?: number; // The instance ID related to the context.
    @Input() elementId?: string; // An ID to set to the element.
    @Input() draftExtraParams?: Record<string, unknown>; // Extra params to identify the draft.
    @Output() contentChanged: EventEmitter<string>;

    @ViewChild('editor') editor?: ElementRef; // WYSIWYG editor.
    @ViewChild('textarea') textarea?: IonTextarea; // Textarea editor.
    @ViewChild('toolbar') toolbar?: ElementRef;
    @ViewChild(IonSlides) toolbarSlides?: IonSlides;

    protected readonly DRAFT_AUTOSAVE_FREQUENCY = 30000;
    protected readonly RESTORE_MESSAGE_CLEAR_TIME = 6000;
    protected readonly SAVE_MESSAGE_CLEAR_TIME = 2000;

    protected element: HTMLDivElement;
    protected editorElement?: HTMLDivElement;
    protected minHeight = 200; // Minimum height of the editor.

    protected valueChangeSubscription?: Subscription;
    protected keyboardObserver?: CoreEventObserver;
    protected resetObserver?: CoreEventObserver;
    protected labelObserver?: MutationObserver;
    protected initHeightInterval?: number;
    protected isCurrentView = true;
    protected toolbarButtonWidth = 44;
    protected toolbarArrowWidth = 44;
    protected pageInstance: string;
    protected autoSaveInterval?: number;
    protected hideMessageTimeout?: number;
    protected lastDraft = '';
    protected draftWasRestored = false;
    protected originalContent?: string;
    protected resizeFunction?: () => Promise<number>;
    protected selectionChangeFunction?: () => void;
    protected languageChangedSubscription?: Subscription;
    protected resizeObserver?: IntersectionObserver;

    rteEnabled = false;
    isPhone = false;
    toolbarHidden = false;
    toolbarArrows = false;
    toolbarPrevHidden = true;
    toolbarNextHidden = false;
    canScanQR = false;
    ariaLabelledBy?: string;
    infoMessage?: string;
    direction = 'ltr';
    toolbarStyles = {
        strong: 'false',
        em: 'false',
        u: 'false',
        strike: 'false',
        p: 'false',
        h3: 'false',
        h4: 'false',
        h5: 'false',
        ul: 'false',
        ol: 'false',
    };

    slidesOpts = {
        initialSlide: 0,
        slidesPerView: 6,
        centerInsufficientSlides: true,
        watchSlidesVisibility: true,
    };

    constructor(
        @Optional() protected content: IonContent,
        elementRef: ElementRef,
    ) {
        this.contentChanged = new EventEmitter<string>();
        this.element = elementRef.nativeElement as HTMLDivElement;
        this.pageInstance = 'app_' + Date.now(); // Generate a "unique" ID based on timestamp.

        if ('IntersectionObserver' in window) {
            this.resizeObserver = new IntersectionObserver((observerEntry: IntersectionObserverEntry[]) => {
                if (observerEntry[0].boundingClientRect.width > 0) {
                    this.updateToolbarButtons();
                }
            });
        }
    }

    /**
     * Component being initialized.
     */
    ngOnInit(): void {
        this.canScanQR = CoreUtils.canScanQR();
        this.isPhone = Platform.is('mobile') && !Platform.is('tablet');
        this.toolbarHidden = this.isPhone;
        this.direction = Platform.isRTL ? 'rtl' : 'ltr';
    }

    /**
     * Init editor.
     */
    async ngAfterContentInit(): Promise<void> {
        this.rteEnabled = await CoreDomUtils.isRichTextEditorEnabled();

        // Setup the editor.
        this.editorElement = this.editor?.nativeElement as HTMLDivElement;
        this.setContent(this.control?.value);
        this.originalContent = this.control?.value;
        this.lastDraft = this.control?.value;
        this.editorElement.onchange = this.onChange.bind(this);
        this.editorElement.onkeyup = this.onChange.bind(this);
        this.editorElement.onpaste = this.onChange.bind(this);
        this.editorElement.oninput = this.onChange.bind(this);
        this.editorElement.onkeydown = this.moveCursor.bind(this);

        // Use paragraph on enter.
        document.execCommand('DefaultParagraphSeparator', false, 'p');

        let i = 0;
        this.initHeightInterval = window.setInterval(async () => {
            const height = await this.maximizeEditorSize();
            if (i >= 5 || height != 0) {
                clearInterval(this.initHeightInterval);
            }
            i++;
        }, 750);

        this.setListeners();
        this.updateToolbarButtons();

        if (this.elementId) {
            // Prepend elementId with 'id_' like in web. Don't use a setter for this because the value shouldn't change.
            this.elementId = 'id_' + this.elementId;
            this.element.setAttribute('id', this.elementId);
        }

        // Update tags for a11y.
        this.replaceTags('b', 'strong');
        this.replaceTags('i', 'em');

        if (this.shouldAutoSaveDrafts()) {
            this.restoreDraft();

            this.autoSaveDrafts();

            this.deleteDraftOnSubmitOrCancel();
        }
    }

    /**
     * @inheritdoc
     */
    async ngAfterViewInit(): Promise<void> {
        const label = this.element.closest('ion-item')?.querySelector('ion-label');

        if (!label) {
            return;
        }

        this.labelObserver = new MutationObserver(() => this.ariaLabelledBy = label.getAttribute('id') ?? undefined);
        this.labelObserver.observe(label, { attributes: true, attributeFilter: ['id'] });
    }

    /**
     * Set listeners and observers.
     */
    protected setListeners(): void {
        // Listen for changes on the control to update the editor (if it is updated from outside of this component).
        this.valueChangeSubscription = this.control?.valueChanges.subscribe((newValue) => {
            if (this.draftWasRestored && this.originalContent == newValue) {
                // A draft was restored and the content hasn't changed in the site. Use the draft value instead of this one.
                this.control?.setValue(this.lastDraft, { emitEvent: false });

                return;
            }

            // Apply the new content.
            this.setContent(newValue);
            this.originalContent = newValue;
            this.infoMessage = undefined;

            // Save a draft so the original content is saved.
            this.lastDraft = newValue;
            CoreEditorOffline.saveDraft(
                this.contextLevel || '',
                this.contextInstanceId || 0,
                this.elementId || '',
                this.draftExtraParams || {},
                this.pageInstance,
                newValue,
                newValue,
            );
        });

        this.resizeFunction = this.windowResized.bind(this);
        window.addEventListener('resize', this.resizeFunction!);

        // Start observing the target node for configured mutations
        this.resizeObserver?.observe(this.element);

        this.selectionChangeFunction = this.updateToolbarStyles.bind(this);
        document.addEventListener('selectionchange', this.selectionChangeFunction!);

        this.keyboardObserver = CoreEvents.on(CoreEvents.KEYBOARD_CHANGE, () => {
            // Opening or closing the keyboard also calls the resize function, but sometimes the resize is called too soon.
            // Check the height again, now the window height should have been updated.
            this.maximizeEditorSize();
        });

        // Change the side when the language changes.
        this.languageChangedSubscription = Translate.onLangChange.subscribe(() => {
            setTimeout(() => {
                this.direction = Platform.isRTL ? 'rtl' : 'ltr';
            });
        });
    }

    /**
     * Resize editor to maximize the space occupied.
     *
     * @return Resolved with calculated editor size.
     */
    protected async maximizeEditorSize(): Promise<number> {
        const contentVisibleHeight = await CoreDomUtils.getContentHeight(this.content);

        if (contentVisibleHeight <= 0) {
            return 0;
        }

        await CoreUtils.wait(100);

        // Editor is ready, adjust Height if needed.
        const contentHeight = await CoreDomUtils.getContentHeight(this.content);
        const height = contentHeight - this.getSurroundingHeight(this.element);

        if (height > this.minHeight) {
            this.element.style.height = CoreDomUtils.formatPixelsSize(height - 1);
        } else {
            this.element.style.height = '';
        }

        return height;
    }

    /**
     * Get the height of the surrounding elements from the current to the top element.
     *
     * @param element Directive DOM element to get surroundings elements from.
     * @return Surrounding height in px.
     */
    protected getSurroundingHeight(element: HTMLElement): number {
        let height = 0;

        while (element.parentElement?.tagName != 'ION-CONTENT') {
            const parent = element.parentElement!;
            if (element.tagName && element.tagName != 'CORE-LOADING') {
                for (let x = 0; x < parent.children.length; x++) {
                    const child = <HTMLElement> parent.children[x];
                    if (child.tagName && child != element) {
                        height += CoreDomUtils.getElementHeight(child, false, true, true);
                    }
                }
            }
            element = parent;
        }

        const computedStyle = getComputedStyle(element);
        height += CoreDomUtils.getComputedStyleMeasure(computedStyle, 'paddingTop') +
            CoreDomUtils.getComputedStyleMeasure(computedStyle, 'paddingBottom');

        if (element.parentElement?.tagName == 'ION-CONTENT') {
            const cs2 = getComputedStyle(element);

            height -= CoreDomUtils.getComputedStyleMeasure(cs2, 'paddingTop') +
                CoreDomUtils.getComputedStyleMeasure(cs2, 'paddingBottom');
        }

        return height;
    }

    /**
     * On change function to sync with form data.
     */
    onChange(): void {
        if (this.rteEnabled) {
            if (!this.editorElement) {
                return;
            }

            if (this.isNullOrWhiteSpace(this.editorElement.innerText)) {
                this.clearText();
            } else {
                // The textarea and the form control must receive the original URLs.
                this.restoreExternalContent();
                // Don't emit event so our valueChanges doesn't get notified by this change.
                this.control?.setValue(this.editorElement.innerHTML, { emitEvent: false });
                this.control?.markAsDirty();
                if (this.textarea) {
                    this.textarea.value = this.editorElement.innerHTML;
                }
                // Treat URLs again for the editor.
                this.treatExternalContent();
            }
        } else {
            if (!this.textarea) {
                return;
            }

            if (this.isNullOrWhiteSpace(this.textarea.value || '')) {
                this.clearText();
            } else {
                // Don't emit event so our valueChanges doesn't get notified by this change.
                this.control?.setValue(this.textarea.value, { emitEvent: false });
                this.control?.markAsDirty();
            }
        }

        this.contentChanged.emit(this.control?.value);
    }

    /**
     * On key down function to move the cursor.
     * https://stackoverflow.com/questions/6249095/how-to-set-caretcursor-position-in-contenteditable-element-div
     *
     * @param event The event.
     */
    moveCursor(event: KeyboardEvent): void {
        if (!this.rteEnabled || !this.editorElement) {
            return;
        }

        if (event.key != 'ArrowLeft' && event.key != 'ArrowRight') {
            return;
        }

        this.stopBubble(event);

        const move = event.key == 'ArrowLeft' ? -1 : +1;
        const cursor = this.getCurrentCursorPosition(this.editorElement);

        this.setCurrentCursorPosition(this.editorElement, cursor + move);
    }

    /**
     * Returns the number of chars from the beggining where is placed the cursor.
     *
     * @param parent Parent where to get the position from.
     * @return Position in chars.
     */
    protected getCurrentCursorPosition(parent: Node): number {
        const selection = window.getSelection();

        let charCount = -1;

        if (selection?.focusNode && parent.contains(selection.focusNode)) {
            let node: Node | null = selection.focusNode;
            charCount = selection.focusOffset;

            while (node) {
                if (node.isSameNode(parent)) {
                    break;
                }

                if (node.previousSibling) {
                    node = node.previousSibling;
                    charCount += (node.textContent || '').length;
                } else {
                    node = node.parentNode;
                    if (node === null) {
                        break;
                    }
                }
            }
        }

        return charCount;
    }

    /**
     * Set the caret position on the character number.
     *
     * @param parent Parent where to set the position.
     * @param chars Number of chars where to place the caret. If not defined it will go to the end.
     */
    protected setCurrentCursorPosition(parent: Node, chars?: number): void {
        /**
         * Loops round all the child text nodes within the supplied node and sets a range from the start of the initial node to
         * the characters.
         *
         * @param node Node where to start.
         * @param range Previous calculated range.
         * @param chars Object with counting of characters (input-output param).
         * @return Selection range.
         */
        const setRange = (node: Node, range: Range, chars: { count: number }): Range => {
            if (chars.count === 0) {
                range.setEnd(node, 0);
            } else if (node && chars.count > 0) {
                if (node.hasChildNodes()) {
                    // Navigate through children.
                    for (let lp = 0; lp < node.childNodes.length; lp++) {
                        range = setRange(node.childNodes[lp], range, chars);

                        if (chars.count === 0) {
                            break;
                        }
                    }
                } else if ((node.textContent || '').length < chars.count) {
                    // Jump this node.
                    // @todo: empty nodes will be omitted.
                    chars.count -= (node.textContent || '').length;
                } else {
                    // The cursor will be placed in this element.
                    range.setEnd(node, chars.count);
                    chars.count = 0;
                }
            }

            return range;
        };

        let range = document.createRange();
        if (typeof chars === 'undefined') {
            // Select all so it will go to the end.
            range.selectNode(parent);
            range.selectNodeContents(parent);
        } else if (chars < 0 || chars > (parent.textContent || '').length) {
            return;
        } else {
            range.selectNode(parent);
            range.setStart(parent, 0);
            range = setRange(parent, range, { count: chars });
        }

        if (range) {
            const selection = window.getSelection();
            range.collapse(false);
            selection?.removeAllRanges();
            selection?.addRange(range);
        }
    }

    /**
     * Toggle from rte editor to textarea syncing values.
     *
     * @param event The event.
     */
    async toggleEditor(event: Event): Promise<void> {
        if (event.type == 'keyup' && !this.isValidKeyboardKey(<KeyboardEvent>event)) {
            return;
        }

        this.stopBubble(event);

        this.setContent(this.control?.value || '');

        this.rteEnabled = !this.rteEnabled;

        // Set focus and cursor at the end.
        // Modify the DOM directly so the keyboard stays open.
        if (this.rteEnabled) {
            // Update tags for a11y.
            this.replaceTags('b', 'strong');
            this.replaceTags('i', 'em');
            this.editorElement?.removeAttribute('hidden');
            const textareaInputElement = await this.textarea?.getInputElement();
            textareaInputElement?.setAttribute('hidden', '');
            this.editorElement?.focus();
        } else {
            this.editorElement?.setAttribute('hidden', '');
            const textareaInputElement = await this.textarea?.getInputElement();
            textareaInputElement?.removeAttribute('hidden');
            this.textarea?.setFocus();
        }
    }

    /**
     * Treat elements that can contain external content.
     * We only search for images because the editor should receive unfiltered text, so the multimedia filter won't be applied.
     * Treating videos and audios in here is complex, so if a user manually adds one he won't be able to play it in the editor.
     */
    protected treatExternalContent(): void {
        if (!CoreSites.isLoggedIn() || !this.editorElement) {
            // Only treat external content if the user is logged in.
            return;
        }

        const elements = Array.from(this.editorElement.querySelectorAll('img'));
        const siteId = CoreSites.getCurrentSiteId();
        const canDownloadFiles = CoreSites.getCurrentSite()!.canDownloadFiles();
        elements.forEach(async (el) => {
            if (el.getAttribute('data-original-src')) {
                // Already treated.
                return;
            }

            const url = el.src;

            if (!url || !CoreUrlUtils.isDownloadableUrl(url) ||
                    (!canDownloadFiles && CoreUrlUtils.isPluginFileUrl(url))) {
                // Nothing to treat.
                return;
            }

            // Check if it's downloaded.
            const finalUrl = await CoreFilepool.getSrcByUrl(siteId, url, this.component, this.componentId);

            // Check again if it's already treated, this function can be called concurrently more than once.
            if (!el.getAttribute('data-original-src')) {
                el.setAttribute('data-original-src', el.src);
                el.setAttribute('src', finalUrl);
            }
        });
    }

    /**
     * Reverts changes made by treatExternalContent.
     */
    protected restoreExternalContent(): void {
        if (!this.editorElement) {
            return;
        }

        const elements = Array.from(this.editorElement.querySelectorAll('img'));
        elements.forEach((el) => {
            const originalUrl = el.getAttribute('data-original-src');
            if (originalUrl) {
                el.setAttribute('src', originalUrl);
                el.removeAttribute('data-original-src');
            }
        });
    }

    /**
     * Check if text is empty.
     *
     * @param value text
     */
    protected isNullOrWhiteSpace(value: string | null): boolean {
        if (value == null || typeof value == 'undefined') {
            return true;
        }

        value = value.replace(/[\n\r]/g, '');
        value = value.split(' ').join('');

        return value.length === 0;
    }

    /**
     * Set the content of the textarea and the editor element.
     *
     * @param value New content.
     */
    protected setContent(value: string | null): void {
        if (!this.editorElement || !this.textarea) {
            return;
        }

        if (this.isNullOrWhiteSpace(value)) {
            this.editorElement.innerHTML = '<p></p>';
            this.textarea.value = '';
        } else {
            this.editorElement.innerHTML = value!;
            this.textarea.value = value;
            this.treatExternalContent();
        }
    }

    /**
     * Clear the text.
     */
    clearText(): void {
        this.setContent(null);

        // Don't emit event so our valueChanges doesn't get notified by this change.
        this.control?.setValue(null, { emitEvent: false });

        setTimeout(() => {
            if (this.rteEnabled && this.editorElement) {
                this.setCurrentCursorPosition(this.editorElement);
            }
        }, 1);
    }

    /**
     * Execute an action over the selected text.
     *  API docs: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
     *
     * @param event Event data
     * @param command Command to execute.
     * @param parameters If parameters is set to block, a formatBlock command will be performed. Otherwise it will switch the
     *                      toolbar styles button when set.
     */
    buttonAction(event: Event, command: string, parameters?: string): void {
        if (event.type == 'keyup' && !this.isValidKeyboardKey(<KeyboardEvent>event)) {
            return;
        }

        this.stopBubble(event);

        if (!command) {
            return;
        }

        if (parameters == 'block') {
            document.execCommand('formatBlock', false, '<' + command + '>');

            return;
        }

        if (parameters) {
            this.toolbarStyles[parameters] = this.toolbarStyles[parameters] == 'true' ? 'false' : 'true';
        }

        document.execCommand(command, false);

        // Modern browsers are using non a11y tags, so replace them.
        if (command == 'bold') {
            this.replaceTags('b', 'strong');
        } else if (command == 'italic') {
            this.replaceTags('i', 'em');
        }
    }

    /**
     * Replace tags for a11y.
     *
     * @param originTag      Origin tag to be replaced.
     * @param destinationTag Destination tag to replace.
     */
    protected replaceTags(originTag: string, destinationTag: string): void {
        if (!this.editorElement) {
            return;
        }

        const elems = Array.from(this.editorElement.getElementsByTagName(originTag));

        elems.forEach((elem) => {
            const newElem = document.createElement(destinationTag);
            newElem.innerHTML = elem.innerHTML;

            if (elem.hasAttributes()) {
                const attrs = Array.from(elem.attributes);
                attrs.forEach((attr) => {
                    newElem.setAttribute(attr.name, attr.value);
                });
            }

            elem.parentNode?.replaceChild(newElem, elem);
        });

        this.onChange();
    }

    /**
     * Focus editor when click the area.
     */
    focusRTE(): void {
        if (this.rteEnabled) {
            this.editorElement?.focus();
        } else {
            this.textarea?.setFocus();
        }
    }

    /**
     * Hide the toolbar in phone mode.
     */
    hideToolbar(event: Event): void {
        if (event.type == 'keyup' && !this.isValidKeyboardKey(<KeyboardEvent>event)) {
            return;
        }

        this.element.classList.remove('has-focus');

        this.stopBubble(event);

        if (this.isPhone) {
            this.toolbarHidden = true;
        }
    }

    /**
     * Checks if Space or Enter have been pressed.
     *
     * @param event Keyboard Event.
     * @returns Wether space or enter have been pressed.
     */
    protected isValidKeyboardKey(event: KeyboardEvent): boolean {
        return event.key == ' ' || event.key == 'Enter';
    }

    /**
     * Show the toolbar.
     */
    showToolbar(event: Event): void {
        if (!('IntersectionObserver' in window)) {
            // Fallback if IntersectionObserver is not supported.
            this.updateToolbarButtons();
        }

        this.element.classList.add('ion-touched');
        this.element.classList.remove('ion-untouched');
        this.element.classList.add('has-focus');

        this.stopBubble(event);

        this.editorElement?.focus();
        this.toolbarHidden = false;
    }

    /**
     * Stop event default and propagation.
     *
     * @param event Event.
     */
    stopBubble(event: Event): void {
        if (event.type != 'touchend' &&event.type != 'mouseup' && event.type != 'keyup') {
            event.preventDefault();
        }
        event.stopPropagation();
    }

    /**
     * When a button is clicked first we should stop event propagation, but it has some cases to not.
     *
     * @param event Event.
     */
    downAction(event: Event): void {
        if (event.type == 'keydown' && !this.isValidKeyboardKey(<KeyboardEvent>event)) {
            return;
        }

        const selection = window.getSelection()?.toString();

        // When RTE is focused with a whole paragraph in desktop the stopBubble will not fire click.
        if (CoreApp.isMobile() || !this.rteEnabled || document.activeElement != this.editorElement || selection == '') {
            this.stopBubble(event);
        }
    }

    /**
     * Method that shows the next toolbar buttons.
     */
    async toolbarNext(event: Event): Promise<void> {
        if (event.type == 'keyup' && !this.isValidKeyboardKey(<KeyboardEvent>event)) {
            return;
        }

        this.stopBubble(event);

        if (!this.toolbarNextHidden) {
            const currentIndex = await this.toolbarSlides?.getActiveIndex();
            this.toolbarSlides?.slideTo((currentIndex || 0) + this.slidesOpts.slidesPerView);
        }

        await this.updateToolbarArrows();
    }

    /**
     * Method that shows the previous toolbar buttons.
     */
    async toolbarPrev(event: Event): Promise<void> {
        if (event.type == 'keyup' && !this.isValidKeyboardKey(<KeyboardEvent>event)) {
            return;
        }

        this.stopBubble(event);

        if (!this.toolbarPrevHidden) {
            const currentIndex = await this.toolbarSlides?.getActiveIndex();
            this.toolbarSlides?.slideTo((currentIndex || 0) - this.slidesOpts.slidesPerView);
        }

        await this.updateToolbarArrows();
    }

    /**
     * Update the number of toolbar buttons displayed.
     */
    async updateToolbarButtons(): Promise<void> {
        if (!this.isCurrentView || !this.toolbar || !this.toolbarSlides || this.element.offsetParent == null) {
            // Don't calculate if component isn't in current view, the calculations are wrong.
            return;
        }

        const length = await this.toolbarSlides.length();

        const width = CoreDomUtils.getElementWidth(this.toolbar.nativeElement);

        if (!width) {
            // Width is not available yet, try later.
            setTimeout(this.updateToolbarButtons.bind(this), 100);

            return;
        }

        if (length > 0 && width > length * this.toolbarButtonWidth) {
            this.slidesOpts = { ...this.slidesOpts, slidesPerView: length };
            this.toolbarArrows = false;
        } else {
            const slidesPerView = Math.floor((width - this.toolbarArrowWidth * 2) / this.toolbarButtonWidth);
            this.slidesOpts = { ...this.slidesOpts, slidesPerView };
            this.toolbarArrows = true;
        }

        await CoreUtils.nextTick();

        await this.toolbarSlides.update();

        await this.updateToolbarArrows();
    }

    /**
     * Show or hide next/previous toolbar arrows.
     */
    async updateToolbarArrows(): Promise<void> {
        if (!this.toolbarSlides) {
            return;
        }

        const currentIndex = await this.toolbarSlides.getActiveIndex();
        const length = await this.toolbarSlides.length();
        this.toolbarPrevHidden = currentIndex <= 0;
        this.toolbarNextHidden = currentIndex + this.slidesOpts.slidesPerView >= length;
    }

    /**
     * Update highlighted toolbar styles.
     */
    updateToolbarStyles(): void {
        const node = window.getSelection()?.focusNode;
        if (!node) {
            return;
        }

        let element = node.nodeType == 1 ? node as HTMLElement : node.parentElement;
        const styles = {};

        while (element != null && element !== this.editorElement) {
            const tagName = element.tagName.toLowerCase();
            if (this.toolbarStyles[tagName]) {
                styles[tagName] = 'true';
            }
            element = element.parentElement;
        }

        for (const tagName in this.toolbarStyles) {
            this.toolbarStyles[tagName] = 'false';
        }

        if (element === this.editorElement) {
            Object.assign(this.toolbarStyles, styles);
        }
    }

    /**
     * Check if should auto save drafts.
     *
     * @return {boolean} Whether it should auto save drafts.
     */
    protected shouldAutoSaveDrafts(): boolean {
        return !!CoreSites.getCurrentSite() &&
                (typeof this.autoSave == 'undefined' || CoreUtils.isTrueOrOne(this.autoSave)) &&
                typeof this.contextLevel != 'undefined' &&
                typeof this.contextInstanceId != 'undefined' &&
                typeof this.elementId != 'undefined';
    }

    /**
     * Restore a draft if there is any.
     *
     * @return Promise resolved when done.
     */
    protected async restoreDraft(): Promise<void> {
        try {
            const entry = await CoreEditorOffline.resumeDraft(
                this.contextLevel || '',
                this.contextInstanceId || 0,
                this.elementId || '',
                this.draftExtraParams || {},
                this.pageInstance,
                this.originalContent,
            );

            if (typeof entry == 'undefined') {
                // No draft found.
                return;
            }

            this.element.classList.add('ion-touched');
            this.element.classList.remove('ion-untouched');

            let draftText = entry.drafttext || '';

            // Revert untouched editor contents to an empty string.
            if (draftText == '<p></p>' || draftText == '<p><br></p>' || draftText == '<br>' ||
                    draftText == '<p>&nbsp;</p>' || draftText == '<p><br>&nbsp;</p>') {
                draftText = '';
            }

            if (draftText !== '' && this.control && draftText != this.control.value) {
                // Restore the draft.
                this.control.setValue(draftText, { emitEvent: false });
                this.setContent(draftText);
                this.lastDraft = draftText;
                this.draftWasRestored = true;
                this.originalContent = entry.originalcontent;

                if (entry.drafttext != entry.originalcontent) {
                    // Notify the user.
                    this.showMessage('core.editor.textrecovered', this.RESTORE_MESSAGE_CLEAR_TIME);
                }
            }
        } catch (error) {
            // Ignore errors, shouldn't happen.
        }
    }

    /**
     * Automatically save drafts every certain time.
     */
    protected autoSaveDrafts(): void {
        this.autoSaveInterval = window.setInterval(async () => {
            if (!this.control) {
                return;
            }

            const newText = this.control.value;

            if (this.lastDraft == newText) {
                // Text hasn't changed, nothing to save.
                return;
            }

            try {
                await CoreEditorOffline.saveDraft(
                    this.contextLevel || '',
                    this.contextInstanceId || 0,
                    this.elementId || '',
                    this.draftExtraParams || {},
                    this.pageInstance,
                    newText,
                    this.originalContent,
                );

                // Draft saved, notify the user.
                this.lastDraft = newText;
                this.showMessage('core.editor.autosavesucceeded', this.SAVE_MESSAGE_CLEAR_TIME);
            } catch (error) {
                // Error saving draft.
            }
        }, this.DRAFT_AUTOSAVE_FREQUENCY);
    }

    /**
     * Delete the draft when the form is submitted or cancelled.
     */
    protected deleteDraftOnSubmitOrCancel(): void {
        this.resetObserver = CoreEvents.on(CoreEvents.FORM_ACTION, async (data: CoreEventFormActionData) => {
            const form = this.element.closest('form');

            if (data.form && form && data.form == form) {
                try {
                    await CoreEditorOffline.deleteDraft(
                        this.contextLevel || '',
                        this.contextInstanceId || 0,
                        this.elementId || '',
                        this.draftExtraParams || {},
                    );
                } catch (error) {
                    // Error deleting draft. Shouldn't happen.
                }
            }
        }, CoreSites.getCurrentSiteId());
    }

    /**
     * Show a message.
     *
     * @param message Identifier of the message to display.
     * @param timeout Number of milliseconds when to remove the message.
     */
    protected showMessage(message: string, timeout: number): void {
        clearTimeout(this.hideMessageTimeout);

        this.infoMessage = message;

        this.hideMessageTimeout = window.setTimeout(() => {
            this.hideMessageTimeout = undefined;
            this.infoMessage = undefined;
        }, timeout);
    }

    /**
     * Scan a QR code and put its text in the editor.
     *
     * @param event Event data
     * @return Promise resolved when done.
     */
    async scanQR(event: Event): Promise<void> {
        this.stopBubble(event);

        // Scan for a QR code.
        const text = await CoreUtils.scanQR();

        if (text) {
            this.editorElement?.focus(); // Make sure the editor is focused.
            document.execCommand('insertText', false, text);
        }
    }

    /**
     * Window resized.
     */
    protected async windowResized(): Promise<void> {
        await CoreDomUtils.waitForResizeDone();

        this.maximizeEditorSize();
        this.updateToolbarButtons();
    }

    /**
     * User entered the page that contains the component.
     */
    ionViewDidEnter(): void {
        this.isCurrentView = true;

        this.updateToolbarButtons();
    }

    /**
     * User left the page that contains the component.
     */
    ionViewDidLeave(): void {
        this.isCurrentView = false;
    }

    /**
     * Component being destroyed.
     */
    ngOnDestroy(): void {
        this.valueChangeSubscription?.unsubscribe();
        this.languageChangedSubscription?.unsubscribe();
        window.removeEventListener('resize', this.resizeFunction!);
        document.removeEventListener('selectionchange', this.selectionChangeFunction!);
        clearInterval(this.initHeightInterval);
        clearInterval(this.autoSaveInterval);
        clearTimeout(this.hideMessageTimeout);
        this.resizeObserver?.disconnect();
        this.resetObserver?.off();
        this.keyboardObserver?.off();
        this.labelObserver?.disconnect();
    }

}
