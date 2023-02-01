import { ErrorService } from './error.service';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from './toast.service';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const toaster = this.injector.get(ToastService);
    let message;
    toaster.hideToastAll();
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      // notifier.showError(message);
      if (message.error && message.status && message.message) {
        toaster.showToast(
          {
            content: `${message.error} : ${message.status} ${message.message}`,
          },
          true
        );
      } else {
        toaster.showToast(
          {
            content: `${message}`,
          },
          true
        );
      }
      console.error(message);
    } else {
      console.log(error);
    }
    // Always log errors
  }
}
