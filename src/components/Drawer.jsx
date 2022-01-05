import React from "react";
import { withRouter } from "react-router";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Brightness5Icon from "@mui/icons-material/Brightness5";
const useStyles = makeStyles({
  drawer: {
    width: "180px",
  },
  dividerLogo: {
    color: "yellow",
  },
});

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Users",
      icon: <AccountCircleIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "Posts",
      icon: <EmailIcon />,
      onClick: () => history.push("/Posts"),
    },
    {
      text: "Comments",
      icon: <MessageIcon />,
      onClick: () => history.push("/Comments"),
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <>
        <Toolbar className="navbar">
          <Brightness5Icon
            style={{
              color: "white",
              fontSize: "60px",
              textAlign: "center",
              width: "130px",
              paddingBottom: "5px",
              borderBottom: "#AE5A5A 6px solid",
            }}
          />
        </Toolbar>

        <List className="links navbar">
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}

                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>

        <Toolbar className="logout navbar">
          <ExitToAppIcon style={{ color: "#736969" }} />
          <h4 style={{ color: "white" }}>Log out</h4>
        </Toolbar>
      </>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
