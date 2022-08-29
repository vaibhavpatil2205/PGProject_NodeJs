const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true   
    },
    paymentPaid:{
        type:Boolean    
    },
    dateOfJoining:{
        type:Date,
        //default:new Date().toLocaleDateString()
        default:new Date()
    }
})
module.exports = mongoose.model("User",userSchema)