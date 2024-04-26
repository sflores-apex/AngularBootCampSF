import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapitalizePipe } from './task-seven/capitalize.pipe';
import { TaskSevenComponent } from './task-seven/task-seven.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskSevenComponent,
    CapitalizePipe
  ],
  imports: [
<<<<<<< HEAD
    CommonModule,
    CurrencyPipe
  ],
  exports: [
    TasksComponent
=======
    CommonModule
>>>>>>> origin/main
  ]
})
export class TasksModule { }
