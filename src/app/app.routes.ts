import { Routes } from '@angular/router';



export const routes: Routes = [
    {
        path: "landing",
        loadComponent: () => import('./landingpage/landingpage.component'),
        children:[
            {
                path:'listmovies',
                title:'Listado Peliculas',
                
                loadComponent: () => import('./landingpage/pages/listmovies/listmovies.component'),
            },
            {
                path:'actores',
                title:'Actores',
                
                loadComponent: () => import('./landingpage/pages/actores/actores.component'),
            },
            {
                path:'cines',
                title:'Cines',
                loadComponent: () => import('./landingpage/pages/cines/cines.component'),
            },
            {
                path:'generos',
                title:'Generos',
                loadComponent: () => import('./landingpage/pages/generos/generos.component'),
            },
            {
                path:'', redirectTo: 'listmovies', pathMatch: 'full',
        
            }
        ]

    },
    {
        path: '',
        redirectTo: '/landing',
        pathMatch:'full'

    },

    // { path:"**",redirectTo: 'landing'},
   
    
];
