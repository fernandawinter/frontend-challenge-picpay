import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment, PaymentDto } from '../payment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  payment!: Payment;
  form!: FormGroup;

  constructor(
    public paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['paymentId'];
    this.paymentService.find(this.id).subscribe((data: Payment) => {
      console.log('data', data)
      this.payment = data;
      this.form = new FormGroup({
        username: new FormControl(this.payment.username, Validators.required),
        firstName: new FormControl(this.payment.firstName, Validators.required),
        lastName: new FormControl(this.payment.lastName, Validators.required),
        title: new FormControl(this.payment.title, Validators.required),
        date: new FormControl(this.payment.date, Validators.required),
        value: new FormControl(this.payment.value, Validators.required),
        isPayed: new FormControl(this.payment.isPayed, Validators.required)
      });
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    const payment: Payment = {
      _id: this.form.value._id,
      username: this.form.value.username,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      title: this.form.value.title,
      value: this.form.value.value,
      isPayed: this.form.value.isPayed,     
      date: (new Date()).toISOString()
    }
    this.paymentService.update(this.id, payment).subscribe({
      next: (res: any) => { 
      }, 
      error: (err: any) => {
        console.log(err)
      }
    });
  }
}