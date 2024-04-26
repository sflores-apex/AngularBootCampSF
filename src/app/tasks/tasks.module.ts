import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskFourComponent } from './task-four/task-four.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskFourComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TasksModule { }
