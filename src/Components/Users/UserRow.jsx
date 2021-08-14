import React from "react";

function UserRow(props) {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>{props.role_name}</td>
        <td>{props.last_login}</td>
      </tr>
    </>
  );
}

export default UserRow;
