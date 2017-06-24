import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { WorklogService } from '../../../services/worklog.service';

@Component({
  selector: 'app-manager-stats',
    providers: [UsersService, WorklogService],
  templateUrl: './manager-stats.component.html',
  styleUrls: ['./manager-stats.component.css']
})
export class ManagerStatsComponent implements OnInit {

	tmp_logs: any = [];
	users: any = [];
	public doughnutChartLabels:string[] = ['Logs before 8:00', 'Logs betwwen 8:00 and 12:00', 'Logs after 12:00'];
	public doughnutChartData: any = [];
	public doughnutChartType:string = 'doughnut';
	public doughnutChartColors: any[] = [{ backgroundColor: ["#b8436d", "#00d9f9", "#a4c73c", "#a4add3"] }];
	
    public doughnutChartOptions:any = {
    responsive: true
  };
	
	constructor(private userService: UsersService, private worklogService : WorklogService) {
	}
	
	ngOnInit() {
				this.userService.getUsers().subscribe(users => {this.users=users;
		this.worklogService.getWorklog().subscribe(tmp_logs => {this.tmp_logs=tmp_logs;
				this.initChart();		
			});
		});
  }
  
  initChart(){
	  var a = 0;
	  var b = 0;
	  var c = 0;
	  
	  for(let x of this.tmp_logs){
		  var time = new Date(x.time);
		  if(time.getHours()<8){
			  a++;
		  }
		  else if(time.getHours()>=8 && time.getHours()<12){
			  b++;
		  }
		  else{
			  c++;
		  }
	  }
	  
	  console.log("a " + a);
	  console.log("b " + b);
	  console.log("c " + c);
	  
	  this.doughnutChartData.push(a);
	  this.doughnutChartData.push(b);
	  this.doughnutChartData.push(c);
  }
}
