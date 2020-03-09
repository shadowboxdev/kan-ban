import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';

import {
  KbSidesheetComponent,
  KbSidesheetHeaderComponent,
  KbSidesheetContentDirective,
  KbSidesheetTitleDirective,
  KbSidesheetActionsDirective,
} from './sidesheet.component';

const KB_SIDESHEET: Type<any>[] = [
  KbSidesheetComponent,
  KbSidesheetHeaderComponent,
  KbSidesheetContentDirective,
  KbSidesheetTitleDirective,
  KbSidesheetActionsDirective,
];

@NgModule({
  imports: [CommonModule, MatDividerModule],
  declarations: [KB_SIDESHEET],
  exports: [KB_SIDESHEET],
})
export class KbSidesheetModule {}
