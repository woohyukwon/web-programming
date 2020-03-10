import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {CreateReviewComponent} from './create-review.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CreateReviewComponent,
  ],

  exports: [
    CreateReviewComponent,
  ],

  providers: [
  ],

  entryComponents: [
    CreateReviewComponent,
  ]
})
export class CreateReviewModule {
}
