import { Task } from '../tasks/task.model';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addTaskReducer(state: Task[] = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
