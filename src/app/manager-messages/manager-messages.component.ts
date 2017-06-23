import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';

@Component({
  selector: 'app-manager-messages',
  providers: [UsersService],
  templateUrl: './manager-messages.component.html',
  styleUrls: ['./manager-messages.component.css']
})
export class ManagerMessagesComponent implements OnInit {
	users: any = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
	this.userService.getUsers().subscribe(users => {this.users=users;});
  }

}
