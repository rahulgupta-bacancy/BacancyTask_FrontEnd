import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {AuthenticationGuard} from './utils/authentication.guard';
//import {AuthGuard } from '/utils';

const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' , },
  { path: 'dashboard', component: UserListComponent,canActivate:[AuthenticationGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
