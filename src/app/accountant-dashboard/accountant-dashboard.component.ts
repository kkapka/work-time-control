import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-accountant-dashboard',
  providers: [CookieService],
  templateUrl: './accountant-dashboard.component.html',
  styleUrls: ['./accountant-dashboard.component.css']
})
export class AccountantDashboardComponent implements OnInit {

  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
	  if(this._cookieService.get("type")!="accountant"){
		window.location.href ="/"+this._cookieService.get("type")+"-dashboard";
	  }
  }

}
