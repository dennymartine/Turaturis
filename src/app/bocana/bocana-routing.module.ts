import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BocanaPage } from './bocana.page';

const routes: Routes = [
  {
    path: '',
    component: BocanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BocanaPageRoutingModule {}
