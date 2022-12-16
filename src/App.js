import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Link,
  NavLink,
  redirect,
} from "react-router-dom";
import Video5 from "./Components/Video5";
import Modal from "./Components/Modal";
import { useState } from "react";
import Portal from "./Components/Portal";
import ParentModal from "./Components/parentModal";
import CoursesList from "./Components/CoursesList";
import MagicMatch from "./Components/MemoryGame/MagicMatch";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import NotFound from "./pages/NotFound";
import RecipeHome from "./RecipeProject/RecipeHome";
import Navbar from "./RecipeProject/Navbar";
import RecipeDetail from "./RecipeProject/RecipeDetail";
import CreateRecipe from "./RecipeProject/CreateRecipe";
import SearchBar from "./RecipeProject/SearchBar";
import Search from "./RecipeProject/Search";
import ThemeSelector from "./RecipeProject/ThemeSelector";
import useTheme from "./Components/hooks/useTheme";
import Video4 from "./Components/Video4";

function App() {
 const {mode} =  useTheme()
  return (
    <div className={`App ${mode}`}>
   
     <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<RecipeHome />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/search" element={<Search />} />
        </Routes> 

{/* ---------------------------------------------------------------------- */}
        {/* Routes */}
        {/* <nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/:id" element={<Course />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
