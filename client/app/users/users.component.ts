import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../components/services/user.service';
import {Users} from '../../components/interfaces/Users';
import {User} from "../../components/interfaces/User";

@Component({
  selector: 'users',
  template: require('./users.html'),
  styles: [require('./users.scss')],
})

export class UsersComponent implements OnInit {
  id: number;
  user: User = new User();
  users: Users;


  constructor(
    private http: HttpClient,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.http = http;
    this.userService = userService;
    this.route = route;
  }

  ngOnInit() {
  this.user = this.userService.getUserById(this.route.params.id);
  }
}
