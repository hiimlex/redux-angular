import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Reducers } from './store/reducers/reducers';
import { User } from './store/reducers/user.reducer';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  public user$!: Observable<User>;

  constructor(private store: Store<Reducers>, private router: Router) {
    this.user$ = this.store.select('user');
  }

  public canActivate() {
    let user: User = { isLoggedIn: false, user: '', password: '' };

    this.user$.pipe(take(1)).subscribe((state) => (user = { ...state }));

    if (user && !user.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
