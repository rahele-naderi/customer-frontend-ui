import { Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { AsyncDataSource } from './data-source/data-source';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T = any> extends BaseComponent {
  private _dataSource?: AsyncDataSource<T>;
  public get dataSource(): AsyncDataSource<T> | undefined {
    return this._dataSource;
  }

  @Input()
  public set dataSource(v: AsyncDataSource<T> | undefined) {
    this._dataSource = v;
    this.reload();
  }

  @Output()
  selected = new EventEmitter<T>();

  get data$() {
    return this.dataSource?.dataSubject;
  }

  get loading$() {
    return this.dataSource?.loadingSubject;
  }

  constructor() {
    super();
  }

  reload() {
    this.dataSource?.loadData().pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

  itemSelected(item: T) {
    this.selected.emit(item);
  }
}
