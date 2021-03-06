import { Component, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'kb-layout-footer,kb-layout-footer-inner',
  styleUrls: ['./layout-footer.component.scss'],
  templateUrl: './layout-footer.component.html',
})
export class KbLayoutFooterComponent {
  private _color: 'primary' | 'accent' | 'warn';

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * Optional color option: primary | accent | warn.
   */
  @Input('color')
  set color(color: 'primary' | 'accent' | 'warn') {
    if (color) {
      this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
      this._color = color;
      this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
    }
  }
  get color(): 'primary' | 'accent' | 'warn' {
    return this._color;
  }

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
    this._renderer.addClass(this._elementRef.nativeElement, 'kb-layout-footer');
  }
}
