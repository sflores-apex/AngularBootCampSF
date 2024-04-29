import { AfterViewInit, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { FormInputComponent } from '../../core/form/form-input/form-input.component';
import { ProductFilteringFormGroup } from './product-filtering.type';

@Component({
  selector: 'app-product-filtering',
  standalone: true,
  imports: [
    FormInputComponent,
    ReactiveFormsModule
  ],
  template: `<app-form-input label="Product Filtering" [formGrp]="productFiltering" formCtrlName="filter" />`
})
export class ProductFilteringComponent implements AfterViewInit, OnDestroy {

  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

  protected productFiltering: ProductFilteringFormGroup = new FormGroup({
    filter: new FormControl('', {
      nonNullable: true
    })
  });

  private destroy$$: Subject<void> = new Subject<void>();

  ngAfterViewInit(): void {
    this.productFiltering.controls.filter.valueChanges
      .pipe(
        takeUntil(this.destroy$$),
        debounceTime(1000)
      ).subscribe((value: string) => this.filterChange.next(value));
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

}
