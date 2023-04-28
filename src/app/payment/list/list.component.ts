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

  searchText: string = ''
  payments: Payment[] = [];

  constructor(public paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.paymentService.getAll().subscribe({
      next: (data) => {
        this.payments = data.items;
      },
      error: (err) => {
        this.router.navigate(['login']);
      }
    })
  }

  onSearchClick(): void {
    this.paymentService.getAll(this.searchText).subscribe({
      next: (data) => {
        this.payments = data.items;
      },
      error: (err) => {
        this.router.navigate(['login']);
      }
    })
  }

  deletePayment(id: string) {
    this.paymentService.delete(id).subscribe(res => { 
      this.payments = this.payments.filter(item => item._id !== id);
    })
  }
}
