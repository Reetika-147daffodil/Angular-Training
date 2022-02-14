import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TableComponent } from './table/table.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountComponent } from './account/account.component';

import { FirebaseDatatableComponent } from './firebase-datatable/firebase-datatable.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
 
  { path: 'table', component: TableComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginWindowComponent },
  { path: 'firebase-data', component: FirebaseDatatableComponent },
  { path: 'home', component: AppComponent },
  { path: 'account', component: AccountComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
