const mongoose = require('mongoose');

const employer_Schema = new mongoose.Schema({
name :{
    type : String,
    require : true
},
sub : { 
    type : String,
    require : true,
    default : false,
},
_id : {
    type: String,
    require : true,
    id : true
},
email : {
    type : String ,
    require : true,
    default : "abc@123"
},
})

module.exports = mongoose.model('user',employer_Schema)