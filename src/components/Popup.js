import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BasicTable = (props) => {
  const { row } = props;
  console.log("..............output.......", row);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <Typography variant="h6" gutterBottom component="div">
            Company Info
          </Typography>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">CatchPhrase</TableCell>
            <TableCell align="right">Bs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            <TableRow
              key={row.company.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.company.name}
              </TableCell>
              <TableCell align="right">{row.company.catchPhrase}</TableCell>
              <TableCell align="right">{row.company.bs}</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const BasicPopover = (props) => {
  const { row } = props;
  console.log("--------users info in Popup-------", row);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div aria-describedby={id} onClick={handleClick}>
        <VisibilityIcon />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <BasicTable row={row} />
        </Typography>
      </Popover>
    </div>
  );
};

export default BasicPopover;
