const { model } = require('mongoose');
const { userSchema } = require('../schemas/usersSchema');

const usersModel = new model('users', userSchema);

module.exports = { usersModel };