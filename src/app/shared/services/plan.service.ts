import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  getPlans(){
    return this.http.get(`${environment.API_URL}/plan/all`, {
      observe: 'response'
    })
  }

}
