import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent
{
  public eliminarLibro: boolean;
 
  @Input() cardbook: Book;
  @Input() parHijo: boolean;
  @Output() eventoBoton= new EventEmitter<number>();

  constructor(public booksService: BooksService){}

  eliminarCard(id_book:number){
   
    this.eventoBoton.emit(id_book)
   
  }
}
