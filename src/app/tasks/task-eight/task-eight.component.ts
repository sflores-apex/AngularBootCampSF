import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNameComponent } from './dialog-name/dialog-name.component';

@Component({
  selector: 'app-task-eight',
  templateUrl: './task-eight.component.html',
  styleUrl: './task-eight.component.scss'
})
export class TaskEightComponent {

  protected dialogName: string = '';

  constructor(public dialog: MatDialog) { }

  protected openDialog(): void {
    const dialogRef = this.dialog.open(DialogNameComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.dialogName = result;
    });
  }
}
