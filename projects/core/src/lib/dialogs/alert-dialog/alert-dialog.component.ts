import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'kb-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class KbAlertDialogComponent {
  title: string;
  message: string;
  closeButton: string = 'CLOSE';

  constructor(private _dialogRef: MatDialogRef<KbAlertDialogComponent>) {}

  close(): void {
    this._dialogRef.close();
  }
}
