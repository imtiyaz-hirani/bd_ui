import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../utils/utils';
@Pipe({
  name: 'sortFieldBySequence',
})
export class SortFieldBySequencePipe implements PipeTransform {
  transform(
    array: any[],
    fieldToSort: string,
    sortOrder = 'asc',
    nestedField = null
  ): any {
    if (!Array.isArray(array)) {
      return false;
    }
    array.sort((f1, f2) => {
      const a = nestedField
        ? Utils.covertToLocaleUpperCase(f1[fieldToSort][nestedField])
        : Utils.covertToLocaleUpperCase(f1[fieldToSort]);
      const b = nestedField
        ? Utils.covertToLocaleUpperCase(f2[fieldToSort][nestedField])
        : Utils.covertToLocaleUpperCase(f2[fieldToSort]);
      const order = sortOrder === 'asc' ? 1 : -1;
      return a < b ? -order : a > b ? order : 0;
    });
    return array;
  }
}
