import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  DialogComponent,
  PositionDataModel,
} from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnChanges {
  @Input() customMessage;
  @Input() isDisableButtons;
  @Output() getConfirmStatus? = new EventEmitter();
  @ViewChild('confirmModalDialog', { static: false })
  confirmModalDialog: DialogComponent;
  message = '';
  dialogPosition: PositionDataModel = { X: 'center', Y: 'center' };
  @Input() showFooter = true;
  @Input() showCloseButton = false;
  constructor(private translateServ: TranslateService) {}

  ngOnChanges() {
    this.message = this.customMessage
      ? this.customMessage
      : this.translateServ.instant('SHARED.COMMONGRID.WARNINGS.ConfirmMsg');
  }

  /**
   * Dismiss confirm modal
   */
  dismissConfirmModal() {
    this.isDisableButtons = false;
    this.confirmModalDialog.hide();
  }

  getConfirm(confirmStatus) {
    this.isDisableButtons = true;
    this.getConfirmStatus.emit(confirmStatus);
  }

  openConfirmModal() {
    this.confirmModalDialog.show();
  }
}
