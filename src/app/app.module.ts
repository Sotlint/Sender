import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { AuthorizationComponent } from './home/authorization/authorization.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {ContactsComponent} from "./workspace/contacts/contacts.component";
import {DashboardComponent} from "./workspace/dashboard/dashboard.component";
import {EmailComponent} from "./workspace/email/email.component";
import {SmsComponent} from "./workspace/sms/sms.component";



@NgModule({
  declarations: [
    WorkspaceComponent,
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    AuthorizationComponent,
    ContactsComponent,
    DashboardComponent,
    EmailComponent,
    SmsComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
