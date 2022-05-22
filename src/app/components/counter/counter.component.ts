import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../store/actions/counter.action';
import { Reducers } from '../../store/reducers/reducers';

@Component({
  template: `<button (click)="increment()">Increment</button>

    <div>Current Count: {{ count$ | async }}</div>

    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>`,
  selector: 'app-counter',
  styles: [],
})
export class CounterComponent {
  public count$!: Observable<number>;

  constructor(private store: Store<Reducers>) {
    this.count$ = this.store.select('count');
  }

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }
}
