const User = require("../schema/userSchema")


// Create User

exports.createUser =async (req,res)=>{
const userData = await User.create(req.body)
res.status(200).json({success:true,userData})

},

// Get Payment Pending User

exports.getPaymentPendingUsers = async (req,res)=>{
const result = await User.find({paymentPaid:{$eq:false}})
res.status(200).json({success:true,result})
}

// Get All Users 

exports.getAllUsers = async(req,res)=>{
const user = await User.find()
res.status(200).json({success:true,user})
}

// Get User

exports.getUser = async(req,res)=>{
    const user = await User.findById(req.params.id)
    res.status(200).json({success:true,user})
}