import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountantDashboardComponent } from './accountant-dashboard/accountant-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'employee-dashboard', component: EmployeeDashboardComponent },
	{ path: 'manager-dashboard', component: ManagerDashboardComponent },
	{ path: 'accountant-dashboard', component: AccountantDashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}