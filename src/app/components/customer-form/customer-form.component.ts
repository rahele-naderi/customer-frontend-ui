import { CustomerActionService } from './../../services/customer-action.service';
import { filter, switchMap, takeUntil, tap } from 'rxjs';
import { CustomerStoreService } from './../../services/customer-store.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent extends BaseComponent {
  form: FormGroup;
  title = '';
  sports = [
    { value: '1', title: 'Surfing', icon: 'surfing' },
    { value: '2', title: 'Swimming', icon: 'pool' },
    { value: '3', title: 'Soccer', icon: 'sports_soccer' },
    { value: '4', title: 'Martial Arts', icon: 'sports_martial_arts' },
  ];
  selectedCustomer$;

  constructor(fb: FormBuilder, private readonly customerStoreService: CustomerStoreService,
    private readonly customerActionService: CustomerActionService) {
    super();
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', [Validators.required, this.oldEnough(18)]],
      sport: ['']
    });
    this.selectedCustomer$ = customerStoreService.selectedCustomer$;
    this.selectedCustomer$.pipe(takeUntil(this.destroy$),
      tap(customerName => {
        if (customerName) {
          this.title = 'edit ' + customerName;
          this.form.get('name')?.setValue(customerName);
        }
        else {
          this.title = 'add new customer';
          this.form.get('name')?.setValue('');
        }
      }),
      filter(customerName => !!customerName),
      switchMap(customerName => this.customerActionService.getByName(customerName!)))
      .subscribe(customer => {
        this.form.get('birthDate')?.setValue(customer.birthDate);
        this.form.get('sport')?.setValue(customer.sport);
      });
  }

  oldEnough(minAge: number) {
    return (control: FormControl) => {
      const dateValue = new Date(control.value);
      if (!isNaN(dateValue.getTime())) {
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dateValue.getFullYear() - (currentDate < new Date(currentDate.getFullYear(), dateValue.getMonth(), dateValue.getDate()) ? 1 : 0);
        return age < minAge ?
          { oldEnough: { value: dateValue, minAge } } : null;
      }
      return null;
    };
  }

  remove() {
    this.customerStoreService.setSelectedCustomer(undefined);
  }

  cancel() {
    this.customerStoreService.setSelectedCustomer(undefined);
  }

}
