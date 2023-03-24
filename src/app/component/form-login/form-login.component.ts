import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { connect } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
 public user:User
 

 constructor(public apiService:UserService, private router:Router){

  this.user= new User(0,"","","","","",)
 }

 onSubmit(form:NgForm){

  this.apiService.postUserLoging(this.user).subscribe((res:Respuesta)=>{
    if(res.mensaje==="logueado"){
      this.apiService.logueado = true;
      this.apiService.user = res.data_user;
      console.log(res.data_user);
      
      this.router.navigate(['/books'])
     
      
    } else{
      this.apiService.logueado=false
      

    }   
  })
 
 }
}
