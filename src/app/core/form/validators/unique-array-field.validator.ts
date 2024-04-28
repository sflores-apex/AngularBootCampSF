import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function uniqueArrayFieldValidator(fieldName: string): ValidatorFn {
  return (formArray: AbstractControl): ValidationErrors | null => {
    if (!(formArray instanceof FormArray)) {
      return null;
    }

    const isRepeated = formArray.controls.some((c, i) => {
      const valueToSearch = c.get(fieldName)?.value;
      return formArray.controls.some((c2, i2) => c2.get(fieldName)?.value === valueToSearch && i !== i2);
    });

    return isRepeated ? { unique: true } : null;
  }
}
