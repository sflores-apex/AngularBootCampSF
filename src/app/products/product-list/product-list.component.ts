import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, catchError, combineLatest, map, of, startWith } from 'rxjs';

import { Item } from '../../models/item';
import { ProductsService } from '../../services/products.service';
import { ProductFormDialogComponent } from '../product-form-dialog/product-form-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  private offersSubject$$: Subject<boolean> = new Subject<boolean>();
  private offers$: Observable<boolean> = this.offersSubject$$.asObservable();

  private filterChangeSubject$$: Subject<string> = new Subject<string>();
  private filterChange$: Observable<string> = this.filterChangeSubject$$.asObservable();

  protected selectedPage: number = 1;

  protected products$: Observable<Item[]> = this.productsService.products$.pipe(
    catchError((error: Error): Observable<Item[]> => {
      console.error('There was an error retrieving products: %0', error);
      return of([]);
    })
  );

  protected filteredItems$: Observable<Item[]> = combineLatest({
    offers: this.offers$.pipe(startWith(false)),
    products: this.products$,
    filterChange: this.filterChange$.pipe(startWith(''),
      map((value: string): string => value.toLowerCase())),
  }).pipe(
    map(({ offers, products, filterChange }: { offers: boolean; products: Item[]; filterChange: string })
      : Item[] => {
      const productsOffered = !offers ? products : products.filter(p => !!p?.offerDiscount);
      return productsOffered.filter((product: Item): boolean => product.title.toLowerCase().includes(filterChange));
    })
  );

  constructor(private readonly productsService: ProductsService, private dialog: MatDialog) { }

  protected showOnlyOffers(e: Event): void {
    this.offersSubject$$.next((e.target as HTMLInputElement).checked);
    this.selectedPage = 1;
  }

  protected openFormDialog(): void {
    this.dialog.open(ProductFormDialogComponent, {
      disableClose: true
    });
  }

  protected filterChangeHandler(filter: string): void {
    this.filterChangeSubject$$.next(filter);
  }

}
