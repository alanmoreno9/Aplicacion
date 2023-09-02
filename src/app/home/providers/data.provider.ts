import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
public userData: any;
constructor( ) {
//let usuario = JSON.parse(localStorage.getItem('usuario')!);
//this.userData = usuario;
this.userData= {};
}
}