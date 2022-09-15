import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent as LandingHeaderComponent } from './landing/header/header.component';
import { FooterComponent as LandingFooterComponent } from './landing/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [
    LandingHeaderComponent,
    LandingFooterComponent,
  ],
  exports: [
    LandingHeaderComponent,
    LandingFooterComponent
  ],
  providers: []
})
export class ComponentsModule { }
