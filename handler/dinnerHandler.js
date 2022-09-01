const Dishes= require('../schema/dinnerSchema')

// create dinner
exports.createDinner = async(req,res)=>{
    const dinner = await Dishes.create(req.body)
    res.status(201).json({success:true,dinner})
}

// get Weekly dinner list
exports.getWeeklyDinnerList = async(req,res)=>{
    const dinnerList = await Dishes.find()
    res.status(201).json({success:true,dinnerList})
}

// search Dinner by Day
exports.getDinnerListByDay = async(req,res)=>{
    const getDinner = await Dishes.find({"day":{$regex:req.params.key,$options:"$i"}})
    res.status(201).json({success:true,getDinner})
}