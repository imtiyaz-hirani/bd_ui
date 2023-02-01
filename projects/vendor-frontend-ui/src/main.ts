import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VendorFrontendUiModule } from './app/vendor-frontend-ui.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(VendorFrontendUiModule)
  .catch((err) => console.error(err));
