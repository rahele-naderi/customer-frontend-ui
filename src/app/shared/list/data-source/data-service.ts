import { Observable } from "rxjs";

export interface DataService<T = any> {
    loadData(): Observable<T[]>;
}