import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutRoutes } from './landing-layout.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(LandingLayoutRoutes),
    CommonModule,
  ]
})
export class LandingLayoutModule { }
