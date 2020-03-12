import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';


const routes: Routes = [

  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
