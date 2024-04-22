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
  private offersSubject$$: Subject<boolean> = new Subject<boolean>();
  private offers$: Observable<boolean> = this.offersSubject$$.asObservable();

  protected filterValue: string = '';

  protected products$: Observable<Item[]> = this.productsService.products$.pipe(
    catchError((error: Error): Observable<Item[]> => {
      console.error('There was an error retrieving products: %0', error);
      return of([]);
    })
  );

  protected productsOffered$: Observable<Item[]> = combineLatest({
    offers: this.offers$.pipe(startWith(false)),
    products: this.products$,
  }).pipe(
    map(({ offers, products }: { offers: boolean; products: Item[]; })
      : Item[] => !offers ? products : products.filter(p => !!p?.offerDiscount))
  );

  protected paginatedProducts$: Observable<Item[]> = combineLatest({
    pagination: this.pagination$.pipe(startWith(0)),
    productsOffered: this.productsOffered$,
  }).pipe(
    map(({ pagination, productsOffered }: { pagination: number; productsOffered: Item[]; })
      : Item[] => productsOffered.slice(pagination, pagination + 5)
    )
  );

  constructor(private readonly productsService: ProductsService) { }

  protected paginateBy(page: number): void {
    this.paginationSubject$$.next(page);
  }

  protected showOnlyOffers(e: Event): void {
    this.offersSubject$$.next((e.target as HTMLInputElement).checked);
    this.paginationSubject$$.next(0);
  }

}
