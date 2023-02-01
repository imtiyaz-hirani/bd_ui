
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ThemesService } from './themes/themes.service';
import { TranslatorService } from './translator/translator.service';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [ThemesService, TranslatorService],
  declarations: [],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. You should import Core modules only in the AppModule.'
      );
    }
  }
}
