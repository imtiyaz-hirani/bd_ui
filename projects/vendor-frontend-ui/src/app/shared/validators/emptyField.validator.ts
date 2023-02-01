import { FormControl } from '@angular/forms';

export class EmptyFieldValidation {
  /**
   * Custom validator for display validation error for empty values 
   * @param control : form control
   * @returns  returns required error value
   */
  static required(control: FormControl): { [checkRequired: string]: boolean } | null {
    if (control.value !== null && control.value !== undefined) {
    return (control.value === "" || control.value.toString().trim() == "") ?
    { "checkRequired": true } : null;
    } else {
    return { "checkRequired": true };
    }
  }
}