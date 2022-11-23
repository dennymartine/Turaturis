import { TuruComponent } from './turu/turu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  
  { path:'turu',component:TuruComponent},
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'juancha',
    loadChildren: () => import('./juancha/juancha.module').then( m => m.JuanchaPageModule)
  },
  {
    path: 'bocana',
    loadChildren: () => import('./bocana/bocana.module').then( m => m.BocanaPageModule)
  },
  {
    path: 'pianguita',
    loadChildren: () => import('./pianguita/pianguita.module').then( m => m.PianguitaPageModule)
  },
  {
    path: 'barra',
    loadChildren: () => import('./barra/barra.module').then( m => m.BarraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
