import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  submitted = false
  allUsers : any
  constructor(private formBuilder: FormBuilder, private _users:UsersService,private _router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  signIn() {
    this.submitted = true
    if (this.loginForm.invalid) {
      return;
    }
    this._users.getAllUsers()
    .then((res)=>{
      console.log({res})
      this.allUsers = res
      this.allUsers.map((item)=>{
        if(item.email == this.loginForm.get('email').value && item.password == this.loginForm.get('password').value){
          console.log('here')
          localStorage.setItem('currentUser',JSON.stringify(item))
          // this._router.navigate(['/home']);
          location.href="/home"
          return;
        }
      })
    })
    .catch((err)=>{
      console.error({err})
    })
  }
  get f() { return this.loginForm.controls; }
}
