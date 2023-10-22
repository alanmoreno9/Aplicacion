import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextorandomService {

  constructor(private http: HttpClient) { }

  generarLorem() {
    return this.http.get<string[]>('https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1');
  }
}
