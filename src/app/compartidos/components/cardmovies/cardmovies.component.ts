import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RatingComponent } from '../rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { Movies } from '../../../interfaces/movies.interface';

@Component({
  selector: 'app-cardmovies',
  standalone: true,
 
  templateUrl: './cardmovies.component.html',
  styleUrl: './cardmovies.component.css',
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    RatingComponent,
    MatIconModule
    
  ],changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardmoviesComponent {
    arrayMovies:Movies[]=[
      {title:'Deadpool & Wolverine',imagen:'https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg',release:'July 26, 2024',cast:'Ryan Reynolds, Hugh Jackman, Emma Corrin, Morena Baccarin, Rob Delaney, Leslie Uggams, Karan Soni and Matthew Macfadyen'},
      {title:'Capitan America',imagen:'https://cdn.marvel.com/content/1x/captainamericabravenewworld_lob_crd_03.jpg',release:'February 14, 2025',cast:'Anthony Mackie, Danny Ramirez, Shira Haas, Xosha Roquemore, Carl Lumbly, Giancarlo Esposito, Liv Tyler, Tim Blake Nelson and Harrison Ford'},
      {title:'Capitan America',imagen:'https://cdn.marvel.com/content/1x/themarvels_lob_crd_05.jpg',release:'February 14, 2025',cast:'Anthony Mackie, Danny Ramirez, Shira Haas, Xosha Roquemore, Carl Lumbly, Giancarlo Esposito, Liv Tyler, Tim Blake Nelson and Harrison Ford'},
    ]
    procesarVoto(voto:number){
        alert(voto)
    }
}
