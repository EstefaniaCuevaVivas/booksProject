import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public Books: Book []
  public editBook : boolean

  constructor(public BooksService: BooksService,private toastr: ToastrService){

  

  }
 
  enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){
      
   let newbook = new Book (title,type,author,price,photo,id_book);
   
    this.BooksService.putBook(newbook).subscribe((resp:Respuesta)=>{
      if(!resp.error){

        this.BooksService.Books=resp.data

        this.toastr.success("El libro con referencia" + " "+ newbook.id_book + " " + "ha sido modificado")

      }else{
        this.toastr.warning("El libro con referencia" + " " + newbook.id_book + " " + "no ha sido encontrado")
      }
    })
  }
 
  // recoger(libro:Book){
 
  //  let nuevosLibros=this.Books.filter(book => book.id_book != libro.id_book)
   
  //    this.Books = nuevosLibros;
    
   
  //   }
 

}
