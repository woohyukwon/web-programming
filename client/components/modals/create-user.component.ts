import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../interfaces/User';

@Component({
  selector: 'create-user',
  template: require('./create-user.html')
})
export class CreateUserComponent {
  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  userToCreate: EventEmitter<User> = new EventEmitter<User>();

  private user: User = {
    _id: undefined,
    name: {
      _id: undefined,
     firstName: undefined,
     lastName: undefined
   },
    username: undefined,
    email: undefined,
    __v: undefined
  };

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  private trackByFn(index: any, item: any): number {
    return index;
  }

  createUser() {
    this.userToCreate.emit(this.user);
  }
}
