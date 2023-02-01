
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, InfiniteScrollSettingsModel } from '@syncfusion/ej2-angular-grids';
import { griddata } from './data';

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
  data=griddata;

  //We do not have specific type definition for this.
/* jshint ignore:start*/
@ViewChild('rightToolBarTemplate', { static: true })
rightToolBarTemplate;

@ViewChild('leftToolBarTemplate', { static: true })
leftToolBarTemplate;

initialSort = {
  columns: [{ field: 'uniqueSequenceId', direction: 'Descending' }],
};


  constructor() { }

  ngOnInit(): void {
    this.setGridSettings();
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



}
