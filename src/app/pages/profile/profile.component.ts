import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public newUser: User;

    constructor(){
      this.newUser = new User(35,"Pepa","Martin","mariaMartin@gmail.com","https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg?w=900&t=st=1677597140~exp=1677597740~hmac=e6daa56533fe2100da3a28d16f23eacd7c4c7dc6a6d087510fef50a8cc1c4e27","maria")
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


