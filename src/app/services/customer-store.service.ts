import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerStoreService {
  private _selectedCustomer = new BehaviorSubject<string | null | undefined>(undefined);
  get selectedCustomer$() {
    return this._selectedCustomer.asObservable();
  }

  constructor() { }

  setSelectedCustomer(value: string | null | undefined) {
    this._selectedCustomer.next(value);
  }
}
