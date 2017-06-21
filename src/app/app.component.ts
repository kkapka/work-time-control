import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CookieService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private _cookieService:CookieService) { }
	
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
}
