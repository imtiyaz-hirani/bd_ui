
import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SettingsService } from './core/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './vendor-frontend-ui.component.html',
  styleUrls: ['./vendor-frontend-ui.component.scss'],
})
export class VendorFrontendUiComponent {
  title = 'vendor-frontend-ui';

  constructor(
    public translateService: TranslateService,
    private settingsService: SettingsService
  ) {
    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    const storageLang = localStorage.getItem('language');
    const browserLang = translateService.getBrowserLang();

    if (storageLang) {
      translateService.use(storageLang);
    } else if (browserLang.match(/en|de/)) {
      translateService.use(browserLang);
    }

    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem('language', event.lang);
    });

    translateService.get('CORE');

    
  }
}
