import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { CapitalizeDirective } from './task-three/capitalize.directive';

@NgModule({
  declarations: [
    TasksComponent,
    TaskThreeComponent,
    CapitalizeDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
