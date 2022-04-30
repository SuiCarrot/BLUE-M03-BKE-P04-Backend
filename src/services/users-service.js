const User = require('../models/Users')

const findAllUsersService = () => {
    return User.find();
}

const createUserService = (newUser) => {
    return User.create(newUser)
};

const  findByIdUserService  = async (idUser) => await User.findById(idUser);

const findByEmailUserService =  async (email) =>  User.findOne({ email: email });

module.exports = {
    findAllUsersService,
    createUserService,
    findByIdUserService,
    findByEmailUserService
}
