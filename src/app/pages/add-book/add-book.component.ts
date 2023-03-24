import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from '../books/books.component';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  public Books: Book[];
  public añadirLibro: void;

  constructor(
    public BooksService: BooksService,
    private toastr: ToastrService,
    private http:HttpClient, 
    public apiService: UserService
  ) {}

  enviar(
    title: string,
    type: string,
    author: string,
    price: number,
    photo_libro: string,
  
  ) {
    let newbook = new Book(title, type, author, price, photo_libro,this.apiService.user.id_user);
    console.log(newbook);
    
    this.BooksService.postBook(newbook).subscribe((resp: Respuesta) => {
      if (resp.error) {
        this.toastr.error(`ERROR: libro no añadido`);
        console.log(resp.data)
      } else {
        this.toastr.success(`Se ha añadido un nuevo libro con titulo ${newbook.title}`);
        console.log(resp.data)

      }
    });
  }

  //  recoger(libro:Book){

  //   let nuevosLibros=this.Books.filter(book => book.id_book != libro.id_book)

  //     this.Books = nuevosLibros;

  //    }
}
