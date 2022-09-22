import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";

export default function Navbar(props) {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#66bb6a" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" style={linkStyle}>
                Listings
              </Link>
            </li>

            <li className="nav-list-item">
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/protectedlisting" style={linkStyle}>
                Listing
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/addlisting" style={linkStyle}>
                Add
              </Link>
            </li>
            <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            Logout
          </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
