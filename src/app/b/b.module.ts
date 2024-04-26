import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZModule } from '../z/z.module';
import { BRoutingModule } from './b-routing.module';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';


@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component
  ],
  imports: [
    CommonModule,
    BRoutingModule,
    ZModule
  ]
})
export class BModule { }
