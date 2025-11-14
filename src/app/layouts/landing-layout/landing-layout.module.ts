import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutRoutes } from './landing-layout.routing';
import { RouterModule } from '@angular/router';
import { TermsAndConditionsComponent } from 'src/app/pages/terms-and-conditions/terms-and-conditions.component';


@NgModule({
    declarations: [
        TermsAndConditionsComponent
    ],
    imports: [
        RouterModule.forChild(LandingLayoutRoutes),
        CommonModule,
    ]
})
export class LandingLayoutModule { }
