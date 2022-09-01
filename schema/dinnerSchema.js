const mongoose = require("mongoose");

const dinnerSchema = new mongoose.Schema({
    //dishes:[{
        day:{
            type:String
        },
        dish:{
            type:String
         }
        // wednesdayDish:{
        //     type:String
        // },
        // thursdayDish:{
        //     type:String
        // },
        // fridayDish:{
        //     type:String
        // },
        // saturdayDish:{
        //     type:String
        // },
        // sundayDish:{
        //     type:String
        // }
   // }]
})

module.exports = mongoose.model("Dishes",dinnerSchema)