import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  private headerOption: any;
  private baseUrl = environment.BaseUrl;

  constructor(private http: HttpClient) { }

  private createHttpHeader(token: string) : any {
    
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
      })
    };

    return httpOption;
  }

  post(url: string, body: any, tokenRequired: boolean = false) : Observable<any> {

    if(tokenRequired)
      this.headerOption = this.createHttpHeader(localStorage.getItem("fundooAdminToken"));

    return this.http.post(this.baseUrl+url, body, tokenRequired && this.headerOption);
  }

  get(url: string, tokenRequired: boolean = false) : Observable<any> {

    if(tokenRequired)
      this.headerOption = this.createHttpHeader(localStorage.getItem("fundooAdminToken"));

    return this.http.get(this.baseUrl+url, tokenRequired && this.headerOption);

  }

  put(url: string, body: any, tokenRequired: boolean = false) : Observable<any> {

    if(tokenRequired)
      this.headerOption = this.createHttpHeader(localStorage.getItem("fundooAdminToken"));

    return this.http.put(this.baseUrl+url, body, tokenRequired && this.headerOption);
  }
 
}
