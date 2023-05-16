const userData = require("../middleware/GetUsers");
const User = require('../models/user');
exports.postAddUsersFromJSON = async (req, res, next) => {
  let fileData = await userData();
  try {
    const dataArray = JSON.parse(fileData); // Parse the fileData string into an array
    if (dataArray.length) {
      dataArray.forEach((i) => {
        User.create({
          name: i.name,
          lname: i.lname,
          email: i.email,
          position: i.position,
          phoneNumber: i.phoneNumber,
          conpany: i.conpany,
          website: i.website,
        });
      });

      res.status(200).send('success');
    }
  } catch (error) {
    console.log(error);
  }
};

exports.CreateUser = async (req, res, next) => {
  try {
    const { name, lname, email, position, phoneNumber } = req.body.newUser;
    await User.create({
      name: name,
      lname: lname,
      email: email,
      position: position,
      phoneNumber: phoneNumber,
    });
    res.status(200).send('User Added');
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to add user');
  }
};