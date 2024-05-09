const jwt=require('jsonwebtoken');
const dotenv=require("dotenv").config();

const generateToken=(userId)=>{
    const token=jwt.sign({userId},process.env.SECRET_KEY,{expiresIn:'24h'});
    console.log(token)
    return token;
};

const getUserIdFromToken=(token)=>{
    const decodeToken=jwt.verify(token,process.env.SECRET_KEY);
    return decodeToken.userId;
}

module.exports={generateToken,getUserIdFromToken}