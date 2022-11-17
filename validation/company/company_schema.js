const joi = require('@hapi/joi')
joi.Objectid = require('joi-objectid')(joi);


const companyvalschema = {

    registercompany : joi.object({
        companyname : joi.string().max(30).lowercase().trim().required(),
        city : joi.string().required(),
        location : joi.string().required(),
        founded : joi.string().required(),
        userID : joi.Objectid().required()
    }).unknown(true),  
    // extra fieald add ho jaye gi koi error 

    addreview: joi.object({
        subject : joi.string().min(5).max(20).required(),
        review : joi.string().min(10).max(100).required(),
        rating : joi.number().integer().min(1).max(5).required(),
        userID : joi.Objectid().required(),
        companyId : joi.Objectid().required()
    }).unknown(true)

}


module.exports = companyvalschema