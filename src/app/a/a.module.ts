import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZModule } from '../z/z.module';
import { ARoutingModule } from './a-routing.module';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';


@NgModule({
  declarations: [
    A1Component,
    A2Component,
    A3Component
  ],
  imports: [
    CommonModule,
    ARoutingModule,
    ZModule
  ]
})
export class AModule { }
