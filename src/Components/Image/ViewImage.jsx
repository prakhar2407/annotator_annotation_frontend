import React, { useEffect, useState } from "react";
import { Navbar, Container, Table } from "react-bootstrap";
import ViewImageRow from "./ViewImageRow";

function ViewImage() {
  const [state, setstate] = useState([]);
  function ViewImage(props) {
    return (
      <ViewImageRow
        key={props.imgid}
        imgid={props.imgid}
        setid={props.setid}
        imgurl={props.imgurl}
      />
    );
  }

  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("/api/viewimg");
      const data = await response.json();

      // store the data into our books variable
      setstate(data);
    }
  }, []);
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="">Images</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image ID</th>
              <th>Set ID</th>
              <th>Image URL</th>
            </tr>
          </thead>
          <tbody>{state.map(ViewImage)}</tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ViewImage;
