import React from "react";
import { useFetch } from "../Components/hooks/useFetch";
import { BrowserRouter, Route, Routes, Switch, Link, NavLink } from "react-router-dom";

const Home = () => {
  const {
    data: courses,
    isPending,
    error,
  } = useFetch("http://localhost:3000/courses");
  return (
    <>
      {isPending && <h3>loading .......</h3>}
      {error && <div>{error}</div>}
      {courses &&
        courses.map((course, index) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            <Link to={`/courses/${course.id}`}>Read More.....</Link>
          </div>
        ))}
    </>
  );
};

export default Home;
