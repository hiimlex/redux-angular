import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/reducers';

@NgModule({
  imports: [StoreModule.forRoot(reducers)],
})
export class MyStoreModule {}
