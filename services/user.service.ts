import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
  
@Injectable()
 export class UsersService{
	private usersUrl = 'api/allUsers';
	
	constructor(private http: Http) { }
	
	getUsers(){
	return this.http.get(this.usersUrl)
      .map(res => res.json());
	
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
 }