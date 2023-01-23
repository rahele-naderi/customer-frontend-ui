import { CustomerStoreService } from './../../services/customer-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedCustomer$;
  constructor(customerStoreService: CustomerStoreService) {
    this.selectedCustomer$ = customerStoreService.selectedCustomer$;
  }
}
