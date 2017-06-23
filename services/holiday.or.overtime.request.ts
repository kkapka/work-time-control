import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
  
@Injectable()
 export class HolidayOrOvertimeRequestService{
	private url = 'api/allHolidayOrOvertimeRequests';
	
	constructor(private http: Http) { }
	
	getAllRequests(){
	return this.http.get(this.url)
      .map(res => res.json());
	
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
 }