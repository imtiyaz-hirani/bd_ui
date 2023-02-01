import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true,
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) {
        // less than 30 seconds ago will show as 'Just now'
        return 'Just now';
      }
      const intervals = {
        year: 31536000,
        month: 2592000,
        w: 604800,
        d: 86400,
        h: 3600,
        m: 60,
        s: 1,
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          return `${counter}${i} ago`; // plural (2 days )
        }
      }
    }
    return value;
  }
}
