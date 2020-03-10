import mongoose from 'mongoose';
let Schema = mongoose.Schema;


let nameSchema = Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

let userSchema = Schema({
     name: {type: nameSchema, required: true},
     username: {type: String, required: true, unique: true},
     email: {type: String, required: true, unique: true},
});


let User = mongoose.model('User', userSchema);

export {User};
