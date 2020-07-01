import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactForm} from '../models/ContactForm';

interface MyData {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {
  }

  sendOrder(form: ContactForm) {
    console.log('Sending');
    console.log(form);
    return this.http.post<MyData>('https://abco-server2.glitch.me/api/contactForm', form);
  }

}
