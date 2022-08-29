const RoomSchema = require("../schema/roomSchema")

exports.getAvailableRoom =async (req,res)=>{
const room = await RoomSchema.find({availability:{$eq:"yes"}})
res.status(200).json({success:true,room})
}

exports.getAvailabilityOfSeparateRooms = async(req,res)=>{
    const room = await RoomSchema.find({roomType: { $regex: new RegExp('separate'), $options: 'i' }})
    res.status(200).json({success:true,room})
}

exports.getAvailabilityOfSharedRooms = async(req,res)=>{
    const room = await RoomSchema.find({roomType: { $regex: new RegExp('shared'), $options: 'i' }})
    res.status(200).json({success:true,room})
}

exports.createRoom = async (req,res)=>{
    const room = await RoomSchema.create(req.body)
    res.status(200).json({success:true,room})
}

