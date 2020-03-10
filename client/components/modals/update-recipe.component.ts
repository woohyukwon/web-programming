import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Recipe } from '../interfaces/Recipe';

@Component({
  selector: 'update-recipe',
  template: require('./update-recipe.html')
})

export class UpdateRecipeComponent {
  @Input()
  recipe: Recipe;

  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  updatedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  private trackByFn(index: any, item: any): number {
    return index;
  }

  updateRecipe() {
    this.updatedRecipe.emit(this.recipe);
  }
}
