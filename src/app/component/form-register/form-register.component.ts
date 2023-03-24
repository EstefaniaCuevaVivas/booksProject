import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;
  public user : User;


  constructor(private formBuilder:FormBuilder, private toastr: ToastrService,public apiService:UserService){
    this.buildForm()
  }

  public register(){
    const dataForm = this.myForm.value;
    const user:User = new User(0,dataForm.nombre,
                               dataForm.apellidos,
                               dataForm.email,
                               null,
                               dataForm.password);

    console.log(user)

      this.apiService.postUser(user).subscribe((resp: string) => {
       if (resp != "-1") {
         this.apiService.user = user;
         this.apiService.user.id_user = Number(resp);
         this.toastr.success(
          `Se ha registrado correctamente ${user.name} con id: ${resp}`
       );
     } else {
        this.toastr.error('El usuario ya existe');
    }
   });

    
  }

  

  private buildForm(){
    const minPassLength =8;

    this.myForm= this.formBuilder.group({
      nombre:[,Validators.required],
      apellidos:[,Validators.required],
      email: [,[Validators.required,Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[,[Validators.required, this.checkPasswords]]

    });
  } 
  
  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};

    // console.log(control.parent);
    // console.log(control.parent?.value);
    // console.log(control);


    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

}
