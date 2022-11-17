
const sendMail = async (req, res) => {
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email Send Succesfuly" + info.response);
        }
    })
}

// this is top require --> const User_Schema = require('../model/User_Schema');
const userSignup = async (req, res) => {
    // const email = req.body.email
    const userdata = new User_Schema(req.body
        //{ name: req.body.name,
        // city: req.body.city,
        // number: req.body.number,
        // email: req.body.email,
        // password: req.body.password,
        // state: req.body.state,
        // iS_Active: req.body.iS_Active,
        // role: req.body.role}
    )
    console.log(req.body.name);
    try {
        // const { email, password } = req.body;
        // const new_user = new User_Schema(req.body);
        // const salt = await bcrypt.genSalt(10);
        // new_user.password = await bcrypt.hash(password, salt);

        //    const userExists = await user.findOne({ email: email })
        //    if (userExists) {
        //        return res.status(400).json({ status: 400, erro: "email already exit" });
        //    }
        console.log('inside try');
        const filepath = `/upload/pic ${req.file.filename}`
   userdata.profilepic = filepath
        const add = await userdata.save()
        // const add = await new_user.save()
        console.log('after try')
        res.json(add)
    } catch (err) {
        res.send('Error')
    }
}








const companyReviewDatils = async (req, res) => {
    let id = req.params.key
    console.log('api company id', id);
const company = await Company_Schema.findById(id).lean()
const comments = await review_Schema.find({'companyId': `${id}`}).populate({
    path : 'userID', select : "name profilepic"
}).populate({
    path : "companyId", select : "_id"
})
console.log('**** coment ', comments)
var data = {
    "company" : company,
    "comments" : comments   }
    res.json(data)
}





/////////////// SignUp ///////////////////////////////
const userSignup = async (req, res) => {
    const userdata = new User_Schema(req.body)
    console.log(req.body.name);
    try {
        const { email, password } = req.body;
        const new_user = new User_Schema(req.body);
        const salt = await bcrypt.genSalt(10);
        new_user.password = await bcrypt.hash(password, salt);
           const userExists = await user.findOne({ email : email })
           if (userExists) {
               return res.status(400).json({ status: 400, erro: "email already exit" });
           }
        console.log('inside try');
        const filepath = `/uploads${req.file.filename}`
        userdata.profilepic = filepath
        const add = await userdata.save()
        console.log('after try')
        res.json(add)
        
    } catch (error) {
        res.send({
            sattus : 400,
            message : error.message
        })
    }
}
/////////////////////////////////////////////////