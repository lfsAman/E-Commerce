import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig";
import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const token=localStorage.getItem("jwt");
const registerRequset=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error});

export const register=(userData)=>async(dispatch)=>{
    dispatch(registerRequset())
    try {
        const response=await axios.post(`${API_BASE_URL}auth/signup`,userData);
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(registerSuccess(user.jwt))
        console.log("user",user);
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}

const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user,role)=>({type:LOGIN_SUCCESS,payload:user});
console.log(".........",loginSuccess)
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error});

export const login=(userData)=>async(dispatch)=>{
    dispatch(loginRequest())
    try {
        const response=await axios.post(`${API_BASE_URL}auth/login`,userData);
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(loginSuccess(user.jwt));

    } catch (error) {
        dispatch(loginFailure())
    }
}

const adminLoginRequest=()=>({type:ADMIN_LOGIN_REQUEST});
const adminLoginSuccess=(user)=>({type:ADMIN_LOGIN_SUCCESS,payload:user});
const adminLoginFailure=(error)=>({type:ADMIN_LOGIN_FAILURE,payload:error});

export const adminLogin=(userData)=>async(dispatch)=>{
    dispatch(adminLoginRequest())
    try {
        const response=await axios.post(`${API_BASE_URL}auth/login/admin`,userData);
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(adminLoginSuccess(user.jwt));

    } catch (error) {
        dispatch(adminLoginFailure())
    }
}
const getUserRequset=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error});

export const getUser=(jwt)=>async(dispatch)=>{
    dispatch(getUserRequset())
    try {
        const response=await axios.get(`${API_BASE_URL}api/users/profile`,{
            headers:{
                "Authorization":`Bearers ${jwt}`
            }
        });
        const user=response.data;
        dispatch(getUserSuccess(user));
        console.log(user);
    } catch (error) {
        dispatch(getUserFailure)
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null});
    localStorage.clear()
}
