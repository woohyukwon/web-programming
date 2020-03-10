'use strict';

import {User} from './users.model';

export function index(req, res) {
  User.find()
    .exec()
    .then(function(users) {
      res.json({
        users
      });
    })
    .catch(function(err) {
      res.status(500);
      res.send(err);
    });
}

export function show(req, res) {
  User.findById(req.params.id)
    .exec()
    .then(function(existingUser) {
      if(existingUser) {
        res.status(200);
        res.json(existingUser);
      } else {
        res.status(404);
        res.json({message: 'Not Found'});
      }
    })
    .catch(function(err) {
      res.status(400);
      console.error(err);
      res.send(err.toString());
    });
}

export function create(req, res) {
  let user = req.body;
  User.create(user)
    .then(function(createdUser) {
      res.status(201);
      res.json(createdUser);
    })
    .catch(function(err) {
      res.status(400);
      console.error(err);
      res.send(err.toString());
    });
}

export function update(req, res) {
  User.findById(req.params.id)
    .exec()
    .then(function(existingUser) {
      if(existingUser) {
        existingUser.name.firstName = req.body.name.firstName;
        existingUser.name.lastName = req.body.name.lastName;
        existingUser.username = req.body.username;
        existingUser.email = req.body.email;
        return existingUser.increment().save();
      } else {
        return existingUser;
      }
    })
    .then(function(savedObjects) {
      if(savedObjects) {
        res.status(200);
        res.json(savedObjects[1]);
      } else {
        res.status(404);
        res.json({message: 'Not Found'});
      }
    })
    .catch(function(err) {
      res.status(400);
      console.error(err);
      res.send(err.toString());
    });
}

export function destroy(req, res) {
  User.findById(req.params.id)
    .exec()
    .then(function(existingUser) {
      if(existingUser) {
        return Promise.all([
          existingUser.remove()
        ]);
      } else {
        return existingUser;
      }
    })
    .then(function(deletedUser) {
      if(deletedUser) {
        res.status(204).send();
      } else {
        res.status(404);
        res.json({message: 'Not Found'});
      }
    })
    .catch(function(err) {
      res.status(400);
      console.error(err);
      res.send(err.toString());
    });
}
