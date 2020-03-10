export interface Ingredient {
  _id: string;
  name: string;
  amount: number;
}

export interface Recipe {
  _id: string;
  name: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  directions: string[];
  ingredients: Ingredient[];
  reviews: string[];
  __v: number;
}
