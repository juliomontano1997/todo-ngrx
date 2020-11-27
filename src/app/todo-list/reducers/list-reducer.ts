import { createReducer, on } from '@ngrx/store';
import { ListActions } from '../actions';

export const taskListKey = 'taskListFeature';

export interface State {
  todo: string[];
}

const initialState: State = {
  todo: [],
};

export const reducer = createReducer(
  initialState,
  on(ListActions.addNewTask, (state, { task }) => ({
    ...state,
    todo: [task, ...state.todo],
  }))
);
