const express = require('express');
const app = express();
require('./model/config')
const bodyParser = require("body-parser")
const user = require('./model/User_Schema')
const router = require('./routes/userRoutes')
const User_Schema = require('./model/User_Schema');
app.use(express.json())
app.use(bodyParser.json());
const cron =require('node-cron')
const bcrypt = require('bcrypt');
const { sendmail } = require('./controllers/userController');

// const mongoose = require('mongoose')
// const employer_Schema = require('./model/Employer_Schema');
app.get('/', (req, res) => {
    res.send('This is the get Request')
});

// cron.schedule('*/50 */11 * * *',()=>{
//     sendmail();
// console.log(`Runing on 6pm o'clock the day `);
// })

// const sendmails = ()=>{
//     console.log('hello');     }
// cron.schedule(" 1 12 * * *",function(){
// sendmails();    
// })

app.use('/',router)
app.listen(3002, (req, res) => {
    console.log('surver running  : port 3002....')
});


// app.post('/registerUser', async(req, res) => {
//      const email = req.body.email
//     const userdata = new User_Schema({
//         name: req.body.name,
//         city: req.body.city,
//         number: req.body.number,
//         email: req.body.email,
//         password: req.body.password,
//         state: req.body.state,
//         iS_Active: req.body.iS_Active,
//         role: req.body.role
//     })
//     console.log(req.body.name);
//     try {
//         const {email,password} =req.body;
//         const new_user = new User_Schema(req.body);

//         const userExists = await user.findOne({ email: email })
//         if (userExists) {
//             return res.status(400).json({ status: 400, erro: "email already exit" });
//         }
// const salt = await bcrypt.genSalt(10); 
//         new_user.password = await bcrypt.hash(password,salt);

//         console.log('inside try');
//         // const add = await userdata.save()
//         const add = await new_user.save()
//         console.log('after try')
//         res.json(add)
//     } catch (err) {
//         res.send('Error')
//     }
// })
