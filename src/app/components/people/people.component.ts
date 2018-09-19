import { Component } from '@angular/core';
import { SwapiService } from "../../service/swapi.service";
import { PaginatorService } from "../../service/paginator.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent {

  people: any[] = [];
  pages: any[] = [];
  previousPage: number;
  nextPage: number;
  initPaginator: boolean = true;
  loading:boolean;

  constructor(private swapi:SwapiService, private paginator:PaginatorService) {
    
    this.getPeople(1);

  }

  getPeople(page:number){
    this.loading = true;
    this.swapi.getPersonajes(page)
    .subscribe( (data:any) =>{
      // Render Planets
      this.people = data.results;
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
    this.getPeople(this.paginator.goNextPage());
  }
  // Previous Page
  previousPageGo() {
    this.getPeople(this.paginator.goPreviousPage());
  }


}
