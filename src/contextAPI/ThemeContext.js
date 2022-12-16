import React, { createContext, useReducer, useState } from "react";
export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
const ThemeProvider = ({ childern }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "blue",
    mode: "light",
  });
  // let darkMode = {
  //   color: "white",
  //   background: "black",
  // };
  // let lightMode = {
  //   color: "white",
  //   background: "black",
  // };
  // const [color, setColor] = useState("black");

  // const [theme, setTheme] = useState(lightMode);
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor , changeMode }}>
      {childern}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
