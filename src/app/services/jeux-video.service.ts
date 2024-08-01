import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jeux_video } from '../Interfaces/jeuxVideoInterface';

@Injectable({
  providedIn: 'root'
})
export class JeuxVideoService {

  private baseUrl:string = "http://localhost:3000/jeux_video"

  constructor(private httpClient:HttpClient) { 

  }

  read(){
    return this.httpClient.get<jeux_video[]>(this.baseUrl)
  }
}
