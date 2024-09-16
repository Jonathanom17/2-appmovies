import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { MenuComponent } from "./compartidos/components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListmoviesComponent, 
    RouterOutlet, 
    MenuComponent, 
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appmovies';
}
