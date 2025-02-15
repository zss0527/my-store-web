import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, user } from '../model/Login.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  constructor(
    private http: HttpClient
  ) { }

  proceedlogin(user: LoginModel) {
    return this.http.get<user[]>('http://localhost:3000/user?id=' + user.username + '&&password=' + user.password)
  }

  isLoggedIn() {
    return localStorage.getItem('username') != null
  }

  proceedregister(user: user) {
    return this.http.post('http://localhost:3000/user', user)
  }
}
