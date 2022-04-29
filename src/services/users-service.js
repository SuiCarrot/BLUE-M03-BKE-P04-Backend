const User = require('../models/Users')

const findAllUsersService = async () => {
    return await User.find();
}

const createUserService = async (newUser) => {
    return await User.create(newUser)
};

module.exports = {
    findAllUsersService,
    createUserService,
}
