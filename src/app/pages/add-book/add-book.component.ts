import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from '../books/books.component';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public Books: Book []
  public añadirLibro: void

 constructor(public BooksService: BooksService){
  
 }

 enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){
     
  let newbook = new Book (title,type,author,price,photo,id_book);
  this.añadirLibro = this.BooksService.add(newbook)
 }

 recoger(libro:Book){

  let nuevosLibros=this.Books.filter(book => book.id_book != libro.id_book)
  
    this.Books = nuevosLibros;
   
  
   }

  

}
