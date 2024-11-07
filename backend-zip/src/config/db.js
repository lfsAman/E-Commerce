const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://Aiman:22124004@cluster0.3c8fgub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}