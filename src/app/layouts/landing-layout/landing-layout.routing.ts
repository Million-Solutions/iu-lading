import { Routes } from '@angular/router';
import { TermsAndConditionsComponent } from 'src/app/pages/terms-and-conditions/terms-and-conditions.component';

export const LandingLayoutRoutes: Routes = [
    { path: 'home', loadChildren: () => import('../../pages/home-landing/home-landing.module').then(m => m.HomeLandingModule) },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
];
