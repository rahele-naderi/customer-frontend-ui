import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { DataService } from '../shared/list/data-source/data-service';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService implements DataService<string> {
  constructor(private readonly httpClient: HttpClient) { }
  loadData(): Observable<string[]> {
    return this.httpClient.get<Customer[]>('customers').pipe(map(customers => customers.map(customer => customer.name)))
  }
}
