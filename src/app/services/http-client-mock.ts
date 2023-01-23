import { delay, of } from "rxjs";

export class HttpClientMock {
  db = [
    { name: "Item1", birthDate: new Date('1990-05-07'), sport: '1' },
    { name: "Item2", birthDate: new Date('1986-11-21'), sport: '4' },
    { name: "Item3", birthDate: new Date('1973-03-15'), sport: '2' },
    { name: "Item4", birthDate: new Date('1988-09-29'), sport: '3' },
    { name: "Item5", birthDate: new Date('1994-06-12'), sport: '2' },
    { name: "Item6", birthDate: new Date('1979-10-04'), sport: '3' }
  ];

  get<T>(url: string) {
    if(url === 'customers' ){
      return of(this.db).pipe(delay(1000));
    }
    else if(url.startsWith('customers')) {
      const name = url.substring(10);
      return of(this.db.find(customer => customer.name === name));
    }
    return of(undefined);
  }
}
