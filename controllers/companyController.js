const { count } = require('../model/Company_Schema');
const Company_Schema = require('../model/Company_Schema')
const review_Schema = require('../model/review_Schema')

const createCompany = async (req, res) => {
    const companydata = new Company_Schema(req.body);
    console.log(req.body.companyname);
    const companyExists = await Company_Schema.findOne({ companyname : req.body.companyname})
    if (companyExists) {
        return res.status(400).json({ 
            status: 400,
            Error: "Company is Alredy Exist" 
        });
    }
    try {
        const addcompany = await companydata.save()
        res.json(req.body)
      
            const filepath = `/upload/logo ${req.file.filename}`
            companydata.company_logo = filepath
            // const logopath = `/upload ${req.file.filename}`
            // companydata.profilepic = logopath
    } catch (error) {
        res.json({
            status : 440,
            message : "registered failed.."
        })
    }
}

const companylist = async (req, res) => {
    try {
        const listData = await Company_Schema.find()
        const countcompany = await Company_Schema.count()
        res.send({
            status : 0,
            "total count" : countcompany, listData
        })
    } catch (error) {
        res.send({
            status : "400",
            message : "Not  Found data  "
        })
    }
}

const createreview = async (req, res) => {
    const review_Data = new review_Schema(req.body);
    try {
        const addreview = await review_Data.save()
        res.json(addreview)
    } catch (error) {
        rea.json({
            status : 400,
            message : error.message
        })
    }
}

const companyReviewDatils = async (req, res) => {
    let id = req.params.key
    console.log('api company id', id);
const company = await Company_Schema.findById(id).lean()
const comment = await review_Schema.find({'companyId': `${id}`}).populate({
    path : 'userID', select : ""
})

}

module.exports = { createCompany, companylist, createreview }
