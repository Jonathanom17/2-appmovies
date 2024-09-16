import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  maximoRating : number[]=Array(5).fill(0);
  ratingAnterior:number=0;

  @Input()
  ratingSeleccionado=0;

  @Output()
  votacion = new EventEmitter<number>();

  

  manejarMouseEnter(index:number){
    this.ratingSeleccionado=index+1;
  }
  manejarmouseLeave(){
    if(this.ratingAnterior !==0){
      this.ratingSeleccionado=this.ratingAnterior;
    }else{
      this.ratingSeleccionado=0;
    }
  }
  eventClick(index:number){
    this.ratingSeleccionado=index+1;
    this.ratingAnterior=this.ratingSeleccionado;
    this.votacion.emit(this.ratingSeleccionado);
  }

}
