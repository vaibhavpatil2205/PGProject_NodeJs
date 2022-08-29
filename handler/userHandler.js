const User = require("../schema/userSchema")


// Create User

exports.createUser =async (req,res)=>{
    let userCheck;
    try{
    userCheck = await User.findOne({email:req.body.email})
}catch(err){
    return res.status(500).json({message:"Server error"})
}

    if(userCheck){
        return res.status(400).json({message:"User already exists"})
    }
const userData = await User.create({
    name:req.body.name,
    email:req.body.email,
    paymentPaid:req.body.paymentPaid
    })
    userData.save()
res.status(201).json({success:true,userData})

}

// update User

exports.updateUser = async(req,res)=>{
    let checkUser;
    try{
    checkUser = await User.findById(req.params.id)
    }catch(err){
    res.status(500).json({message:"Server error"})
    }
    if(checkUser){
        const updateUser = await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(201).json({success:true,updateUser})
    }
}

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

// delete User

exports.deleteUser = async(req,res)=>{
    let checkUser;
    try{checkUser= await User.findByIdAndDelete(req.params.id)
    }catch(err){
        res.status(500).json({message:"User not found"})
    }
    if(checkUser){
        const deleteUser = await User.findByIdAndDelete(req.params.id,req.body)
        res.status(201).json({success:true})
    }

}

// get weekly data

// exports.getWeeklyJoinedUsers = async(req,res)=>{
//  const getUsers = await User.aggregate([
//         { $match: {
//           $expr: {
//             $gt: [
//               "$date",
//               { $dateSubtract: { startDate: "$$NOW", unit: "day", amount: 2 } }
//             ]
//           }
//         }}
//       ])
//     res.status(201).json({success:true,getUsers})
// }


// weekly joined users

exports.getWeeklyJoinedUsers = async(req,res)=>{ 
    const today = new Date();
    today.setDate(today.getDay() -2);
    const user = await User.find({
        dateOfJoining: {
            $gte: today
        }
    })
    res.status(201).json({success:true,user})
}
