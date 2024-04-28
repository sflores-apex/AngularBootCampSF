import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormInputComponent } from '../../core/form/form-input/form-input.component';
import { INPUT_FORM_MESSAGES } from '../../core/form/form-input/form-input.messages';
import { uniqueArrayFieldValidator } from '../../core/form/validators/unique-array-field.validator';
import { Item } from '../../models/item';
import { ProductsService } from '../../services/products.service';
import { PRODUCT_FORM_LABELS } from './product-form.labels';
import { PhotoFormGroup, PriceFormGroup, ProductFormGroup } from './product-form.type';

@Component({
  selector: 'app-product-form-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    FormInputComponent,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './product-form-dialog.component.html',
  styleUrl: './product-form-dialog.component.scss'
})
export class ProductFormDialogComponent {

  protected label: any = PRODUCT_FORM_LABELS;
  protected messages: any = INPUT_FORM_MESSAGES;

  protected productForm: ProductFormGroup = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    prices: new FormArray(
      [this.getNewPrice()],
      [Validators.required, uniqueArrayFieldValidator('tag')]
    ),
    photos: new FormArray(
      [this.getNewPhoto()],
      [Validators.required, uniqueArrayFieldValidator('urlPhoto')]
    ),
    description: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    offerDiscount: new FormControl()
  });

  constructor(private dialogRef: MatDialogRef<ProductFormDialogComponent>,
    private readonly productsService: ProductsService) { }

  protected saveProduct(): void {
    if (this.productForm.invalid) {
      return;
    }

    const newProduct: Item = {
      ...this.productForm.getRawValue(),
      prices: this.productForm.controls.prices.getRawValue()
        .map(p => ({ [p.tag]: p.price })).reduce(((r, c) => Object.assign(r, c)), {}),
      photos: [...this.productForm.controls.photos.getRawValue().map(p => p.urlPhoto)]
    };

    this.productsService.saveProduct(newProduct);
    this.dialogRef.close();
  }

  /* ----------- PRICES -----------------*/
  private getNewPrice(): PriceFormGroup {
    return new FormGroup({
      tag: new FormControl('', {
        nonNullable: true,
        validators: Validators.pattern('^[a-zA-Z0-9._-]+$')
      }),
      price: new FormControl(0, {
        nonNullable: true,
      }),
    });
  }

  protected addPrice(): void {
    this.productForm.controls.prices.push(this.getNewPrice());
  }

  protected removePrice(priceIndex: number): void {
    if (this.productForm.controls.prices.length > 1) {
      this.productForm.controls.prices.removeAt(priceIndex);
    }
  }

  /* ----------- PHOTOS -----------------*/
  private getNewPhoto(): PhotoFormGroup {
    return new FormGroup({
      urlPhoto: new FormControl('', {
        nonNullable: true,
      })
    });
  }

  protected addPhoto(): void {
    this.productForm.controls.photos.push(this.getNewPhoto());
  }

  protected removePhoto(photoIndex: number): void {
    if (this.productForm.controls.photos.length > 1) {
      this.productForm.controls.photos.removeAt(photoIndex);
    }
  }

}
