import { Injectable } from '@angular/core';
import { IBreadcrumb } from './ibreadcrumb';

@Injectable()
export class BreadcrumbData {
  breadcrumb = new Array<IBreadcrumb>();

  /**
   * push new breadcrumb obj within existing breadcrumb
   *
   * @param breadcrumbObj object of IBreadcrumb type
   */
  pushBreadcrumbData(breadcrumbObj: IBreadcrumb): void {
    const index = this.breadcrumb.findIndex(
      (element) => element.key === breadcrumbObj.key
    );
    if (index === -1) {
      this.breadcrumb.push(breadcrumbObj);
    }
  }

  /**
   * Remove last breadcrumb from breadcrumb list array
   */
  popBreadcrumbData(): void {
    this.breadcrumb.pop();
  }

  /**
   * Clear breadcrumb list array
   */
  clearBreadCrumb(): void {
    this.breadcrumb = new Array<IBreadcrumb>();
  }
}
