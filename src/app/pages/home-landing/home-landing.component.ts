import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var bootstrap:any

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit {
  str = 'Mensual'
  price: Array<string> = ['$35.000','$65.000','$90.000']
  form: FormGroup
  showModal:boolean = false
  myModal: any

  constructor() {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      business_name: new FormControl('', Validators.required),
      count_client: new FormControl('1', Validators.required),
    })
  }

  sendData(){
    if(this.form.invalid) return 
  }

  b(){
    this.showModal = true
    setTimeout(() => {
      const a:any = document.getElementById('modalCalendly')
      this.myModal = new bootstrap.Modal(a, {})
      a.addEventListener('hidden.bs.modal', () =>{
        this.showModal = false
      })
      this.myModal.show()
    }, 10);
  }

  ScrollIntoView(elem: string) {
    document.querySelector(elem)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
