import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomeeInvoiceComponent } from './customee-invoice/customee-invoice.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent, CustomerDashboardComponent, CustomeeInvoiceComponent]
})
export class CustomersModule { }
