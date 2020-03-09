import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { KbLayoutNavListComponent } from './layout-nav-list.component';
import { LayoutToggle } from '../layout-toggle.class';

@Directive({
  selector: '[kbLayoutNavListToggle]',
  inputs: ['hideWhenOpened'],
})
export class KbLayoutNavListToggleDirective extends LayoutToggle {
  @Input('kbLayoutNavListToggle')
  public set kbLayoutNavListToggle(kbLayoutNavListToggle: boolean) {
    this.disabled = !(<any>kbLayoutNavListToggle === '' || kbLayoutNavListToggle);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutNavListComponent)) layout: KbLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  public onClick(): void {
    this._layout.toggle();
  }
}

@Directive({
  selector: '[kbLayoutNavListClose]',
  inputs: ['hideWhenOpened'],
})
export class KbLayoutNavListCloseDirective extends LayoutToggle {
  @Input('kbLayoutNavListClose')
  public set kbLayoutNavListClose(kbLayoutNavListClose: boolean) {
    this.disabled = !(<any>kbLayoutNavListClose === '' || kbLayoutNavListClose);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutNavListComponent)) layout: KbLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  public onClick(): void {
    this._layout.close();
  }
}

@Directive({
  selector: '[kbLayoutNavListOpen]',
  inputs: ['hideWhenOpened'],
})
export class KbLayoutNavListOpenDirective extends LayoutToggle {
  @Input('kbLayoutNavListOpen')
  public set kbLayoutNavListOpen(kbLayoutNavListOpen: boolean) {
    this.disabled = !(<any>kbLayoutNavListOpen === '' || kbLayoutNavListOpen);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutNavListComponent)) layout: KbLayoutNavListComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  public onClick(): void {
    this._layout.open();
  }
}
