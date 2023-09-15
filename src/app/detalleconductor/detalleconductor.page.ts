import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detalleconductor',
  templateUrl: './detalleconductor.page.html',
  styleUrls: ['./detalleconductor.page.scss'],
})
export class DetalleconductorPage implements OnInit {

  nombre: any;
  apellido: any;

  constructor(
    private activatedRoute: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get("nombre");
    this.apellido = this.activatedRoute.snapshot.paramMap.get("apellido");
    console.log("nombre", this.nombre);
    console.log("apellido", this.apellido);
  }

  async message(timerInterval: any){
    Swal.fire({
      title: 'Iniciando viaje',
      html: 'Esto tomara un par de segundos.',
      timer: 2000,
      heightAuto: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer()!.querySelector('b');
        timerInterval = setInterval(() => {
          const timerLeft = Swal.getTimerLeft();
          if (typeof timerLeft === 'number') {
            b!.textContent = timerLeft.toString();
          }
        }, 2000)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  iniciar(){
    this.message('')
    this.router.navigate(['esperarconductor'])
  }


}
