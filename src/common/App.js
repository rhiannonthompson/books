import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import PublicDashboard from "../pages/PublicDashboard";
import SignUp from "../modals/SignUp";
import SignIn from "../modals/SignIn";
import PrivateDashboard from "../pages/PrivateDashboard";
import PublicReadingLists from "../pages/PublicReadingLists";
import Book from "../pages/Book";
import Navbar from "../components/Navbar";

export default function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/public">
          <PublicDashboard />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/private">
          <PrivateDashboard />
        </Route>
        <Route exact path="/public/booklist">
          <PublicReadingLists />
        </Route>
        <Route exact path="/book">
          <Book />
        </Route>
      </Switch>
    </Router>
  );
}
