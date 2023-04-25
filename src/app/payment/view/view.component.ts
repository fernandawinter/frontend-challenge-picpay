import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../payment';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  payment!: Payment;

  constructor(
    public paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['paymentId'];

    this.paymentService.find(this.id).subscribe((data: Payment) => {
      this.payment = data;
    });
  }
}