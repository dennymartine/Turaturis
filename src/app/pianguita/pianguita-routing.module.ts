import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PianguitaPage } from './pianguita.page';

const routes: Routes = [
  {
    path: '',
    component: PianguitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PianguitaPageRoutingModule {}
