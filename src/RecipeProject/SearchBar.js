import React , {useState}from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="searchBar">
          <label>Search:</label>
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
