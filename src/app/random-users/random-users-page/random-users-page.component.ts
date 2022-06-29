import { Component, OnInit } from '@angular/core';
import { Result } from '../random-user';
import { RandomUsersService } from '../random-users.service';

@Component({
  selector: 'app-random-users-page',
  templateUrl: './random-users-page.component.html',
  styleUrls: ['./random-users-page.component.css']
})
export class RandomUsersPageComponent  {

  users: Result[] = [];

  constructor(private service: RandomUsersService) {

    this.service.getData().subscribe(response => {
      this.users = response.results;
    });
  }



}
