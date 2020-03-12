import { Component, OnInit } from '@angular/core';
import { Adminservice } from '../../services/admin/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Adminlogin } from 'src/app/Model/adminlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg: string;
  adminLoginInformation: FormGroup;

  constructor(private admin: Adminservice) { }

  ngOnInit() {

    this.adminLoginInformation = new FormGroup({
      adminEmail: new FormControl('', [Validators.required, Validators.email]),
      adminPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
    })

  }

  hasError(formName: string, errorType: string) {

    if (formName == "adminEmail") {
      if (this.adminLoginInformation.controls[formName].untouched)
        return false;
    }

    if (formName == "adminPassword") {
      if (this.adminLoginInformation.controls['adminPassword'].untouched)
        return false;
    }

    return this.adminLoginInformation.controls[formName].hasError(errorType);
  }

  removeError() {
    this.errorMsg = '';
  }

  adminLoginData(loginData: any) {
    if(this.adminLoginInformation.valid) {
      this.errorMsg = '';
      this.sendDataToServer(loginData); 
    }
    else {
      this.errorMsg = "Enter all the Input field Properly"
    }
  }

  private sendDataToServer(adminData: any) {

    var login: Adminlogin = {
      EmailId: adminData.adminEmail,
      Password: adminData.adminPassword
    }

    this.admin.AdminLogin(login).
      subscribe(data => {
        if(data.status) {
          localStorage.removeItem("fundooAdminToken");
          localStorage.setItem("fundooAdminToken", data.token);
        }
        else
          this.errorMsg = data.message;
      },
      error => {
        console.log(error.error);
      })
    

  }

}
