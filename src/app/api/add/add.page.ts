import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/Iusuario';
import { UsuariosService } from 'src/app/services/api/usuarios.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  usuario: IUsuario = {
    nombre: 'Julio',
    correo: 'julio@gmail.com'
  }

  usuarios:any[] = [];

  constructor(private apiServices: UsuariosService,
    private router: Router ) { }

  ngOnInit() {
  }


  addUsuario(){
    this.apiServices.addUsuario(this.usuario).subscribe()
    this.router.navigate(['/apilist'])
  }
}
