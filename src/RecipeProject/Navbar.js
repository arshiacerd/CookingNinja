import React, { useContext, useReducer, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../Components/hooks/useFetch";
import { ThemeContext } from "../contextAPI/ThemeContext";
import SearchBar from "./SearchBar";
import useTheme from "../Components/hooks/useTheme";


import "./styles/Navbar.css";

const Navbar = () => {
  const { color, changeColor } = useTheme();
  console.log("color...." , color)

  const navigate = useNavigate();

  const AddRecipe = () => {
    navigate("/create");

    console.log("df");
  };

  return (
    <>
      <div
        className="navbar-container"
        style={{ background: color }}
        onClick={()=> changeColor("pink")}
      >
        <div className="left" >
          <h1>Cooking Ninja</h1>
        </div>
        <div className="right">
          <SearchBar />
          <button className="nav-btn" onClick={AddRecipe}>
            Create Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
