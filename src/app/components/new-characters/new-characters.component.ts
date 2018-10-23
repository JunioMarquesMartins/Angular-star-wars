import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwapiService } from "../../service/swapi.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-new-characters',
  templateUrl: './new-characters.component.html',
  styleUrls: ['./new-characters.component.css']
})
export class NewCharactersComponent implements OnInit {

  forma:FormGroup;
  selectPlanets: any [] = [];
  dataSuccess:boolean;

  ngOnInit() {
    this.forma = new FormGroup({
      'name': new FormControl('', Validators.required),
      'id': new FormControl('', Validators.required),
      'height': new FormControl(),
      'mass': new FormControl(),
      'hair_color': new FormControl(),
      'skin_color': new FormControl(),
      'eye_color': new FormControl(),
      'birth_year': new FormControl(),
      'gender': new FormControl('Male'),
      'planet': new FormControl()
    });
  }

  newCharacters:Object = {
    "hair_color": [
      {"name": "Black"},
      {"name": "Brown"},
      {"name": "Blue"},
      {"name": "White"}
    ],
    "eye_color": [
      {"name": "Black"},
      {"name": "Brown"},
      {"name": "Blue"},
      {"name": "White"}
    ],
    "gender": [
      {"name": "Male"},
      {"name": "Female"}
    ]
  }

  constructor(private swapi:SwapiService, private router: Router) {

    this.swapi.getPlanets(1).subscribe( (data:any)=>{
      this.selectPlanets  = data.results;
    })

  }

  createCharacter(){
    this.swapi.createPeople(this.forma.value)
    .subscribe( (data)=>{
      this.dataSuccess = true;
      this.router.navigate([ 'myCharacters' ])
    })
  }

}
