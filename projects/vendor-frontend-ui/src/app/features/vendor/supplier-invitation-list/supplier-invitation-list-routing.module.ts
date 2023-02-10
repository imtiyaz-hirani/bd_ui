import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStray } from './components/add-stray/add-stray.component';
import { EditStray } from './components/edit-stray/edit-stray.component';


import { SupplierInvitationListComponent } from './supplier-invitation-list.component';

const routes: Routes = [
  { path: '', component: SupplierInvitationListComponent },
  { path : 'add-stray', component: AddStray },
  { path : 'add-stray/:cstrayno', component: EditStray }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierInvitationListRoutingModule { }
