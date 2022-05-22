import { createReducer, on } from '@ngrx/store';
import { logout } from '../actions/user.action';

export type User = {
  user: string | undefined;
  password: string | undefined;
  isLoggedIn: boolean;
};

export const initialState: User = {
  user: undefined,
  password: undefined,
  isLoggedIn: false,
};

export const userReducer = createReducer(
  initialState,
  on(logout, (state) => {
    return {
      ...state,
      isLoggedIn: false,
      user: '',
      password: '',
    };
  })
);
