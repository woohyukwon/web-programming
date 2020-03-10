import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../components/interfaces/Recipe';
import {RecipeService} from '../../components/services/recipe.service';
import {ActivatedRoute} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap';
import {CreateReviewComponent} from '../../components/modals/create-review.component';
import {UpdateReviewComponent} from '../../components/modals/update-review.component';
import {Review} from '../../components/interfaces/Review';
import {ReviewService} from '../../components/services/review.service';


@Component({
  selector: 'recipes',
  template: require('./recipes.html'),
  styles: [require('./recipes.scss')],
})
export class RecipesComponent implements OnInit {

  private recipe: Recipe;
  private reviews: Review[];
  static parameters = [ActivatedRoute, RecipeService, ReviewService, BsModalService];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private reviewService: ReviewService, private modalService: BsModalService) {
    this.route = route;
    this.recipeService = recipeService;
    this.reviewService = reviewService;
    this.modalService = modalService;
  }
  
  public createReview() {
    const modalRef = this.modalService.show(CreateReviewComponent);
    modalRef.content.reviewToCreate.subscribe(reviewToCreate => {
      reviewToCreate.recipeId = this.recipe._id;
      console.log(reviewToCreate);
      this.reviewService.createReview(reviewToCreate)
        .then(createdReview => {
          modalRef.content.formInfo = `Review created!`;
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeService.getRecipeById(params.id)
        .then(recipe => {
          this.recipe = recipe;
        });
    });
  }
}
