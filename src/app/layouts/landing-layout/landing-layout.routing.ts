import { Routes } from '@angular/router';

export const LandingLayoutRoutes: Routes = [
    { path: 'home', loadChildren: () => import('../../pages/home-landing/home-landing.module').then(m => m.HomeLandingModule) },
];
