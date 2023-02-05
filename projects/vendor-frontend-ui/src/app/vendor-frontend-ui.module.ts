/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DependencyInjector } from './dependency-injector.service';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector, ErrorHandler } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { OAuthModule } from 'angular-oauth2-oidc';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoreModule } from './core/core.module';
import { BaseService } from './shared/services/base.service';
import { VendorFrontendUiComponent } from './vendor-frontend-ui.component';
import { VendorFrontendUiRoutingModule } from './vendor-frontend-ui-routing.module';
import { TriggerService } from './core/services/trigger.service';
import { ErrorService } from './core/services/error.service';
import { ToastService } from './core/services/toast.service';
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [VendorFrontendUiComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    TranslateModule,
    VendorFrontendUiRoutingModule,
    CoreModule,
  ],
  providers: [
    BaseService,
    TriggerService,
    ToastService,
    { provide: APP_BASE_HREF, useValue: environment.baseHref },
    ErrorService,
  ],
  bootstrap: [VendorFrontendUiComponent],
})
export class VendorFrontendUiModule {
  constructor(injector: Injector) {
    DependencyInjector.setInjector(injector);
  }
}
