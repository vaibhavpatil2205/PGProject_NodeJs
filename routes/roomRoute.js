const express = require('express');
// const app = express();
const router = express.Router();
const {getAvailableRoom,createRoom,getAvailabilityOfSeparateRooms,getAvailabilityOfSharedRooms} = require("../handler/roomHandler")

router.get('/getAvailableRoom',getAvailableRoom)
router.post('/createRoom',createRoom)
router.get('/getAvailabilityOfSeparateRooms',getAvailabilityOfSeparateRooms)
router.get('/getAvailabilityOfSharedRooms',getAvailabilityOfSharedRooms)

module.exports = router;