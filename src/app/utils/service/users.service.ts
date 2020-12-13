import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl:string = "http://localhost:4444/users/"

  constructor(private http: HttpClient) { }
  login(email,password) {
    let data = { "email":email, "password":password}
    return this.http.post(this.apiUrl+'/login',data);
}

userList(skip =0) {
let header ={
  headers:new HttpHeaders().set('Authorization',localStorage.getItem('token'))
}
  return this.http.get(this.apiUrl+'/getUsers?skip='+skip,header);
}
}
