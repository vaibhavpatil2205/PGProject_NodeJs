const express = require('express');
const router = express.Router();
const {createDinner,getWeeklyDinnerList,getDinnerListByDay} = require('../handler/dinnerHandler')
router.post('/createDinner',createDinner);
router.get('/getWeeklyDinnerList',getWeeklyDinnerList)
router.get('/getDinnerListByDay/:key',getDinnerListByDay)

module.exports = router;