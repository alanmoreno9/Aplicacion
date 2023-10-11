import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }



  getRandomUserData() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  generateAndUploadUserData() {
    this.getRandomUserData().subscribe((randomUserData: any) => {
      randomUserData.results.forEach((user: any) => {
        const transformedUser = this.transformRandomUserData(user);
        this.uploadUserData(transformedUser).subscribe(response => {
          console.log('Usuario cargado con éxito:', response);
        }, error => {
          console.error('Error al cargar el usuario:', error);
        });
      });
    });
  }

  transformRandomUserData(user: any) {
    const nombre = user.name.first;
    const apellido = user.name.last;
    let contraseña = (user.name.first.slice(0,3) + "." + user.name.last.slice(0,3)); // Genera la contraseña
    contraseña = contraseña.toLowerCase(); // Convierte la contraseña a minúsculas
  
    return {
      id: this.generateUniqueId(),
      nombre,
      apellido,
      correo: user.email,
      contraseña
    };
  }

  uploadUserData(userData: any) {
    return this.http.post('https://jsonserver-x5h4.onrender.com/usuarios', userData);
  }

  generateUniqueId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }


  ngOnInit() {
    this.generateAndUploadUserData();

    setTimeout(() =>{
      this.router.navigate(['login']);
    }, 3000);
  }
  

}
