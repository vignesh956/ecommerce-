import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$')]),
    password: new FormControl('')
  });
  constructor(private fb: FormBuilder, public loginform: AuthorizationService,) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  formSubmit() {
    const res = this.loginform.submitData(this.loginData);
  }
}