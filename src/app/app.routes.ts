import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from "./components/planets/planets.component";
import { MyCharactersComponent } from "./components/my-characters/my-characters.component";
import { NewCharactersComponent } from "./components/new-characters/new-characters.component";
import { EditComponent } from "./components/edit/edit.component";


export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: 'myCharacters', component: MyCharactersComponent },
    { path: 'newCharacters', component: NewCharactersComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];