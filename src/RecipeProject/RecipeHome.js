import React, { useContext } from "react";
import Card from "./Card";
import { useFetch } from "../Components/hooks/useFetch";
import { ThemeContext } from "../contextAPI/ThemeContext";

const RecipeHome = () => {
  

  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipe");

  const changeThemeFunc = () => {};

  // const [recipeData, setRecipeData] = useState(recipe);

  return (
    <>
      
      <Card recipe={recipe} />
    </>
  );
};

export default RecipeHome;
