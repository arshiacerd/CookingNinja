import React, { useState } from "react";

const Video5 = () => {
  const [visible, setVisible] = useState(true);
  const courses = [
    {
      title: "CSharp",
    },
    {
      title: "python",
    },
    {
      title: "javascript",
    },
    {
      title: "C++",
    },
  ];
  const [getCourses, setGetCourses] = useState(courses);

 
  const handleClick = (id) => {
    console.log("id", id);
    let filterData = getCourses.filter((event) => {
      return event.id != id;
    });
    console.log(filterData);
    setGetCourses(filterData);
  };
  return (
    <>
      {!visible && (
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          Show List
        </button>
      )}
      {visible && (
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          Hide List
        </button>
      )}
      <h1>Course List-------</h1>
      {visible &&
        getCourses.map((data, index) => (
          <div key={index}>
            <h3>{data.title}</h3>
            <button
              onClick={() => {
                handleClick(data.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      {/* {visible
        ? getCourses.map((data, index) => (
            <div key={index}>
              <h3>{data.title}</h3>
              <button
                onClick={() => {
                  handleClick(data.id);
                }}
              >
                Delete
              </button>
            </div>
          ))
        : ""} */}
    </>
  );
};

export default Video5;
