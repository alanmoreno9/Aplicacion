import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LenguageService {

  private langs: string[] = ['es', 'en', 'fr', 'ar']; 
  idioma!: string;

  constructor(private translate: TranslateService) { }

  getLangs(): string[] {
    return this.langs;
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}
