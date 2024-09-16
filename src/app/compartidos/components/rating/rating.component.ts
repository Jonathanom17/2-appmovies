import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent  implements OnInit{
  ngOnInit(): void {
    this.maxRatingArray= Array(this.maximoRating).fill(0);
  }

  @Input({required:true})
  maximoRating! : number;

  @Input()
  ratingSeleccionado=0;

  maxRatingArray: any[]=[];
  ratingAnterior:number=0;

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
  evenClick(index:number){
    this.ratingSeleccionado=index+1;
    this.ratingAnterior=this.ratingSeleccionado;
  }

}
