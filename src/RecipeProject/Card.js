import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "../Components/hooks/useTheme";

import "./styles/Card.css";
const Card = ({ recipe }) => {
const {mode}  =  useTheme()
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/recipes/${id}`);
  };
  return (
    <>
      <div className="card">
        {recipe &&
          recipe.map((data, index) => (
            <div className={`card-content ${mode}`} key={data.id}>
              <h3>{data.title}</h3>
              <h6>{data.time}</h6>
              <p>{data.detail}</p>
              <button onClick={() => handleClick(data.id)}>Cook This</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Card;
