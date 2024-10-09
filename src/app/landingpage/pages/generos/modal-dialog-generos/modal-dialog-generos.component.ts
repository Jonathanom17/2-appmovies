import { Component, Inject, inject, model, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import GenerosComponent from '../generos.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../../../services/modal.service';
import { IGeneroMovie } from '../../../../interfaces/interfaces-movie.interface';

@Component({
  selector: 'modal-dialog-addgenero',
  standalone: true,
  imports: [

    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './modal-dialog-generos.component.html',
  styleUrl: './modal-dialog-generos.component.css'
})



export class ModalDialogGeneroComponent implements OnInit {
  firstNameIsReadOnly: boolean=false;
  generotForm!: FormGroup;
  private readonly _fb= inject(FormBuilder);

  private  _modalService = inject(ModalService);

  private _buildForm():void{
    this.generotForm = this._fb.group({
       description:['', [Validators.required, Validators.minLength(5)]]
    })
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data:IGeneroMovie){

  }

  
  onSubmit(){
    if (!this.generotForm.valid) {
      this.generotForm.markAllAsTouched();
      return;
    }else{
      const datos = this.generotForm.value;
      if(this.data.status){
        
      console.table(datos)
      }else{
        console.log(datos)
        
      }
      this.generotForm.reset();
        this._modalService.closeModal();
    }
    
      
   
  }

  getTitle(): string {
    return (this.data.status)? 'Editar Género': 'Agregar Género';

  }

 
  ngOnInit(): void {
    
    this._buildForm();
  }



  getErrorIfield(ifield: keyof typeof this.generotForm.controls): string | null {
    //Existe el Control
    if (!this.generotForm.controls[ifield]) return null;

    //obtener el error del control
    const error = this.generotForm.controls[ifield].errors || {};

    for (const key of Object.keys(error)) {
      switch (key) {

        case 'required':
          return "Este campo es requerido"
        case 'minlength':
          return `El campo requiere mínimo${error['minlength'].requiredLength} caracteres`
       
      }
    }

    return null;

  }

}
