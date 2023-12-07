import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qr',
  template: `<img [src]="qrCodeUrl"/>`,
})
export class QrComponent {
  @Input() data: string;


  constructor() {
    this.data = '';
  } 

  get qrCodeUrl() {
    return `google.com`;
  }
}
