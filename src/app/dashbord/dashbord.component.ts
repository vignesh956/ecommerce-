import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  AuthoricationService: any;
  constructor( public loginform: AuthorizationService, public rter: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('users'));
    // const username = localStorage.getItem('user');
    const isAuth = () => {

      if (localStorage.getItem('users')) {
        return localStorage.getItem('users');
      } else {
        return false;
      }
    };

    // tslint:disable-next-line: typedef
    function App() {
      localStorage.setItem('user', 'bahtiyar');
      const userName = isAuth();
      return;
    }
    // this.userDisplayName = localStorage.getItem('users');
    // this.persons =  this.personService.getPersons().filter(x => x.id == this.personId)[0];
    // this.userDisplayName =  this.AuthoricationService.getPersons().find(x => x.id == this.FNAME);

  }
  // tslint:disable-next-line: typedef
  clear() {
    // localStorage.clear();
    localStorage.removeItem('token');
    window.location.reload();
  }

}
