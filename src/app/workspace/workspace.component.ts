import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
  constructor(private router: Router){}


  condition = true;
  childComponent = DashboardComponent;
  onDashboard() {
    this.router.navigate(['workspace/dashboard']);
  };
  onContacts() {
    this.router.navigate(['workspace/contacts']);
  };
  onEmail(){
    this.router.navigate(['workspace/email']);
  }
  onSms(){
    this.router.navigate(['workspace/sms']);
  }
}
