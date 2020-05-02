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
    return this.http.post<MyData>('http://ec2-3-87-46-66.compute-1.amazonaws.com:3000/api/contactForm', form);
  }

}
