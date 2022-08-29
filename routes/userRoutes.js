const express = require('express');
// const app = express();
const router = express.Router();
const {createUser,getPaymentPendingUsers,getAllUsers,getUser,updateUser,getWeeklyJoinedUsers} = require("../handler/userHandler")
router.get('/getPaymentPendingUsers',getPaymentPendingUsers)
router.post('/createUser',createUser)
router.get('/getAllUsers',getAllUsers)
router.get('/getUser/:id',getUser)
router.put('/updateUser/:id',updateUser)
router.get('/getWeeklyJoinedUsers',getWeeklyJoinedUsers)
module.exports = router;