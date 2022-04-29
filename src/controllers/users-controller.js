const userService = require('../services/users-service');

const findAllUsersController = async (req, res) => {
    res.send( await userService.findAllUsersService());
};

const createUserController = async (req, res) => {
    if (!req.body || 
        !req.body.user || 
        !req.body.name ||
        !req.body.imageUrl) {
            return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
        }

        res.send( await userService.createUserService(req.body));
};

module.exports = {
    findAllUsersController,
    createUserController
}
