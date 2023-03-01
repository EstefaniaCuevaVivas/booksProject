import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
 public Books: Book []

 constructor(){

   let book1 :Book = new Book ("El niño con el pijama de rayas","Tapa blanda","John Boyne",39,"https://m.media-amazon.com/images/I/512ndU0-S+L.jpg",60,24);
   let book2 :Book = new Book ("Harry Potter","Tapa dura","J. k. Rowling",45,"https://static.posters.cz/image/1300/posters/harry-potter-la-piedra-filosofal-i104639.jpg",45,68);
   let book3 :Book = new Book ("Codigo Da Vinci","Tapa dura","Dan Brown",20,"https://m.media-amazon.com/images/I/A1IH+BJHY3L.jpg",33,15)

  this.Books=[book1,book2,book3]
  
 }

 enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){
     
  let newbook = new Book (title,type,author,price,photo,id_book);
  this.Books.push(newbook)
 }



   
}
