import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerActionService {

  constructor(private readonly httpClient: HttpClient) { }

  getByName(name: string) {
    return this.httpClient.get<Customer>(`customers/${name}`);
  }
}
