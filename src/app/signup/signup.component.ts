import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerData = new FormGroup({
    FNAME: new FormControl('', [Validators.required, Validators.minLength(4)]),
    LNAME: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Email: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$')]),
    PASSWORD: new FormControl('', [Validators.required])
  });
  constructor( private fb: FormBuilder,public rter: Router  ) { }

  ngOnInit(): void {

  }
  onSubmit() {
    alert("hai");
    const a = localStorage.getItem('users');
    const users = a ? JSON.parse(a) : [];
    // console.log(this.registerData.value);
    const existed = users.find((u: any) => u.Email === this.registerData.value.Email);
    if (!existed) {
      users.push({
        FNAME: this.registerData.value.FNAME,
        LNAME: this.registerData.value.LNAME,
        Email: this.registerData.value.Email,
        PASSWORD: this.registerData.value.PASSWORD,
      });
      alert('thank you for registaion');
      this.rter.navigate(['/login']);
    

    } else {
      alert('user already existed');
    }
    localStorage.setItem('users', JSON.stringify(users));


  }


}
