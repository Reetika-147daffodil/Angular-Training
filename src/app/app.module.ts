import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {  HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialExampleModule} from '../material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmployeeImageComponent } from './employee-image/employee-image.component';
import { FirebaseDatatableComponent } from './firebase-datatable/firebase-datatable.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoxData } from './firebase-datatable/firebase-datatable.component';








@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SideNavComponent,
    WelcomeComponent,
    LoginWindowComponent,
    SignUpComponent,
    EmployeeImageComponent,
    FirebaseDatatableComponent,
    DialogBoxData
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule ,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
