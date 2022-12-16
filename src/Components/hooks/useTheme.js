import React, { useContext } from "react";
import { ThemeContext } from "../../contextAPI/ThemeContext";

const useTheme = () => {
    const context = useContext(ThemeContext);
    
    if(context === undefined)
    {
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }
    console.log("context......" , context)
  return context

    };

export default useTheme;
