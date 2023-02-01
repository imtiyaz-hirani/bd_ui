import { BreadcrumbData } from './breadcrumb.data';
import { IBreadcrumb } from './ibreadcrumb';

export abstract class Breadcrumb {
  breadcrumbData;

  constructor(breadcrumbData: BreadcrumbData) {
    this.breadcrumbData = breadcrumbData;
  }

  /**
   * Abstract method to override within base class to create new breadcrumb
   */
  abstract createBreadcrumb();

  /**
   * Remove breadcrumb by passed key or last breadcrumb from array of breadcrumb array list
   *
   * @param breadcrumbKey as String
   */
  removeBreadcrumb(breadcrumbKey?) {
    if (breadcrumbKey) {
      const index = this.breadcrumbData.breadcrumb.findIndex(
        (element) => element.key == breadcrumbKey
      );
      if (index > -1) {
        this.breadcrumbData.breadcrumb.splice(index, 1);
      }
    } else {
      this.breadcrumbData.popBreadcrumbData();
    }
  }

  /**
   * Clear whole breadcrumbData
   */
  clearBreadcrumbData() {
    this.breadcrumbData.clearBreadCrumb();
  }

  /**
   * Get Index of breadcrumb within array by key
   *
   * @param breadcrumbKey as String
   */
  getBreadcrumbIndexByKey(breadcrumbKey?) {
    const index = this.breadcrumbData.breadcrumb.findIndex(
      (element) => element.key == breadcrumbKey
    );
    return index;
  }

  /**
   * Upate existing breadcrumb obj with passed breadcrumb key within breadcrumb data
   *
   * @param breadcrumbKey as String
   * @param breadcrumbItem as IBreadcrumb type
   */
  updateBreadcrumbData(breadcrumbKey, breadcrumbItem: IBreadcrumb) {
    const index = this.breadcrumbData.breadcrumb.findIndex(
      (element) => element.key == breadcrumbKey
    );
    if (index > -1) {
      this.breadcrumbData.breadcrumb[index] = breadcrumbItem;
    }
  }
}
