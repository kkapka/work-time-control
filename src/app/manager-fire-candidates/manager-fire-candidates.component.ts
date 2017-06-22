import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { WorklogService } from '../../../services/worklog.service';
import { MissedDays } from '../../../model/missed.days';
import {DataListModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

@Component({
  selector: 'app-manager-fire-candidates',
  providers: [UsersService, WorklogService],
  templateUrl: './manager-fire-candidates.component.html',
  styleUrls: ['./manager-fire-candidates.component.css']
})
export class ManagerFireCandidatesComponent implements OnInit {

	missed: any = [];
	tmp_logs: any = [];
	tmp_results: any[];
	users: any = [];
  constructor(private userService: UsersService, private worklogService : WorklogService) { }

  ngOnInit() {
	this.userService.getUsers().subscribe(users => {this.users=users;
		this.worklogService.getWorklog().subscribe(tmp_logs => {this.tmp_logs=tmp_logs;
			this.getWorkedHours();		
		});
	});
  }
  
  getWorkedHours(){
	var monday = this.getMonday(new Date());
	var friday = this.getFriday(new Date());
	var today = new Date();
	var firstDayNumber = 1;
	var lastDayNumber = 5;
	
	if(today<friday){
		lastDayNumber=today.getDay();
	}
	
	var expectedNumberOfLogsForUser = 2 * lastDayNumber;
	
	for(let usr of this.users){
		var logCount = 0;
		for(let log of this.tmp_logs){
			if(log.employee == usr._id){
				logCount++;
			}
		}
		
		if(logCount !=expectedNumberOfLogsForUser){
			if(usr.type=="employee"){
				var leftDays = Math.ceil((expectedNumberOfLogsForUser - logCount)/2);
				this.missed.push(new MissedDays(usr.name, usr.surname, leftDays));
			}
		}
	}
  }
  
  getMonday(d: Date){
	  d = new Date(d);
	  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1);
	  return new Date(d.setDate(diff));
  }
  
  getFriday(d: Date){
	var resultDate = new Date(d.getTime());
	resultDate.setDate(d.getDate() + (7 + 5 - d.getDay()) % 7);

    return resultDate; 	  
  }

}
