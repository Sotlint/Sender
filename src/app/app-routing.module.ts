import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WorkspaceComponent} from "./workspace/workspace.component";
import {DashboardComponent} from "./workspace/dashboard/dashboard.component";
import {ContactsComponent} from "./workspace/contacts/contacts.component";
import {EmailComponent} from "./workspace/email/email.component";
import {SmsComponent} from "./workspace/sms/sms.component";

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'workspace',
    component: WorkspaceComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'email', component: EmailComponent },
      { path: 'sms', component: SmsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
