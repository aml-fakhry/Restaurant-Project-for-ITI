import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }
  loginTest(user:User){
   return this.http.post("http://localhost:8080/user/login",user);
  }
}
