import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit {
  str = 'Mensual'
  letsTalk = true
  price = ['$35.000','$65.000','$90.000']

  constructor() {}
  ngOnInit(): void {}

}
