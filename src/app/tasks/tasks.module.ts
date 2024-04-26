import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskNineComponent } from './task-nine/task-nine.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskNineComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
