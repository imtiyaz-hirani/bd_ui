import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Utils } from 'src/app/shared/Utils';
import { StrayQuery } from '../../model/model';

@Component({
  selector: 'app-stray-query',
  templateUrl: './stray-query.component.html',
  styleUrls: ['./stray-query.component.scss']
})
export class StrayQueryComponent implements OnInit{

  

  @Output() queryChange = new EventEmitter();

  showQuery = false;

  strayQueryForm : FormGroup;

  regionList = [
    {name : 'ALL' , code :'ALL'},
    {name : 'WEST1' , code :'WEST1'},
    {name : 'WEST2' , code :'WEST2'},
    {name : 'SOUTH1' , code :'SOUTH1'},
    {name : 'SOUTH2' , code :'SOUTH2'},
    {name : 'EAST' , code :'EAST'},
    {name : 'NORTH' , code :'NORTH'}
];

statusList = [
  {name : 'Closed' , code :'C'},
  {name : 'Opened' , code :'O'}
]

  strayQueryFormControls =[
    {
      formName: 'Stray#S',
      inputType : 'input',
      formControlName  : 'mcremarks',
      defaultValue : ''
     },{
      formName: 'Stray Date',
      inputType : 'date',
      formControlName  : 'mcfromdate',
      defaultValue : ''
     },
     {
      formName: 'To',
      inputType : 'date',
      formControlName  : 'mctodate',
      defaultValue : ''
     },
     {
      formName: 'Region',
      inputType : 'dropdown',
      formControlName  : 'mregion',
      options : this.regionList,
      defaultValue : 'ALL'
     },{
      formName: 'Stray Loc',
      inputType : 'input',
      formControlName  : 'mcstrayloc',
      defaultValue : ''
     },
     {
      formName: 'Status',
      inputType : 'dropdown',
      formControlName  : 'mcstatus',
      options : this.statusList,
      defaultValue : ''
     },{
      formName: 'Vehicle Origin',
      inputType : 'input',
      formControlName  : 'mcvehicleorigin',
      defaultValue : ''
     },
     {
      formName: 'Route',
      inputType : 'input',
      formControlName  : 'mcroute',
      defaultValue : ''
     },
     {
      formName: 'Commodity',
      inputType : 'input',
      formControlName  : 'mcommodity',
      defaultValue : ''
     }
   ];

  

  constructor(private formBuilder: FormBuilder, private router : Router){}

  ngOnInit(): void {
    const FormControlObject = {}
    this.strayQueryFormControls.forEach(control=>{
      FormControlObject[control.formControlName]= new FormControl(control.defaultValue)
    })

    this.strayQueryForm = this.formBuilder.group(FormControlObject);
    //extra fields not to be shown in form
    this.strayQueryForm.addControl('mcpackdesc', new FormControl(''));
    this.strayQueryForm.addControl('mcvehicleno', new FormControl(''));
    this.strayQueryForm.addControl('mcawbno', new FormControl(''));

    const strayQuery:StrayQuery = JSON.parse(localStorage.getItem("strayQuery"));

    if(strayQuery){
      this.strayQueryForm.patchValue(strayQuery);
    }
  }

  openQuery(){
    this.showQuery = !this.showQuery;
  }

  onApply() {
    let strayQuery:StrayQuery =this.strayQueryForm.value;
    strayQuery.mcfromdate = Utils.formatDate(strayQuery.mcfromdate);
    strayQuery.mctodate = Utils.formatDate(strayQuery.mctodate);
    localStorage.setItem("strayQuery",JSON.stringify(strayQuery));
    console.log(strayQuery);
    this.queryChange.emit(strayQuery);
    this.showQuery = false;
  }

  resetStrayQuery() {
    localStorage.removeItem("strayQuery");
    this.strayQueryForm.reset();
    this.strayQueryForm.controls['mregion'].setValue("ALL");
   }

   addRecord(): void {

    this.router.navigate(['/stray/add-stray']);
  
  }
}
