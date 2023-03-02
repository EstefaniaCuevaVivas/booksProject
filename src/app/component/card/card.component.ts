import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent
{
  @Input() cardbook: Book;
  @Input() parHijo: boolean;
  @Output() eventoBoton= new EventEmitter<Book>();

  constructor(){}

  eliminarCard(){
   
    this.eventoBoton.emit(this.cardbook)
   
  }
}
