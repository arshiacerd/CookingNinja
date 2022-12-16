import React from "react";
// import "./Modal.css";
const Modal = ({ children, data }) => {
   
  return (
    <>
      <div className="model_block">
        <div className="model">
          {children}
          <button onClick={()=>{ data(false)}}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
