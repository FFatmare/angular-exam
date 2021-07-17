import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './shared/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-exam';
  currentUser = localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : ''
  currentRoute:any
  isAuth=false
  constructor(private _posts:ProductsService,private formBuilder:FormBuilder, private router:Router){
    this.currentRoute=location.href
    console.log({currentRoute:this.currentRoute})
    if(this.currentRoute=='http://localhost:4200/login' || this.currentRoute=='http://localhost:4200/sign-up'){
      this.isAuth=true
    }else{
      this.isAuth=false
    }
  }


  
  addPost(){
    // console.log('here');  
    // this.submitted=true
    // if(this.postForm.invalid){
    //   return;
    // }
    // this._posts.AddPost(this.postForm.value)
    // .then((res)=>{
    //   console.log({res})
    // })
    // .catch((err)=>{
    //   console.error({err})
    // })
  }
}
