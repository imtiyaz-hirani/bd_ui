import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Utils } from 'src/app/shared/Utils';
import { StrayUpdate } from '../../model/model';
import { StrayService } from '../../service/stray-service';

@Component({
  selector: 'app-edit-stray',
  templateUrl: './edit-stray.component.html',
  styleUrls: ['./edit-stray.component.scss']
})
export class EditStrayComponent implements OnInit{

  editStrayForm : FormGroup;

  cstrayno : string;

  statusList = [
    {name : 'Closed' , code :'C'},
    {name : 'Opened' , code :'O'}
  ]

  editStrayFormControls = [
    {
      formName: 'Stray date',
      inputType: 'date',
      formControlName: 'dstraydate',
      defaultValue: '',
      validators: [Validators.required]
    },
    {
      formName: 'Stray Loc',
      inputType: 'input',
      formControlName: 'cstrayloc',
      defaultValue: '',
      validators: [Validators.required]
    },
    {
      formName: 'Pack Desc',
      inputType: 'input',
      formControlName: 'cpackdesc',
      defaultValue: '',
      validators: [Validators.required]
    },
    {
      formName: 'Vehicle No',
      inputType: 'input',
      formControlName: 'cvehicleno',
      defaultValue: '',
      validators: [Validators.required]
    },
    {
      formName: 'Route',
      inputType: 'input',
      formControlName: 'croute',
      defaultValue: '',
      validators: [Validators.required]
    },
    {
      formName: 'Awb No',
      inputType: 'input',
      formControlName: 'cawbno',
      defaultValue: '',
      validators: []
    },
    {
      formName: 'Remarks',
      inputType: 'input',
      formControlName: 'cremarks',
      defaultValue: '',
      validators: []
    },
    {
      formName: 'Status',
      inputType : 'dropdown',
      formControlName: 'cstatus',
      defaultValue: '',
      options : this.statusList,
      validators: []
    }

  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private service : StrayService, private messageService: MessageService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    const FormControlObject = {}
    this.editStrayFormControls.forEach(control => {
      FormControlObject[control.formControlName] = new FormControl(control.defaultValue, control.validators)
    })

    this.editStrayForm = this.formBuilder.group(FormControlObject);
    //extra fields not to be shown in form
    this.editStrayForm.addControl('centemplcode', new FormControl('temp'));
    this.editStrayForm.addControl('csubmit', new FormControl(''));
    this.editStrayForm.addControl('cremarksTwo', new FormControl(''));

    this.cstrayno = this.activatedRoute.snapshot.paramMap.get('cstrayno');

       if(this.cstrayno){
        const stray = JSON.parse(localStorage.getItem("editStray"))
        console.log(stray)
        this.editStrayForm.patchValue(stray)
       }
  }

  updateStray(){
    if(this.cstrayno){
        
        let strayUpdateData:StrayUpdate = {
            mcstrayno : this.editStrayForm.value.cstrayno,
            mdstraydate : Utils.formatDate(this.editStrayForm.value.dstraydate),
            mcstrayloc : this.editStrayForm.value.cstrayloc,
            mcpackdesc : this.editStrayForm.value.cpackdesc,
            mcvehicleno : this.editStrayForm.value.cvehicleno,
            mcroute : this.editStrayForm.value.croute,
            mcawbno : this.editStrayForm.value.cawbno,
            mcremarks : this.editStrayForm.value.cremarks,
            mc2remarks : this.editStrayForm.value.cremarksTwo,
            mcstatus : this.editStrayForm.value.cstatus,
            mcsubmit : this.editStrayForm.value.csubmit,
            mcemplcode: this.editStrayForm.value.cstrayno
        }
        console.log(strayUpdateData)
        this.service.updateStray(strayUpdateData).subscribe(
          {
            next:()=>{
              this.messageService.add({severity:'success', summary: 'Success', detail: 'Updated Stray'})

              setTimeout(()=>{
                  this.router.navigate(['/vendor']);
              }, 2000)
            },
            error: (err)=>{
              this.messageService.add({severity:'error', summary: 'Error', detail: err['message']})
            }
          }
          )
     } 
}
}
