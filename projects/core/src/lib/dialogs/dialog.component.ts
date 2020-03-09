import { Component, Directive, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Directive({ selector: 'kb-dialog-title' })
export class KbDialogTitleDirective {}

@Directive({ selector: 'kb-dialog-content' })
export class KbDialogContentDirective {}

@Directive({ selector: 'kb-dialog-actions' })
export class KbDialogActionsDirective {}

@Component({
  selector: 'kb-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class KbDialogComponent implements AfterContentInit {
  @ContentChildren(KbDialogTitleDirective, { descendants: true })
  public dialogTitle: QueryList<KbDialogTitleDirective>;

  @ContentChildren(KbDialogContentDirective, { descendants: true })
  public dialogContent: QueryList<KbDialogContentDirective>;

  @ContentChildren(KbDialogActionsDirective, { descendants: true })
  public dialogActions: QueryList<KbDialogActionsDirective>;

  public ngAfterContentInit(): void {
    if (this.dialogTitle.length > 1) {
      throw new Error('Duplicate kb-dialog-title component at in kb-dialog.');
    }

    if (this.dialogContent.length > 1) {
      throw new Error('Duplicate kb-dialog-content component at in kb-dialog.');
    }

    if (this.dialogActions.length > 1) {
      throw new Error('Duplicate kb-dialog-actions component at in kb-dialog.');
    }
  }
}
