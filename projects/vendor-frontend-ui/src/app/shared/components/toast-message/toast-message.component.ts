import {
  Component,
  EventEmitter,
  ViewChild,
  Output,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Toast } from '@syncfusion/ej2-notifications';

@Component({
  selector: 'toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastMessageComponent {
  @ViewChild('element') toast: Toast;
  @ViewChild('notificationElement') notificationToast: Toast;
  @ViewChild('primaryBtnLabel') primaryBtnLabel?;
  @ViewChild('secondaryBtnLabel') secondaryBtnLabel?;
  @Output() notificationEvent?: EventEmitter<any> = new EventEmitter();
  notificationPosition = { X: 'Right', Y: 'Top' };
  toastPosition = { X: 'Center', Y: 'Bottom' };
  notificationMessage: string;
  toastMessage: string;
  isErrorMessage: boolean;
  currentNotification: any;
  constructor() {}

  showToast(toastMessage: string, isErrorMessage: boolean, delay?: number) {
    this.toast.position = this.toastPosition;
    this.toast.width = 'auto';
    this.toast.height = '44px';
    this.toastMessage = toastMessage;
    this.isErrorMessage = isErrorMessage ? isErrorMessage : false;
    this.toast.show({
      timeOut: delay ? delay : 5000,
      cssClass: 'e-toast-snackbar',
    });
  }

  showNotificationToast(
    notification?: any,
    primaryBtnLabel?: string,
    secondaryBtnLabel?: string,
    target: string | HTMLElement = document.body
  ) {
    this.notificationToast.position = this.notificationPosition;
    this.notificationToast.width = '307px';
    this.notificationToast.height = 'auto';
    this.currentNotification = notification;
    this.notificationToast.target = target;
    this.primaryBtnLabel = primaryBtnLabel;
    this.notificationToast.show({
      timeOut: 5000,
      cssClass: 'e-toast-information',
    });
  }

  clickOnButton(action) {
    const emitOBj = {
      notification: this.currentNotification,
      action,
    };
    this.notificationEvent.emit(emitOBj);
    this.notificationToast.hide();
    this.currentNotification = {};
  }
}
