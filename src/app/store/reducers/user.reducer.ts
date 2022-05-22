import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../actions/user.action';

export type User = {
  user: string | undefined;
  password: string | undefined;
  isLoggedIn?: boolean;
};

export const userInitialState: User = {
  user: undefined,
  password: undefined,
  isLoggedIn: false,
};

export const userReducer = createReducer(
  userInitialState,
  on(logout, (state) => ({
    ...state,
    isLoggedIn: false,
    user: '',
    password: '',
  })),
  on(login, (state, payload) => ({ ...state, ...payload, isLoggedIn: true }))
);
