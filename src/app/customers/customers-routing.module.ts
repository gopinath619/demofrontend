import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomeeInvoiceComponent } from './customee-invoice/customee-invoice.component';

const routes: Routes = [
  {

    path: '',
    children: [
      {
        path: "cusmert_list",
        component: CustomerListComponent,

      },
      {
        path: "custmerinvoice",
        component: CustomeeInvoiceComponent,

      }
    ],
    component: CustomerDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
