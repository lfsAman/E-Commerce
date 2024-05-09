const dotenv=require("dotenv").config();
const mongoose=require("mongoose");

const mongoUrl=process.env.MONGO_URL;

const connectDB=()=>{
    console.log("Connected to database");
    return mongoose.connect(mongoUrl);
}

module.exports={connectDB};