const jwt = require('jsonwebtoken')
const User = require('../model/User_Schema')

const checkUserAuth = async (req, res) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.starteWith('Bearer')) {
        try {

            //Get token froam header
            token = authorization.splite(" ")[1];

            //Check wahat wa are getting in token and authorization
            console.log('token :', token);
            console.log('authorization : ', authorization);

            //verify tekon
            const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

            //Get token from token
            req.user = await User.findById(userID).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status(401).send({
                status: "failed",
                message: "Unauthorization token user no token"
            })

        }
    }
}
module.exports = checkUserAuth;