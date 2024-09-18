import { Component, inject } from '@angular/core';
import { GeneroMovie } from '../../interfaces/generomovie.interface';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [
    MatDividerModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})


export class GenerosComponent {
     private formbuilder= inject(FormBuilder);
     form = this.formbuilder.group({
        name: ['',[Validators.required, Validators.minLength(4)]]
     })
   
     saveChange(){
       console.log();
     }

     getErrorInput(inputName:string):string| null{

      const error = this.form.controls['name'].errors || {};
       for(const key of Object.keys(error)){
           switch(key){
            
            case 'required':
              return "Este campo es requerido"
            case 'minlength':
              return  "El campo requiere mínimo 4 caracteres"
           }
       }
       
       return null;
   
     }

}
