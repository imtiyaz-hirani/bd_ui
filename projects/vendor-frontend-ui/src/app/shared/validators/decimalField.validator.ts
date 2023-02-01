import { FormControl } from '@angular/forms';

export class DecimalFieldValidation {
  /**
   *
   * @param {FormControl} control
   */
  static checkDecimal(control: FormControl) {
    if (control.value) {
      const str = control.value.toString();
      const splitStrDotArr = str.split('.');
      return str.indexOf('.') > -1 &&
        (str.split('.')[1].length > 10)
        ? { checkDecimal: true }
        : null;
    } else {
      return null;
    }
  }

  /**
   *
   * @param {FormControl} control
   */
  static checkInvalidDecimal(control: FormControl) {
    if (control.value) {
      const str = control.value.toString();
      const splitStrDotArr = str.split('.');
      return str.indexOf('.') > -1 &&
        (splitStrDotArr.length > 2)
        ? { checkInvalidDecimal: true }
        : null;
    } else {
      return null;
    }
  }
}
