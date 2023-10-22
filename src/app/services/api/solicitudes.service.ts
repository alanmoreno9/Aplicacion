import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isolicitud } from 'src/app/interfaces/isolicitud';
import { Isolicitudes } from 'src/app/interfaces/isolicitudes';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  apiURL = "https://jsonserver-x5h4.onrender.com";

  constructor(private httpClient: HttpClient) { }
  

  listSolicitudes():Observable<Isolicitudes>{
    return this.httpClient.get<Isolicitudes>(`${this.apiURL}/solicitudes`)
  }

  addSolicitud(solicitud:Isolicitud):Observable<Isolicitud>{
    return this.httpClient.post<Isolicitud>(`${this.apiURL}/solicitudes`, solicitud)
  } 

  getSolicitud(id:Number): Observable<Isolicitudes>{
    return this.httpClient.get<Isolicitudes>(`${this.apiURL}/solicitudes/?id=${id}`)
  }

  getSolicitudPorConductor(idConductor:Number): Observable<Isolicitudes>{
    return this.httpClient.get<Isolicitudes>(`${this.apiURL}/solicitudes/?idConductor=${idConductor}`)
  }

  updateSolicitud(solicitud:any):Observable<Isolicitudes>{
    return this.httpClient.put<Isolicitudes>(`${this.apiURL}/solicitudes/${solicitud.id}`, solicitud)
  }

  deleteSolicitud(solicitud:any):Observable<Isolicitudes>{
    return this.httpClient.delete<Isolicitudes>(`${this.apiURL}/solicitudes/${solicitud.id}`)
  }
}
