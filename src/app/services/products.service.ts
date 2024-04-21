import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item } from '../models/item';

@Injectable()
export class ProductsService {

  private urlData = '/assets/products-data.json';

  constructor(private readonly httpClient: HttpClient) { }

  products$: Observable<Item[]> = this.httpClient.get<Item[]>(this.urlData);

  productById$ = (id: string): Observable<Item | undefined> => this.httpClient.get<Item[]>(this.urlData).pipe(
    map((products: Item[]) => products.find(p => p.id === id))
  );

}
