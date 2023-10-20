import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peticiondetalle',
  templateUrl: './peticiondetalle.page.html',
  styleUrls: ['./peticiondetalle.page.scss'],
})
export class PeticiondetallePage implements OnInit {

  idPeticion: any;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.idPeticion = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.idPeticion)
  }

}
