import React, { useState, useRef } from "react";
import "./AdminSignin.css";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AdminLogin() {
  const history = useHistory();

  const [state, setstate] = useState({
    username: "",
    password: "",
  });
  const form = useRef(null);

  function handleInputs(events) {
    const { name, value } = events.target;
    const isChecked = events.target.checked;
    setstate({
      ...state,
      [name]: value,
      checkbox: isChecked,
    });
  }

  // async function searchData(event) {
  //   event.preventDefault();
  //   console.log("searchData Called");
  //   const { search } = state;
  //   const res = await fetch("", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       search: search,
  //     }),
  //   });

  //   const dataReceived = await res.json();
  //   if (res.status === 404 || !dataReceived) {
  //     window.alert("No Data found");
  //   } else {
  //     window.alert("Data Received successfully");
  //   }

  //   module.exports = dataReceived;
  // }

  async function postData(event) {
    event.preventDefault();
    console.log("postData Called");
    const data = new FormData(form.current);
    const res = await fetch("", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((json) => setstate(json.state));

    const dataReceived = await res.json();
    if (res.status === 400 || !dataReceived) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Signin Successful");
      history.push("/");
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <LinkContainer to="/">
          <Navbar.Brand>Login</Navbar.Brand>
        </LinkContainer>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <LinkContainer to="/adminsignin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
            </li>

            <li className="nav-item">
              <LinkContainer to="/usersignin">
                <Nav.Link>User</Nav.Link>
              </LinkContainer>
            </li>
          </ul>
          <form method="POST" className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={handleInputs}
              value={state.search}
              autoComplete
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              // onClick={searchData}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="d-flex justify-content-center align-items-center login-container">
        <form className="login-form text-center" method="POST">
          <h1 className="mb-5 font-weight-light text-uppercase">
            {" "}
            <b>Admin</b> Login
          </h1>
          <div className="form-group">
            <input
              type="text"
              className="form-control rounded-pill form-control-lg"
              placeholder="Username"
              name="username"
              onChange={handleInputs}
              value={state.username}
              autoComplete
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control rounded-pill form-control-lg"
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={handleInputs}
              autoComplete
            />
          </div>
          <div className="forgot-link form-group d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
                name="checkbox"
                value={state.checkbox}
                onChange={handleInputs}
                autoComplete
              />
              <label className="form-check-label" for="remember">
                Remember Password
              </label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase"
            onClick={postData}
          >
            Log in
          </button>
          <p className="mt-3 font-weight-normal">
            Don't have an account?{" "}
            <a href="#">
              <strong>Register Now</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
