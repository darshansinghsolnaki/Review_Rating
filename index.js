const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
app.use(express.json())
require('./model/config')
const cron =require('node-cron')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser")
// const user = require('./model/User_Schema')
const router = require('./routes/commanRoutes')
const User_Schema = require('./model/User_Schema');
const { sendmail } = require('./controllers/userController');
app.use(bodyParser.json());


app.use('/',router)

app.listen((process.env.PORT), (req, res) => {
    console.log(`surver running : ${process.env.PORT}`);
});