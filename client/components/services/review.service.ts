import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Reviews} from '../interfaces/Reviews';
import {Review} from '../interfaces/Review';
import {Recipe} from '../interfaces/Recipe';
import {Recipes} from '../interfaces/Recipes';

@Injectable()
export class ReviewService {
  static parameters = [HttpClient];
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  getAllReviews(): Promise<Reviews> {
     return this.httpClient
         .get<Reviews>('/api/reviews/')
         .toPromise();
 }
 createReview(review: Review): Promise<Review> {
   return this.httpClient
     .post<Review>(`/api/recipes/${review.recipeId}/reviews/`, review)
     .toPromise();
 }



// getReviewById(recipe: Recipe, review: Review): Promise<Review> {
//     return this.httpClient
//         .get<Review>(`/api/recipes/${recipe._id}/reviews/${review._id}`, recipe)
//         .toPromise();
// }
}
