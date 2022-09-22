import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // set cookie here
    document.cookie = "loggedIn=true;Max-Age=60*1000"

    navigate("/protectedlisting");
  };
  

  return (
    <div className="Login">
      <form onSubmit={login}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            name="username"
            label="Username"
            defaultValue=""
            variant="standard"
            style={{ width: "490px" }}
            onChange={handleTextChange}
            value={state.username}
          />
          <TextField
            required
            name= "password"
            label="Password"
            type="password"
            defaultValue=""
            variant="standard"
            style={{ width: "490px" }}
            onChange={handleTextChange}
            value={state.password}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ color: "black", backgroundColor: "#e0e0e0" }}
      
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;