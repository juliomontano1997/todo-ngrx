import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromTasks from '../reducers';

@Component({
  selector: 'app-list-display',
  template: `<app-todo-list [toDoList]="toDoList$ | async"> </app-todo-list>`,
  styles: [],
})
export class ListSmartComponent implements OnInit {
  toDoList$: Observable<string[]>;

  constructor(store: Store<fromTasks.ListModuleState>) {
    this.toDoList$ = store.pipe(select(fromTasks.selectTaskList));
  }

  ngOnInit(): void {}
}
