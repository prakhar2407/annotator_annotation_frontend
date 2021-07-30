import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import UserSignin from "./Components/UserSignin/UserSignin";
import AdminLogin from "./Components/AdminSignin/AdminSignin";

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
        </Switch>
      </Router>
    </div>
  );
}
