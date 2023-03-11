import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url="http://localhost:3000/books"

  public Books: Book[]
  public book: Book

  constructor(private http: HttpClient) {

    let book1 :Book = new Book ("El niño con el pijama de rayas","Tapa blanda","John Boyne",39,"https://m.media-amazon.com/images/I/512ndU0-S+L.jpg",60,24);
    let book2 :Book = new Book ("Harry Potter","Tapa dura","J. k. Rowling",45,"https://static.posters.cz/image/1300/posters/harry-potter-la-piedra-filosofal-i104639.jpg",45,68);
    let book3 :Book = new Book ("Codigo Da Vinci","Tapa dura","Dan Brown",20,"https://m.media-amazon.com/images/I/A1IH+BJHY3L.jpg",33,15)
    this.Books=[book1,book2,book3]
   
  }

   public getAll():Book[]{
      return this.Books
   }

   getBook(){
    return this.http.get(this.url)
   }

   public getOne(id_libro: number):Book{

    let bookFound = this.Books.find(book => book.id_book==id_libro);
  
    return bookFound

   }

   getBookOne(id:number){
    return this.http.get(this.url)
   }

   

  //  public add(book: Book){

  //   return this.Books.push(book);

  //  }

   postBook(newBook :Book){
    return this.http.post(this.url,newBook)
   }

    // public edit(bookEditado: Book): boolean{

    //  let editBook = this.Books.findIndex(book=>book.id_book == bookEditado.id_book)
    // //  this.Books[editBook]=bookEditado

    // // if(editBook!=-1){
    //   this.Books.splice(editBook,1,bookEditado)

    
    //   return editBook !=-1;
    // }

  putBook(bookEditado: Book){
    return this.http.put(this.url,bookEditado)
  }
   

  //  public delete(id_book: number): boolean{

  //  let deleteBook= this.Books.findIndex(book => book.id_book == id_book)
  //  this.Books.splice(deleteBook,1)

  //   return deleteBook != -1;

  // }
  
  deleteBook(id_book:number){
    const httpOptions= {headers:null,body:id_book}
    return this.http.delete(this.url,httpOptions)
  }
}
