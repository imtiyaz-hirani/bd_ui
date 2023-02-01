import { Pipe, PipeTransform } from '@angular/core';
import { DateAgoPipe } from './date-ago.pipe';
@Pipe({
  name: 'groupByTime',
  pure: true,
})
export class GroupByTimePipe extends DateAgoPipe implements PipeTransform {
  transform(array: any): any {
    const uniqueArray = [];
    array.forEach((currNotif) => {
      const time = super.transform(currNotif.createdDate);
      // Try to get existing notification group
      const currentGroup = uniqueArray.filter(
        (nofiGrp) => super.transform(nofiGrp.createdDate) === time
      );
      // If we've got the existing group, add the notification, otherwise create a new group
      if (currentGroup.length) {
        const uniqueIdx = uniqueArray.findIndex(
          (idx) => idx.createdDate === currentGroup[0].createdDate
        );
        uniqueArray[uniqueIdx]['notifications'].push(currNotif);
      } else {
        uniqueArray.push({
          createdDate: currNotif.createdDate,
          notifications: [currNotif],
        });
      }
    });
    return uniqueArray;
  }
}
