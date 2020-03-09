import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import {
  KbDialogComponent,
  KbDialogTitleDirective,
  KbDialogActionsDirective,
  KbDialogContentDirective,
} from './dialog.component';
import { KbAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { KbConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { KbPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { KbDialogService } from './services/dialog.service';

const KB_DIALOGS: Type<any>[] = [
  KbAlertDialogComponent,
  KbConfirmDialogComponent,
  KbPromptDialogComponent,
  KbDialogComponent,
  KbDialogTitleDirective,
  KbDialogActionsDirective,
  KbDialogContentDirective,
];

const KB_DIALOGS_ENTRY_COMPONENTS: Type<any>[] = [
  KbAlertDialogComponent,
  KbConfirmDialogComponent,
  KbPromptDialogComponent,
];

@NgModule({
  imports: [FormsModule, CommonModule, MatDialogModule, MatInputModule, MatButtonModule],
  declarations: [KB_DIALOGS],
  exports: [KB_DIALOGS],
  providers: [KbDialogService],
})
export class KbDialogsModule {}
