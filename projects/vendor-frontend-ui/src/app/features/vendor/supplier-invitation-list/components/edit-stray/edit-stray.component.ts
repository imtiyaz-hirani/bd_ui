import { Component, OnInit,  } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StrayService } from '../../service/stray-service';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-edit-stary',
    templateUrl: './edit-stray.component.html',
    styleUrls: ['./edit-stray.component.scss' ],
  })
  export class EditStray implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private service : StrayService, private messageService: MessageService){}

    strayForm:FormGroup = new FormGroup({
        dstraydate : new FormControl(''),
        cstrayloc :  new FormControl(''),
        cpackdesc : new FormControl(''),
        cvehicleno : new FormControl(''),
        croute: new FormControl(''),
        cawbno: new FormControl(''),
        cremarks: new FormControl(''),
        cremarksTwo: new FormControl(''),
        cstatus: new FormControl(''),
        csubmit: new FormControl(''),
        centemplcode: new FormControl('temp'),
        cstrayno: new FormControl('')
    })

    cstrayno : string;



    ngOnInit(): void {
        this.cstrayno = this.activatedRoute.snapshot.paramMap.get('cstrayno');

       if(this.cstrayno){
        const stray = JSON.parse(localStorage.getItem("editStray"))
        console.log(stray)
        this.strayForm.patchValue(stray)
       }
    }

    updateStray(){
        if(this.cstrayno){
            
            let strayUpdateData = {
                mcstrayno : this.strayForm.value.cstrayno,
                mdstraydate : this.strayForm.value.dstraydate,
                mcstrayloc : this.strayForm.value.cstrayloc,
                mcpackdesc : this.strayForm.value.cpackdesc,
                mcvehicleno : this.strayForm.value.cvehicleno,
                mcroute : this.strayForm.value.croute,
                mcawbno : this.strayForm.value.cawbno,
                mcremarks : this.strayForm.value.cremarks,
                mc2remarks : this.strayForm.value.cremarksTwo,
                mcstatus : this.strayForm.value.cstatus,
                mcsubmit : this.strayForm.value.csubmit,
                mcemplcode: this.strayForm.value.cstrayno
            }
            console.log(strayUpdateData)
            this.service.updateStray(strayUpdateData).subscribe((data)=>{
            
                this.messageService.add({severity:'success', summary: 'Success', detail: 'Updated Stray'})

                setTimeout(()=>{
                    this.router.navigate(['/vendor']);
                }, 2000)
            })
         } 
    }
  }