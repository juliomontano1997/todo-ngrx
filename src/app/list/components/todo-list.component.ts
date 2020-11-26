import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTasks from '../reducers';
import { ListActions } from '../actions';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() toDoList: string[];

  constructor(private store: Store<fromTasks.ListModuleState>) {}

  ngOnInit(): void {}

  addToList(task: string) {
    this.store.dispatch(ListActions.addNewTask({ task }));
  }

  deleteFromList(index: number) {}
}
