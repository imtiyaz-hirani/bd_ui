import { Injectable } from '@angular/core';

@Injectable()
export class ThemesService {
  styleTag: any;
  defaultTheme = 'A';

  constructor() {
    this.createStyle();
    // this.setTheme(this.defaultTheme);
  }

  private createStyle() {
    const head = document.head || document.getElementsByTagName('head')[0];
    this.styleTag = document.createElement('style');
    this.styleTag.type = 'text/css';
    this.styleTag.id = 'appthemes';
    head.appendChild(this.styleTag);
  }

  setTheme(name) {
    // switch (name) {
    //     case 'A':
    //         const themeA = require('../../../assets/styles/app/core/serrala-themes/default-theme.scss');
    //         this.injectStylesheet(themeA);
    //         break;
    // }
  }

  injectStylesheet(css) {
    console.log(css);
    if (css.default) {
      this.styleTag.innerHTML = css.default;
    } else {
      this.styleTag.innerHTML = css;
    }
  }

  getDefaultTheme() {
    return this.defaultTheme;
  }
}
