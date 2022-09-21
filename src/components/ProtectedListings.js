import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ProtectedListings(props) {

  const handleClick = (index) => {
    props.removeListing(index);
  };


  return (
    <div className="listings">
      <Table width={400}>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((row, index) => (
          <TableRow 
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row"></TableCell>
            <TableCell
              sx={{ textDecoration: "underline" }}
              align="left"
            >{row.name}</TableCell>
            <TableCell align="left">{row.description}</TableCell>
            <TableCell align="right">{row.hours}</TableCell>
            <TableCell align="left">{row.address}</TableCell>
            <TableCell align="right">
              <Grid style={{ color: "red", cursor: "pointer" }} item xs={8}>
                <DeleteForeverIcon onClick={() => handleClick(index)} />
              </Grid>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
