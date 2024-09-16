import { Component } from '@angular/core';
import { CardmoviesComponent } from "../compartidos/components/cardmovies/cardmovies.component";

@Component({
  selector: 'app-listmovies',
  standalone: true,
  imports: [CardmoviesComponent],
  templateUrl: './listmovies.component.html',
  styleUrl: './listmovies.component.css'
})
export class ListmoviesComponent {

}
