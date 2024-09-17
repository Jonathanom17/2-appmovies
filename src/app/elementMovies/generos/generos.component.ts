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
        name: ['',Validators.required]
     })
   
     saveChange(){
       console.log();
     }
     getErrorInput():string{
       let nombre= this.form.controls.name;
       if(nombre.hasError('required')){
        return "El campo nombre es requerido"
       }
       return "";
     }

}
