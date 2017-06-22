import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CookieService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private _cookieService:CookieService, private _location: Location) { }
	
	ngOnInit() {
		
	}
	
	shouldBeLogout(){
		if(this._cookieService.get("login")!=null){
			return "";
		}
		
		return "invisible";
	}
	
	logout(){
		this._cookieService.remove("login");
		this._cookieService.remove("password");
		this._cookieService.remove("type");
		window.location.href = "/login";
		
	}
	
  
	  getType(){
		  return this._cookieService.get("type");
	  }
	  
	shouldBeButtonsForManager(){
		if(this.getType()=="manager"){
			return "";
		}
		
		return "invisible";
	}
	
	shouldBeButtonsForEmployee(){
		if(this.getType()=="employee"){
			return "";
		}
		
		return "invisible";
	}
	
	shouldBeButtonsForAccountant(){
		if(this.getType()=="accountant"){
			return "";
		}
		
		return "invisible";
	}
	
	goBack(){
		this._location.back();
	}
}
