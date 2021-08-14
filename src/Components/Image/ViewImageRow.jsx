import React from "react";

function ViewImageRow(props) {
  return (
    <>
      <tr>
        <td>{props.imgid}</td>
        <td>{props.setid}</td>
        <td>{props.imgurl}</td>
      </tr>
    </>
  );
}

export default ViewImageRow;
