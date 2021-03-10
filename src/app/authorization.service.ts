import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor( public rter: Router ) { }
  submitData(loginDataForm: any) {
    const localdata = localStorage.getItem('users');
    const arryconvert = JSON.parse(localdata);
    // console.log(arryconvert);
    const existed = arryconvert.find((u: any) => u.Email === loginDataForm.value.Email && u.PASSWORD === loginDataForm.value.password ) ;
    if (existed){
      alert('welcome');
      localStorage.setItem('token', 'verified');
      this.rter.navigate(['/dashbord']);

      return true;
    }else{
      alert('wrong user');
      localStorage.setItem('token', 'not');

    }
  }
}
