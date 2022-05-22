import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyStoreModule } from './store/my-store.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MyStoreModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
