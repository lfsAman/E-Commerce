import { Grid, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
    
  },[jwt,auth.jwt]);


  const handleSumbit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(register(userData))
    console.log("userData",userData);
  };
  return (
    <>
      <div>
        <div >
          <form onSubmit={handleSumbit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="password"
                  fullWidth
                  autoComplete="given-email"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="w-full"
                  sx={{ bgcolor: "#9155FD", padding: "0.75rem 0rem" }}
                  type="sumbit"
                  variant="contained"
                  size="large"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
          <div className="flex justify-center">
            <div className="py-3 flex items-center">
              <p>If you already have account ?</p>
              <Button
                onClick={() => navigate("/login")}
                className="ml-5 "
                size="small"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
