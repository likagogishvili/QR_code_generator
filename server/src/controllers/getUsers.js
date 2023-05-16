const User = require('../models/user');

exports.GetUser = async (req, res, next) => {
    const users = await User.findAll();
    if (users) {
        res.send(users)
    } else {
        res.send('Users not found!')
    }
};