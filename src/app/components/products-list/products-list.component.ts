import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products/products.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from 'src/app/model/products';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  posts:any
  currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : ''
  constructor(private _products: ProductsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts() {
    this._products.getAllProducts()
      .then((res:Product) => {
        console.log({ res })
        // this.posts = res
        this.posts = res
      })
      .catch((err) => {
        console.error({ err })
      })
  }

  deleteProduct(id){
    this._products.deleteProduct(id)
    .then((res)=>{
      this.getAllPosts()
    })
  }

}

