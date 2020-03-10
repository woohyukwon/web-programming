'use strict';

import {Recipe} from './recipes.model';
import {Review} from './reviews.model';
import {User} from '../users/users.model';

export function index(req, res) {
  Recipe.find()
    .populate('reviews')
    .exec()
    .then(function(recipes) {
      res.json({
        recipes
      });
    })
    .catch(function(err) {
      res.status(500);
      console.error(err);
      res.send(err.toString());
    });
}

export function show(req, res) {
  Recipe.findById(req.params.id)
    .populate('reviews')
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe) {
        res.status(200);
        res.json(existingRecipe);
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
  let recipe = req.body;
  Recipe.create(recipe)
    .then(function(createdRecipe) {
      res.status(201);
      res.json(createdRecipe);
    })
    .catch(function(err) {
      res.status(400);
      console.error(err);
      res.send(err.toString());
    });
}

export function createReview(req, res) {
  let review = req.body;
  let updatedRecipe = null;
  let createdReview = null;

  Recipe.findById(req.params.recipeId)
    .populate('reviews')
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe) {
        updatedRecipe = existingRecipe;
        return User.findOne({username: review.user}).exec();
        //use username to find user
      }
    })
    .then(function(existingUser) {
      if(existingUser) {
        review.user = existingUser;
        return Review.create(review);
      }
    })
    .then(function(savedReview) {
      updatedRecipe.reviews.push(savedReview);
      createdReview = savedReview;
      return updatedRecipe.save();
    })
    .then(function(savedRecipe) {
      if(savedRecipe){
        res.status(201);
        res.json(createdReview);
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

export function update(req, res) {
  Recipe.findById(req.params.id)
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe) {
        existingRecipe.name = req.body.name;
        existingRecipe.description = req.body.description;
        existingRecipe.image = req.body.image;
        existingRecipe.prepTime = req.body.prepTime;
        existingRecipe.cookTime = req.body.cookTime;
        existingRecipe.directions = req.body.directions;
        existingRecipe.ingredients = req.body.ingredients;
        return Promise.all([
          existingRecipe.increment().save()
        ]);
      }else {
        return existingRecipe;
      }
    })
    .then(function(savedRecipe) {
      if(savedRecipe){
        res.status(200);
        res.json(savedRecipe);
      }else {
        res.status(404);
        res.json({message: 'Not Found'});
      }})
    .catch(function(err) {
        res.status(400);
        console.error(err);
        res.send(err.toString());
    });
}

export function indexReview(req, res) {
  Review.find()
    .exec()
    .then(function (reviews) {
      res.json({
        reviews
      });
    })
    .catch(function (err) {
      res.status(500);
      console.error(err);
      res.send(err.toString());
    });
}

export function showReview(req, res) {
  Review.findById(req.params.reviewId)
    .exec()
    .then(function (existingReview) {
      if (existingReview) {
        res.status(200);
        res.json(existingReview);
      } else {
        res.status(404);
        res.json({ message: 'Recipe Not Found' });
      }
    })
    .catch(function (err) {
      res.status(400);
      console.error(err);
      res.send(err.toString());
    });
}

export function updateReview(req, res) {
  Recipe.findById(req.params.recipeId)
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe){
        return Review.findById(req.params.reviewId);
      }
    })
    .then(function(existingReview) {
      if(existingReview) {
        existingReview.description = req.body.description;
        existingReview.rating = req.body.rating;
        existingReview.date = new Date();
        return Promise.all([
          existingReview.increment().save()
        ]);
      } else {
        return existingReview;
      }
    })
    .then(function(savedReview) {
      if(savedReview){
        res.status(200);
        res.json(savedReview);
      }else {
        res.status(404);
        res.json({ message: 'Not Found' });
      }
    })
    .catch(function(err) {
        res.status(400);
        console.error(err);
        res.send(err.toString());
    });
}

export function destroy(req, res) {
  Recipe.findById(req.params.id)
    .populate('reviews')
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe) {
        let promises = [];
        existingRecipe.reviews.forEach(review => promises.push(review.remove()));
        promises.push(existingRecipe.remove());
        return Promise.all(promises);
      } else {
        res.status(404);
        res.json({ message: 'Review Not Found' });
      }
    })
    .then(function(deletedRecipe) {
      res.status(204).send();
    })
    .catch(function(err) {
        res.status(400);
        console.error(err);
        res.send(err.toString());
    });
}

export function destroyReview(req, res) {
  Recipe.findById(req.params.recipeId)
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe) {
        let reviewIndex = existingRecipe.reviews.indexOf(req.params.reviewId);
        if(reviewIndex !== -1) {
          existingRecipe.reviews.splice(reviewIndex, 1);
          return Promise.all([
            existingRecipe.save(),
            Review.findByIdAndRemove(req.params.reviewId)
          ])
        } else {
          res.status(404);
          res.json({ message: 'Review Not Found' });
        }
      } else {
        res.status(404);
        res.json({ message: 'Recipe Not Found' });
      }
    })
    .then(function(deletedReview) {
      res.status(204).send();
    })
    .catch(function(err) {
        res.status(400);
        console.error(err);
        res.send(err.toString());
    });
}
