import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class Adminservice {

  constructor(private httpService: HttpserviceService) { }

  AdminLogin(loginData: any) {
    return this.httpService.post("Admin/Login", loginData);
  }

  Statistics() {
    return this.httpService.get("Admin/Statistics", true);
  }

  GetAllUser() {
    return this.httpService.get("Admin/Users", true);
  }

}
