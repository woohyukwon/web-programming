import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../components/services/user.service';
import {User} from '../../components/interfaces/User';
import {UpdateUserComponent} from '../../components/modals/update-user.component';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'main',
  template: require('./main.html'),
  styles: [require('./main.scss')],
})
export class MainComponent implements OnInit {

  private values: string[];
  private valueToSquare: number;
  private users: User[];
  private input: string;
  static parameters = [HttpClient, UserService, BsModalService];

  constructor(private http: HttpClient, private userService: UserService, private modalService: BsModalService) {
    this.http = http;
    this.userService = userService;
    this.modalService = modalService;
    this.setData();
    this.getUserData();
  }

  private setData() {
    this.values = ['first', 'second', 'third'];
    this.valueToSquare = 4;
  }

  public getUserData() {
    this.userService.getAllUsers()
      .then(response => {
        this.users = response.users as User[];
      })
      .catch(this.handleError);
  }

  public editUser(user: User) {
    const initialState = {
      user
    }
    const modalRef = this.modalService.show(UpdateUserComponent, {initialState});
    modalRef.content.updatedUser.subscribe(() => {
      this.userService.updateUser(user)
        .then(updatedUser => {
          modalRef.content.formInfo = `User ${updatedUser._id} updated!`;
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
  }
}
