const express = require('express')
const router  = express.Router()
const company = require('../controllers/companyController')
const {upload} = require('../middlewares/imageStorage')
const companyValidation = require('../validation/company/company_validation')


router.get('/list', company.companylist )
router.post('/createreview', companyValidation.registerreviewvalidation, company.createreview, )
router.post('/create', upload.single("company_logo"), companyValidation.registercompanyvalidation, company.createCompany )
router.post('/reviews', company.companyReviewDatils)


module.exports = router;
