import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})

export class HomeLandingComponent implements OnInit {
  price: Array<string> = ['$35.000','$65.000','$90.000']
  alert: any = {type: '', text: ''}
  spinner: boolean = false

  constructor(private messageSv: MessageService){

  }

  ngOnInit(): void {
      
  }

  formMessage = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    business: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  sendMessage(form:any){
    if(this.formMessage.invalid) return this.MyAlert('danger', 'Por favor asegurese de haber llenado todos los campos')
    this.spinner = true
    this.messageSv.postMessage(form).toPromise().then(data =>{
      this.formMessage.reset()
      this.MyAlert('success', 'Mensaje enviado con exito!')
      this.spinner = false
    }).catch(error =>{
      this.MyAlert('danger', error.error.message)
    })
  }

  MyAlert(type: string, text: string){
    this.alert = {type: type, text: text}
    setTimeout(() => {
      this.alert = {type: '', text: ''}
    }, 3000);
  }

  ScrollInto(item: any) {
    item.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}