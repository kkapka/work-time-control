import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { AccountantDashboardComponent } from './accountant-dashboard/accountant-dashboard.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HolidayService } from '../../services/holiday.service';
import { UsersService } from '../../services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';
import { EmployeeHolidayComponent } from './employee-holiday/employee-holiday.component';
import { AccountantSalariesComponent } from './accountant-salaries/accountant-salaries.component';
import { ManagerOvertimesComponent } from './manager-overtimes/manager-overtimes.component';
import { ManagerFireCandidatesComponent } from './manager-fire-candidates/manager-fire-candidates.component';
import { ManagerHolidaysComponent } from './manager-holidays/manager-holidays.component';
import { ManagerStatsComponent } from './manager-stats/manager-stats.component';
import { ManagerMessagesComponent } from './manager-messages/manager-messages.component';
import { AccountantMessagesComponent } from './accountant-messages/accountant-messages.component';
import { ScheduleModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDashboardComponent,
    ManagerDashboardComponent,
    AccountantDashboardComponent,
    EmployeeMessagesComponent,
    EmployeeHolidayComponent,
    AccountantSalariesComponent,
    ManagerOvertimesComponent,
    ManagerFireCandidatesComponent,
    ManagerHolidaysComponent,
    ManagerStatsComponent,
    ManagerMessagesComponent,
    AccountantMessagesComponent,
    ManagerFireCandidatesComponent,
    ManagerFireCandidatesComponent,
    ManagerFireCandidatesComponent,
    ManagerFireCandidatesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AppRoutingModule,
	ScheduleModule,
  ],
  providers: [CookieService, HolidayService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
