import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/api/usuarios.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  usuario={
    id: 0,
    nombre: "TEST",
    correo: "TEST"
  }

  constructor(
    private apiService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsuario(this.getId())
  }

  ionViewWillEnter(){
    this.getUsuario(this.getId())
  }

  getId(){
    let url = this.router.url
    let aux = url.split("/",3)
    let id = parseInt(aux[2])
    return id
  }

  getUsuario(id: Number) {
    this.apiService.getUsuario(id).subscribe((resp:any) => {
      this.usuario = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        correo: resp[0].correo
      }
    })
  }

  deleteUsuario(){
    this.apiService.deleteUsuario(this.usuario).subscribe();
    this.router.navigate(['/apilist'])
  }



}
