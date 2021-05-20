import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  mainTitle: {
    color: "#262626",
    lineHeight: 2,
    fontSize: 16,
    fontWeight: 300,
    [theme.breakpoints.up("xs")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 40,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 80,
    }
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 1,
    [theme.breakpoints.up("xs")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 28,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    }
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    marginTop: theme.spacing(5),
    alignSelf: "center",
    padding: theme.spacing(1.5),
    fontSize: 18,
  },
}));

export default function HomeHeader() {
  const classes = useStyles();

  const history = useHistory();
  
  function handlePageChange() {
    return history.push("/signup");
  } 

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography variant="h1" className={classes.mainTitle}>
          We want your attention!
        </Typography>
        <Typography variant="h1" component="h2" className={classes.subtitle}>
          All your attention!
          All your attention!
        </Typography>
        <Button
          onClick={handlePageChange}
          className={classes.button}
          color="secondary"
          variant="contained"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
