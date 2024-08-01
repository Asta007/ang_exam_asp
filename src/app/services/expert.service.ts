import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { expertInterface } from '../Interfaces/expertInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  private baseUrl : string = "http://localhost:3000/personnes";
  constructor(private httpClient:HttpClient) {}

  // lecteur des donnés depuis la BD
  read():Observable<expertInterface[]>{
    return this.httpClient.get<expertInterface[]>(this.baseUrl)
  }

  // sauvegarde des donnés dans la BD
  store(){

  }

  // Lecteur detaille d'un expert
  show(){

  }

  update(){

  }

  delete(){
    
  }


}
