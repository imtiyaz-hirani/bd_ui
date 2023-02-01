import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { SharedModule } from '@app/shared/shared.module';
import { SyncfusionModules } from '@app/shared/syncfusion.module';

@NgModule({
  declarations: [VendorComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,SharedModule, SyncfusionModules
  ]
})
export class VendorModule { }
