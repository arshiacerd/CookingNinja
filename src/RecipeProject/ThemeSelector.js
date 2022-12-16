import React from "react";
import "../RecipeProject/styles/themeSelector.css";
import useTheme from "../Components/hooks/useTheme";
import modeIcon from "../RecipeProject/mode.svg";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();
  console.log("mode", mode);
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="theme_selector">
        <div className="mode_toggle">
          <img
            src={modeIcon}
            alt=""
            onClick={toggleMode}
            style={{ filter: mode === "dark" ? "invert(20%)" : "invert(70%)" }}
          />
        </div>
        <div className="theme_buttons">
          {themeColors.map((color) => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThemeSelector;
