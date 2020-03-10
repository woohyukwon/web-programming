import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Review } from '../interfaces/Review';

@Component({
  selector: 'create-review',
  template: require('./create-review.html')
})
export class CreateReviewComponent {
  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  reviewToCreate: EventEmitter<Review> = new EventEmitter<Review>();

  private review: Review = {
    _id: undefined,
    description: undefined,
    rating: undefined,
    date: undefined,
    user: undefined,
    recipeId: undefined
  };

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  private trackByFn(index: any, item: any): number {
    return index;
  }

  createReview() {
    this.reviewToCreate.emit(this.review);
  }
}
