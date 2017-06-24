import { Component, OnInit } from '@angular/core';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { Salary } from '../../../model/salary';
import { UsersService } from '../../../services/user.service';
import { WorklogService } from '../../../services/worklog.service';

@Component({
  selector: 'app-accountant-salaries',
  providers: [UsersService, WorklogService],
  templateUrl: './accountant-salaries.component.html',
  styleUrls: ['./accountant-salaries.component.css']
})
export class AccountantSalariesComponent implements OnInit {

	salaries: any = [];
	tmp_logs: any = [];
	users: any = [];
  constructor(private userService: UsersService, private worklogService : WorklogService) { }

  ngOnInit() {
	this.userService.getUsers().subscribe(users => {this.users=users;
		this.worklogService.getWorklog().subscribe(tmp_logs => {this.tmp_logs=tmp_logs;
			this.initLogs();		
		});
	});
  }
  
  initLogs(){
	var monday = this.getMonday(new Date());
	var friday = this.getFriday(new Date());
	var today = new Date();
	var firstDayNumber = 1;
	var lastDayNumber = 5;
	
	var hourRate = 10;
	
	if(today<friday){
		lastDayNumber=today.getDay();
	}
	
	for(let usr of this.users){
		var hourDiff = 0;
		var salary = 0;

		if(usr.type=="employee"){
			for(var i = 0; i < this.tmp_logs.length; i++ ){
				var firstTimeLog = new Date(this.tmp_logs[i].time).getDay();
				//console.log("first time log: " + firstTimeLog);
				for(var j = i+1; j < this.tmp_logs.length; j++){
					var secondTimeLog = new Date(this.tmp_logs[j].time).getDay();
					//console.log("second time log: " + secondTimeLog);
					if((firstTimeLog == secondTimeLog) && (usr._id == this.tmp_logs[i].employee) && (usr._id == this.tmp_logs[j].employee)){
						console.log(this.tmp_logs[i].time + " vs " + this.tmp_logs[i].time);
						hourDiff += Math.abs(new Date(this.tmp_logs[i].time).getTime() - new Date(this.tmp_logs[j].time).getTime()) / 36e5;
						//console.log("added hour diff : " + hourDiff);
					}
				}
			}
			
		salary = hourRate*hourDiff;
		
		console.log("INPUT" + usr.name + " " +usr.surname + " " +hourDiff + " " +salary);
		this.salaries.push(new Salary(usr.name, usr.surname, hourDiff, salary));
		
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
