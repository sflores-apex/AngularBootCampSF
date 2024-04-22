import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListFilteringPipe } from './list-filtering.pipe';
import { RoundUpPipe } from './round-up.pipe';



@NgModule({
  declarations: [
    ListFilteringPipe,
    RoundUpPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListFilteringPipe,
    RoundUpPipe
  ]
})
export class PipesModule { }
