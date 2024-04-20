import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';

const routes: Routes = [
  {
    path: 'b1',
    component: B1Component
  },
  {
    path: 'b2',
    component: B2Component
  },
  {
    path: 'b3',
    component: B3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
