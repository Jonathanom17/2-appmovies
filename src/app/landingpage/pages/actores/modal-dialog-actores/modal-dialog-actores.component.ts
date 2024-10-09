import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IActorMovie } from '../../../../interfaces/interfaces-movie.interface';
import { ModalService } from '../../../../services/modal.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-modal-dialog-actores',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  templateUrl: './modal-dialog-actores.component.html',
  styleUrl: './modal-dialog-actores.component.css'
})
export class ModalDialogActoresComponent {
  private readonly _fb = inject(FormBuilder);
  private  _modalService = inject(ModalService);

  actorForm = this._fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    fechaNacimiento: new FormControl<Date | null>(null)
  })


  constructor(@Inject(MAT_DIALOG_DATA) public data:IActorMovie){

  }



  onSubmit(){
    if (!this.actorForm.valid) {
      this.actorForm.markAllAsTouched();
      return;
    }else{
      const datos = this.actorForm.value;
      if(this.data.status){
        
      console.table(datos)
      }else{
        console.log(datos)
        
      }
      this.actorForm.reset();
        this._modalService.closeModal();
    }  
   
  }



  getTitle(): string {
    return (this.data.status)? 'Editar Género': 'Agregar Género';

  }

  getErrorIfield(ifield: keyof typeof this.actorForm.controls): string | null {
    //Existe el Control
    if (!this.actorForm.controls[ifield]) return null;

    //obtener el error del control
    const error = this.actorForm.controls[ifield].errors || {};

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
