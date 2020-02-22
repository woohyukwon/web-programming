import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ingredients = Schema({
  name: {type: String, required: true},
  amount: {type: String, required: true}
});

let recipes = Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  prepTime: {type: Number, required: true},
  cookTime: {type: Number, required: true},
  directions: {type: [String], required: true},
  ingredients: {type: [ingredients], required: true},
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
}, { usePushEach: true });

let Recipe = mongoose.model('Recipe', recipes);

export {Recipe};
