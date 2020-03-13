import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminservice } from '../../services/admin/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  basicUserCount: number = 0;
  advanceUserCount: number = 0;
  basicAdvanceError: string;
  userList=[];

  constructor(private router: Router, private admin: Adminservice) { }

  ngOnInit() {

    this.getStatistics();

    this.getAllUser();

  }

  getStatistics() {
    this.admin.Statistics().
      subscribe(data => {
        if(data.status) {
          this.basicUserCount = data.data.basic;
          this.advanceUserCount = data.data.advanced;
        }
        else {
          this.basicAdvanceError = data.message;
        }
      },
      error => {
        if(error.error.message)
          this.basicAdvanceError = error.error.message;
        else
          this.basicAdvanceError = "Connection to the server failed";
      })
  }

  getAllUser() {

    this.admin.GetAllUser()
      .subscribe(data => {
        if(data.status)
          this.userList = data.data.records;
        console.log(data);
      },
      error => {
        console.log(error);
      })

  }

  adminLogout() {
    localStorage.removeItem("fundooAdminToken");
    this.router.navigate(['login']);
  }

}
