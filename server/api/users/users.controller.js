'use strict';

// uuidv4 will let us generate unique IDs for our users
import uuidv4 from 'uuid/v4';
import User from './users.model';

// We are storing users in memory for now as JSON objects in an array
let users = [];

// The export keyword makes the function importable in other files
// (such as /server/api/users/index.js)
export function index(req, res) {
  // res.json will return the variable as its JSON string representation
  // https://expressjs.com/en/api.html#res.json
  res.json(User.find());
}


export function show(req, res) {
  // the :id in '/:id' declared by /server/api/users/index.js can be accessed in the request object
  // under the params object, i.e. req.params.id
  var users = User.findById(req.params.id);
  if(users === null) {
    res.status(404);
    res.json({message: 'Not Found'});
  } else {
    res.json(users);
  }
}

export function create(req, res) {
  // Generate a random ID
  let id = uuidv4();

  // The JSON you POST when calling /api/users
  // is parsed automatically into req.body and can be accessed directly
  let name = req.body.name;
  // Validate parameter exists and is a string
  if(!name || typeof name !== 'string') {
    res.status(400);
    return res.json({
      error: 'name(String) is required'
    });
  }

  let address = req.body.address;
  // Validate parameter exists and is a string
  if(!address || typeof address !== 'string') {
    res.status(400);
    return res.json({
      error: 'address(String) is required'
    });
  }

  let age = req.body.age;
  // Validate parameter exists and is a number
  if(!age || typeof age !== 'number') {
    res.status(400);
    return res.json({
      error: 'age(Number) is required'
    });
  }

  // Create a new user object with the generated ID and the fields provided by the user
  var user = {
    "id": req.params.id,
    "name": req.body.name,
    "address": req.body.address,
    "age": req.body.age
  }

  // Set a status code of 201 (created) and return the new user object back to the caller
  // You need to return the new user so that they can see the generated ID
  res.status(201);
  res.send(User.create(user));
}

export function upsert(req, res) {
  let id = req.params.id;
  let name = req.body.name;
  if(!name || typeof name !== 'string') {
    res.status(400);
    return res.json({
      error: 'name(String) is required'
    });
  }
  let address = req.body.address;
  if(!address || typeof address !== 'string') {
    res.status(400);
    return res.json({
      error: 'address(String) is required'
    });
  }
  let age = req.body.age;
  if(!age || typeof age !== 'number') {
    res.status(400);
    return res.json({
      error: 'age(Number) is required'
    });
  }
  let user = {
    id,
    name,
    address,
    age
  };
  var updated = User.findOneAndUpdate(user);
  if (updated == false) {
    res.status(201).send(user);
  }
  else {
    res.status(200).send(user);
  }
}

export function destroy(req, res) {
  var destroyed = User.remove(req.params.id);

  if(destroyed === false) {
    res.json({message: 'Not found'});
  } else {
    res.status(204).send();
  }
}

