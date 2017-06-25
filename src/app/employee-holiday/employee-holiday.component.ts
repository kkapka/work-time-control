import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { HolidayOrOvertimeRequestService } from '../../../services/holiday.or.overtime.request';
import {Header} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import { CookieService } from 'angular2-cookie/core';
import { UserRequests } from '../../../model/requests.user';

@Component({
  selector: 'app-employee-holiday',
  providers: [UsersService, HolidayOrOvertimeRequestService,CookieService],
  templateUrl: './employee-holiday.component.html',
  styleUrls: ['./employee-holiday.component.css']
})
export class EmployeeHolidayComponent implements OnInit {
	users: any = [];
	requests: any = [];
	user_requests: any = [];

  constructor(private userService: UsersService, private holidayOrOvertimeRequestService:HolidayOrOvertimeRequestService, private _cookieService:CookieService) { }

  ngOnInit() {
	this.userService.getUsers().subscribe(users => {this.users=users;
		this.holidayOrOvertimeRequestService.getAllRequests().subscribe(requests => {this.requests=requests;
			this.initRequests();
		});
	});
  }
  
  initRequests(){
	  for(let x of this.requests){
		  for(let y of this.users){
			  if((x.user==y._id) && (y.login == this._cookieService.get("login"))){
				  console.log("dupa");
				this.user_requests.push(new UserRequests(x._id, x.user, y.name, y.surname, new Date(x.from), new Date(x.to), x.type, x.status)); 
			  }
		  }
	  }
  }
}
