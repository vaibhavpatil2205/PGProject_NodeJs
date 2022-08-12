const express = require('express');
// const app = express();
const router = express.Router();
const {createUser,getPaymentPendingUsers,getAllUsers,getUser} = require("../handler/userHandler")
router.get('/getUser',getPaymentPendingUsers)
router.post('/createUser',createUser)
router.get('/getAllUsers',getAllUsers)
router.get('/getUser/:id',getUser)
module.exports = router;