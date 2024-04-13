import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SampleModule } from '../sample/sample.module';
import { InjectableByModuleService } from './injectable-by-module.service';
import { TaskSixComponent } from './task-six.component';

@NgModule({
  declarations: [
    TaskSixComponent
  ],
  imports: [
    CommonModule,
    SampleModule
  ],
  exports: [
    TaskSixComponent
  ],
  providers: [
    InjectableByModuleService
  ]
})
export class TaskSixModule { }
