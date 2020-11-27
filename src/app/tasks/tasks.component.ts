import { Task } from '../tasks/task.model';
import { AppState } from '../state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    this.tasks = this.store.select((state) => state.tasks);
  }

  addTask(title: string) {
    console.log(title);
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Task>{ title: title, done: false },
    });
  }

  ngOnInit(): void {}
}
