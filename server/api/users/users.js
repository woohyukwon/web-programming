import uuidv4 from 'uuid/v4';

let users = [];

export function listContents(req, res) {
  res.status(200);
  res.json({
    users: users
  });
}



export function findOne(req, res) {
  // TODO implement
  let findById = users.filter(function (user) {
    if (user.id == req.params.id) {
      return true;
    }
  });
  if (findById.length == 1) {
    res.status(200);
    res.json(findUsers[0]);
  } else {
    res.status(404);
    res.json({message: "Not Found!"});
  }
  ;
// Search every element in users array
  // if id matches current element in array
  // then 200 status code, and send user as response
  // if you search whole array and find nothing
  // 404 with message not found
}



export function createUser(req, res) {
  /* Implementation here */
  let id = uuidv4();
  if (!req.body.name || !req.body.address || req.body.age <= 0) {
    res.status(400);
    res.json({message: "Bad Request"});
  }
  else {
  let name = req.body.name;
  let address = req.body.address;
  let age = req.body.age;

  let user = {
    id,
    name,
    address,
    age
  };

    users.push(user);
    res.status(201);
    res.json(user);
  }
  // Add id to user
  // (Optionally) validate name, age, address
  // name -> exists and is not null
  // address -> exists and is not null
  // age -> exists and is number greater than 0
  // Add user to users array
  // Set status code to 201 created
  // Respond with user object
}
