import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit {
  str = 'Mensual'
  letsTalk = true
  array = ['$35.000','$65.000','$90.000']

  constructor() {}
  ngOnInit(): void {}

  changeMonth(str: string) {
    if(str === 'Mensual') {
      this.str = str
      this.array = ['$35.000','$65.000','$90.000']
    } else if (str === 'Semestral') {
      this.str = str
      this.array = ['$200.000','$370.000','$510.000']
    } else {
      this.str = str
      this.array = ['$390.000','$725.000','$1.005.000']
    }
  }

}
