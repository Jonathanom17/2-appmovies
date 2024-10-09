import { IGeneroMovie } from '../../../interfaces/interfaces-movie.interface';
import { Component, inject } from "@angular/core";
import { ModalDialogGeneroComponent } from "./modal-dialog-generos/modal-dialog-generos.component";
import {MatButtonModule} from '@angular/material/button';
import { ModalService } from "../../../services/modal.service";


@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [
    MatButtonModule
  ],
   templateUrl: './generos.component.html',
  styleUrl: './generos.component.css',
 
})


export default class GenerosComponent {
  readonly _dialog = inject(ModalService);

  datos:IGeneroMovie={id:0, description:"Jonathan", status:true};
  datos2:IGeneroMovie={id:0, description:"", status:false};

  openDialogAdd(): void {
   this._dialog.openModal(ModalDialogGeneroComponent, this.datos2);
 
  }

  openDialogEdit(){
    
    this._dialog.openModal(ModalDialogGeneroComponent,this.datos);
  }

}

