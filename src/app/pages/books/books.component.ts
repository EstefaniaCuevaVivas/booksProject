import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public Books: Book[];

  constructor(
    public BooksService: BooksService,
    private toastr: ToastrService
  ) {
    this.Books = this.BooksService.getAll();
  }
  searchBook(id_book: string) {
    if (id_book == '') {
      this.BooksService.getBook();
    } else {
      let number: number = Number(id_book);
      let libroBuscado = this.BooksService.getOne(number);

      if (libroBuscado != undefined) {
        this.Books = [libroBuscado];
      } else {
        this.toastr.warning('El id no existe');
      }
    }
  }

  //  enviar(title: string,type: string,author: string, price: number,photo: string,id_book:number){

  //   let newbook = new Book (title,type,author,price,photo,id_book);
  //   this.Books.push(newbook)
  //  }

  recoger(id_book: number) {
    this.BooksService.deleteBook(id_book).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        this.BooksService.Books=resp.data
        this.toastr.success('El libro ha sido eliminado');
      }
    });
  }
}
