import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

@Injectable({
  providedIn: 'root'
})
export class SwapiService {


  charactersUrl:string = "http://localhost:3000/people/";

  constructor(private http:HttpClient) {}

  getPersonajes(page:number){
    const url = `https://swapi.co/api/people/?page=${page}`;
    return this.http.get(url);
  }

  getPlanets(page:number){
    const url = `https://swapi.co/api/planets/?page=${page}`;
    return this.http.get(url);
  }

  createPeople(people){

    let body = JSON.stringify(people);
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    });

    return this.http.post( this.charactersUrl, body, { headers } )
  }

  editPeople(people, idPeople){

    let body = JSON.stringify(people);
    let peopleUrl = `${this.charactersUrl}${idPeople}`;
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    });

    return this.http.put( peopleUrl, body, { headers } )
  }

  deletePeople(idPeople){

    let peopleUrl = `${this.charactersUrl}${idPeople}`;
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    });

    return this.http.delete( peopleUrl, { headers } )
  }

  getMyCharacters(){
    const url = 'http://localhost:3000/people/';
    return this.http.get(url);
  }

  getCurrentCharacter(id:number){
    const url = `http://localhost:3000/people/${id}`;
    return this.http.get(url);
  }

}
