import {Component, OnInit} from '@angular/core';
import {User} from '../../components/interfaces/User';
import {UserService} from '../../components/services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'users',
  template: require('./users.html'),
  styles: [require('./users.scss')],
})
export class UsersComponent implements OnInit {

  private user: User;
  static parameters = [ActivatedRoute, UserService];

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route = route;
    this.userService = userService;
  }

  ngOnInit() git checkout mastergit add .
  git commit -m "Completed lab 12"
  git push -u origin mastergit checkout mastergit add .
  git commit -m "Completed lab 12"
  git push -u origin master{
    this.route.params.subscribe(params => {
      this.userService.getUserById(params.id)
        .then(user => {
          this.user = user;
        });
    });
  }
}
