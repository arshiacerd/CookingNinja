import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../Components/hooks/useFetch";
import Card from "./Card";
const Search = () => {
  const location = useLocation().search;
  const queryParams = new URLSearchParams(location);
  const query = queryParams.get("q");
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipe?q=" + query);
  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <p>Loading ....</p>}
      {recipe && <Card recipe={recipe} />}
    </>
  );
};

export default Search;
