import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { User } from 'src/app/shared/components/welcome/welcone.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: User[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
      this.route.params.pipe(
        mergeMap( (params: any) => {
          const q = params['q'] as string;
          return this.http.get<User[]>(environment.placeholder + q);
        })
      )
      .subscribe(users => this.users = users);
  }

  back() {
    this.router.navigate(['/welcome']);
  }

}
