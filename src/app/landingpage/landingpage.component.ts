import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MenuComponent } from "../compartidos/components/menu/menu.component";

@Component({
  selector: 'app-listmovies',
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export default class LandingPageComponent {

  
}
