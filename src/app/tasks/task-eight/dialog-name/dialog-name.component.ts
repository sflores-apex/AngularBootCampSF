import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-name',
  templateUrl: './dialog-name.component.html',
  styleUrl: './dialog-name.component.scss'
})
export class DialogNameComponent {

  protected name: string = '';

  constructor(protected dialogRef: MatDialogRef<DialogNameComponent>) { }

}
