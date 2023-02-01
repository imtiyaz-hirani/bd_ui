import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../constants';

@Injectable()
export class TranslatorService {
  private defaultLanguage: string = Constants.defaultLanguage;
  private availablelangs = Constants.LANGUAGE_ARR;

  constructor(public translate: TranslateService) {
    if (!translate.getDefaultLang()) {
      translate.setDefaultLang(this.defaultLanguage);
    }

    this.useLanguage();
  }

  useLanguage(lang: string = null) {
    this.translate.use(lang || this.translate.getDefaultLang());
  }

  getAvailableLanguages() {
    return this.availablelangs;
  }
}
