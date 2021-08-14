import React, { useState, useEffect } from "react";
import { Table, Container, Navbar } from "react-bootstrap";
import UserRow from "./UserRow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function User() {
  const [state, setstate] = useState([]);
  const [message, setMessage] = useState("Getting Data");

  function createUser(props) {
    return (
      <UserRow
        key={props.id}
        id={props.id}
        name={props.name}
        username={props.username}
        role_name={props.role_name}
        last_login={props.last_login}
      />
    );
  }

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch("/api/users");
      const data = await response.json();
      if (response.status === 200) {
        setstate(data);
        setMessage("Data Fetched Successfully");
      } else {
        setMessage("Data Could not be Fetched");
      }
    }
  }, []);

  useEffect(() => {
    toastMessage();
    async function toastMessage() {
      await toast(message);
    }
  }, [message]);

  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="">Users</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>User Role</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>{state.map(createUser)}</tbody>
        </Table>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default User;
