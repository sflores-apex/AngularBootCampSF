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

  protected selectedPage: number = 1;

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

}
