import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorService {
  constructor(private translateService: TranslateService) {}
  getClientErrorMessage(error: Error): string {
    return error.message ? error.message : error.toString();
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    const err = 'error';
    const errStatus = 'status';
    if (error[errStatus] === 500) {
      return `${error.status} ${error[err]}` || `${error[err].error}`;
    } else if (error[errStatus] === 404 || error[errStatus] === 400) {
      if (error[err].messages && error[err].messages.length > 0) {
        return error[err].messages[0];
      } else {
        return error[err]?.message || error[err];
      }
    }
    return error.message ? error.message : error.toString();
    // return navigator.onLine ?
    //        error.message :
    //        this.translateService.instant('CORE.ERRORRESPONSES.INTERNETNOTWORKING');
  }
}
