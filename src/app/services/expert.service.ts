import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { expertInterface } from '../Interfaces/expertInterface';
import { concat, Observable } from 'rxjs';

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
  store(expert:expertInterface):Observable<expertInterface> {
    return this.httpClient.post<expertInterface>(this.baseUrl, expert)
  }

  // Lecteur detaille d'un expert
  show(id:string):Observable<expertInterface>{
     return this.httpClient.get<expertInterface>(`${this.baseUrl}/${id}`);
  }

  update(expert:expertInterface):Observable<expertInterface>{
    return this.httpClient.put<expertInterface>(`${this.baseUrl}/${expert.id}`,expert);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl+'/${id}');
  }


}
