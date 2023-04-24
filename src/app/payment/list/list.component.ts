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

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public paymentService: PaymentService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.paymentService.getAll().subscribe((data: Payment[]) => {
      console.log('data', data);
      this.payments = data;
      console.log(this.payments);
    })
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePayment(id: string) {
    this.paymentService.delete(id).subscribe(res => {
      this.payments = this.payments.filter(item => item._id !== id);
      console.log('Payment deleted successfully!');
    })
  }

}
