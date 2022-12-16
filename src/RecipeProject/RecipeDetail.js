import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Components/hooks/useFetch";

const RecipeDetail = () => {

  const { id } = useParams();
  console.log("params", id);

  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipe/${id}`);
  return (
    <>
    
      <div className="card">
      {
        isPending && <div>loading.....</div>
      }
      {
        error && <div>{error    }</div>
      }
        {recipe && 
          <div className="card-content">
            <h3>{recipe.title}</h3>
            <h6>{recipe.time}</h6>
            <p>{recipe.detail}</p>
          </div>
        }
      </div>
    </>
  );
};

export default RecipeDetail;
