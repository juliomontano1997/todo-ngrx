import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSmartComponent } from './containers/list-smart.component';
import { TodoListComponent } from './components/todo-list.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromTaskList from './reducers';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes = [
  {
    path: '',
    component: ListSmartComponent,
  },
];

@NgModule({
  declarations: [ListSmartComponent, TodoListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromTaskList.taskListModuleKey,
      fromTaskList.reducers
    ),
    MatListModule,
  ],
})
export class ListModule {}
