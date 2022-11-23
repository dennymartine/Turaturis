import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BocanaPageRoutingModule } from './bocana-routing.module';

import { BocanaPage } from './bocana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BocanaPageRoutingModule
  ],
  declarations: [BocanaPage]
})
export class BocanaPageModule {}
