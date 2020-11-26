import { createAction, props } from '@ngrx/store';

export const addNewTask = createAction(
  '[Todo list] Add',
  props<{ task: String }>()
);
