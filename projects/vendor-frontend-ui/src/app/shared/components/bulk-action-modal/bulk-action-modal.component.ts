import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  DialogComponent,
  PositionDataModel,
} from '@syncfusion/ej2-angular-popups';
import { IBulkActionModalObj } from './bulk-action.model';

@Component({
  selector: 'app-bulk-action-modal',
  templateUrl: './bulk-action-modal.component.html',
  styleUrls: ['./bulk-action-modal.component.scss'],
})
export class BulkActionModalComponent implements OnInit, OnChanges {
  @Input() bulkActionModalObj: IBulkActionModalObj;
  @Output() getConfirmStatus? = new EventEmitter();
  @Output() removeItems = new EventEmitter();
  @ViewChild('bulkActionDialog', { static: false })
  bulkActionDialog: DialogComponent;
  message = '';
  dialogPosition: PositionDataModel = { X: 'center', Y: 'center' };
  totalSelectedItems = 0;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(simpleChanges) {
    if (
      this.bulkActionModalObj &&
      this.bulkActionModalObj?.validItems &&
      this.bulkActionModalObj?.invalidItems
    ) {
      this.totalSelectedItems =
        this.bulkActionModalObj.validItems.length +
        this.bulkActionModalObj.invalidItems.length;
    }
  }

  /**
   * Dismiss confirm modal
   */
  dismissConfirmModal(): void {
    this.bulkActionDialog.hide();
  }

  getConfirm(acceptedStatus: string): void {
    this.getConfirmStatus.emit(acceptedStatus);
  }

  openConfirmModal(): void {
    this.bulkActionDialog.show();
  }

  removeInvalidItems(): void {
    this.bulkActionModalObj.invalidItems = [];
    this.totalSelectedItems = this.bulkActionModalObj?.validItems?.length;
    this.removeItems.emit(this.bulkActionModalObj);
  }

  goToSelectionClick(): void {
    this.dismissConfirmModal();
  }
}
