import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }


  getAllProducts() {
    return this.http.get('http://localhost:3000/products').toPromise()
  }
  AddProduct(body) {
    return this.http.post('http://localhost:3000/products', body).toPromise()
  }
  getSingleProduct(id) {
    return this.http.get('http://localhost:3000/products/' + id).toPromise()
  }
  editProduct(id, data) {
    return this.http.put('http://localhost:3000/products/' + id, data).toPromise()
  }
  deleteProduct(id){
    return this.http.delete('http://localhost:3000/products/' + id).toPromise()
  }
}
