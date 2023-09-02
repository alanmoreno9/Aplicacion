import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() nombre!: any;
  @Input() apellido!: any;
  @Input() foto!: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  
}
