import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  menuItems: any[];
  bottomMenuItems: any[];

  constructor() {
    this.menuItems = [];
    this.bottomMenuItems = [];
  }

  addMenu(
    items: Array<{
      text: string;
      heading?: boolean;
      link?: string; // internal route links
      elink?: string; // used only for external links
      target?: string; // anchor target="_blank|_self|_parent|_top|framename"
      icon?: string;
      alert?: string;
      submenu?: any[];
    }>
  ) {
    items.forEach((item) => {
      this.menuItems.push(item);
    });
  }

  addBottomMenu(
    items: Array<{
      text: string;
      heading?: boolean;
      link?: string; // internal route links
      elink?: string; // used only for external links
      target?: string; // anchor target="_blank|_self|_parent|_top|framename"
      icon?: string;
      alert?: string;
      submenu?: any[];
    }>
  ) {
    items.forEach((item) => {
      this.bottomMenuItems.push(item);
    });
  }

  getMenu() {
    return this.menuItems;
  }

  getBottomMenu() {
    return this.bottomMenuItems;
  }
}
