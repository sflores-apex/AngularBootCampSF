import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskOneComponent } from './task-one/task-one.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
