import { Component, inject, model, OnInit } from '@angular/core';
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
  templateUrl: './dialog-addgenero.component.html',
  styleUrl: './dialog-addgenero.component.css'
})
export class DialogAddgeneroComponent implements OnInit {

  generotForm!: FormGroup;
  private readonly _fb= inject(FormBuilder);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);
  private readonly _modalService = inject(ModalService);
  private _buildForm():void{
    this.generotForm = this._fb.group({
       description:['', [Validators.required, Validators.minLength(5)]]
    })
  }

  onSubmit(){
    if (!this.generotForm.valid) {
      this.generotForm.markAllAsTouched();
      return;
    }else{
      const solicitudVideo = this.generotForm.value;
      console.log(solicitudVideo.description)
    }
    
      
   
  }

  getTitle():string{
    return this._matDialog.data ? 'Ediatar Género': 'Agregar Género';
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
