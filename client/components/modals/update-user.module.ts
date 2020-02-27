import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {UpdateUserComponent} from './update-user.component';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    UpdateUserComponent
  ],

  exports: [
    UpdateUserComponent,
  ],

  providers: [
  ],

  entryComponents: [
    UpdateUserComponent,
  ]
})
export class UpdateUserModule {
}
