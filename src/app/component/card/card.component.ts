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
  // @Output() eventoBoton= new EventEmitter<Book>();

  constructor(public BooksService: BooksService){}

  eliminarCard(id_book:number){
   
    this.eliminarLibro = this.BooksService.delete(id_book)
   
  }
}
