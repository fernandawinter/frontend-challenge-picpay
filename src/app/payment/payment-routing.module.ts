import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'payment', redirectTo: 'payment/list', pathMatch: 'full' },
  { path: 'payment/list', component: ListComponent },
  { path: 'payment/:paymentId/view', component: ViewComponent },
  { path: 'payment/create', component: CreateComponent },
  { path: 'payment/:paymentId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }