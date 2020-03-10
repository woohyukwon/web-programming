export interface Review {
  _id: string;
  description: string;
  rating: number;
  date: Date;
  user: string;
  recipeId: string;
}
