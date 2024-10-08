import { Component, inject } from "@angular/core";
import { MatDialog} from '@angular/material/dialog';
import { DialogAddgeneroComponent } from "./dialog-addgenero/dialog-addgenero.component";
import {MatButtonModule} from '@angular/material/button';
import { ModalService } from "../../../services/modal.service";
import { IGeneroMovie } from "../../../interfaces/generomovie.interface";

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


  openDialog(): void {
   this._dialog.openModal<DialogAddgeneroComponent,IGeneroMovie>(DialogAddgeneroComponent);
 
  }


}

