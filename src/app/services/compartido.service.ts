import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  private clooseModalSubject = new Subject<void>();

  closeModal$ = this.clooseModalSubject.asObservable(); 

  constructor() { }

  closeAndNavigateToEsperado(){
    this.clooseModalSubject.next();
  }
}
