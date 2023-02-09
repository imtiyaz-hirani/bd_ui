
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GRID_SELECTION_MODES, GRID_SELECTION_TYPES } from '@app/core/constants';
import { GridComponent, InfiniteScrollSettingsModel } from '@syncfusion/ej2-angular-grids';
 import { griddata } from './data';
 import { DialogComponent, PositionDataModel } from '@syncfusion/ej2-angular-popups';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StrayService } from '../../service/stray-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'vendor-supplier-list-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class VendorGridComponent implements OnInit {

  infiniteOptions: InfiniteScrollSettingsModel = {
    enableCache: false,
    initialBlocks: 2,
  };
  isInitial: true;

  @ViewChild('grid', { static: true })
  grid: GridComponent;

  group = false;
  currentActiveTool = 'search';
  toolbar = [];

 @Input("data")
  data:any;

  hidden = false;

  //We do not have specific type definition for this.
/* jshint ignore:start*/
@ViewChild('rightToolBarTemplate', { static: true })
rightToolBarTemplate;

@ViewChild('leftToolBarTemplate', { static: true })
leftToolBarTemplate;

initialSort = {
  columns: [{ field: 'uniqueSequenceId', direction: 'Descending' }],
};

isBulkSelect = false;
selectedRowsCount: number;
showSelectedRowFlag: boolean;
selectedRecords = [];
selectOption = {
  type: GRID_SELECTION_TYPES.multiple,
  mode: GRID_SELECTION_MODES.row,
  enableSimpleMultiRowSelection: true,
  persistSelection: true,
};

@ViewChild('strayDialog', { static: true })
  private strayDialog: DialogComponent;

  @ViewChild('strayImageDialog', { static: true })
  private strayImageDialog: DialogComponent;

  strayDialogPosition:PositionDataModel = {
    X: 'center',
    Y: 'center',
  };

  target = '.serrala-grid';


  strayMassUpdateForm:FormGroup;
  statusList = [
    {name : 'Closed' , id :'Closed'},
    {name : 'CCODE' , id :'CCODE'}
];
dropdownFields = { text: 'name', value: 'id' };

strayForm1 =[
  {
    formName: 'Stray Loc',
    inputType : 'input',
    formControlName  : 'mcremarks'
   },
   {
    formName: 'Awb No',
    inputType : 'input',
    formControlName  : 'mcremarks'
   },
   {
    formName: 'Status',
    inputType : 'dropdown',
    formControlName  : 'mcstatus',
    dataSource : this.statusList
   },
   {
    formName: 'Remarks',
    inputType : 'input',
    formControlName  : 'mcremarks'
   },
]

@ViewChild('strayMassUpdate', { static: true })
strayMassUpdate;


image:any;

  constructor(private formBuilder: FormBuilder, private strayService:StrayService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.setGridSettings();
    const FormControlObject = {}
    this.strayForm1.forEach(ele =>{
      FormControlObject[ele.formControlName]= new FormControl('',[Validators.required])
    })
    this.strayMassUpdateForm = this.formBuilder.group(FormControlObject);
  }

  setGridSettings(): void {
    this.grid.filterSettings.mode = 'Immediate';
    this.toolbar = [
      { template: this.leftToolBarTemplate },
      { template: this.rightToolBarTemplate, align: 'right' },
    ];
    this.infiniteOptions = { enableCache: false };
    this.grid.filterSettings.showFilterBarOperator = true;
  }

  /**
   * calls on intial load of grid
   */
   load(): void {
    this.isInitial = true;
  }

  /**
   * Adds the Search placeholer in search box of each column
   */
   dataBound(): void {
    // this.grid.autoFitColumns();
    if (this.isInitial) {
      const filterbar = this.grid.element.querySelector('.e-filterbar')
        .children;
      [].slice.call(filterbar).forEach((item) => {
        const field = item.querySelector('input.e-input').id.split('_')[0];
        item.querySelector('input.e-input').placeholder = 'Search';
      });
    }
  }

  /**
   * open column chooser
   */
  openColumnChooser(): void {
    this.grid.showColumnChooser = true;
    const gridWidth = document.getElementById('grid').clientWidth;
    let topPosition = 40;
    if (this.group) {
      topPosition = topPosition + 50;
    }
    this.grid.openColumnChooser(gridWidth - 310, topPosition);
  }

  /**
   * enables grouping of column
   */
  opengrouping(): void {
    this.group = !this.group;
    this.grid.allowGrouping = this.group;
    if (!this.grid.allowGrouping) {
      this.grid.clearGrouping();
    }
    if (this.group) {
      this.currentActiveTool = 'groupBy';
    } else {
      this.currentActiveTool = '';
    }
  }

  /**
   * export data in excel format
   */
  exportExcel(): void {
    this.grid.excelExport();
  }

  /**
   * export data in pdf format
   */
  exportPdf(): void {
    this.grid.pdfExport();
  }

  /**
   * Filter record on search input field as per column values entered
   *
   * @param event as Event
   * @returns {void}
   * @memberof PaymentGridComponent
  */
 search(event:Event): void {
  this.grid.search((event.target as HTMLInputElement).value);
}

  /**
   * to change the focus on search icon
   */
  focusSearch(): void {
    this.grid.allowSelection = false;
    this.currentActiveTool = 'search';
    setTimeout(() => {
      const element = document.getElementById('gridGlobalSearch');
      if (element) {
        element.focus();
      }
    }, 200);
  }

  /**
   * @description Bulk selection toggle on click of Bulk Select toolbar opation
   */
  bulkSelection(): void {
    this.isBulkSelect = !this.isBulkSelect;
    this.grid.allowSelection = this.isBulkSelect;
    if (this.isBulkSelect) {
      this.clearRows();
      this.currentActiveTool = 'bulkActions';
    } else {
      this.clearRows();
      this.currentActiveTool = '';
    }
  }

  /**
   * @description Clear all selected Rows from grid and empty Selected Records arr
   */
  clearRows(): void {
    this.grid.clearSelection();
    this.selectedRecords = [];
  }

  /**
   * @description Select all rows from current grid rows and push to selectedRecords arr
   */
  selectAllRows(): void {
    this.grid.selectRowsByRange(0, this.data.length - 1);
    this.selectedRecords = Object.assign([], this.data);
  }

  /**
   * @description On Row deselect the records and remove from selected Records
   *
   * @param event as Event data
   */
  // event is generic data type generated by syncfusion library
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onRowDeselect(event): void {
    this.selectedRowsCount = this.grid.getSelectedRecords().length;
    const deselectedRecord = event.data;
    const selectedRecords = this.selectedRecords.filter(
      (element) => element.id !== deselectedRecord.id
    );
    this.selectedRecords = selectedRecords;
  }

  /**
   * @description On row select push particular record to selectedRecords arr
   *
   * @param event as Event Data
   */
  // event is generic data type generated by syncfusion library
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onRowSelect(event): void {
    if (!this.isBulkSelect) {
      this.selectedRecords = [];
    }
    this.selectedRowsCount = this.grid.getSelectedRecords().length;
    if (event && event.data && !event.data.isArray) {
      if (event.data.id) {
        this.selectedRecords.push(event.data);
      }
    }
  }

  viewImage(strayNo: string){
    console.log(strayNo)
    this.strayService.getImage(strayNo).subscribe((data)=>{
      console.log(data);

      let objectURL = 'data:image/jpeg;base64,' + data['mbimagefile'];
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })

    /*if(!this.image){
      this.strayService.getData().subscribe((baseImage)=>{
        let objectURL = 'data:image/jpeg;base64,' + baseImage['image'];

        this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      })

    }*/

    this.strayImageDialog.show()
  }

  staryImageClose(){
    this.strayImageDialog.hide()
  }


  staryDialogClose(){
    this.strayDialog.hide()
  }

  strayDialogOpen(isUpadte : boolean){
      if(isUpadte){
        console.log(this.strayMassUpdate)
         this.strayDialog.content = this.strayMassUpdate;

      }

      this.strayDialog.show()
  }

  update(){

  }

}
