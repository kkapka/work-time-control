import { Component, OnInit } from '@angular/core';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { WorkLog } from '../../../model/worklog';
import { UsersService } from '../../../services/user.service';
import { WorklogService } from '../../../services/worklog.service';

@Component({
  selector: 'app-manager-dashboard-home',
  providers: [UsersService, WorklogService],
  templateUrl: './manager-dashboard-home.component.html',
  styleUrls: ['./manager-dashboard-home.component.css']
})
export class ManagerDashboardHomeComponent implements OnInit {
	logs: any = [];
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
	  for(let x of this.tmp_logs){
		for(let y of this.users){
			if(x.employee == y._id){
				console.log(y._id);
				this.logs.push(new WorkLog(y.name,y.surname,new Date(x.time)));
			}
		}
	  }
	  
	  return this.logs;
  }
}
