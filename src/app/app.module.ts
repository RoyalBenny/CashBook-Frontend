import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { InputComponent } from './input/input.component';
import { SummayComponent } from './summay/summay.component';
import { DetailComponent } from './detail/detail.component';
import { InputpageComponent } from './inputpage/inputpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CanActivateService } from './can-activate.service';
import { AuthService } from './services/auth.service';
import { EntryService } from './services/entry.service';

const appRoutes:Routes=[
  {path:'',component:DetailComponent, canActivate:[CanActivateService]},
  {path:'home',component:DetailComponent, canActivate:[CanActivateService]},
  {path:'input',component:InputpageComponent,canActivate:[CanActivateService]},
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    InputComponent,
    SummayComponent,
    DetailComponent,
    InputpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CalendarModule
  ],
  providers: [
    AuthService,
    EntryService,
    CanActivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
