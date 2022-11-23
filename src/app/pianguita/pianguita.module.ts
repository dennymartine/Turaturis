import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PianguitaPageRoutingModule } from './pianguita-routing.module';

import { PianguitaPage } from './pianguita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PianguitaPageRoutingModule
  ],
  declarations: [PianguitaPage]
})
export class PianguitaPageModule {}
