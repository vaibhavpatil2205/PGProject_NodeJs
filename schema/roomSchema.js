const mongoose = require('mongoose')
const roomSchema = new mongoose.Schema({
    roomNo:{
        type:Number,
        required:true,
        unique: true
    },
    availability:{
        type:String,
        required:true
    },
    roomType:{
        type:String,
        required:true
      
    }
})

module.exports = mongoose.model("RoomSchema",roomSchema)