const express = require("express");
const app = express();
const cors = require('cors')
const sequelize = require("./src/config/database");

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const userRoute = require('./src/routes/users');

sequelize.sync().then(result => {
    console.log('db connected')
}).catch(err => {
    console.log(err)
})

app.use(userRoute);

app.listen(3001, () => {
    console.log("Server Started on Port 3001");
});