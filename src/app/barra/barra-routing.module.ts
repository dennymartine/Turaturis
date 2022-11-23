import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarraPage } from './barra.page';

const routes: Routes = [
  {
    path: '',
    component: BarraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarraPageRoutingModule {}
