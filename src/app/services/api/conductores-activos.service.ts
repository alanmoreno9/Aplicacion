import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConductorActivo } from 'src/app/interfaces/IconductorActivo';
import { IConductoresActivos } from 'src/app/interfaces/iconductoresActivos';

@Injectable({
  providedIn: 'root'
})
export class ConductoresActivosService {
  apiURL = "https://jsonserver-x5h4.onrender.com";

  constructor(private httpClient: HttpClient) { }

  listConductores():Observable<IConductoresActivos>{
    return this.httpClient.get<IConductoresActivos>(`${this.apiURL}/conductor`)
  }

  addConductor(conductorActivo:IConductorActivo):Observable<IConductorActivo>{
    return this.httpClient.post<IConductorActivo>(`${this.apiURL}/conductor`, conductorActivo)
  } 

  getConductor(id:Number): Observable<IConductoresActivos>{
    return this.httpClient.get<IConductoresActivos>(`${this.apiURL}/conductor/?id=${id}`)
  }

  updateConductor(conductorActivo:any):Observable<IConductoresActivos>{
    return this.httpClient.put<IConductoresActivos>(`${this.apiURL}/conductor/${conductorActivo.id}`, conductorActivo)
  }

  deleteConductor(conductorActivo:any):Observable<IConductoresActivos>{
    return this.httpClient.delete<IConductoresActivos>(`${this.apiURL}/conductor/${conductorActivo.id}`)
  }
}
