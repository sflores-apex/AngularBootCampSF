import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskNineComponent } from './task-nine/task-nine.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskNineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
