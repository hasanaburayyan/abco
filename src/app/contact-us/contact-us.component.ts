import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../services/form.service';
import {ContactForm} from '../models/ContactForm';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private formService: FormService) {
    this.createForm();
    console.log('Form Created');
  }

  ngOnInit() {
  }

  createForm() {
    this.registrationForm = this.fb.group({
      companyName: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      accountNumber: [null, [Validators.required]],
      contactPerson: [null, [Validators.required]],
      newOrder: [false],
      productName: [null, [Validators.required]],
      quantity: [null, Validators.required],
      startingNumber: [null],
      shippingAddress: [null, Validators.required],
      comments: [null]
    });
  }

  onSubmit() {
    // More validation needs to come!
    if (this.registrationForm.status === 'INVALID') {
      console.log(this.registrationForm);
      alert('Please complete the form before submitting');
    } else {
      const companyName = this.registrationForm.get('companyName').value;
      const email = this.registrationForm.get('email').value;
      const accountNumber = this.registrationForm.get('accountNumber').value;
      const contactPerson = this.registrationForm.get('contactPerson').value;
      const newOrder = this.registrationForm.get('newOrder').value;
      const productName = this.registrationForm.get('productName').value;
      const quantity = this.registrationForm.get('quantity').value;
      const startingNumber = this.registrationForm.get('startingNumber').value;
      const shippingAddress = this.registrationForm.get('shippingAddress').value;
      const comments = this.registrationForm.get('comments').value;

      const contactForm = new ContactForm(companyName, email, accountNumber, contactPerson, newOrder,
        productName, quantity, startingNumber, shippingAddress, comments);

      this.formService.sendOrder(contactForm).subscribe(data => {
        console.log(data);
        if (data.success) {
          alert('Your Order Has Been Received!');
          this.registrationForm.reset();
          this.router.navigate(['home']);
        } else {
          alert('Well this is embarrassing, something went wrong with your order. Please try again later');
        }
      });
    }
  }

}
