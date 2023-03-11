import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from '../books/books.component';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public Books: Book []
  public añadirLibro: void

 constructor(public BooksService: BooksService, private toastr: ToastrService ){
  
 }

 enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){
     
  let newbook = new Book (title,type,author,price,photo,id_book);
   this.BooksService.postBook(newbook).subscribe((resp:Respuesta)=>{
    if(!resp.error){
      this.BooksService.Books=resp.data
      this.toastr.success ("Se ha añadido un nuevo libro con titulo" +" "+ newbook.title)
    }else{
      this.toastr.error("El libro ya esxiste")
    }
   })
 
 }

//  recoger(libro:Book){

//   let nuevosLibros=this.Books.filter(book => book.id_book != libro.id_book)
  
//     this.Books = nuevosLibros;
   
  
//    }

  

}
