import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/model/products';
import { ProductsService } from 'src/app/shared/products/products.service';
import { UsersService } from 'src/app/shared/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  closeResult = '';
  posts  : any
  users  : any
  constructor(private _products: ProductsService,
    private _users:UsersService,
    private _router: Router) { }
  ngOnInit() {
    this.getAllUsers()
  }

 


  getAllUsers() {
    this._users.getAllUsers()
      .then((res) => {
        console.log({ res })
        // this.posts = res
        this.users = res
      })
      .catch((err) => {
        console.error({ err })
      })
  }

  

}
