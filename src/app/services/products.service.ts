import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, combineLatest, map } from 'rxjs';
import { Item } from '../models/item';

type Item_ID = Item['id'];

@Injectable()
export class ProductsService {

  private urlData = '/assets/products-data.json';
  private productSelectedSubject$$: Subject<Item_ID> = new Subject<Item_ID>();
  private productSelected$: Observable<Item_ID> = this.productSelectedSubject$$.asObservable();

  constructor(private readonly httpClient: HttpClient) { }

  products$: Observable<Item[]> = this.httpClient.get<Item[]>(this.urlData);

  productDetail$: Observable<Item> = combineLatest({
    products: this.products$,
    productSelected: this.productSelected$,
  }).pipe(
    map(({ products, productSelected }: { products: Item[]; productSelected: Item_ID; })
      : Item => products.find(p => p.id === productSelected) as Item)
  );

  selectProduct(id: Item_ID): void {
    this.productSelectedSubject$$.next(id);
  }

}
