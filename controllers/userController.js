const cron = require('node-cron')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User_Schema = require('../model/User_Schema');
const user = require('../model/User_Schema')
// const {transporter, mailOption} = require('../service/mailService')
const { transporter, mailOption } = require('../service/mailService')


const sendMail = async (req, res) => {
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email Send Succesfuly" + info.response);
        }
    })
}

const userSignup = async (req, res) => {
    const userData = new User_Schema({
        name : req.body.name,
        city : req.body.city,
        number : req.body.number,
        email : req.body.email,
        password : req.body.password,
        state : req.body.state,
        iS_Active : req.body.iS_Active,
        role : req.body.role
    })
    console.log(req.body.name);
    try {
        const { email, password } = req.body;
        console.log('inside try');
        const userExists = await User_Schema.findOne({ email: email })
        if (userExists) {
            return res.status(400).json({
                status: 400, erro:
                    "email already exit"
            });
        }
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(password, salt);
        // const filepath = `/uploads${req.file.filename}`
        // userData.profilepic = filepath
        const add = await userData.save()
        console.log('after try')
        res.json(add)
    } catch (error) {
        res.send({
            sattus: 400,
            message: error.message
        })
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const User = await user.findOne({ email: email });
            if (User != null) {
                const isMatch = await bcrypt.compare(password, User.password);
                if (User.email === email && isMatch) {
                    //generate jwt
                    const token = jwt.sign({ UserID: User._id },
                        process.env.JWT_SECRET_KEY, { expiresIn: "3d" })
                    res.send({
                        status: "success",
                        message: "login success",
                        "token": token
                    });
                } else {
                    res.send({
                        status: "failed",
                        message: "email or password in not valid ",
                    })
                }
            } else {
                res.send({
                    status: "failed",
                    message: "you are not rigester user "
                });
            }
        }
    } catch (error) {
        console.log('Error' + error);
    }
}

// cron.schedule('* 17 * * *', () => {
//     sendmail();
//     console.log(`Runing on 5pm o'clock the day `);
// })
// const sendmails = () => {
//     console.log('hello');
// }
// cron.schedule("* 17 * * *", function () {
//     sendmails();
// })

const sendUserResetPasswordEmail = async (req, res) => {
    const { email } = req.body
    if (email) {
        const user = await User_Schema.findOne({ email: email })
        if (user) {
            const secret = user._id + process.env.JWT_SECRET_KEY
            const token = jwt.sign({ UserID: user._id }, secret, {
                expiresIn: "15m"
            })
            const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
            console.log('link:', link);
            //send email
            console.log('ee****', user.email);
            let info = await transporter.sendMail({
                from: "rinkesh270698@gmail.com",
                to: "rinkesh270698@gmail.com",
                subjet: "password Reset link ",
                html: `<a href=${link}> Click Here To Reset Password </a>`
            })
            res.send({
                "status": "success",
                "message": "Password Reset Email Send....PLease \ Check Your Email",
                "info": info
            })
        } else {
            res.send({
                "status": "Failed",
                "message": "Email is required"
            })
        }
    } else {
        res.send({
            "status": "Failed",
            "message": "User not found"
        })
    }
}
// const userPasswordReset = async(req,res)=>{
//     const {password, confim_pass} = req,body
// }

// change pwassword means already khonw but want to change 
const userPasswordReset = async (req, res) => {
    const { password, conform_password } = req.body
    const { id, token } = req.params
    const user = await User_Schema.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY
    try {
        jwt.verify(token, new_secret)
        if (password && conform_password) {
            if (password !== conform_password) {
                return res.send({
                    "status": "Failed",
                    "message": "password and conform password should be same "
                })
            } else {
                const salt = await bcrypt.genSalt(10);
                const new_password = await bcrypt.hash(password, salt);
                await User_Schema.findByIdAndUpdate(user._id, { $set: { password: new_password } })
                res.send({
                    "status": "success",
                    "message": "Password Reset Succesfully"
                })
            }
        } else {
            res.send({
                "status": "Failed",
                "message": "All Field Are Required"
            })
        }
    } catch (error) {

    }
}


module.exports = { userSignup, sendMail, userLogin, sendUserResetPasswordEmail, userPasswordReset }