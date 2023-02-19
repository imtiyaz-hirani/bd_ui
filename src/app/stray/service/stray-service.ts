import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StrayService {

  constructor(private http: HttpClient) { }

  public addNewStray(stray : any){
    return this.http.post(environment.APIBASEURL+'/stray',stray)
  }

  public upload(formData: FormData){
    return this.http.post(environment.APIBASEURL+'/upload',formData)
  }

  public getStrayDate(strayQuery: any){
        return this.http.post<any[]>(environment.APIBASEURL+'/getstray',strayQuery )
  }

  public getImage(strayNo :string){
     return this.http.get(environment.APIBASEURL+"/stray/image/"+strayNo)
  }

  public updateStray(stray: any){
    return this.http.put(environment.APIBASEURL+'/stray/update',stray)
  }

  public updateMassStray(strayMassUpdateRequest : any){
    return this.http.post(environment.APIBASEURL+'/stray/mass/update',strayMassUpdateRequest)
  }
}
