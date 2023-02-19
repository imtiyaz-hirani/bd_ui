import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utils } from 'src/app/shared/Utils';
import { AddNewStray } from '../../model/model';
import { StrayService } from '../../service/stray-service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-stray',
  templateUrl: './add-stray.component.html',
  styleUrls: ['./add-stray.component.scss']
})
export class AddStrayComponent implements OnInit {

  imageFile: File = null;

  addStrayForm: FormGroup;

  addStrayFormControls = [
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
      formName: 'Upload Image',
      inputType: 'upload',
      formControlName: '',
      defaultValue: '',
      file: this.imageFile
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
      formName: 'Vehicle Origin',
      inputType: 'input',
      formControlName: 'cvehicleorigin',
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
      formName: 'Commodity',
      inputType: 'input',
      formControlName: 'commodity',
      defaultValue: '',
      validators: [Validators.required]
    }
  ]

  constructor(private formBuilder: FormBuilder, private router: Router, private service : StrayService, private messageService: MessageService) { }
  ngOnInit(): void {
    const FormControlObject = {}
    this.addStrayFormControls.forEach(control => {
      FormControlObject[control.formControlName] = new FormControl(control.defaultValue, control.validators)
    })

    this.addStrayForm = this.formBuilder.group(FormControlObject);
    //extra fields not to be shown in form
    this.addStrayForm.addControl('centemplcode', new FormControl('temp'));
    this.addStrayForm.addControl('cstrayno', new FormControl(''));
  }

  onFileChange(event) {
    this.imageFile = event.target.files[0];
  }

  saveStray() {


    let addNewStray: AddNewStray = this.addStrayForm.value;

    addNewStray.dstraydate = Utils.formatDate(addNewStray.dstraydate);

   



    this.service.addNewStray(addNewStray).subscribe((data) => {
      const formData = new FormData();



      formData.append('file', this.imageFile)
      formData.append('mcstrayno', data['strayNo'])

      console.log(data['strayNo'])



      this.service.upload(formData).subscribe(() => {

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added Stray' })

        setTimeout(() => {
          this.router.navigate(['/stray']);
        }, 2000)


      })
    })


  }
}
