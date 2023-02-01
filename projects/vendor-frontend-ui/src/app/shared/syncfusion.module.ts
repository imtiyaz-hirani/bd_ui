import { NgModule } from '@angular/core';
import {
  ButtonModule,
  CheckBoxModule,
  ChipListModule,
  RadioButtonModule,
  SwitchAllModule,
} from '@syncfusion/ej2-angular-buttons';
import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';
import {
  UploaderModule,
  TextBoxModule,
  NumericTextBoxModule,
} from '@syncfusion/ej2-angular-inputs';
import {
  DropDownListModule,
  AutoCompleteModule,
  ComboBoxModule,
  ListBoxModule,
} from '@syncfusion/ej2-angular-dropdowns';
import { enableRipple } from '@syncfusion/ej2-base';
import { TabModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import {
  DatePickerModule,
  DateTimePickerModule,
} from '@syncfusion/ej2-angular-calendars';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import {
  DropDownButtonModule,
  ProgressButtonModule,
} from '@syncfusion/ej2-angular-splitbuttons';

enableRipple(true);

const syncfusionModulesArr = [
  ButtonModule,
  DialogModule,
  UploaderModule,
  DropDownListModule,
  DropDownButtonModule,
  AutoCompleteModule,
  TextBoxModule,
  NumericTextBoxModule,
  ComboBoxModule,
  TooltipModule,
  TabModule,
  ToastModule,
  DatePickerModule,
  DateTimePickerModule,
  SwitchAllModule,
  MenuModule,
  GridAllModule,
  ChipListModule,
  QueryBuilderModule,
  CheckBoxModule,
  RadioButtonModule,
  ProgressButtonModule,
  ListBoxModule,
];

@NgModule({
  imports: syncfusionModulesArr,
  exports: syncfusionModulesArr,
})
export class SyncfusionModules {}
