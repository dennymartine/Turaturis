import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuanchaPageRoutingModule } from './juancha-routing.module';

import { JuanchaPage } from './juancha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuanchaPageRoutingModule
  ],
  declarations: [JuanchaPage]
})
export class JuanchaPageModule {}
