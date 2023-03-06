import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;
  public user : User;

  constructor(private formBuilder:FormBuilder){
    this.buildForm()
  }

  public register(){

    const user = this.myForm.value;
    console.log(user)
  }

  private buildForm(){
    const minPassLength =8;

    this.myForm= this.formBuilder.group({
      nombre:[,Validators.required],
      Apellidos:[,Validators.required],
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
