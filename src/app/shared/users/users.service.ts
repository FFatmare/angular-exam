import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://localhost:3000/users').toPromise()
  }
  AddPUser(body) {
    return this.http.post('http://localhost:3000/users',body).toPromise()
  }

}
