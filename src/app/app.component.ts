import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from "./compartidos/components/menu/menu.component";
import { LandingPageComponent } from './landingpage/landingpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LandingPageComponent, 
    RouterOutlet, 
    MenuComponent, 
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appmovies';
}
