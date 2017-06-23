export class UserRequests{
   constructor(public self_id: string, public id: string, public name: string, public surname: string, public from: Date, public to: Date, public type: string, public status: string) { }
}