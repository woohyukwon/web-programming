import mongoose from 'mongoose';
let Schema = mongoose.Schema;


let ingredientsSchema = Schema({
  name: {type: String, required: true},
  amount: {type: String, required: true}
});

let recipesSchema = Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  prepTime: {type: Number, required: true},
  cookTime: {type: Number, required: true},
  directions: {type: [String], required: true},
  ingredients: {type: [ingredientsSchema], required: true},
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});

let Recipe = mongoose.model('Recipe', recipesSchema);

export {Recipe};
