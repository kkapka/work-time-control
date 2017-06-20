import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/user.service';

import { User } from '../../../model/user';

@Component({
  selector: 'app-login',
  providers: [UsersService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	users: any = [];
	
  constructor(private userService: UsersService) { }

  ngOnInit() {
	  this.userService.getUsers().subscribe(users => {this.users=users;});
	  //this.getUsers();
  }
  
  /*getUsers(): void{
	  this.userService
	  .getUsers()
	  .then(users => this.users = users)
  }*/
  
  login(){
  }

}

