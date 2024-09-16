import { Routes } from '@angular/router';
import { ListmoviesComponent } from './listmovies/listmovies.component';

export const routes: Routes = [
    
    { path:"",component: ListmoviesComponent},
    { path:"lista",component: ListmoviesComponent},
    { path:"**",redirectTo: 'lista'},
   
    
];
