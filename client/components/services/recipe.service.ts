import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Recipes} from '../interfaces/Recipes';
import {Recipe} from '../interfaces/Recipe';

@Injectable()
export class RecipeService {
  static parameters = [HttpClient];

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAllRecipes(): Promise<Recipes> {
    return this.httpClient
      .get<Recipes>('/api/recipes')
      .toPromise();
  }
  getRecipeById(_id): Promise<Recipe> {
    return this.httpClient
      .get<Recipe>(`/api/recipes/${_id}`)
      .toPromise();
  }
  createRecipe(recipe: Recipe): Promise<Recipe> {
    return this.httpClient
      .post<Recipe>(`/api/recipes/`, recipe)
      .toPromise();
  }
  deleteRecipe(_id): Promise<Recipe> {
    return this.httpClient
      .delete<Recipe>(`/api/recipes/${_id}`)
      .toPromise();
  }
  updateRecipe(recipe: Recipe): Promise<Recipe> {
    return this.httpClient
      .put<Recipe>(`/api/recipes/${recipe._id}`, recipe)
      .toPromise();
  }
}
