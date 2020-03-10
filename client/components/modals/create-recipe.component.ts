import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Recipe } from '../interfaces/Recipe';

@Component({
  selector: 'create-recipe',
  template: require('./create-recipe.html')
})
export class CreateRecipeComponent {
  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  recipeToCreate: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipe: Recipe = {
    _id: undefined,
    name: undefined,
    description: undefined,
    image: undefined,
    prepTime: undefined,
    cookTime: undefined,
    directions: undefined,
    ingredients: [],
    reviews: [],
    __v: 0,
  };

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  private trackByFn(index: any, item: any): number {
    return index;
  }

  createRecipe() {
    this.recipeToCreate.emit(this.recipe);
  }
}
