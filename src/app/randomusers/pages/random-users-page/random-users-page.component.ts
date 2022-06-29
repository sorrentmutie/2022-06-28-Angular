import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserResponse, Result } from '../../random-user';
import { RandomUsersService } from '../../random-users.service';

@Component({
  selector: 'app-random-users-page',
  templateUrl: './random-users-page.component.html',
  styleUrls: ['./random-users-page.component.css']
})
export class RandomUsersPageComponent  {

 // users: Result[] | undefined = undefined;
  usersObservable: Observable<RandomUserResponse> | undefined = undefined;

  constructor(private service: RandomUsersService) {
    this.usersObservable = this.service.getResponse("50");
   /*  this.service.getResponse("50").subscribe(
      response => this.users = response.results
    ); */

   // service.getResponse("50").subscribe( x => console.log(x));

  }


}
