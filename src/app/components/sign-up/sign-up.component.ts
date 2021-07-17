import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/shared/users/users.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public loginForm: FormGroup
  submitted = false
  allUsers : User[]
  constructor(private formBuilder: FormBuilder, private _users:UsersService,private _router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      role: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]]
    })
  }

  signIn() {
    console.log('here')
    this.submitted = true
    console.log({loginForm:this.loginForm})  
    if (this.loginForm.invalid) {
      return;
    }
    console.log('valid')
    this._users.AddPUser({
      "firstName":this.loginForm.get('firstName').value,
      "lastName":this.loginForm.get('lastName').value,
      "email":this.loginForm.get('email').value,
      "phoneNumber":this.loginForm.get('phoneNumber').value,
      "password":this.loginForm.get('password').value,
      "role":"PROVIDER"
    })
    .then((res)=>{
      console.log({res})
      this._router.navigate(['/login']);
    })
    .catch((err)=>{
      console.error({err})
    })
  }
  get f() { return this.loginForm.controls; }

}
