import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, MenuController } from '@ionic/angular';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario:any;
  textContent: any;

  constructor(private router: Router,private menu: MenuController, private routerOutlet: IonRouterOutlet) { 
    
  }

  ngOnInit() {
    this.menu.enable(true);
    this.routerOutlet.swipeGesture = false;
    this.usuario = JSON.parse(localStorage.getItem("usuario")!)
  }
  
  ionViewWillLoad(){
    
    
  }

  
  async message(timerInterval: any){
    Swal.fire({
      title: 'Iniciando Mapa',
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
    this.router.navigate(['mapa'])
  }

}
