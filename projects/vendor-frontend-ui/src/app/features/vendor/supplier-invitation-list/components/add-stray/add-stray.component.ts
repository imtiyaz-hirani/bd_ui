import { Component, OnInit,  } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StrayService } from '../../service/stray-service';
@Component({
    selector: 'app-add-stary',
    templateUrl: './add-stray.component.html',
    styleUrls: ['./add-stray.component.scss' ],
  })
  export class AddStray implements OnInit {

   

    file:File = null;
  


    
    strayForm:FormGroup = new FormGroup({
        dstraydate : new FormControl('',[Validators.required]),
        cstrayloc :  new FormControl('',[Validators.required]),
        cpackdesc : new FormControl('',[Validators.required]),
        cvehicleno : new FormControl('',[Validators.required]),
        cvehicleorigin: new FormControl('',[Validators.required]),
        croute: new FormControl('',[Validators.required]),
        commodity: new FormControl('',[Validators.required]),
        centemplcode: new FormControl('temp'),
        cstrayno: new FormControl('')
    })

    constructor(private service : StrayService, private router: Router){}

    ngOnInit(): void {
       
    }


    onFileChange(event){
        this.file = event.target.files[0];
    }

    saveStray(){

       

        this.service.addNewStray(this.strayForm.value).subscribe((data)=>{
            const formData = new FormData();

            formData.append('file',this.file)
            formData.append('mcstrayno',data['strayNo'])

            console.log(data['strayNo'])

            this.service.upload(formData).subscribe(()=>{
    
                this.router.navigate(['/vendor']);
            })
        })
    

}


  }
  