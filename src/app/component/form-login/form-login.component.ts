import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
 public user:User

 constructor(){

  this.user= new User(34,"","","","https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcmElMjBkZSUyMG11amVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80","")
 }

 onSubmit(form:NgForm){

  console.log(form.value)
  console.log(this.user);

 }
}
