import { FormControl, FormGroup } from '@angular/forms';

export type ProductFilteringFormGroup = FormGroup<{
  filter: FormControl<string>
}>;
