import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private Books: Book[]

  constructor() {

    let book1 :Book = new Book ("El niño con el pijama de rayas","Tapa blanda","John Boyne",39,"https://m.media-amazon.com/images/I/512ndU0-S+L.jpg",60,24);
    let book2 :Book = new Book ("Harry Potter","Tapa dura","J. k. Rowling",45,"https://static.posters.cz/image/1300/posters/harry-potter-la-piedra-filosofal-i104639.jpg",45,68);
    let book3 :Book = new Book ("Codigo Da Vinci","Tapa dura","Dan Brown",20,"https://m.media-amazon.com/images/I/A1IH+BJHY3L.jpg",33,15)
    this.Books=[book1,book2,book3]
   
  }

   public getAll():Book[]{
      return this.Books
   }

   public getOne(id_libro: number):Book{

    let bookPosition = -1;
    for(let i=0;i<this.Books.length;i++){
      if(this.Books[i].id_book == id_libro){
        bookPosition=i
      }
    }

    return this.Books[bookPosition]

   }

   public add(book: Book): void{

    this.Books.push(book);

   }

    public edit(book: Book): boolean{

      for(let i=0;i<this.Books.length;i++){
        if(this.Books[i].id_book == book.id_book){
          this.Books[i]=book;
        }
      }
    
      return true;
    }
   

   public delete(id_book: number): boolean{

    for(let i=0;i<this.Books.length;i++){
      if(this.Books[i].id_book== id_book){
        this.Books.splice(i,1)
      }
    }

    return true;

  }
}