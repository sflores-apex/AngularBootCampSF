import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskSixModule } from './task-six/task-six.module';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TaskSixModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
