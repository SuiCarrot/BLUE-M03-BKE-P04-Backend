const router = require("express").Router();
const authController = require("../controllers/auth-controller");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.post("/auth/login", authController.loginController);

module.exports = router;
