import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListFilteringPipe } from './list-filtering.pipe';



@NgModule({
  declarations: [
    ListFilteringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListFilteringPipe
  ]
})
export class PipesModule { }
