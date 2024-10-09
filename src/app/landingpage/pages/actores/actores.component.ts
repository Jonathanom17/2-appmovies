import { Component, inject } from "@angular/core";
import { ModalService } from "../../../services/modal.service";
import { IActorMovie } from "../../../interfaces/interfaces-movie.interface";
import {MatButtonModule} from '@angular/material/button';
import { ModalDialogActoresComponent } from "./modal-dialog-actores/modal-dialog-actores.component";

@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './actores.component.html',
  styleUrl: './actores.component.css'
})
export default class ActoresComponent {
 
  readonly _dialog = inject(ModalService);

  datos:IActorMovie={nombre:'', fechaNacimiento: new Date(), status:true};
 

  openDialogAdd(): void {
   this._dialog.openModal(ModalDialogActoresComponent, this.datos);
 
  }

  openDialogEdit(){
    
    this._dialog.openModal(ModalDialogActoresComponent,this.datos);
  }














}
