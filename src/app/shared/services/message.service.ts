import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  postMessage(form:any){
    return this.http.post(`${environment.API_URL}/user/send/contact-email`, form, {
      observe: 'response'
    })
  }
}
