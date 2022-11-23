import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuanchaPage } from './juancha.page';

const routes: Routes = [
  {
    path: '',
    component: JuanchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuanchaPageRoutingModule {}
