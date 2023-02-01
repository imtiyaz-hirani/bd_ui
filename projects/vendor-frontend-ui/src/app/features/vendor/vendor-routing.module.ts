import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorComponent } from './vendor.component';

const routes: Routes = [
  { path: '', component : VendorComponent,
  children :[
    { path: '', loadChildren: () => import('./supplier-invitation-list/supplier-invitation-list.module')
  .then(m => m.SupplierInvitationListModule) }
  ]
  }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
