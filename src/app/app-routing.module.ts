import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./layouts/landing-layout/landing-layout.module').then(m => m.LandingLayoutModule),
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
