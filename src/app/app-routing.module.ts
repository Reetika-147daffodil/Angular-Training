import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TableComponent } from './table/table.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeImageComponent } from './employee-image/employee-image.component';
import { FirebaseDatatableComponent } from './firebase-datatable/firebase-datatable.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
 
  { path: 'table', component: TableComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginWindowComponent },
  { path: 'firebase-data', component: FirebaseDatatableComponent },
  { path: 'home', component: AppComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
