import { Component } from '@angular/core';
import { CardmoviesComponent } from "../compartidos/components/cardmovies/cardmovies.component";

@Component({
  selector: 'app-listmovies',
  standalone: true,
  imports: [CardmoviesComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingPageComponent {

  
}
