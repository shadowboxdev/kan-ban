import {
  Component,
  Directive,
  Input,
  ContentChildren,
  OnInit,
  OnDestroy,
  forwardRef,
  Inject,
  QueryList,
  SecurityContext,
  Optional,
} from '@angular/core';
import { Router } from '@angular/router';
import { SafeResourceUrl, SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { MatDrawerToggleResult } from '@angular/material/sidenav';

import { Subscription } from 'rxjs';

import { KbLayoutComponent } from '../layout.component';

import { kbCollapseAnimation } from '@common/animations';

@Directive({
  selector: '[kb-navigation-drawer-menu]',
})
export class KbNavigationDrawerMenuDirective {}

@Directive({
  selector: '[kb-navigation-drawer-toolbar]',
})
export class KbNavigationDrawerToolbarDirective {}

@Component({
  selector: 'kb-navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss'],
  templateUrl: './navigation-drawer.component.html',
  animations: [kbCollapseAnimation],
})
export class KbNavigationDrawerComponent implements OnInit, OnDestroy {
  private _closeSubscription: Subscription;
  private _menuToggled: boolean = false;
  private _backgroundImage: SafeStyle;

  public get menuToggled(): boolean {
    return this._menuToggled;
  }

  @ContentChildren(KbNavigationDrawerMenuDirective, { descendants: true }) public _drawerMenu: QueryList<
    KbNavigationDrawerMenuDirective
  >;

  @ContentChildren(KbNavigationDrawerToolbarDirective, { descendants: true }) public _toolbar: QueryList<
    KbNavigationDrawerToolbarDirective
  >;

  /**
   * Checks if there is a [KbNavigationDrawerMenuDirective] has content.
   */
  public get isMenuAvailable(): boolean {
    return this._drawerMenu ? this._drawerMenu.length > 0 : false;
  }

  /**
   * Checks if there is a [KbNavigationDrawerToolbarDirective] has content.
   */
  public get isCustomToolbar(): boolean {
    return this._toolbar ? this._toolbar.length > 0 : false;
  }

  /**
   * Checks if there is a background image for the toolbar.
   */
  public get isBackgroundAvailable(): boolean {
    return !!this._backgroundImage;
  }

  /**
   * sidenavTitle?: string
   * Title set in sideNav.
   */
  @Input() public sidenavTitle: string;

  /**
   * icon?: string
   *
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
   * avatar?: string
   *
   * avatar url to be displayed before the title
   * If [icon] or [logo] are set, then this will not be shown.
   */
  @Input() public avatar: string;

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, default is used.
   */
  @Input() public color: 'accent' | 'primary' | 'warn';

  /**
   * navigationRoute?: string
   *
   * option to set the combined route for the icon, logo, and sidenavTitle.
   */
  @Input() public navigationRoute: string;

  /**
   * backgroundUrl?: SafeResourceUrl
   *
   * image to be displayed as the background of the toolbar.
   * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
   */
  @Input('backgroundUrl')
  // TODO Angular complains with warnings if this is type [SafeResourceUrl].. so we will make it <any> until its fixed.
  // https://github.com/webpack/webpack/issues/2977
  public set backgroundUrl(backgroundUrl: any) {
    if (backgroundUrl) {
      const sanitizedUrl: string = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
      this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
    }
  }
  public get backgroundImage(): SafeStyle {
    return this._backgroundImage;
  }

  /**
   * name?: string
   *
   * string to be displayed as part of the navigation drawer sublabel.
   * if [email] is not set, then [name] will be the toggle menu text.
   */
  @Input() public name: string;

  /**
   * email?: string
   *
   * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
   * if [email] and [name] are not set, then the toggle menu is not rendered.
   */
  @Input() public email: string;

  /**
   * Checks if router was injected.
   */
  public get routerEnabled(): boolean {
    return !!this._router && !!this.navigationRoute;
  }

  constructor(
    @Inject(forwardRef(() => KbLayoutComponent)) private _layout: KbLayoutComponent,
    @Optional() private _router: Router,
    private _sanitize: DomSanitizer,
  ) {}

  public ngOnInit(): void {
    this._closeSubscription = this._layout.sidenav.openedChange.subscribe((opened: boolean) => {
      if (!opened) {
        this._menuToggled = false;
      }
    });
  }

  public ngOnDestroy(): void {
    if (this._closeSubscription) {
      this._closeSubscription.unsubscribe();
      this._closeSubscription = undefined;
    }
  }

  public toggleMenu(): void {
    if (this.isMenuAvailable) {
      this._menuToggled = !this._menuToggled;
    }
  }

  public handleNavigationClick(): void {
    if (this.routerEnabled) {
      this._router.navigateByUrl(this.navigationRoute);
      this.close();
    }
  }

  /**
   * Proxy toggle method to access sidenav from outside (from kb-layout template).
   */
  public toggle(): Promise<MatDrawerToggleResult> {
    return this._layout.toggle();
  }

  /**
   * Proxy open method to access sidenav from outside (from kb-layout template).
   */
  public open(): Promise<MatDrawerToggleResult> {
    return this._layout.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from kb-layout template).
   */
  public close(): Promise<MatDrawerToggleResult> {
    return this._layout.close();
  }
}
