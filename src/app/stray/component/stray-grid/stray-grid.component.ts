import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { StrayQuery } from '../../model/model';
import { StrayService } from '../../service/stray-service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-stray-grid',
  templateUrl: './stray-grid.component.html',
  styleUrls: ['./stray-grid.component.scss']
})
export class StrayGridComponent implements OnInit {


  @Input()
  strayData: any[] = [];

  selectedStrays: any[] = [];

  showMassUpdate = false;

  @ViewChild('actionColumn', { static: true })
  actionColumnref;

  @ViewChild('imagePanel', { static: true })
  imagePanel: OverlayPanel;

  @Output() queryChange = new EventEmitter();

  strayGridInfo = [];

  image: any;

  statusList = [
    { name: 'Closed', code: 'C' },
    { name: 'Opened', code: 'O' }
  ]

  strayMassUpdateFormControl = [
    {
      formName: 'Stray Loc',
      inputType: 'input',
      formControlName: 'mcstrayloc',
      defaultValue: ''
    },
    {
      formName: 'Awb No',
      inputType: 'input',
      formControlName: 'mcawbno',
      defaultValue: ''
    },
    {
      formName: 'Status',
      inputType: 'dropdown',
      formControlName: 'mcstatus',
      options: this.statusList,
      defaultValue: ''
    },
    {
      formName: 'Remarks',
      inputType: 'input',
      formControlName: 'mcremarks',
      defaultValue: ''
    },
  ];

  strayMassUpdateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private strayService: StrayService, private sanitizer: DomSanitizer, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.strayGridInfo = [
      { header: 'Stray No', columnName: 'cstrayno', type: 'text', frozen: true, frozenPostion: 'left' },
      { header: 'Stray Date', columnName: 'dstraydate', type: 'date', frozen: false },
      { header: 'Stray Loc', columnName: 'cstrayloc', type: 'text', frozen: false },
      { header: 'Emp Code', columnName: 'centemplcode', type: 'text', frozen: false },
      { header: 'Emp Name', columnName: 'cemplname', type: 'text', frozen: false },
      { header: 'PackDesc', columnName: 'cpackdesc', type: 'text', frozen: false },
      { header: 'AwbNo', columnName: 'cawbno', type: 'text', frozen: false },
      { header: 'Remarks', columnName: 'cremarks', type: 'text', frozen: false },
      { header: 'Status', columnName: 'cstatus', type: 'text', frozen: false },
      { header: 'Vehicle No', columnName: 'cvehicleno', type: 'text', frozen: false },
      { header: 'Vehicle Orgin', columnName: 'cvehicleorigin', type: 'text', frozen: false },
      { header: 'Route', columnName: 'croute', type: 'text', frozen: false },
      { header: 'Commodity', columnName: 'commodity', type: 'text', frozen: false },
      { header: 'Update Date', columnName: 'cupdatedate', type: 'text', frozen: false },
      { header: 'Update Emp', columnName: 'cupdateemp', type: 'text', frozen: false },
      { header: 'Actions', columnName: 'actions', type: 'template', frozen: true, frozenPostion: 'right', templateRef: this.actionColumnref }
    ];

    const FormControlObject = {}
    this.strayMassUpdateFormControl.forEach(control => {
      FormControlObject[control.formControlName] = new FormControl(control.defaultValue)
    })

    this.strayMassUpdateForm = this.formBuilder.group(FormControlObject);
    //extra fields not to be shown in form
    this.strayMassUpdateForm.addControl('mcpackdesc', new FormControl(''));
  }

  viewImage(strayNo: string, event) {
    this.strayService.getImage(strayNo).subscribe((data) => {
      console.log(data);

      let objectURL = 'data:image/jpeg;base64,' + data['mbimagefile'];
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
    this.imagePanel.toggle(event);
  }

  editStray(data) {
    localStorage.setItem("editStray", JSON.stringify(data))
    this.router.navigate(['/stray/edit-stray', data['cstrayno']])
  }

  openStrayMassUpdate() {
    this.showMassUpdate = true;
  }

  update() {
    let straynos: string[] = []
    this.selectedStrays.forEach(i => straynos.push(i.cstrayno))
    let strayMassUpdateRequest = {
      straynos: straynos,
      mcstrayloc: this.strayMassUpdateForm.value.mcstrayloc,
      mcawbno: this.strayMassUpdateForm.value.mcawbno,
      mcstatus: this.strayMassUpdateForm.value.mcstatus,
      mcremarks: this.strayMassUpdateForm.value.mcremarks,
      dupdatedt: "",
      mcemplcode: "temp"
    }

    console.log(strayMassUpdateRequest);

    this.strayService.updateMassStray(strayMassUpdateRequest).subscribe(
      {
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Mass Updated Strays' })

          const strayQuery: StrayQuery = JSON.parse(localStorage.getItem("strayQuery"));

          if (strayQuery) {

            this.queryChange.emit(strayQuery);
          }
        }


      })
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.strayData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "strays");
    });

    
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
   
  }



}
