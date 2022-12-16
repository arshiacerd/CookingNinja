import React, { useState, useEffect, useCallback } from "react";
import { useFetch } from "./hooks/useFetch";
function CoursesList() {
  // const [course, setCourse] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/courses");
  const { data: courses, isPending, error } = useFetch(url);
  
  console.log(error)
  // var response, jsonData;
  // const handleClick = async () => {
  //   response = await fetch(url);
  //   jsonData = await response.json();
  //   setCourse(jsonData);
  //   console.log(course);
  //   // return jsonData;
  // };
  // useEffect(() => {
  //   handleClick();
  // }, [url]);
  return (
    <>
      {isPending && <h3>Loading courses......</h3>}
      {error && <h3>bvb</h3> }
      {courses &&
        courses.map((data, index) => (
          <div key={index}>
            <h3>{data.title}</h3>
            <p>{data.price}</p>
          </div>
        ))}
      <button onClick={() => setUrl("http://localhost:3000/courses")}>
        Get All Courses
      </button>
      <button
        onClick={() => setUrl("http://localhost:3000/courses?loc=Karachi")}
      >
        Karachi Courses
      </button>
    </>
  );
}

export default CoursesList;
