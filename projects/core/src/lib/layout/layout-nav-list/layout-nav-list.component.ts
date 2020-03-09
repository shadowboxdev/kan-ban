import { Component, Input, ViewChild, Optional } from '@angular/core';
import { Router } from '@angular/router';

import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';

import { ILayoutTogglable } from '../layout-toggle.class';

@Component({
  selector: 'kb-layout-nav-list',
  styleUrls: ['./layout-nav-list.component.scss'],
  templateUrl: './layout-nav-list.component.html',
})
export class KbLayoutNavListComponent implements ILayoutTogglable {
  @ViewChild(MatSidenav, { static: true })
  public sidenav: MatSidenav;

  /**
   * toolbarTitle?: string
   *
   * Title set in toolbar.
   */
  @Input()
  public toolbarTitle: string;

  /**
   * icon?: string
   * icon name to be displayed before the title
   */
  @Input() public icon: string;

  /**
   * logo?: string
   *
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input() public logo: string;

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, primary is used.
   */
  @Input() public color: 'accent' | 'primary' | 'warn' = 'primary';

  /**
   * mode?: 'side', 'push' or 'over'
   *
   * The mode or styling of the sidenav.
   * Defaults to "side".
   * See "MatSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input() public mode: 'side' | 'push' | 'over' = 'side';

  /**
   * opened?: boolean
   * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
   * Defaults to "true".
   *
   * See "MatSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input() public opened: boolean = true;

  /**
   * sidenavWidth?: string
   *
   * Sets the "width" of the sidenav in either "px" or "%"
   * Defaults to "350px".
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input() public sidenavWidth: string = '350px';

  /**
   * containerAutosize?: boolean
   *
   * Sets "autosize" of the sidenav-container.
   * Defaults to "false".
   *
   * See documentation for more info and potential performance risks.
   *
   * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
   */
  @Input() public containerAutosize: boolean = false;

  /**
   * navigationRoute?: string
   *
   * option to set the combined route for the icon, logo, and toolbarTitle.
   */
  @Input() public navigationRoute: string;

  /**
   * Checks if `ESC` should close the sidenav
   * Should only close it for `push` and `over` modes
   */
  public get disableClose(): boolean {
    return this.mode === 'side';
  }

  /**
   * Checks if router was injected.
   */
  public get routerEnabled(): boolean {
    return !!this._router && !!this.navigationRoute;
  }

  constructor(@Optional() private _router: Router) {}

  public handleNavigationClick(): void {
    if (this.routerEnabled) {
      this._router.navigateByUrl(this.navigationRoute);
    }
  }

  /**
   * Proxy toggle method to access sidenav from outside (from kb-layout template).
   */
  public toggle(): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle(!this.sidenav.opened);
  }

  /**
   * Proxy open method to access sidenav from outside (from kb-layout template).
   */
  public open(): Promise<MatDrawerToggleResult> {
    return this.sidenav.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from kb-layout template).
   */
  public close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }
}
