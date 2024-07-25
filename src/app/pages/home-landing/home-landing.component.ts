import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/services/message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanService } from '../../shared/services/plan.service';
import { Plan, Plans } from '../../shared/models/plan.model';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})

export class HomeLandingComponent implements OnInit {
  price: 'M' | 'S' | 'Y' = 'M'
  alert = {type: '', text: ''}
  spinner: boolean = false
  plans: Plans = {M: [], S: [], Y: []}

  constructor(
    private messageSv: MessageService,
    private planSv: PlanService,
    private modalSv: NgbModal,
  ){

  }

  ngOnInit(): void {
      this.listPlans()
  }

  formMessage = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    business: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  listPlans(){
    this.planSv.getPlans().subscribe(({body}:any) =>{
      this.plans = body
      console.log(body)
    })
  }

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

  openModal(content:any){
    this.modalSv.open(content, {modalDialogClass: 'my-modal-sm'}) 
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