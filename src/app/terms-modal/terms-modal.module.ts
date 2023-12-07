import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsModalPageRoutingModule } from './terms-modal-routing.module';

import { TermsModalPage } from './terms-modal.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsModalPageRoutingModule,
    TranslateModule
  ],
  declarations: [TermsModalPage]
})
export class TermsModalPageModule {}
