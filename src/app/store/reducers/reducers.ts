import { Action, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { User, userReducer } from './user.reducer';

export type Reducers = {
  count: number;
  user: User;
};

export const reducers: ActionReducerMap<Reducers, Action> = {
  count: counterReducer,
  user: userReducer,
};
