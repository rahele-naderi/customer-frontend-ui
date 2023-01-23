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

  constructor(fb: FormBuilder) {
    super();
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', [Validators.required, this.oldEnough(18)]]
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

  ngOnInit(): void {
  }

}
