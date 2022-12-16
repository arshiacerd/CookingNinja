import React, { useEffect, useState, useRef } from "react";
import Modal from "./Modal";

const ParentModal = () => {
  const [showModel, setShowModel] = useState(false);

  const handleClose = () => {
    setShowModel(false);
  };
  return (
    <>
      {!showModel && (
        <button
          onClick={() => {
            setShowModel(true);
          }}
        >
          Show Model
        </button>
      )}

      {showModel && (
        <Modal data={setShowModel}>
          <form>
            <label>
              <span> Event Title:</span> <input type="text" />
            </label> <br />
            <label>
              <span> Event date: </span>
              <input type="date" />
            </label> <br />
            <label>
              <span> Event location:</span>
              <select>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Multan">Multan</option>
              </select>
            </label>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ParentModal;
