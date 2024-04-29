import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ListPaginationModule } from '../core/list-pagination/list-pagination.module';
import { PipesModule } from '../core/pipes/pipes.module';
import { ProductsService } from '../services/products.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilteringComponent } from './product-filtering/product-filtering.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPricesComponent } from './product-prices/product-prices.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PipesModule,
    ListPaginationModule,
    MatDialogModule,
    ProductPricesComponent,
    ProductFilteringComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
