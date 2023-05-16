const express = require('express');
const userControllerAdd = require('../controllers/addUsers');
const userControllerGet = require('../controllers/getUsers');

const router = express.Router();

// add-user => POST
router.get('/add-JSON-user', userControllerAdd.postAddUsersFromJSON);
router.post('/add-user', userControllerAdd.CreateUser);
router.get('/get-users', userControllerGet.GetUser);



module.exports = router;
