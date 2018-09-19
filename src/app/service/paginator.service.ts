import { Injectable } from '@angular/core';

@Injectable()

@Injectable({
  providedIn: 'root'
})

export class PaginatorService {

  pages: any[] = [];
  previousPage: number;
  nextPage: number;
  loading:boolean;
  pagesArray:any[] =[];

  constructor() { }

  // Number of pages
  getNumberPages(data){
    this.pagesArray = [];
    let count = data.count / 10;
    let pages = count.toFixed();
    let pagesNumber = parseInt(pages);
    for(var i=1; i<=pagesNumber; i++){
      this.pagesArray.push(i);
    }
    return this.pagesArray;
  }
  // Number Next Page
  getNumberNext(data){
    if(data.next){
      let nextUrl = data.next;
      let nextString = nextUrl.split('=');
      let nextNumberString = nextString[1];
      let nextNumber = parseInt(nextNumberString);
      this.nextPage = nextNumber;
      return this.nextPage;
    }
  }
  // Number Previous Page
  getNumberPrevious(data){
    if(data.previous){
      let previousUrl = data.previous;
      let previousString = previousUrl.split('=');
      let previousNumberString = previousString[1];
      let previousNumber = parseInt(previousNumberString);
      this.previousPage = previousNumber;
      return this.previousPage;
    }

  }
  // Go next page
  goNextPage() {
    this.loading = true;
    if(this.nextPage){
      return this.nextPage;
    }

  }
  // Go previous page
  goPreviousPage() {
    this.loading = true;
    if(this.previousPage){
      return this.previousPage;
    }
  }
}
