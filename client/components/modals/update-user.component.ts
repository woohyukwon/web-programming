import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../interfaces/User';

@Component({
  selector: 'update-user',
  template: require('./update-user.html')
})
export class UpdateUserComponent {
  @Input()
  user: User;

  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  updatedUser: EventEmitter<User> = new EventEmitter<User>();

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  updateUser() {
    this.updatedUser.emit(this.user);
  }
}
