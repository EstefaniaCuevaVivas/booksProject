import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public newUser: User;

    constructor(public apiService:UserService){
      this.newUser = this.apiService.user
    }

    enviar(nuevoName:string,nuevoApellido:string,nuevoemail:string,nuevoPhoto:string){

      this.newUser.name=nuevoName;
      console.log(this.newUser.name)
      this.newUser.last_name= nuevoApellido;
      console.log(this.newUser.last_name)
      this.newUser.email= nuevoemail;
      console.log(this.newUser.email)
      this.newUser.photo= nuevoPhoto;
      console.log(this.newUser.photo)
  
    }
}


