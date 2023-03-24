import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url="http://localhost:3000/books"

  public Books: Book[]


  constructor(private http: HttpClient) {

   
  }

   public getAll(id_user:number):Observable<Object>{
      return this.http.get(`${this.url}?id_user=${id_user}`)
   }


   getBookOne(id_book:number, id_user:number):Observable<Object>{
    return this.http.get(`${this.url}?id_book=${id_book}&id_user=${id_user}`)
    // this.url + '?id=' + id
   }

  
   postBook(newBook :Book){
    console.log(newBook);
    
    return this.http.post(this.url,newBook)
   }


  putBook(bookEditado: Book):Observable<Object>{
    return this.http.put(this.url,bookEditado)
  }
   

  public delete(id_book:number):Observable<Object>{
    let deletedBook = {headers: null, body:{id_book:id_book}};
    return this.http.delete(this.url,deletedBook);
  }

  
}
