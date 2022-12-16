import React, { useState, useRef } from "react";

const CreateRecipe = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  var [recipeIng, setRecipeIng] = useState("");
  const [newRecipeIng, setNewRecipeIng] = useState([]);

  const [recipeMethod, setRecipeMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const inputRef = useRef();
  const addIng = () => {
    console.log(inputRef.current);
    setNewRecipeIng((prevIng) => [...prevIng, recipeIng]);
    inputRef.current.innerHTML = newRecipeIng;
    setRecipeIng("");
  };
  const addRecipe = async () => {
    let sendData = await fetch("http://localhost:3000/recipe", {
      method: "post",
      body: JSON.stringify({
        id: Math.random() * 0.5,
        title: recipeTitle,
        detail: recipeMethod,
        time: cookingTime,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    sendData = await sendData.json();
    // console.log("sendData", sendData.result);
    console.log("sendDataLogin", sendData);
  };
  return (
    <>
      <div className="add_recipe">
        <h2>Add a New Recipe</h2>

        <div className="recipe_label">
          <label>Recipe title:</label>
          <input
            type="text"
            onChange={(e) => setRecipeTitle(e.target.value)}
            name="title"
          />
        </div>
        <div className="recipe_label">
          <label>Recipe Ingredients:</label>
          <input
            type="text"
            name="ingredients"
            value={recipeIng}
            onChange={(e) => setRecipeIng(e.target.value)}
          />
          <button onClick={addIng}>add</button>
          <div className="add_ing" ref={inputRef}>
            {newRecipeIng &&
              newRecipeIng.map((item, index) => (
                <>
                  <p key={index}>{item}</p>
                </>
              ))}
          </div>
        </div>
        <div className="recipe_label">
          <label>Recipe Method:</label>
          <input
            type="text"
            name="method"
            onChange={(e) => setRecipeMethod(e.target.value)}
          />
        </div>
        <div className="recipe_label">
          <label>Cooking time (minutes):</label>
          <input
            type="text"
            name="cooking"
            onChange={(e) => setCookingTime(e.target.value)}
          />
        </div>
        <button onClick={addRecipe}>Submit</button>
      </div>
    </>
  );
};

export default CreateRecipe;
