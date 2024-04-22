import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ListPaginationModule } from '../core/list-pagination/list-pagination.module';
import { PipesModule } from '../core/pipes/pipes.module';
import { ProductsService } from '../services/products.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ListPaginationModule,
    FormsModule,
    PipesModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
