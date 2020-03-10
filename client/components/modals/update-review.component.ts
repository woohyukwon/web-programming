import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Review } from '../interfaces/Review';

@Component({
  selector: 'update-review',
  template: require('./update-review.html')
})
export class UpdateReviewComponent {
  @Input()
  review: Review;

  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  updatedReview: EventEmitter<Review> = new EventEmitter<Review>();

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  updateReview() {
    this.updatedReview.emit(this.review);
  }
}
