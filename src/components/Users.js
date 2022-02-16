import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { viewUsersAction } from "../redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicPopover from "./Popup";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import CustomizedSnackbars from "./Snack";
import PersonIcon from "@mui/icons-material/Person";

import Divider from "@mui/material/Divider";
const Users = () => {
  const [error, setError] = useState([]);
  const users = useSelector((state) => state.users.userInfo);
  const [counter, setCounter] = useState(0);
  console.log("_______________UserInformation________", users);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  let rows = [];

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("_______________Users from useEffect________", users);
    if (!users.length) {
      dispatch(viewUsersAction());

      if (!users.length) {
        setError(<CustomizedSnackbars />);
      }
    }
  }, [users]);

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 15000);
  }, []);
  console.log("==============counter is=============", counter);
  console.log("========error is=========", error);
  const Row = (props) => {
    const { id, row } = props;
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow key={id} sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
              style={{ color: "black", marginRight: "-50px" }}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" className="name-cell">
            <PersonIcon className="person" />
            {row?.name}
          </TableCell>
          <TableCell align="left">{row?.username}</TableCell>

          <TableCell align="left">{row?.email}</TableCell>

          <TableCell align="left">{row?.website}</TableCell>
          <TableCell align="left" sx={{ color: "gray" }}>
            <EditIcon />
            <DeleteIcon onClick={()=>alert("User deleted")}/>
          </TableCell >
        </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }} color="primary">
                <Typography variant="h6" gutterBottom component="div">
                  Address
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>street</TableCell>
                      <TableCell>suite</TableCell>
                      <TableCell>city</TableCell>
                      <TableCell>zip code</TableCell>
                      <TableCell>phone</TableCell>
                      <TableCell>company</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row?.address.map((addressRow) => (
                      <TableRow key={id}>
                        <TableCell sx={{ color: "black" }}>
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen2(!open2)}
                            style={{ color: "black" }}
                          >
                            {open2 ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </IconButton>
                        </TableCell>
                        <TableCell align="left">{addressRow.street}</TableCell>
                        <TableCell component="th" scope="row">
                          {addressRow.suite}
                        </TableCell>
                        <TableCell>{addressRow.city}</TableCell>
                        <TableCell align="left">{addressRow.zipcode}</TableCell>
                        <TableCell align="left">{addressRow.phone}</TableCell>

                        <TableCell align="left">
                          <BasicPopover row={row} />
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <Box sx={{ margin: 1 }}>
                            <Typography
                              variant="h6"
                              gutterBottom
                              component="div"
                            >
                              Geo
                            </Typography>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Lat</TableCell>
                                  <TableCell>lng</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {row?.address.map((geo) => {
                                  return (
                                    <>
                                      <TableRow key={id}>
                                        <TableCell align="left">
                                          {geo.geo.lat}
                                        </TableCell>
                                        <TableCell align="left">
                                          {geo.geo.lng}
                                        </TableCell>
                                      </TableRow>
                                    </>
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  };

  if (users && users.length !== 0) {
    rows = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        website: user.website,
        company: {
          name: user.company.name,
          catchPhrase: user.company.catchPhrase,
          bs: user.company.bs,
        },

        address: [
          {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            phone: user.phone,
            geo: {
              lat: user.address.geo.lat,
              lng: user.address.geo.lng,
            },
          },
        ],
      };
    });
  }
  console.log("===================users rows======================", rows);
  console.log("===================users array======================", users);
  return (
    <TableContainer component={Paper}>
      {/* {error && error.length === 0 ? ( */}
      {rows && rows.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {counter && counter != 0 ? error : <CircularProgress />}
        </Box>
      ) : (
        <Table
          aria-label="collapsible table"
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
        >
          <TableHead>
            <TableRow className="title-row">
              <TableCell />
              <TableCell sx={{ color: "gray" }}>Names</TableCell>
              <TableCell align="left" sx={{ color: "gray" }}>
                Username
              </TableCell>
              <TableCell align="left" sx={{ color: "gray" }}>
                Email
              </TableCell>

              <TableCell align="left" sx={{ color: "gray" }}>
                Website
              </TableCell>
              <TableCell align="left" sx={{ color: "gray" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* {rows.map((row) => (
              <Row key={row?.id} row={row} />
            ))} */}

            {rows.map((row) => {
              console.log("ROW", row);
              return <Row id={row?.id} row={row} />;
            })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default Users;
