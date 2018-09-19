import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { SwapiService } from "../../service/swapi.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-new-characters',
  templateUrl: './new-characters.component.html',
  styleUrls: ['./new-characters.component.css']
})
export class NewCharactersComponent {

  forma:FormGroup;
  selectPlanets: any [] = [];
  dataSuccess:boolean;

  newCharacters:Object = {
    "id": "",
    "name": "",
    "height": "",
    "mass": "",
    "hair_color": [
      {"name": "Black"},
      {"name": "Brown"},
      {"name": "Blue"},
      {"name": "White"}
    ],
    "skin_color": "",
    "eye_color": [
      {"name": "Black"},
      {"name": "Brown"},
      {"name": "Blue"},
      {"name": "White"}
    ],
    "birth_year": "",
    "gender": [
      {"name": "Male"},
      {"name": "Female"}
    ]
  }

  constructor(private swapi:SwapiService, private router: Router) {

    this.swapi.getPlanets(1).subscribe( (data:any)=>{
      this.selectPlanets  = data.results;
      this.newCharacters['homeworld'] = this.selectPlanets;
    })

  }

  createCharacter(forma:NgForm){


    let sendCharacters:Object = {
      "id": forma.value.id,
      "name": forma.value.name,
      "height": forma.value.height,
      "mass": forma.value.mass,
      "hair_color": forma.value.hair_color,
      "skin_color": forma.value.skin_color,
      "eye_color": forma.value.eye_color,
      "birth_year": forma.value.birth_year,
      "gender": forma.value.gender,
      "homeworld": forma.value.homeworld
    }

    this.swapi.createPeople(sendCharacters)
    .subscribe( (data)=>{
      this.dataSuccess = true;
      this.router.navigate([ 'myCharacters' ])
    })
  }

}
