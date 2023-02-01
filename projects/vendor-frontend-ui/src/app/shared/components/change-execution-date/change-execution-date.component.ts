import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DATE_FORMAT } from '@app/core/constants';
import { ConfirmModalComponent } from '@app/shared/components/confirm-modal/confirm-modal.component';
import { Utils } from '@app/shared/utils/utils';
import { OpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-change-execution-date',
  templateUrl: './change-execution-date.component.html',
  styleUrls: ['./change-execution-date.component.scss'],
  providers: [DatePipe],
})
export class ChangeExecutionDateComponent implements OnChanges {
  @ViewChild('changeExecutionDateDialog', { static: false })
  changeExecutionDateDialog: DialogComponent;
  @Output() changeExecutionDateOutput = new EventEmitter();
  @Input() date: string;
  @Input() infoText: string;
  //executionDate: string;
  minDate: Date = new Date();
  disableConfirmButton = false;
  confirmMessage = 'SHARED.EXECUTION_DATE_MODAL.MESSAGES.CONFIRM_MESSAGE';
  @ViewChild('confirmModal') confirmModal: ConfirmModalComponent;
  executionDateForm: FormGroup;
  dateFormat = DATE_FORMAT;
  submitted = false;
  constructor(private datePipe: DatePipe) {
    this.executionDateForm = new FormGroup({
      executionDate: new FormControl('', [Validators.required]),
    });
  }

  /**
   * @description Method to get execution date control
   */
  get executionDate(): AbstractControl {
    return this.executionDateForm.get('executionDate');
  }

  /**
   * @description Method to gets when databound property changes
   *
   * @param  {SimpleChanges} changes
   * @returns void
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.changeDate(changes?.date?.currentValue);
  }

  /**
   * @description Method to open change execution dialog
   *
   * @returns void
   */
  openChangeExecutionDateDialog(): void {
    this.changeDate(this.date);
    this.changeExecutionDateDialog.show();
  }

  /**
   * @description Method to hide change execution dialog
   * @returns void
   */
  closeChangeExecutionDateDialog(): void {
    this.changeExecutionDateDialog.hide();
  }

  /**
   *@description Method gets called on confirm button click and emit change execution output event
   *
   * @returns void
   */
  confirmButtonClick(): void {
    if (this.executionDate.value) {
      this.submitted = true;
      const formattedExecutionDate = this.datePipe.transform(
        this.executionDate.value,
        this.dateFormat
      );
      if (this.date === formattedExecutionDate) {
        this.confirmModal.openConfirmModal();
        this.submitted = false;
      } else {
        this.changeExecutionDateOutput.emit(formattedExecutionDate);
      }
    } else {
      this.executionDateForm.markAllAsTouched();
    }
  }

  /**
   * @description This is used to set position for date picker pop up on the right side.
   * @param {OpenCloseMenuEventArgs} args
   * @returns void
   * @memberof ChangeExecutionDateComponent
   */
  calculatePostitionForDatePicker(args: OpenCloseMenuEventArgs): void {
    Utils.setDatePickerPopupPosition(args, 'executiondatepicker');
  }

  /**
   * @description Method gets called on close event of dialog
   * @returns void
   */
  onCloseDialog(): void {
    this.formReset();
    this.submitted = false;
  }

  /**
   * @description Method to update execution date field value
   * @param  {string} value
   * @returns void
   */
  changeDate(value: string): void {
    this.formReset();
    if (value) {
      this.date = value;
      const date = Utils.convertDateIntoSpecificFormat(this.date, 'datepicker');
      this.executionDate.setValue(date);
    } else {
      this.executionDate.setValue(value);
    }
  }

  /**
   * @description Method to reset change execution date form
   * @returns void
   */
  formReset(): void {
    this.executionDate.reset();
    this.executionDate.markAsPristine();
    this.executionDate.markAsUntouched();
  }
}
