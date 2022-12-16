import React, { useEffect, useState , useRef} from "react";

const UseRefHook = () => {
//   const [count, setCount] = useState(0);
  const count = useRef(1)
  console.log(count.current)
  useEffect(() => {
   count.current = count.current + 1;
  });
  return (
    <>
      <h2>{count.current}</h2>
    </>
  );
};

export default UseRefHook;
