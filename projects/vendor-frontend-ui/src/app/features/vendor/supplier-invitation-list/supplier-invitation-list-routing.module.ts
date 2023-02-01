import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierInvitationListComponent } from './supplier-invitation-list.component';

const routes: Routes = [{ path: '', component: SupplierInvitationListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierInvitationListRoutingModule { }
