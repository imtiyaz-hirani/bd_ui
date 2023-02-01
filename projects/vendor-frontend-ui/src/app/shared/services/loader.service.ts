import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private showLoader: BehaviorSubject<any>;
  constructor() {
    this.showLoader = new BehaviorSubject<string>(null);
  }

  /**
   * Method to set loader state
   *
   * @param isVisible : boolean
   */
  setLoaderState(isVisible: boolean): void {
    this.showLoader.next(isVisible);
  }

  /**
   * Method to get loader state
   */
  getLoaderState(): Observable<boolean> {
    return this.showLoader.asObservable();
  }
}
