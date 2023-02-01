import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class SharedService extends BaseService {
  /**
   * Gets all records`
   *
   * @param url:any
   * @returns all records
   */
  getAllRecords(url): any {
    return this.httpClient
      .get<[]>(url, {
        observe: 'body',
      })
      .pipe(catchError((err) => of(undefined)));
  }
  /**
   * Deletes selected record
   *
   * @param url:any
   * @param id:recordId
   * @returns selected record
   */
  deleteSelectedRecord(url, id) {
    return this.httpClient
      .delete(`${url + '/' + id}`, {
        observe: 'response',
      })
  }
  /**
   * Updates record details
   *
   * @param url:apiUrl
   * @param data:dataSource
   * @returns record details
   */
  updateRecordDetails(url, data) {
    return this.httpClient.post(url, data);
  }

  joinCalls(listOfCalls) {
    listOfCalls.forEach((record) =>
      this.getAllRecords(record)
        .subscribe((res) => res)
        .pipe(catchError((err) => of(undefined)))
    );
  }

  getLookup(lookupUrl, searchParam?) {
    let params = new HttpParams();
    if (searchParam) {
      searchParam.forEach((element) => {
        params = params.append(element.fieldName, element.default);
      });
    }
    return this.httpClient.get(lookupUrl, { params });
    // if (lookupUrl.includes('json')) {
    //     return this.httpClient.get('assets/' + lookupUrl);
    // } else {
    //     return this.httpClient.get(lookupUrl, { params });
    // }
    // return of(this.companyList).pipe(delay(5000));
  }
}
