const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UsersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: true}
})

UsersSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


module.exports = mongoose.model('users-db', UsersSchema);
