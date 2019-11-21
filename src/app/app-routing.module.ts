import { LandingLayoutComponent } from './shared/components/layouts/landing-layout/landing-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './shared/components/layouts/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing/demos',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule'
      }
    ]
  },
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: './views/landing/landing.module#LandingModule'
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
