import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListPaginationModule } from '../core/list-pagination/list-pagination.module';
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
    ListPaginationModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
