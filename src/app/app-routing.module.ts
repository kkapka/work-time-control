import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountantDashboardComponent } from './accountant-dashboard/accountant-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { LoginComponent } from './login/login.component';

import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';
import { EmployeeHolidayComponent } from './employee-holiday/employee-holiday.component';
import { EmployeeBookComponent } from './employee-book/employee-book.component';

import { ManagerFireCandidatesComponent } from './manager-fire-candidates/manager-fire-candidates.component';
import { ManagerHolidaysComponent } from './manager-holidays/manager-holidays.component';
import { ManagerOvertimesComponent } from './manager-overtimes/manager-overtimes.component';
import { ManagerMessagesComponent } from './manager-messages/manager-messages.component';
import { ManagerStatsComponent } from './manager-stats/manager-stats.component';
import { ManagerDashboardHomeComponent } from './manager-dashboard-home/manager-dashboard-home.component';

import { AccountantMessagesComponent } from './accountant-messages/accountant-messages.component';
import { AccountantSalariesComponent } from './accountant-salaries/accountant-salaries.component';


const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'employee-dashboard', component: EmployeeDashboardComponent, 
		children: [
			{ path: '', redirectTo: '/employee-dashboard/holiday', pathMatch: 'full' },
			{path: 'messages', component: EmployeeMessagesComponent},
			{path: 'holiday', component: EmployeeHolidayComponent},
			{path: 'book', component: EmployeeBookComponent}
		]},
	{ path: 'manager-dashboard', component: ManagerDashboardComponent,
		children: [
			{ path: '', redirectTo: '/manager-dashboard/home', pathMatch: 'full' },
			{path: 'home', component: ManagerDashboardHomeComponent},
			{path: 'fire-candidates', component: ManagerFireCandidatesComponent},
			{path: 'holidays', component: ManagerHolidaysComponent},
			{path: 'overtimes', component: ManagerOvertimesComponent},
			{path: 'messages', component: ManagerMessagesComponent},
			{path: 'stats', component: ManagerStatsComponent}
	]},
	{ path: 'accountant-dashboard', component: AccountantDashboardComponent, 
		children: [
			{ path: '', redirectTo: '/accountant-dashboard/salaries', pathMatch: 'full' },
			{path: 'salaries', component: AccountantSalariesComponent},
			{path: 'messages', component: AccountantMessagesComponent}
		]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}