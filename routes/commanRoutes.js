const express = require('express')
const router  = express.Router()
const userRouter = require('./userRoutes')
const companyRouter = require('./companyRoutes')

router.use('/user', userRouter )
router.use('/company' , companyRouter)

module.exports = router;
