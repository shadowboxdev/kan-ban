import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'kb-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss'],
})
export class KbPromptDialogComponent implements AfterViewInit {
  title: string;
  message: string;
  value: string;
  cancelButton: string = 'CANCEL';
  acceptButton: string = 'ACCEPT';

  @ViewChild('input', { static: true }) _input: ElementRef;

  constructor(private _dialogRef: MatDialogRef<KbPromptDialogComponent>) {}

  ngAfterViewInit(): void {
    // focus input once everything is rendered and good to go
    Promise.resolve().then(() => {
      (<HTMLInputElement>this._input.nativeElement).focus();
    });
  }

  /**
   * Method executed when input is focused
   * Selects all text
   */
  handleInputFocus(): void {
    (<HTMLInputElement>this._input.nativeElement).select();
  }

  cancel(): void {
    this._dialogRef.close();
  }

  accept(): void {
    this._dialogRef.close(this.value);
  }
}
