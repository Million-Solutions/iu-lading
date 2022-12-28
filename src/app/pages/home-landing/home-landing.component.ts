import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})

export class HomeLandingComponent implements OnInit {
  price: Array<string> = ['$35.000','$65.000','$90.000']
  alert: any = {type: '', text: ''}
  spinner: boolean = false
  form: FormGroup
  
  constructor() {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      business_name: new FormControl('', Validators.required),
      count_client: new FormControl('1', Validators.required),
    })
  }
  
  sendForm() {
    if(this.form.invalid) return this.Alert('danger', 'Asegurate de haber completado todos los campos!')
    this.spinner = true
    setTimeout(() => {
      this.spinner = false
    }, 0);
  }

  Alert(type: string, text: string) {
    this.alert = { type: type, text: text }
    setTimeout(() => this.alert = {type: '', text: ''}, 3000);
  }

  ScrollInto(item: any) {
    item.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}