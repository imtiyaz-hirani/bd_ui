import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrayService {

  constructor(private http: HttpClient) { }

  public addNewStray(stray){
    return this.http.post('http://localhost:9090/stray',stray)
  }

  public upload(formData: FormData){
    return this.http.post('http://localhost:9090/upload',formData)
  }

  public getStrayDate(strayQuery: any){
        return this.http.post('http://localhost:9090/getstray',strayQuery )
  }

  public getImage(strayNo :string){
     return this.http.get("http://localhost:9090/stray/image/"+strayNo)
  }

  public updateStray(stray){
    return this.http.post('http://localhost:9090/stray/update',stray)
  }



  getData() {
    "projects\vendor-frontend-ui\src\app\features\vendor\supplier-invitation-list\service\image.json"
    return this.http.get('/assets/image.json');
  }
}
