import { createAction, props } from '@ngrx/store';
import { User } from '../reducers/user.reducer';

export const logout = createAction('[User Api] Logout');
export const login = createAction('[User Api] Login', props<User>());
