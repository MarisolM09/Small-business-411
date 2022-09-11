import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";


export default function Listings() {
  return (
    <div className="listings">
      <Table width={400}>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="left">Address</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell sx={{ textDecoration: "underline" }} align="left">
            <Link to="/pizzalisting">Home Slice Pizza</Link>
            </TableCell>
            <TableCell align="left">
              Home Slice Pizza is an independent neighborhood pizza joint
              serving authentic NY-style pizza--by the slice--to nice people
              like you. We offer our homemade, hand tossed, bona fide pies for
              either dine in or carry out.
            </TableCell>
            <TableCell align="right">11AM - 11PM</TableCell>
            <TableCell align="left">
              1415 S Congress Ave, Austin, TX 78704
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell sx={{ textDecoration: "underline" }} align="left">
            <Link to="/coffeelisting">Jo's Coffee</Link>
            </TableCell>
            <TableCell align="left">
              Stumptown coffee, baked goods and sandwiches in colorful digs with
              outdoor area for people-watching.
            </TableCell>
            <TableCell align="right">7AM - 9PM</TableCell>
            <TableCell align="left">242 W 2nd St, Autsin, TX 78701</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
