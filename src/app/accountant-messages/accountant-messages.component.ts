import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';

@Component({
  selector: 'app-accountant-messages',
  providers: [UsersService],
  templateUrl: './accountant-messages.component.html',
  styleUrls: ['./accountant-messages.component.css']
})
export class AccountantMessagesComponent implements OnInit {

	users: any = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
	this.userService.getUsers().subscribe(users => {this.users=users;});
  }

}
