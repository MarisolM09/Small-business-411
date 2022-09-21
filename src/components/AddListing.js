import * as React from "react";
import { useState, useEffect } from "react";
import { Button, Container, TextField } from "@mui/material";
import PizzaPic from "../images/Pizza.png";

export default function AddListing(props) {
  const [listing, setListing] = useState({ id: props.listings.length + 1 });

  // useEffect(() => {
  //   setListing({});
  // }, []);

  const handleAdd = () => {
    props.addListing(listing);
    setListing({
      name: "",
      address: "",
      hours: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setListing({
      ...listing,
      [e.target.name]: e.target.value,
    });
  };
  console.log("listing", listing);
  console.log("Listings", props.listings);
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
            value={listing.name}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="address"
            label="Address"
            type="text"
            variant="standard"
            value={listing.address}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="hours"
            label="Opens"
            type="text"
            variant="standard"
            value={listing.hours}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="description"
            label="Description"
            type="text"
            variant="standard"
            value={listing.description}
            onChange={handleChange}
          />

          <Button
            // type="submit"
            className="login-button"
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#e0e0e0", width: "200px", margin: "10px" }}
            onClick={handleAdd}
          >
            Save
          </Button>
        </form>
      </Container>

      <img src={PizzaPic} alt="pizza location" width={500} />
    </div>
  );
}
