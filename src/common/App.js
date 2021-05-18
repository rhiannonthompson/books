import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Home from "../pages/Home"
import PublicDashboard from "../pages/PublicDashboard"
import SignUp from "../modals/SignUp"
import SignIn from "../modals/SignIn"
import PrivateDashboard from "../pages/PrivateDashboard"
import PublicReadingLists from "../pages/PublicReadingLists"
import Book from "../pages/Book"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              BookWorms
            </Typography>
            <Button
              color="inherit"
              component={Link}
              to={"/"}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={"/public"}
            >
              Public
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={"/signup"}>
              Sign Up
              </Button>
            <Button
              color="inherit"
              component={Link}
              to={"/signin"}>
              Sign In
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/public">
          <PublicDashboard/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/private">
          <PrivateDashboard/>
        </Route>
        <Route exact path="/public/booklist">
          <PublicReadingLists/>
        </Route>
        <Route exact path="/book">
          <Book/>
        </Route>
      </Switch>
    </Router>
  );
}
