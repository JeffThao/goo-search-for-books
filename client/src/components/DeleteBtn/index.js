import React from "react";


function DeleteBtn(props) {
  return (
    <button className="deleteBtn btn btn-danger" {...props} tyle="button" tabIndex="0" style={{backgroundColor:"red"}}>
      ✗
    </button>
  );
}

export default DeleteBtn;
