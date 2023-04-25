import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  payments: Payment[] = [];

  constructor(public paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getAll().subscribe((data: Payment[]) => {
      console.log('data', data);
      this.payments = data;
      console.log(this.payments);
    })
  }

  deletePayment(id: string) {
    this.paymentService.delete(id).subscribe(res => {
      this.payments = this.payments.filter(item => item._id !== id);
      console.log('Payment deleted successfully!');
    })
  }
}
