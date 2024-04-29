import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListPaginationComponent } from './list-pagination.component';

@NgModule({
  declarations: [
    ListPaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListPaginationComponent
  ]
})
export class ListPaginationModule { }
