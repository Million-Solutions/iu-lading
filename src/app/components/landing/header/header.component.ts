import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-landing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor() {}
  ngOnInit(): void {}
  
  ScrollIntoView(elem: string) {
    document.querySelector(elem)!.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  close(){
    const a = document.querySelector('#nav')
    a?.classList.remove('show')
  }
}
