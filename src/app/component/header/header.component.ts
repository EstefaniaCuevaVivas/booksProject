import { Component } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {




  constructor(public apiService: UserService){}

}
   

