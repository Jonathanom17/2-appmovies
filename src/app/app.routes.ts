import { Routes } from '@angular/router';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { GenerosComponent } from './elementMovies/generos/generos.component';
import { ActoresComponent } from './elementMovies/actores/actores.component';
import { CinesComponent } from './elementMovies/cines/cines.component';
import { MoviesComponent } from './elementMovies/movies/movies.component';


export const routes: Routes = [
    
    { path:"",component: LandingPageComponent},
    { path:"landing",component: LandingPageComponent},
    { path:"generos",component: GenerosComponent},
    { path:"actores",component: ActoresComponent},
    { path:"cines",component: CinesComponent},
    { path:"movies",component: MoviesComponent},
    { path:"**",redirectTo: 'landing'},
   
    
];
