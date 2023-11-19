import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  private qrCodeResult = new BehaviorSubject<string | null>(null);

  constructor() { }

  setQRCodeResult(result: string | null) {
    this.qrCodeResult.next(result);
  }

  getQRCodeResult() {
    return this.qrCodeResult.asObservable();
  }
}
