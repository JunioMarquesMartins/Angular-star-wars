import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  @Input() card: any[] = [];

  constructor() {}

  ngOnInit() {}

}
