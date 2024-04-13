import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskThreeComponent } from './task-three/task-three.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskThreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
