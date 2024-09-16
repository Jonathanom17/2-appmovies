import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cardmovies',
  standalone: true,
 
  templateUrl: './cardmovies.component.html',
  styleUrl: './cardmovies.component.css',
  imports: [RouterOutlet,MatCardModule, MatButtonModule],changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardmoviesComponent {

}
