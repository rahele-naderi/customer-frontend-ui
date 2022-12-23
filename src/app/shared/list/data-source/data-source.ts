import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, finalize, Observable, tap } from 'rxjs';
import { DataService } from './data-service';

export class AsyncDataSource<T = any> implements DataSource<T> {
    loadingSubject = new BehaviorSubject<boolean>(false);
    dataSubject = new BehaviorSubject<T[]>([]);

    constructor(private readonly dataService: DataService<T>) {
    }

    connect(collectionViewer: CollectionViewer): Observable<readonly T[]> {
        return this.dataSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.dataSubject.complete();
        this.loadingSubject.complete();
    }

    loadData() {
        this.loadingSubject.next(true);
        return this.dataService.loadData().pipe(
            tap(value => this.dataSubject.next(value)),
            finalize(() => this.loadingSubject.next(false))
        );
    }

}