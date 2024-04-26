import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyFirstComponent } from './my-first.component';

const routes = [
  {
    path: '',
    component: MyFirstComponent,
  }
];

@NgModule({
  declarations: [
    MyFirstComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyFirstModule { }
