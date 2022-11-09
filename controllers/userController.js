const cron = require('node-cron')
const bcrypt = require('bcrypt');
const User_Schema = require('../model/User_Schema');
const user = require('../model/User_Schema')
// const {transporter, mailOption} = require('../service/mailService')
const {transporter,mailOption} = require('../service/mailService')


const sendmail = async(req,res)=>{
    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Email Send Succesfuly" + info.response);
        }
    })
}


const userSignup = async (req, res) => {
    // const email = req.body.email
    const userdata = new User_Schema({
        name: req.body.name,
        city: req.body.city,
        number: req.body.number,
        email: req.body.email,
        password: req.body.password,
        state: req.body.state,
        iS_Active: req.body.iS_Active,
        role: req.body.role
    })
    console.log(req.body.name);
    try {
        const { email, password } = req.body;
        const new_user = new User_Schema(req.body);
        
        const salt = await bcrypt.genSalt(10);
        new_user.password = await bcrypt.hash(password, salt);
        //    const userExists = await user.findOne({ email: email })
        //    if (userExists) {
            //        return res.status(400).json({ status: 400, erro: "email already exit" });
        //    }
        console.log('inside try');
        // const add = await userdata.save()
        const add = await new_user.save()
        console.log('after try')
        res.json(add)
    } catch (err) {
        res.send('Error')
    }
}
cron.schedule('*/5 */12 * * *',()=>{
    sendmail();
console.log(`Runing on 5pm o'clock the day `);
})

const sendmails = ()=>{
    console.log('hello');     }
cron.schedule("5 12 * * *",function(){
sendmails();    
})


module.exports = { userSignup,sendmail }