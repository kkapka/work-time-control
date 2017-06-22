import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-manager-dashboard',
  providers: [CookieService],
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
	  if(this._cookieService.get("type")!="manager"){
		window.location.href ="/"+this._cookieService.get("type")+"-dashboard";
	  }
  }

}
