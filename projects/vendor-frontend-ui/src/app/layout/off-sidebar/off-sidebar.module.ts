import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffSidebarComponent } from './off-sidebar.component';
import { WidgetsModule } from './widgets/widgets.module';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    WidgetsModule,
    TextBoxModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [OffSidebarComponent],
  exports: [OffSidebarComponent],
})
export class OffSidebarModule {}
