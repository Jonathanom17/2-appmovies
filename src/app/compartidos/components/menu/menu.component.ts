import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { routes } from '../../../app.routes';
import { itemMenu } from '../../../interfaces/item-menu.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    RouterModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public  rutasMenu= routes
  .map((route) => route.children ?? [])
  .flat();

   
   constructor(){
     
    
   }

}

