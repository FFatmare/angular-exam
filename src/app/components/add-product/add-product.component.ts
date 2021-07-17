import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/products';
import { CategoriesService } from 'src/app/shared/category/categories.service';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  cats : any
  productForm:FormGroup
  submitted = false
  product={
    name:"",
    price:"",
    category:""
  }
  constructor(private _cat:CategoriesService, private _prod:ProductsService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    
    this.getAllCategories()
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
  }

  createProduct(form){
    console.log({form})
    if(form.invalid){
      return
    }
    this._prod.AddProduct({
      name:form.value.name,
      category:form.value.category,
      price:form.value.price,
    })
    .then((res)=>{
      console.log(res)
      this.router.navigate(['/products'])
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  getAllCategories(){
    this._cat.getAllCategories()
    .then((res)=>{
      this.cats=res
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  get f() { return this.productForm.controls; }

}
