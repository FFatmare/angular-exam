import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/category/categories.service';
import { ProductsService } from 'src/app/shared/products/products.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  cats: any
  productForm: FormGroup
  submitted = false
  productId: any
  constructor(private _cat: CategoriesService, private _prod: ProductsService, private formBuilder: FormBuilder, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.productId = params['id']
      }
    })
    this.getAllCategories()
    this.getSingleProduct()
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
  }

  getSingleProduct(){
    this._prod.getSingleProduct(this.productId)
    .then((res)=>{
      this.productForm.get('name').setValue(res['name'])
      this.productForm.get('category').setValue(res['category'])
      this.productForm.get('price').setValue(res['price'])
      console.log({res})
    })
  }



  editProduct() {
    this.submitted = true
    if (this.productForm.invalid) {
      return
    }
    this._prod.editProduct(this.productId, {
      name: this.productForm.get('name').value,
      category: this.productForm.get('category').value,
      price: this.productForm.get('price').value,
    })
      .then((res) => {
        console.log(res)
        this.router.navigate(['/products'])
      })
      .catch((err) => {
        console.log(err)
      })
  }
  getAllCategories() {
    this._cat.getAllCategories()
      .then((res) => {
        this.cats = res

      })
      .catch((err) => {
        console.log(err)
      })
  }

  get f() { return this.productForm.controls; }

}
