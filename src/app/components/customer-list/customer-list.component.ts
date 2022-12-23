import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { AsyncDataSource } from 'src/app/shared/list/data-source/data-source';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  dataSource = new AsyncDataSource<string>(this.customerService);

  constructor(private readonly customerService: CustomerService) { }

  ngOnInit(): void {
  }

}
