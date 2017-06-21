import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-employee-dashboard',
  providers: [CookieService],
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
	  if(this._cookieService.get("type")!="employee"){
		window.location.href ="/"+this._cookieService.get("type")+"-dashboard";
	  }

	}
}
