import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input, FormControl } from "@mui/material";
import { addUserAction } from "../redux/user/userActions";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonAppBar() {
  const users = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  let Location = useLocation();
  const [title, setTitle] = useState("");
  const [addButton, updateButton] = useState("");
  let path;
  useEffect(() => {
    path = location.pathname;
    getPath();
  }, [location.pathname]);

  function getPath() {
    if (path == "/Posts") {
      setTitle("List of Posts");
      updateButton("Add Post");
    } else if (path == "/Comments") {
      setTitle("List of Comments");
      updateButton("Add Comment");
    } else {
      setTitle("List of Users");
      updateButton("Add User");
    }
  }

  const initialList = [
    {
      name: "",
      surname: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      lat: "",
      lng: "",
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState(initialList);

  const handleChange = (event) => {
    setValue((list[event.target.id] = event.target.value));
    console.log(list);
  };

  const handleSubmit = (event) => {
    if (value) {
      setList(list.concat(value));
    }
    dispatch(addUserAction(list));
    setValue("");

    event.preventDefault();
  };

  const hundleClickOpen = () => {
    setOpen(true);
  };

  const hundleClickClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" style={{ boxShadow: "none" }}>
      <Toolbar className="app-bar">
        <Typography variant="h3" sx={{ flexGrow: 1, marginLeft: "35px" }}>
          {title}
        </Typography>
        <Button
          variant="contained"
          style={{ borderRadius: "10px" }}
          className="add-btn"
          onClick={hundleClickOpen}
        >
          {addButton}
        </Button>
      </Toolbar>
      <Dialog open={open} onClose={hundleClickClose}>
        <DialogTitle style={{ textAlign: "center", fontWeight: "Bold" }}>
          Add user
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <label for="name">Name:</label>

              <TextField
                value={list.name}
                onChange={handleChange}
                authoFocus
                id="name"
              />
            </FormControl>
            <br />
            <FormControl>
              <label for="username">Username:</label>

              <TextField
                value={list.username}
                onChange={handleChange}
                authoFocus
                id="username"
              />
            </FormControl>
            <br />

            <FormControl>
              <label for="street">Steet:</label>

              <TextField
                value={list.street}
                onChange={handleChange}
                authoFocus
                id="street"
              />
            </FormControl>
            <br />
            <FormControl>
              <label for="suite">Suite:</label>

              <TextField
                value={list.suite}
                onChange={handleChange}
                authoFocus
                id="suite"
              />
            </FormControl>
            <br />
            <FormControl>
              <label for="city">city:</label>

              <TextField
                value={list.city}
                onChange={handleChange}
                authoFocus
                id="city"
              />
            </FormControl>
            <br />
            <FormControl>
              <label for="zipcode">zipcode</label>

              <TextField
                value={list.zipcode}
                onChange={handleChange}
                authoFocus
                id="zipcode"
              />
            </FormControl>
            <br />
            <FormControl>
              <label for="lat">Lat:</label>

              <TextField
                value={list.lat}
                onChange={handleChange}
                authoFocus
                id="lat"
              />
            </FormControl>
            <br />
            <FormControl>
              <label for="lng">Lng:</label>

              <TextField
                value={list.lng}
                onChange={handleChange}
                authoFocus
                id="lng"
              />
            </FormControl>

            <DialogActions className="formButtons">
              <Button
                onClick={hundleClickClose}
                color="success"
                variant="contained"
              >
                cancel
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={hundleClickClose}
                type="submit"
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}
