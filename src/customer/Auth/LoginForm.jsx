import { Grid, TextField, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/Auth/Action";

const LoginForm = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const handleSumbit = (event) => {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    
    const userData={
        email:data.get("email"),
        password:data.get("password")
    }
    dispatch(login(userData));
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <Grid container spacing={3}>
          
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
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="w-full"
              sx={{ bgcolor: "#9155FD",padding:"0.75rem 0rem"}}
              type="sumbit"
              variant="contained"
              size="large"
            >
             Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center">
        <div className="py-3 flex items-center">
           <p>Don't have account ?</p>
           <Button onClick={()=>navigate("/register")} className="ml-5 " size="small">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
