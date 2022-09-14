import * as React from "react";
import { Button, Container, TextField } from "@mui/material";
import PizzaPic from "../images/Pizza.png";

export default function AddListing() {
  return (
    <div className="Add-listing">
      <Container maxWidth="sm">
        <form className="login-form">
          <TextField
            required
            fullWidth
            margin="normal"
            name="name"
            label="Name"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="address"
            label="Address"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="openHour"
            label="Opens"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="closeHour"
            label="Closes"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="description"
            label="Description"
            type="text"
            variant="standard"
          />

          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#e0e0e0", width: "200px", margin: "10px" }}
          >
            Save 
          </Button>
        </form>
      </Container>

      <img src={PizzaPic} alt="pizza location" width={500} />
    </div>
  );
}
