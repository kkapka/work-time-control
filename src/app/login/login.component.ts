import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';

import { User } from '../../../model/user';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  providers: [UsersService, CookieService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	users: any = [];
	
  constructor(private userService: UsersService, private _cookieService:CookieService) { }

  ngOnInit() {
	  this.userService.getUsers().subscribe(users => {this.users=users;});
	  
	  if(this._cookieService.get("login")!=null){
		window.location.href ="/"+this._cookieService.get("type")+"-dashboard";
	  }
  }
  
  login(user_login : string, user_password : string){
	  console.log(user_login);
	  console.log(user_password);
	  for(let x of this.users){
		  if(x.login == user_login && x.password == user_password){
			  this._cookieService.put("login",x.login);
			  this._cookieService.put("password",x.password);
			  this._cookieService.put("type",x.type);
			  window.location.href ="/"+x.type+"-dashboard";
			  
		  }
	  }
  }

}

