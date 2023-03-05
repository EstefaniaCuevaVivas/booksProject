import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public Books: Book []
  public editBook : boolean

  constructor(public BooksService: BooksService){

  

  }
 
  enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){
      
   let newbook = new Book (title,type,author,price,photo,id_book);
   this.editBook = this.BooksService.edit(newbook)
  }
 
  recoger(libro:Book){
 
   let nuevosLibros=this.Books.filter(book => book.id_book != libro.id_book)
   
     this.Books = nuevosLibros;
    
   
    }
 

}
