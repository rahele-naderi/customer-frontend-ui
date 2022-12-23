import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';
import { DataService } from '../shared/list/data-source/data-service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements DataService<string> {

  constructor() { }
  loadData(): Observable<string[]> {
    return of([
      { name: "Item1" },
      { name: "Item2" },
      { name: "Item3" },
      { name: "Item4" },
      { name: "Item5" },
      { name: "Item6" }
    ]).pipe(map(customers => customers.map(customer => customer.name)))
  }
}
