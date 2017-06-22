import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { HolidayService } from '../../../services/holiday.service';
import { UsersService } from '../../../services/user.service';
import { Event } from '../../../model/event.schedule';

@Component({
  selector: 'app-manager-holidays',
  providers: [UsersService, HolidayService],
  templateUrl: './manager-holidays.component.html',
  styleUrls: ['./manager-holidays.component.css']
})
export class ManagerHolidaysComponent implements OnInit {
	events: any = [];
	users: any = [];
	holidays: any = [];
	
  constructor(private userService: UsersService, private holidayService : HolidayService) { }

  ngOnInit() {
	  this.userService.getUsers().subscribe(users => {this.users=users;
		this.holidayService.getHolidays().subscribe(holidays => {this.holidays=holidays;
			this.getEvents();		
		});
	  });
	  
	}

	getEvents(){
		for(let x of this.holidays){
			this.events.push(new Event(this.getEmployeeNameAndSurname(x.employee),new Date(x.from), new Date(x.to)));
		}
		
		return this.events;
	}
	
	getEmployeeNameAndSurname(id: string){
		for(let x of this.users){
			if(x._id==id){
				return x.name + " " + x.surname;
			}
		}
	}
}
