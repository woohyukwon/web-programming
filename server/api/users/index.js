import express from 'express';
import * as users from './users';

// Declare an Express.js Router instance
let router = express.Router();

// GET methods
router.get('/', users.listContents);
router.get('/:id', users.findOne);

// POST method
router.post('/', users.createUser);

// PUT method
router.put('/:id', users.updateUser);

// DELETE method
router.delete('/:id', users.removeUser);

// Export the Express.js Router for other files to use (such as /server/routes.js)
export {router};
