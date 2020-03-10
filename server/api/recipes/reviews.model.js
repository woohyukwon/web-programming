import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let reviewSchema = Schema({
  description: {type: String, required: true},
  rating: {type: Number, required: true},
  date: {type: Date, required: true, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});


let Review = mongoose.model('Review', reviewSchema);

export {Review};
