import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Reducers } from 'src/app/store/reducers/reducers';
import { User, userInitialState } from 'src/app/store/reducers/user.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  public user$!: Observable<User>;

  public get user(): User {
    let user: User = userInitialState;

    this.user$.subscribe((state) => (user = state));

    return user;
  }

  constructor(private store: Store<Reducers>) {
    this.user$ = this.store.select('user');
  }
}
