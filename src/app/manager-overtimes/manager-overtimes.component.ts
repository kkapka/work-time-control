import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { HolidayOrOvertimeRequestService } from '../../../services/holiday.or.overtime.request';
import { UserRequests } from '../../../model/requests.user';
import {Header} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

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

  constructor(private userService: UsersService, private holidayOrOvertimeRequestService:HolidayOrOvertimeRequestService, private http: Http) { }

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
				this.user_requests.push(new UserRequests(x._id, x.user, y.name, y.surname, new Date(x.from), new Date(x.to), x.type, x.status)); 
			  }
		  }
	  }
  }
  
  updateRequest(_status: string, _id: string, _user: string, _from: string, _to: string){
	  console.log("kliknalem !")
	  /*var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('http://195.181.222.145:3000/api/updateRequestStatus', 
							   JSON.stringify({id:_id,status:_status}),
							   {headers:headers})
		.map((res: Response) => res.json());*/
	console.log("id "+_id);
	console.log("status "+_status);
	console.log("from "+_from);
	console.log("_to "+_to);
	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://195.181.222.145:3000/api/updateRequestStatus', JSON.stringify({id:_id,status:_status}), options).toPromise();
	
	if(_status=="accepted"){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		this.http.post('http://195.181.222.145:3000/api/addHoliday', JSON.stringify({user: _user,from: _from,to: _to}), options).toPromise();
	}
  }
}
