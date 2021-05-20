import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    }
  },
  menuButtons: {
    marginRight: theme.spacing(6),
  },
  logoColor: {
    color: "#f50057"

  },
  button: {
    marginRight: theme.spacing(4),
    color: "#262626",
    fontWeight: 600,
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  bar: {
    background: "none",
  },
}));

export default function Navbar() {
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <AppBar position="fixed" elevation={0} className={classes.bar}>
      <Toolbar>
        <Typography
          style={{ color: "#262626", fontWeight: 600 }}
          variant="h5"
          className={classes.title}
        >
          Book<span className={classes.logoColor}>W</span>orms
        </Typography>
        <div className={classes.menuButtons}>
          <Button
            color="inherit"
            component={Link}
            to={"/"}
            className={classes.button}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to={"/public"}
            className={classes.button}
          >
            Public
          </Button>
          <Button
            color="inherit"
            component={Link}
            to={"/signup"}
            className={classes.button}
          >
            Sign Up
          </Button>
          <Button
            color="inherit"
            component={Link}
            to={"/signin"}
            className={classes.button}
          >
            Sign In
          </Button>
        </div>
      </Toolbar>
      </AppBar>
  </div>
  )
}
