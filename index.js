const express = require("express");
const app = express();
const nodemon = require("nodemon");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require('./routes/userRoutes');
const roomRouter = require('./routes/roomRoute')
const userSchema = require('./schema/userSchema');
const roomSchema = require('./schema/roomSchema');


const mongoose = require("mongoose");
const port = process.env.PORT || 1000;
mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
    console.log("DB Connection Successfully Connected")
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use("/",userRouter)
app.use('/',roomRouter)
app.listen(port,()=>{
    console.log("Server is running on " + port);
})