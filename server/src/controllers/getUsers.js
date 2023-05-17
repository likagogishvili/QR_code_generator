const User = require('../models/user');

exports.GetAllUsers = async (req, res, next) => {
    const users = await User.findAll();
    if (users) {
        res.send(users)
    } else {
        res.send('Users not found!')
    }
};

exports.getUser = async (req, res, next) => {
    let userId = req.body.userId
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
        res.send(user)
    } else {
        res.send('Users not found!')
    }
};