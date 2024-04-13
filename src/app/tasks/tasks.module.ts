import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskTwoComponent } from './task-two/task-two.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
