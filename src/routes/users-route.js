const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');

router.get('/users', usersController.findAllUsersController);

router.post('/users/create', usersController.createUserController);

module.exports = router
