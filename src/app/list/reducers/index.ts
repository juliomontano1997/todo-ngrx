import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromList from './list-reducer';
import * as fromRoot from '../../reducers';

export const taskListModuleKey = 'taskListModule';

export interface TaskListState {
  [fromList.taskListKey]: fromList.State;
}

export interface ListModuleState extends fromRoot.RootState {
  [taskListModuleKey]: TaskListState;
}

export function reducers(state: TaskListState | undefined, action: Action) {
  return combineReducers({
    [fromList.taskListKey]: fromList.reducer,
  })(state, action);
}

export const ts = createFeatureSelector<ListModuleState, TaskListState>(
  taskListModuleKey
);

export const selectTaskList = createSelector(
  ts,
  (state) => state[fromList.taskListKey].todo
);
