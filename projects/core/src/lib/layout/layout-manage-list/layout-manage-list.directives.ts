import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { KbLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggle } from '../layout-toggle.class';

@Directive({
  selector: '[kbLayoutManageListToggle]',
  inputs: ['hideWhenOpened'],
})
export class KbLayoutManageListToggleDirective extends LayoutToggle {
  @Input('kbLayoutManageListToggle')
  public set kbLayoutManageListToggle(kbLayoutManageListToggle: boolean) {
    this.disabled = !(<any>kbLayoutManageListToggle === '' || kbLayoutManageListToggle);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutManageListComponent)) layout: KbLayoutManageListComponent,
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
  selector: '[kbLayoutManageListClose]',
  inputs: ['hideWhenOpened'],
})
export class KbLayoutManageListCloseDirective extends LayoutToggle {
  @Input('kbLayoutManageListClose')
  public set kbLayoutManageListClose(kbLayoutManageListClose: boolean) {
    this.disabled = !(<any>kbLayoutManageListClose === '' || kbLayoutManageListClose);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutManageListComponent)) layout: KbLayoutManageListComponent,
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
  selector: '[kbLayoutManageListOpen]',
  inputs: ['hideWhenOpened'],
})
export class KbLayoutManageListOpenDirective extends LayoutToggle {
  @Input('kbLayoutManageListOpen')
  public set kbLayoutManageListOpen(kbLayoutManageListOpen: boolean) {
    this.disabled = !(<any>kbLayoutManageListOpen === '' || kbLayoutManageListOpen);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutManageListComponent)) layout: KbLayoutManageListComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  public onClick(): void {
    this._layout.open();
  }
}
