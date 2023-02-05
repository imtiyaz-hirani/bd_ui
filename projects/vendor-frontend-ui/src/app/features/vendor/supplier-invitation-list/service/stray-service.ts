import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrayService {

  constructor(private http: HttpClient) { }

  public addNewStray(stray){
    return this.http.post('http://localhost:8080/stray',stray)
  }

  public upload(formData: FormData){
    return this.http.post('http://localhost:8080/upload',formData)
  }
}
