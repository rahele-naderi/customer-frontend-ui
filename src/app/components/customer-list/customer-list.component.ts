import { Customer } from './../../models/customer.model';
import { CustomerStoreService } from './../../services/customer-store.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { AsyncDataSource } from 'src/app/shared/list/data-source/data-source';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  dataSource = new AsyncDataSource<string>(this.customerService);

  selectedCustomer$;

  constructor(private readonly customerService: CustomerService,
    private customerStoreService: CustomerStoreService) {
      this.selectedCustomer$ = customerStoreService.selectedCustomer$;
  }

  customerSelected(selectedCustomer: string) {
    this.customerStoreService.setSelectedCustomer(selectedCustomer);
  }

  add() {
    this.customerStoreService.setSelectedCustomer(null);
  }
}
