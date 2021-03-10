import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {NonRactiveGuard, RactiveGuard } from './ractive.guard';

const routes: Routes = [
  {path: 'emoloyee' , component: EmployeeComponent, },
  {path: 'department' , component: DepartmentComponent},
  { path: 'signup' , component: SignupComponent  , },
  { path: 'login' , component: LoginComponent },
  { path: 'dashbord' , component: DashbordComponent,   canActivate : [RactiveGuard]  },


  { path: 'mobiles',
  loadChildren: () => import('./mobiles/mobiles.module').then(m => m.MobilesModule) , canActivate : [RactiveGuard]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeComponent , DepartmentComponent , LoginComponent , SignupComponent , DashbordComponent]