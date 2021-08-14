import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import UserSignin from "./Components/UserSignin/UserSignin";
import AdminLogin from "./Components/AdminSignin/AdminSignin";
import User from "./Components/Users/User";
import ViewImage from "./Components/Image/ViewImage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/usersignin">
            <UserSignin />
          </Route>
          <Route path="/adminsignin">
            <AdminLogin />
          </Route>
          <Route path="/Users">
            <User />
          </Route>
          <Route path="/ViewImages">
            <ViewImage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
