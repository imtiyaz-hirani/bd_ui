import { Browser, EmitType } from '@syncfusion/ej2-base';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { QueryBuilderComponent, RuleModel, ShowButtonsModel } from '@syncfusion/ej2-angular-querybuilder';
import { PositionDataModel } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'vendor-supplier-list-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  showButtons: ShowButtonsModel = {
    groupInsert: false,
    groupDelete: true,
    ruleDelete: true,
  };

  i: boolean;

  // Create element reference for dialog target element.
  @ViewChild('container', { read: ElementRef }) container: ElementRef;

  targetElement: HTMLElement;
  target = '.control-section';

  // @Input('dialogPosition') dialogPosition : PositionDataModel = { X: 'right', Y: 'top' };

  dialogPosition: PositionDataModel = { X: 'right', Y: 'top' };

  @Input()
  dialogVisible: boolean;

  initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  };

  @ViewChild('ejDialog', { static: true }) ejDialog: DialogComponent;
  @ViewChild('querybuilder', { static: false }) qryBldrObj: QueryBuilderComponent;

  @Output('dialogClosed')
  dialogCloseEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.i = true;
   }

 

  ngOnInit(): void {
  }



    dataSource: any = [
      {
        'EmployeeID'   : 101,
        'Title' : 'PM'
      },
      {
        'EmployeeID'   : 102,
        'Title' : 'AM'
      },
      {
        'EmployeeID'   : 103,
        'Title' : 'CM'
      }
    ];
    values: string[] = ['Mr.', 'Mrs.'];

    importRules: RuleModel = {
        'condition': 'and',
        'rules': [{
                'label': 'Employee ID',
                'field': 'EmployeeID',
                'type': 'number',
                'operator': 'equal',
                'value': 1
            },
            {
                'label': 'Title',
                'field': 'Title',
                'type': 'string',
                'operator': 'equal',
                'value': 'Sales Manager'
            }]
        };

        createdControl(): void {
          if (Browser.isDevice) {
              this.qryBldrObj.summaryView = true;
            }
        }

    // Hide the Dialog when click the footer button.
  hideDialog: EmitType<object> = () => {
    this.ejDialog.hide();
  };

  applyFilter: EmitType<object> = () => {
    this.onApply();
    this.ejDialog.hide();
  };

  onApply() {
    this.importRules = this.qryBldrObj.getRules();
    console.log(this.importRules);
  }

    // Enables the footer buttons
  buttons: Object = [
    {
      click: this.hideDialog.bind(this),
      // Accessing button component properties by buttonModel property
      buttonModel: {
        content: 'Cancel',
        isPrimary: false,
        cssClass: 'e-btn e-lib e-small query-builder-btn mr-2',
      },
    },
    {
      click: this.applyFilter.bind(this),
      // Accessing button component properties by buttonModel property
      buttonModel: {
        content: 'Apply',
        isPrimary: true,
        cssClass: 'e-btn e-lib e-small query-builder-btn',
      },
    },
  ];
  // Sample level code to handle the button click action
  onOpenDialog = function (): void {
    // Call the show method to open the Dialog
    this.ejDialog.show();
  };

  resetFilter() {
    this.qryBldrObj.reset();
    this.qryBldrObj.refresh();
  }

  dialogClosed() {
    this.dialogCloseEvent.emit(true);
  }

}
