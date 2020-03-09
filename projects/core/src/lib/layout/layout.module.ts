import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { KbLayoutComponent } from './layout.component';
import { KbLayoutToggleDirective, KbLayoutCloseDirective, KbLayoutOpenDirective } from './layout.directives';
import { KbLayoutNavComponent } from './layout-nav/layout-nav.component';
import { KbLayoutNavListComponent } from './layout-nav-list/layout-nav-list.component';
import {
  KbLayoutNavListToggleDirective,
  KbLayoutNavListCloseDirective,
  KbLayoutNavListOpenDirective,
} from './layout-nav-list/layout-nav-list.directives';
import { KbLayoutCardOverComponent } from './layout-card-over/layout-card-over.component';
import { KbLayoutManageListComponent } from './layout-manage-list/layout-manage-list.component';
import {
  KbLayoutManageListToggleDirective,
  KbLayoutManageListCloseDirective,
  KbLayoutManageListOpenDirective,
} from './layout-manage-list/layout-manage-list.directives';
import { KbLayoutFooterComponent } from './layout-footer/layout-footer.component';

import {
  KbNavigationDrawerComponent,
  KbNavigationDrawerMenuDirective,
  KbNavigationDrawerToolbarDirective,
} from './navigation-drawer/navigation-drawer.component';

const KB_LAYOUTS: Type<any>[] = [
  KbLayoutComponent,
  KbLayoutToggleDirective,
  KbLayoutCloseDirective,
  KbLayoutOpenDirective,

  KbLayoutNavComponent,

  KbLayoutNavListComponent,
  KbLayoutNavListToggleDirective,
  KbLayoutNavListCloseDirective,
  KbLayoutNavListOpenDirective,

  KbLayoutCardOverComponent,

  KbLayoutManageListComponent,
  KbLayoutManageListToggleDirective,
  KbLayoutManageListCloseDirective,
  KbLayoutManageListOpenDirective,

  KbLayoutFooterComponent,

  KbNavigationDrawerComponent,
  KbNavigationDrawerMenuDirective,
  KbNavigationDrawerToolbarDirective,
];

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [...KB_LAYOUTS],
  exports: [...KB_LAYOUTS],
})
export class KbLayoutModule {}
