import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyStoreModule } from './store/my-store.module';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [UserGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MyStoreModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
