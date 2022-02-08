import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { TableComponent } from './table/table.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:LoginWindowComponent},
  {path:'table',component:TableComponent},
  {path:'welcome',component:WelcomeComponent},
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
