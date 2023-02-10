import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncfusionModules } from '@app/shared/syncfusion.module';

import { SupplierInvitationListRoutingModule } from './supplier-invitation-list-routing.module';
import { SupplierInvitationListComponent } from './supplier-invitation-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { VendorGridComponent } from './components/grid/vendor-grid.component';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { SharedModule } from '@app/shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { AddStray } from './components/add-stray/add-stray.component';
import { EditStray } from './components/edit-stray/edit-stray.component';
@NgModule({
  declarations: [SupplierInvitationListComponent, ToolbarComponent, VendorGridComponent, FilterComponent,
  AddStray,EditStray],
  imports: [
    CommonModule,
    SupplierInvitationListRoutingModule,TabModule,SyncfusionModules,SharedModule,QueryBuilderModule
  ]
})
export class SupplierInvitationListModule { }
