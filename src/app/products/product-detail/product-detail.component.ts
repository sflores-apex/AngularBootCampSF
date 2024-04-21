import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { Item } from '../../models/item';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  protected productById$: Observable<Item | undefined> = this.route.paramMap.pipe(
    switchMap(params => {
      const idProduct = String(params.get('id'));
      return this.productsService.productById$(idProduct);
    }),
    catchError((error: Error): Observable<Item | undefined> => {
      console.error('There was an error retrieving the product: %0', error);
      return of(undefined);
    })
  );

  constructor(private readonly route: ActivatedRoute, private readonly productsService: ProductsService) { }

}
