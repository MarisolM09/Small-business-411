import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ProtectedListings(props) {
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
          <TableRow 
          >
            <TableCell component="th" scope="row"></TableCell>
            <TableCell
              sx={{ textDecoration: "underline" }}
              align="left"
            ></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="right">
              <Grid style={{ color: "red", cursor: "pointer" }} item xs={8}>
                <DeleteForeverIcon />
              </Grid>
            </TableCell>
          </TableRow>
       
        </TableBody>
      </Table>
    </div>
  );
}
