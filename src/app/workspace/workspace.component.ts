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
  isButtonActive1: boolean = false;
  isButtonActive2: boolean = false;
  isButtonActive3: boolean = false;
  isButtonActive4: boolean = false;




  condition = true;
  childComponent = DashboardComponent;
  onDashboard() {
    this.isButtonActive1=true;
    this.isButtonActive2 = false;
    this.isButtonActive3 = false;
    this.isButtonActive4 = false;
    this.router.navigate(['workspace/dashboard']);
  };
  onContacts() {
    this.isButtonActive1=false;
    this.isButtonActive2 = true;
    this.isButtonActive3 = false;
    this.isButtonActive4 = false;
    this.router.navigate(['workspace/contacts']);
  };
  onEmail(){
    this.isButtonActive1=false;
    this.isButtonActive2 = false;
    this.isButtonActive3 = true;
    this.isButtonActive4 = false;
    this.router.navigate(['workspace/email']);
  }
  onSms(){
    this.isButtonActive1=false;
    this.isButtonActive2 = false;
    this.isButtonActive3 = false;
    this.isButtonActive4 = true;
    this.router.navigate(['workspace/sms']);
  }
}
