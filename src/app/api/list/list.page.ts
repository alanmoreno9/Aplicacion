import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/api/usuarios.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  listaUsuarios:any = [];

  constructor(
    private router: Router,
    private UsuariosApi: UsuariosService
  ) { }

  ngOnInit() {
    this.listar()
  }

  ionViewWillEnter(){
    this.listar()
  }

  listar(){
    this.UsuariosApi.listaUsuarios().subscribe((resp) => {
      console.log(resp)
      let aux = JSON.stringify(resp)
      this.listaUsuarios= JSON.parse(aux)
      console.log(this.listaUsuarios)
    })
  }

  addUsuario(){
    this.router.navigate(['/apiadd'])
  }

  handleRefresh(event: any){
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 1000);
  }

}
