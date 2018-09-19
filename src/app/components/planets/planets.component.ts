import { Component } from '@angular/core';
import { SwapiService } from "../../service/swapi.service";
import { PaginatorService } from "../../service/paginator.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html'
})
export class PlanetsComponent {

  planets: any[] = [];
  pages: any[] = [];
  previousPage: number;
  nextPage: number;
  initPaginator: boolean = true;
  loading:boolean;

  constructor(private swapi:SwapiService, private paginator:PaginatorService) {

    this.getPlanetas(1);
  
  }

  getPlanetas(page:number){
    this.loading = true;
    this.swapi.getPlanets(page)
    .subscribe( (data:any) =>{
      // Render Planets
      this.planets = data.results;
      // Render Paginator
      if (this.initPaginator) {this.pages = this.paginator.getNumberPages(data)}
      this.nextPage = this.paginator.getNumberNext(data);
      this.previousPage = this.paginator.getNumberPrevious(data);
      this.initPaginator = false;
      // Quite loading
      this.loading = false;
    })
  }
  // Next Page
  nextPageGo() {
    this.getPlanetas(this.paginator.goNextPage());
  }
  // Previous Page
  previousPageGo() {
    this.getPlanetas(this.paginator.goPreviousPage());
  }
  

}
