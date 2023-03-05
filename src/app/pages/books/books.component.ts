import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
 public Books: Book [];
 public searchedBook : Book;

 constructor(public BooksService: BooksService ){

 this.Books= this.BooksService.getAll()


  
 }
 searchBook(id_book:string){

  if(id_book == " "){
    this.Books=this.BooksService.getAll()
  }else{
    let number:number = Number(id_book)
    this.searchedBook=this.BooksService.getOne(number)
    console.log(this.searchedBook)
  }if(this.searchedBook != undefined){
    this.Books=[this.searchedBook]
  }

   
 }

 enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){
     
  let newbook = new Book (title,type,author,price,photo,id_book);
  this.Books.push(newbook)
 }


 recoger(libro:Book){

 let nuevosLibros=this.Books.filter(book => book.id_book != libro.id_book)

  this.Books = nuevosLibros;
 

 }
   
}
