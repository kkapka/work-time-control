import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { MessagesService } from '../../../services/messages.service';
import { CookieService } from 'angular2-cookie/core';
import { UserMessage } from '../../../model/user.message';


@Component({
  selector: 'app-employee-messages',
  providers: [UsersService, CookieService, MessagesService],
  templateUrl: './employee-messages.component.html',
  styleUrls: ['./employee-messages.component.css']
})
export class EmployeeMessagesComponent implements OnInit {

	users: any = [];
	messages: any = [];
	userMessages: any = [];
	
  constructor(private userService: UsersService, private _cookieService:CookieService, private messagesService: MessagesService) { }

  ngOnInit() {
	  this.userService.getUsers().subscribe(users => {this.users=users;
		this.messagesService.getMessages().subscribe(messages => {this.messages=messages;
			this.initMessages();
		});
	  });
  }
  
  initMessages(){
		var login = this._cookieService.get("login");
		var id;
		
		for(let x of this.users){
			if(x.login == login){
				id=x._id;
				break;
			}
		}
		
		for(let y of this.messages){
			if(y.to == id){
				this.userMessages.push(new UserMessage(y.text));
			}
		}
  }

}
