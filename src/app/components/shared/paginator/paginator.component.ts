import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() paginatorData: any[] = [];
  @Input() paginatorPages: any[] = [];
  @Input() paginatorRouter: string;

  @Output() changePage: EventEmitter<any> = new EventEmitter(); 
  @Output() changeNextPage: EventEmitter<any> = new EventEmitter(); 
  @Output() changePreviousPage: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  emmitterChangePage(page:number):void {
    this.changePage.emit(page);
  }
  emmitterChangeNextPage(page:number):void {
    this.changeNextPage.emit();
  }
  emmitterChangePreviousPage(page:number):void {
    this.changePreviousPage.emit();
  }

  ngOnInit() {
  }

}
