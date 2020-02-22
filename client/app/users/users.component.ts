import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../components/services/user.service';
import {Users} from '../../components/interfaces/Users';

@Component({
  selector: 'users',
  template: require('./users.html'),
  styles: [require('./users.scss')],
})

export class UsersComponent implements OnInit {
  id: number;



}
