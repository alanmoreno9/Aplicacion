import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMetodopago } from 'src/app/interfaces/Imetodopago';
import { IMetodopagos } from 'src/app/interfaces/Imetodopagos';


@Injectable({
  providedIn: 'root'
})
export class MetodopagoService {
  apiURL = "https://jsonserver-x5h4.onrender.com";

  constructor(private httpClient: HttpClient) { }

  listaMetodo(): Observable<IMetodopagos>{
    return this.httpClient.get<IMetodopagos>(`${this.apiURL}/metodopago`);
  }

  addMetodo(metodopago: IMetodopago): Observable<IMetodopago> {
    return this.httpClient.post<IMetodopago>(`${this.apiURL}/metodopago`, metodopago);
  }

  getTarjeta(id: Number): Observable<IMetodopagos> {
    return this.httpClient.get<IMetodopagos>(`${this.apiURL}/metodopago/?id=${id}`);
  }

  deleteMetodo(metodopago: any): Observable<IMetodopagos> {
    return this.httpClient.delete<IMetodopagos>(`${this.apiURL}/metodopago/${metodopago.id}`);
  }
}
