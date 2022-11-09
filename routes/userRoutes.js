// const router =require('express').Router()
const express = require('express');
const router = express.Router();
const user = require('../controllers/userController')
// go user /registerUser

const validation = require('../validation/user/user_validationa')

router.post('/registerUser', validation.registerUserValidation ,user.userSignup);
router.get('/sendmail',user.sendmail)

module.exports = router;