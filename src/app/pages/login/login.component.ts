import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/user.action';
import { Reducers } from 'src/app/store/reducers/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  public loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private store: Store<Reducers>, private router: Router) {}

  public onSubmit() {
    const { user, password } = this.loginForm.value;

    this.store.dispatch(login({ user, password, isLoggedIn: true }));

    this.router.navigate(['/']);
  }
}
