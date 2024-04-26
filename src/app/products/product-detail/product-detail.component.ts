import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Item } from '../../models/item';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  protected productById$: Observable<Item> = this.productsService.productDetail$.pipe(
    catchError((error: Error): Observable<Item> => {
      console.error('There was an error retrieving the product: %0', error);
      return of({} as Item);
    })
  );

  constructor(private readonly route: ActivatedRoute, private readonly productsService: ProductsService) { }

  public ngAfterViewInit(): void {
    this.route.params.subscribe((params: Params): void => {
      this.productsService.selectProduct(params['id']);
    });
  }

  protected getDiscountPrice(price: number, discount: number): number {
    return price - (price * (discount / 100));
  }

}
