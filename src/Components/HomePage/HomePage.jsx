import React, { useState } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
// import { LinkContainer } from "react-router-bootstrap";

function HomePage() {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  function handleInputs(events) {
    const { name, value } = events.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  function handleSubmission(event) {
    const files = event.target.files;
    const formData = new FormData();
    formData.append("myFile", files[0]);

    fetch("", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function changeHandler(event) {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  }

  async function postData(event) {
    event.preventDefault();
    const { title, description } = data;

    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });

    const dataReceived = await res.json();
    console.log(dataReceived.status);
    if (res.status === 400 || !dataReceived) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Unsuccessful");
      history.push("/");
    }
  }

  async function clearData(event) {
    setData({
      title: "",
      description: "",
    });
  }

  return (
    <>
      <Header />
      <section className="sec_1">
        <h3>Upload Image</h3>
      </section>
      <section className="sec_2">
        <form method="POST">
          <input
            type="file"
            id="myFile"
            name="filename"
            onChange={changeHandler}
          />
          <br />
          <br />
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}

          <button type="submit" onClick={handleSubmission}>
            Submit
          </button>
        </form>
      </section>

      <section>
        <section className="sec_1">
          <h3>Annotation types</h3>
        </section>
        <div className="form-group formGroup">
          <label for="title">
            <h4 id="titl">Title</h4>
          </label>
          <input
            type="text"
            className="form-control formControl"
            id="title"
            aria-describedby="emailHelp"
            onChange={handleInputs}
            value={data.title}
            name="title"
          />
          <small id="emailHelp" className="form-text text-muted">
            <h6 id="et">(Enter title)</h6>
          </small>
          <label for="description">
            <h4 id="descr">Description</h4>
          </label>
          <input
            className="form-control"
            id="description"
            onChange={handleInputs}
            value={data.description}
            name="description"
          ></input>

          <button
            id="add"
            className="btn btn-primary"
            type="submit"
            onClick={postData}
          >
            Add
          </button>
          <button
            id="clear"
            className="btn btn-primary"
            type="submit"
            onClick={clearData}
          >
            Clear
          </button>
        </div>
      </section>

      <section>
        <div id="items" className="my-4">
          <h4>Your Items</h4>
          <table className="table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">SNo</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              <tr>
                <th scope="row">1</th>
                <td>Get some Coffee</td>
                <td>You need coffee as you are a coder</td>
                <td>
                  <button className="btn btn-sm btn-primary">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default HomePage;
