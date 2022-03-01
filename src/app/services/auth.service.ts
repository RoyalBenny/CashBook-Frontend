import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storage = localStorage
  token:string=''
  url:string = "http://localhost:24551/api/user"
  subject:BehaviorSubject<Storage> = new BehaviorSubject(this.storage)
  constructor(private httpClient:HttpClient) {

   }

   setToken(token:string){
    this.storage.setItem("token",token)
    this.token = token
    this.subject.next(this.storage)
   }

   getToken():BehaviorSubject<Storage>{
     return this.subject
   }

   createToken(user:User){
    user.username = user.email
    return this.httpClient.post(this.url+'/createtoken',user)
   }

}
