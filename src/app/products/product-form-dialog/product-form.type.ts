import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Item, Photo, Price, Prices } from '../../models/item';

export type PriceFormGroup = FormGroup<{
  tag: FormControl<Extract<keyof Prices, string>>,
  price: FormControl<Price>
}>;

export type PhotoFormGroup = FormGroup<{
  urlPhoto: FormControl<Photo>;
}>;

export type ProductFormGroup = FormGroup<{
  title: FormControl<Item['title']>,
  prices: FormArray<PriceFormGroup>,
  photos: FormArray<PhotoFormGroup>,
  description: FormControl<Item['description']>,
  offerDiscount: FormControl<Item['offerDiscount']>
}>;
