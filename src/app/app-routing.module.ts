import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/mobile', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'mobile',
    loadChildren: () => import('./pages/mobile/mobile.module')
      .then(m => m.MobileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
