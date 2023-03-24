import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})

export class UserService{
  private url:string ="http://localhost:3000/"
  public logueado:boolean
  public user:User


  constructor(private http : HttpClient){

   this.logueado = false
  //  this.user=null
  }
   postUser (user:User){
      return this.http.post(this.url + "registrar",user)
    }

  postUserLoging(user:User){
    console.log(user);

    return this.http.post(`${this.url}login`, user)
  }
}
