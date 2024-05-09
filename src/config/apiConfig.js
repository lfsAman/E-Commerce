import axios from "axios";

export const API_BASE_URL="http://localhost:5454/";
const token=localStorage.getItem("jwt")
console.log("token.....",token)
export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type":"application/json"
    }
})