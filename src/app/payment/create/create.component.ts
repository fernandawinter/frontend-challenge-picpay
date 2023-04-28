import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Payment, PaymentDto } from '../payment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public paymentService: PaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required), 
      title: new FormControl('', Validators.required), 
      value: new FormControl('', Validators.required), 
      isPayed: new FormControl('')
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    const payment: PaymentDto = {
      username: this.form.value.username,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      title: this.form.value.title,
      value: this.form.value.value,
      isPayed: this.form.value.isPayed,     
      date: (new Date()).toISOString()
    }
    this.paymentService.create(payment).subscribe({
      next: (res: any) => { 
        this.router.navigate(['payment/list']);
      }, 
      error: (err: any) => {
        console.log('err',err)
      }
    });
  }
}


