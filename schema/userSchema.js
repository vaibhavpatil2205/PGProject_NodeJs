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
    // password:{
    //     type:String
    // },
    paymentPaid:{
        type:Boolean
        
    }
})
module.exports = mongoose.model("User",userSchema)