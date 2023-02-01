import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} itemsList
   * @param {string} searchText
   * @param {key} key
   * @returns {any[]}
   */
  transform(itemsList: any[], searchText: string, key: string): any[] {
    if (!itemsList) {
      return [];
    }
    if (!searchText) {
      return itemsList;
    }
    searchText = searchText.toLocaleLowerCase();

    return itemsList.filter((item) =>
      item[key].toLocaleLowerCase().includes(searchText)
    );
  }
}
