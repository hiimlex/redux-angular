import { Action, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export type Reducers = {
  count: ActionReducerMap<number, Action>;
};

export const reducers: ActionReducerMap<Reducers, Action> = {
  count: counterReducer,
};
