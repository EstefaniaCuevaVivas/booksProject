import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public Books: Book[];
  public book :Book

  constructor(
    public booksService: BooksService,
    private toastr: ToastrService,
    private apiService: UserService
  ) 
  {
    this.Books = [];
    console.log(this.apiService.user)
    this.booksService.getAll(this.apiService.user.id_user).subscribe((resp:Respuesta)=>{
      console.log(resp.data)
      this.Books = resp.data
    });

  }
  searchBook(id_book: string) {
   
      let number = parseInt(id_book)
      console.log(number);
      
      this.booksService.getBookOne(number,this.apiService.user.id_user).subscribe((resp:Respuesta)=>{
        if ( !resp.error) {
          
       console.log(resp.data)
       this.Books = resp.data
         
        }else {
          this.toastr.warning('El id no existe');
        }
      });   
    
  }

  //  enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){

  //   let newbook = new Book (title,type,author,price,photo,id_book);
  //   this.Books.push(newbook)
  //  }

  recoger(id_book: number) {
    console.log(id_book);
    
    this.booksService.delete(id_book).subscribe((resp:Respuesta)=>
    {
      console.log(resp.data)
      this.Books = resp.data
    })
  }
}
