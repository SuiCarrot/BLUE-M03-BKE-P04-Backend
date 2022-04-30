const User = require("../models/Users");
const jwt = require("jsonwebtoken");

const loginService = async (email) => User.findOne({ email: email }).select("+password");

const generateToken = (userId) => jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = {
    loginService,
    generateToken
}
