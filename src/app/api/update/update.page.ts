import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/api/usuarios.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  usuario = {
    id: 0,
    nombre: 'TEST',
    correo: 'TEST'
  }

  constructor(
    private apiService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

  }

  getId(){
    let url = this.router.url
    let aux = url.split("/",3)
    let id = parseInt(aux[2])
    return id
  }

  getUsuario(id:Number){
    this.apiService.getUsuario(id).subscribe((resp:any) => {
      this.usuario = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        correo: resp[0].correo
      }
    })
  }

  updateUsuario(){
    this.apiService.updateUsuario(this.usuario).subscribe();
    this.router.navigate(['/apilist'])
  }

}
