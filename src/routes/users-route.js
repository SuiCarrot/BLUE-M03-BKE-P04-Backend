const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/users', usersController.findAllUsersController);

router.post('/users/create', usersController.createUserController);

module.exports = router
