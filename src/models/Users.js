const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsersSchema = new mongoose.Schema({
  nameUser: { 
    type: String, 
    required: true 
},
  username: { 
    type: String, 
    required: true, 
    unique: true 
},
  email: { 
    type: Object, 
    required: true, 
    unique: true, 
    lowercase: true 
},
  password: { 
    type: String, 
    required: true, 
    select: false 
  },
  photo: { 
    type: String, 
    required: true 
  },
});

UsersSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('users-db', UsersSchema);
