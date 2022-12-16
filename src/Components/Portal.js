import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
  return ReactDOM.createPortal(
    <h3>This is outer component---------</h3>,
    document.getElementById("other_root")
  );
};

export default Portal;
