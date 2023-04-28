import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  payments: Payment[] = [];

  constructor(public paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.paymentService.getAll().subscribe({
      next: (data) => {
        console.log('data', data);
        this.payments = data.items;
        console.log(this.payments);
      },
      error: (err) => {
        this.router.navigate(['login']);
      }
    })
  }

  deletePayment(id: string) {
    this.paymentService.delete(id).subscribe(res => {
      this.payments = this.payments.filter(item => item._id !== id);
      console.log('Payment deleted successfully!');
    })
  }
}
