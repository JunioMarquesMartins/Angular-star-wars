import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { MyCharactersComponent } from './components/my-characters/my-characters.component';
import { NewCharactersComponent } from './components/new-characters/new-characters.component';
import { LoadingComponent } from './components/loading/loading.component';
import { EditComponent } from './components/edit/edit.component';
import { AlertsComponent } from './components/alerts/alerts.component';


// Importar Rutas
import { ROUTES } from './app.routes';

// Services
import { SwapiService } from "./service/swapi.service";
import { PaginatorService } from "./service/paginator.service";

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    HeaderComponent,
    HomeComponent,
    CardsComponent,
    PlanetsComponent,
    MyCharactersComponent,
    NewCharactersComponent,
    LoadingComponent,
    EditComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [
    SwapiService,
    PaginatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
