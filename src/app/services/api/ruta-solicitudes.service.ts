import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRutaSolicitud } from 'src/app/interfaces/IrutaSolicitud';
import { IRutaSolicitudes } from 'src/app/interfaces/IrutaSolicitudes';

@Injectable({
  providedIn: 'root'
})
export class RutaSolicitudesService {
  apiURL = "https://jsonserver-x5h4.onrender.com";

  constructor(private httpClient: HttpClient) { }

  listSolicitudes():Observable<IRutaSolicitudes>{
    return this.httpClient.get<IRutaSolicitudes>(`${this.apiURL}/rutaSolicitudes`)
  }

  addSolicitud(rutaSolicitud:IRutaSolicitud):Observable<IRutaSolicitud>{
    return this.httpClient.post<IRutaSolicitud>(`${this.apiURL}/rutaSolicitudes`, rutaSolicitud)
  } 

  getSolicitud(id:Number): Observable<IRutaSolicitudes>{
    return this.httpClient.get<IRutaSolicitudes>(`${this.apiURL}/rutaSolicitudes/?id=${id}`)
  }

  getSolicitudPorConductor(idRuta:Number): Observable<IRutaSolicitudes>{
    return this.httpClient.get<IRutaSolicitudes>(`${this.apiURL}/rutaSolicitudes/?idConductor=${idRuta}`)
  }

  updateSolicitud(rutaSolicitud:any):Observable<IRutaSolicitudes>{
    return this.httpClient.put<IRutaSolicitudes>(`${this.apiURL}/rutaSolicitudes/${rutaSolicitud.id}`, rutaSolicitud)
  }

  deleteSolicitud(rutaSolicitud:any):Observable<IRutaSolicitudes>{
    return this.httpClient.delete<IRutaSolicitudes>(`${this.apiURL}/rutaSolicitudes/${rutaSolicitud.id}`)
  }
}
