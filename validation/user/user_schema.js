const joi = require('@hapi/joi');
const { userLogin } = require('../../controllers/userController');
const usersSchema = {
    registerUser: joi.object({
        name: joi.string().max(20).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
        number: joi.number().integer().min(1000000000).max(9999999999).message("invalid mobile number").required(),
        city: joi.string().required(),
        state: joi.string().required()
    }).unknown(true),

    userLogin: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    }).unknown(true)
}


module.exports = usersSchema;
