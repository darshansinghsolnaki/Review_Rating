// const express = require('express');
// const app = express();


// app.get('/', (req,res)=>{
//     // console.log(hello )
//     res.send('home page ')
// })

// app.post('/student', (req,res)=>{
//     console.log(req.body)
// res.send('studenrt page')
// })

// app.get('/employe', (req,res)=>{
    
//     // try{
//         // const crud = crudSchema.
//     // }
// })

// app.listen(3002,(req,res)=>{
//     console.log('surver running is : 3002')
// })



const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const crudSchema = require('./model/employerSchema');
require('./model/config')
// const { response } = require('express');
app.use(bodyParser.json());
app.use(express.json())



app.get('/', (req, res) => {
    res.send('home')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('login page')
})


app.post('/employe/add', async (req, res) => {
    const cruddata = new crudSchema({
        _id : req.body._id,
        name: req.body.name,
        sub: req.body.sub,
        email: req.body.email
    })
    console.log(req.body.name);
    try {
        console.log('inside try');
        const addRes = await cruddata.save()
        console.log('after try')
        res.json(addRes)
    } catch (arr) {
        res.send('Error')

    }
})

app.delete('/employe/delete/:id', async (req, res) => {
    await crudSchema.findByIdAndDelete(req.params.id)
    try {
        res.status(204).send().json({
            status: 'Succes',
            data: {}
        })
    } catch (err) {
        res.status(500).json({
            status: Failed,
            Message: err
        })
    }
})

app.get('/employe/list', async (req, res) => {
    try {
        console.log('Get Request')
        const crud = await crudSchema.find();
        res.json(crud)
    } catch (err) {
        res.send('Error' + err)
    }
})

// app.get('/student',(req,res)>{
//     res.send('student page')
// })

app.listen(3002, (req, res) => {
    console.log('surver running  : port 3002....')
});


