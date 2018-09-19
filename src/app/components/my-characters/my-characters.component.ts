import { Component } from '@angular/core';
import { SwapiService } from "../../service/swapi.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-characters',
  templateUrl: './my-characters.component.html',
  styleUrls: ['./my-characters.component.css']
})
export class MyCharactersComponent {

  character: any[] = [];
  dataSuccess: boolean;

  constructor(private swapi: SwapiService, private router: Router) {

    this.swapi.getMyCharacters()
    .subscribe( (data:any)=>{
      this.character = data;
    })

  }

  deleteCharacter(idCharacter){
    this.swapi.deletePeople(idCharacter)
    .subscribe((data)=>{
      for( var i=0; i<this.character.length; i++){
        if(idCharacter === this.character[i].id){
          this.character.splice(i, 1);
        }
      }
      this.dataSuccess = true;
    })
  }

  editCharacter(id){ this.router.navigate([ 'edit', id ]) }

}
