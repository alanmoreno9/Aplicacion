import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConductor } from 'src/app/interfaces/Iconductor';
import { IConductores } from 'src/app/interfaces/Iconductores';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {
  apiURL = "https://jsonserver-x5h4.onrender.com";

  constructor(private httpClient: HttpClient) { }
  

  listConductores():Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${this.apiURL}/conductor`)
  }

  addConductor(conductor:IConductor):Observable<IConductor>{
    return this.httpClient.post<IConductor>(`${this.apiURL}/conductor`, conductor)
  } 

  getConductor(id:Number): Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${this.apiURL}/conductor/?id=${id}`)
  }

  updateConductor(conductor:any):Observable<IConductores>{
    return this.httpClient.put<IConductores>(`${this.apiURL}/conductor/${conductor.id}`, conductor)
  }

  deleteConductor(conductor:any):Observable<IConductores>{
    return this.httpClient.delete<IConductores>(`${this.apiURL}/conductor/${conductor.id}`)
  }
}
