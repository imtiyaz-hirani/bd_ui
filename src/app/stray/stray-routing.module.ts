import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStrayComponent } from './component/add-stray/add-stray.component';
import { EditStrayComponent } from './component/edit-stray/edit-stray.component';
import { StrayComponent } from './stray.component';

const routes: Routes = [
  {
    path:'',
    component:StrayComponent
  },
  {
    path:'add-stray',
    component : AddStrayComponent
  },
  {
    path: 'edit-stray/:cstrayno',
    component: EditStrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrayRoutingModule { }
