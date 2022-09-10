import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';



export default function Login(props) {
  return (
    <div className="Login">
   
   <form>
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
          id={props.id}
          label="Username"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Password"
          type="password"
          defaultValue=""
          variant="standard"
          
        />
      </Box>
      <Button variant="contained" sx={{ color: 'black', backgroundColor: '#e0e0e0'}}>Login</Button>
      </form>
      </div>
   
  );
}
