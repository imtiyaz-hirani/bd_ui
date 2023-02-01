import { Injectable } from '@angular/core';

@Injectable()
export class LayoutSettingsService {
  user: any;
  app: any;
  layout: any;

  constructor() {
    // User Settings
    // -----------------------------------
    this.user = {
      name: '',
      logo: '',
    };

    // App Settings
    // -----------------------------------
    this.app = {
      name: 'BlueDart',
      logo: 'assets/images/bluedart_logo.png',
      description: 'Alevate portal',
      year: new Date().getFullYear(),
    };

    // Layout Settings
    // -----------------------------------
    this.layout = {
      hoverExpand: true,
      clickSubMenu: false,
    };
  }

  getAppSetting(name?: any) {
    return name ? this.app[name] : this.app;
  }

  getUserSetting(name?: any) {
    return name ? this.user[name] : this.user;
  }

  getLayoutSetting(name) {
    return name ? this.layout[name] : this.layout;
  }

  getLayoutSettings() {
    return this.layout;
  }

  setAppSetting(name, value) {
    if (typeof this.app[name] !== 'undefined') {
      this.app[name] = value;
    }
  }
  setUserSetting(name, value) {
    if (typeof this.user[name] !== 'undefined') {
      this.user[name] = value;
    }
  }
  setLayoutSetting(name, value) {
    if (typeof this.layout[name] !== 'undefined') {
      return (this.layout[name] = value);
    }
  }

  toggleLayoutSetting(name) {
    return this.setLayoutSetting(name, !this.getLayoutSetting(name));
  }
}
