import React from "react";
import { useState } from "react";

const Video4 = () => {
  let name = "Arshia";
  // const [localName, setLocalName] = useState(name);
  const changeName = () => {
    // setLocalName("Zakir");
    name="Zakir"
  };
  return (
    <>
      <h1>hello {name}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export default Video4;
