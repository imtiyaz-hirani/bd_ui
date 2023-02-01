import { Injectable } from '@angular/core';
import { Toast, ToastModel } from '@syncfusion/ej2-notifications';

@Injectable()
export class ToastService {
  toastInstance: Toast;
  toastObj: Toast;

  constructor() {}

  /**
   * Creates toast
   *
   * @param element
   * @param model
   * @returns toast
   */
  createToast(element: HTMLElement, model: ToastModel): Toast {
    if (!element.classList.contains('e-toast')) {
      this.toastObj = new Toast(model, element);
    }
    return this.toastObj;
  }

  /**
   * Shows toast
   *
   * @param model
   * @param isError
   */
  showToast(model: ToastModel, isError: boolean) {
    model.position = !model.position
      ? { X: 'Center', Y: 'Bottom' }
      : model.position;
    model.width = !model.width ? 'auto' : model.width;
    // creating Toaster
    const elem: HTMLElement = document.getElementById('ej2Toast');
    this.toastInstance = this.createToast(elem, model);
    // creating toaster Icons
    const warningSpan: HTMLElement = document.createElement('span');
    warningSpan.classList.add('pr-2');
    const warningIcon = document.createElement('i');
    warningSpan.appendChild(warningIcon);
    // if Error Toaster add error-icon else success icon
    if (isError) {
      warningIcon.classList.add('se-alert-triangle-fill', 'error-icon');
    } else {
      warningIcon.classList.add('se-check-circle-fill', 'success-icon');
    }
    this.toastInstance.show();
    //inserting the toasterIcons before the Toaster Message.
    const parentELem: HTMLElement = document.querySelector(
      '#ej2Toast .e-toast'
    );
    parentELem.insertBefore(warningSpan, parentELem.childNodes[0]);
  }

  /**
   * Hides toast
   */
  hideToast() {
    if (this.toastInstance) {
      this.toastInstance.hide();
    }
  }

  /**
   * Hides toast all
   */
  hideToastAll() {
    if (this.toastInstance) {
      this.toastInstance.hide('All');
    }
  }
}
