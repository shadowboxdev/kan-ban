import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { KbLayoutComponent } from './layout.component';
import { LayoutToggle } from './layout-toggle.class';

@Directive({
  selector: '[kbLayoutToggle]',
})
export class KbLayoutToggleDirective extends LayoutToggle {
  @Input('kbLayoutToggle')
  public set kbLayoutToggle(kbLayoutToggle: boolean) {
    this.disabled = !(<any>kbLayoutToggle === '' || kbLayoutToggle);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutComponent)) layout: KbLayoutComponent,
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
  selector: '[kbLayoutClose]',
})
export class KbLayoutCloseDirective extends LayoutToggle {
  @Input('kbLayoutClose')
  public set kbLayoutClose(kbLayoutClose: boolean) {
    this.disabled = !(<any>kbLayoutClose === '' || kbLayoutClose);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutComponent)) layout: KbLayoutComponent,
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
  selector: '[kbLayoutOpen]',
})
export class KbLayoutOpenDirective extends LayoutToggle {
  @Input('kbLayoutOpen')
  public set kbLayoutClose(kbLayoutOpen: boolean) {
    this.disabled = !(<any>kbLayoutOpen === '' || kbLayoutOpen);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => KbLayoutComponent)) layout: KbLayoutComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  public onClick(): void {
    this._layout.open();
  }
}
