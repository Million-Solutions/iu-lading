import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLandingRoutingModule } from './home-landing.routing';
import { HomeLandingComponent } from './home-landing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeLandingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeLandingRoutingModule,
  ]
})
export class HomeLandingModule { }
