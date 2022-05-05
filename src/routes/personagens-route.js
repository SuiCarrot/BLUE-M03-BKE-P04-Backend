const express = require('express');
const router = express.Router();
const personagensController = require('../controllers/personagens-controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.get('/characters', personagensController.findPersonagensController);

router.post('/characters/create', personagensController.createPersonagemController);

router.get('/characters/find/:id', personagensController.findPersonagemByIdController);

router.put('/characters/update/:id', personagensController.updatePersonagemController);

router.delete('/characters/delete/:id', personagensController.deletePersonagemController);

router.get('/characters/search/:name', personagensController.findPersonagemByNameController);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));


module.exports = router;
