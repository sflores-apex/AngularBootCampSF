import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagingListPipe } from './paging-list.pipe';
import { RoundUpPipe } from './round-up.pipe';

@NgModule({
  declarations: [
    PagingListPipe,
    RoundUpPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagingListPipe,
    RoundUpPipe
  ]
})
export class PipesModule { }
