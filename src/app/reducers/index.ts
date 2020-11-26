import { Action, ActionReducerMap, State } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';

export interface RootState {
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<RootState, Action>
>('Root reducer token', {
  factory: () => ({
    router: fromRouter.routerReducer,
  }),
});
