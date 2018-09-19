import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { SwapiService } from "../../service/swapi.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  forma:FormGroup;
  characterName: string;
  currentCharacter:number;
  loading:boolean;
  dataSuccess:boolean;

  dataEditCharacters:Object = {
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

  selectPlanets: any [] = [];

  constructor(private router: ActivatedRoute, private swapi: SwapiService) {

    this.router.params.subscribe( params =>{
      this.getCurrentCharacter( params['id'] );
    })

  }

  getCurrentCharacter(id:number){
    this.swapi.getCurrentCharacter(id)
    .subscribe( (data:any)=>{
      this.dataEditCharacters = data;
      this.characterName = data.name;
      this.currentCharacter = id;
      this.populateDataCharacters();
    })
  }

  populateDataCharacters(){
    this.dataEditCharacters["hair_color"] = [
      {'name': 'Black'},
      {'name': 'Brown'},
      {'name': 'Blue'},
      {'name': 'White'}
    ];
    this.dataEditCharacters["eye_color"] = [
      {'name': 'Black'},
      {'name': 'Brown'},
      {'name': 'Blue'},
      {'name': 'White'}
    ];
    this.dataEditCharacters["gender"] = [
      {"name": "Male"},
      {"name": "Female"}
    ];
  }

  saveCharacter(forma:NgForm){

    this.loading = true;
    let dataCharacters:Object = {
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

    this.swapi.editPeople(dataCharacters, this.currentCharacter)
    .subscribe( (data)=>{
      this.loading = false;
      this.dataSuccess = true;
    })

  } 

}
