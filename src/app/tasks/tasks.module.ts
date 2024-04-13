import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskFourComponent } from './task-four/task-four.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskFourComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
