import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../Components/hooks/useFetch";

const Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation().search;
  const queryParams = new URLSearchParams(location);
  const name = queryParams.get("name");
  const {
    data: course,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/courses/${id}`);
  console.log("params: ", course);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [error]);
  return (
    <>
      <div>
        {isPending && <div>loading .......</div>}
        {error && <div>{error}</div>}
        {course && (
          <>
            <p>Hey : {name}</p>
            <h3>Course-Title: {course.title}</h3>
            <p>Course-Price: {course.price}</p>
            <p>Course-Location:{course.loc}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Course;
