import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';

const routes: Routes = [
  {
    path: 'a1',
    component: A1Component
  },
  {
    path: 'a2',
    component: A2Component
  },
  {
    path: 'a3',
    component: A3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARoutingModule { }
