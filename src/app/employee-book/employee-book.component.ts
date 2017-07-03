import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-employee-book',
  providers: [UsersService, CookieService],
  templateUrl: './employee-book.component.html',
  styleUrls: ['./employee-book.component.css']
})
export class EmployeeBookComponent implements OnInit {
  users: any = [];
  user: any;
  constructor(private userService: UsersService, private _cookieService:CookieService) { }

  ngOnInit() {
	this.userService.getUsers().subscribe(users => {this.users=users;
		this.init();	
	});
  }
  
  init(){
	  for(let x of this.users){
		if(x.login == this._cookieService.get("login")){
			this.user = x._id;
			break;
		}
	  }
  }

}
