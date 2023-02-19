import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrayRoutingModule } from './stray-routing.module';
import { StrayComponent } from './stray.component';
import { StrayQueryComponent } from './component/stray-query/stray-query.component';
import { StrayGridComponent } from './component/stray-grid/stray-grid.component';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from "primeng/inputtext";
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStrayComponent } from './component/add-stray/add-stray.component';
import {FileUploadModule} from 'primeng/fileupload';
import { StrayService } from './service/stray-service';
import { MessageService } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { EditStrayComponent } from './component/edit-stray/edit-stray.component';




@NgModule({
  declarations: [
    StrayComponent,
    StrayQueryComponent,
    StrayGridComponent,
    AddStrayComponent,
    EditStrayComponent
  ],
  imports: [
    CommonModule,
    StrayRoutingModule,
    ToastModule,
    RippleModule,
    TableModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    FileUploadModule,
    OverlayPanelModule
  ],
  providers :[MessageService, StrayService]
})
export class StrayModule { }
