import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { HolidayOrOvertimeRequestService } from '../../../services/holiday.or.overtime.request';
import { UserRequests } from '../../../model/requests.user';
import {Header} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';

@Component({
  selector: 'app-manager-overtimes',
  providers: [UsersService, HolidayOrOvertimeRequestService],
  templateUrl: './manager-overtimes.component.html',
  styleUrls: ['./manager-overtimes.component.css']
})
export class ManagerOvertimesComponent implements OnInit {
	
	users: any = [];
	requests: any = [];
	user_requests: any = [];

  constructor(private userService: UsersService, private holidayOrOvertimeRequestService:HolidayOrOvertimeRequestService) { }

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
			  if(x.user==y._id){
				  console.log("dupa");
				this.user_requests.push(new UserRequests(x.user, y.name, y.surname, new Date(x.from), new Date(x.to), x.type, x.status)); 
			  }
		  }
	  }
  }
}
