import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, combineLatest, map, startWith } from 'rxjs';
import { Item } from '../models/item';

type Item_ID = Item['id'];

@Injectable()
export class ProductsService {

  private urlData = '/assets/products-data.json';
  private productSelectedSubject$$: Subject<Item_ID> = new Subject<Item_ID>();
  private productSelected$: Observable<Item_ID> = this.productSelectedSubject$$.asObservable();

  private savedProducts: Item[] = [];
  private savedProduct$$: Subject<Item> = new Subject<Item>();
  private savedProduct$: Observable<Item> = this.savedProduct$$.asObservable();

  constructor(private readonly httpClient: HttpClient) { }

  private localProducts$: Observable<Item[]> = this.httpClient.get<Item[]>(this.urlData);

  products$: Observable<Item[]> = combineLatest({
    localProducts: this.localProducts$,
    savedProduct: this.savedProduct$.pipe(startWith(null)),
  }).pipe(
    map(({ localProducts, savedProduct }: { localProducts: Item[]; savedProduct: Item | null; })
      : Item[] => !savedProduct ? localProducts : [...this.savedProducts, ...localProducts])
  );

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

  saveProduct(product: Item): void {
    product.id = 'x' + Math.floor(Math.random() * 100);
    this.savedProducts.push(product);
    this.savedProduct$$.next(product);
  }

}
