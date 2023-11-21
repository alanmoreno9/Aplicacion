import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRouterOutlet, MenuController } from '@ionic/angular';
import Swal from 'sweetalert2'
import { WeatherService } from '../services/api/weather.service';
import { WeatherData } from '../services/api/weather.service';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/firebase/auth.service';
import { FirestoreService } from '../services/firebase/firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TranslateService } from '@ngx-translate/core';
import { LenguageService } from '../services/lenguage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  langs : string[] =[];
  idioma!: string;

  city: string = 'Santiago';
  weatherData: any;

  usuario: any;

  textContent: any;

  constructor(
    private router: Router,
    private menu: MenuController, 
    private routerOutlet: IonRouterOutlet, 
    private weatherService: WeatherService,
    private toastController: ToastController,
    private authService: AuthService,
    private fireStore: FirestoreService,
    private route: ActivatedRoute,
    private auth: AngularFireAuth,
    private languageService: LenguageService
    ) { 
     }


  ngOnInit() {
    this.menu.enable(true);
    this.routerOutlet.swipeGesture = false;
    this.usuario = JSON.parse(localStorage.getItem('usuario')!)
    this.langs = this.languageService.getLangs();
  }


  ionViewWillEnter(){
    this.menu.enable(true);
    this.ngOnInit()
  }
  
  changeLang(event: any) {
    this.languageService.setLanguage(event.detail.value);
  }

  cerrar(){
    console.log("cerró")
    this.authService.logout()
  }
  
  async message(timerInterval: any){
    Swal.fire({
      title: 'Cargando Conductores Activos',
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

  async message2(mensaje2: string) {
    const toast = await this.toastController.create({
      message: mensaje2,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data: WeatherData) => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const mensaje2 = `Clima en ${this.city}\nTemperatura: ${temperature}°C`;
        this.message2(mensaje2);
      },
      (error) => {
        console.error('Error al obtener datos del clima:', error);
        this.message('No se pudieron obtener los datos del clima.');
      }
    );
  }


  iniciar(){
    this.message('')
    this.router.navigate(['conductoresactivos'])
  }

  

}
