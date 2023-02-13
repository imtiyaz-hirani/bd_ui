import { Browser, EmitType } from '@syncfusion/ej2-base';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { QueryBuilderComponent, RuleModel, ShowButtonsModel } from '@syncfusion/ej2-angular-querybuilder';
import { PositionDataModel } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StrayQuery } from '../../model/model';
import { Utils } from '@app/shared/utils/utils';

@Component({
  selector: 'vendor-supplier-list-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() queryChange = new EventEmitter();

  regionList = [
    {name : 'ALL' , id :'ALL'},
    {name : 'WEST1' , id :'WEST1'},
    {name : 'WEST2' , id :'WEST2'},
    {name : 'SOUTH1' , id :'SOUTH1'},
    {name : 'SOUTH2' , id :'SOUTH2'},
    {name : 'EAST' , id :'EAST'},
    {name : 'NORTH' , id :'NORTH'}
]

statusList = [
    {name : 'Closed' , id :'Closed'},
    {name : 'CCODE' , id :'CCODE'}
]

dropdownFields = { text: 'name', value: 'id' };

  showButtons: ShowButtonsModel = {
    groupInsert: false,
    groupDelete: true,
    ruleDelete: true,
  };
   strayForm : FormGroup

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
   strayForm1 =[
    {
      formName: 'Stray#S',
      inputType : 'input',
      formControlName  : 'mcremarks'
     },{
      formName: 'Stray Date',
      inputType : 'date',
      formControlName  : 'mcfromdate'
     },
     {
      formName: 'To',
      inputType : 'date',
      formControlName  : 'mctodate'
     },
     {
      formName: 'Region',
      inputType : 'dropdown',
      formControlName  : 'mregion',
      dataSource : this.regionList
     },{
      formName: 'Stray Loc',
      inputType : 'input',
      formControlName  : 'mcstrayloc'
     },
     {
      formName: 'Status',
      inputType : 'dropdown',
      formControlName  : 'mcstatus',
      dataSource : this.statusList
     },{
      formName: 'Vehicle Origin',
      inputType : 'input',
      formControlName  : 'mcvehicleorigin'
     },
     {
      formName: 'Route',
      inputType : 'input',
      formControlName  : 'mcroute'
     },
     {
      formName: 'Commodity',
      inputType : 'input',
      formControlName  : 'mcommodity'
     }
   ]





  @ViewChild('ejDialog', { static: true }) ejDialog: DialogComponent;
  @ViewChild('querybuilder', { static: false }) qryBldrObj: QueryBuilderComponent;

  @Output('dialogClosed')
  dialogCloseEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.i = true;
   }


  ngOnInit(): void {
    const FormControlObject = {}
    this.strayForm1.forEach(ele =>{
      if(ele.formControlName === 'mregion'){
        FormControlObject[ele.formControlName]= new FormControl('ALL')
      }else{
        FormControlObject[ele.formControlName]= new FormControl('')
      }
      
    })
    this.strayForm = this.formBuilder.group(FormControlObject);
    this.strayForm.addControl('mcpackdesc', new FormControl(''));
    this.strayForm.addControl('mcvehicleno', new FormControl(''));
    this.strayForm.addControl('mcawbno', new FormControl(''));

    const strayQuery:StrayQuery = JSON.parse(localStorage.getItem("strayQuery"));

    if(strayQuery){
      this.strayForm.patchValue(strayQuery);
      this.queryChange.emit(strayQuery);
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
    let strayQuery:StrayQuery =this.strayForm.value;
    strayQuery.mcfromdate = Utils.formatDate(strayQuery.mcfromdate);
    strayQuery.mctodate = Utils.formatDate(strayQuery.mctodate);
    localStorage.setItem("strayQuery",JSON.stringify(strayQuery))
    console.log(strayQuery)
    this.queryChange.emit(strayQuery);
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
   localStorage.removeItem("strayQuery");
   this.strayForm.reset()
   this.strayForm.controls.mregion.setValue("ALL")
  }

  dialogClosed() {
    this.dialogCloseEvent.emit(true);
  }

}
