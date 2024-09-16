import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { itemMenu } from '../../../interfaces/item-menu.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   arrayitemMenu:itemMenu[]=[
      {componente:'landing',title:'Listado Peliculas',icom:'home' },
      {componente:'generos',title:'Generos',icom:'theater_comedy' },
      {componente:'actores',title:'Actores',icom:'mood' },
      {componente:'cines',title:'Cines',icom:'local_movies' },
      {componente:'movies',title:'Movies',icom:'movie' }
   ]

}

