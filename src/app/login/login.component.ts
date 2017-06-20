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
  
  login(user_login : string, user_password : string){
	  console.log(user_login);
	  console.log(user_password);
	  for(let x of this.users){
		  if(x.login == user_login && x.password == user_password){
			  window.location.href ="/employee-dashboard";
		  }
	  }
  }

}

