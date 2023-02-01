import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ObservableInput, Observable } from 'rxjs';




import { DependencyInjector } from '../../dependency-injector.service';
import { Injectable } from '@angular/core';
@Injectable()
export class BaseService {
  protected httpClient: HttpClient;
  protected tenant: number;

  constructor() {
    const injector = DependencyInjector.getInjector();

    if (injector) {
      this.httpClient = injector.get(HttpClient);
    } else {
      console.error("Couldn't get injector from DependencyInjectorService!!!!");
    }
  }

  
  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }
  post<T>(url: string, body: string): Observable<T> {
    return this.httpClient.post<T>(url, body);
  }
}
