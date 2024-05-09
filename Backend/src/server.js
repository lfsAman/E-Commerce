const app=require(".");
const { connectDB } = require("./config/db.js");

PORT=5454;

app.listen(PORT,(req,res)=>{
    connectDB()
    
    console.log("Server active at port 5454");
})