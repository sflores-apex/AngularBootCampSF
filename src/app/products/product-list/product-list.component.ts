import { Component } from '@angular/core';
import { Observable, Subject, catchError, combineLatest, map, of, startWith } from 'rxjs';
import { Item } from '../../models/item';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  private paginationSubject$$: Subject<number> = new Subject<number>();
  private pagination$: Observable<number> = this.paginationSubject$$.asObservable();

  protected filterValue: string = '';

  protected products$: Observable<Item[]> = this.productsService.products$.pipe(
    catchError((error: Error): Observable<Item[]> => {
      console.error('There was an error retrieving products: %0', error);
      return of([]);
    })
  );

  protected paginatedProducts$: Observable<Item[]> = combineLatest({
    pagination: this.pagination$.pipe(startWith(0)),
    products: this.products$,
  }).pipe(
    map(({ pagination, products }: { pagination: number; products: Item[]; })
      : Item[] => products.slice(pagination, pagination + 5)
    )
  );

  constructor(private readonly productsService: ProductsService) { }

  protected paginateBy(page: number): void {
    this.paginationSubject$$.next(page);
  }

}
