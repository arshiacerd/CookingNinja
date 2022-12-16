import React, { useState } from "react";
// import "./FlipCards.css";
import back from "../assets/back.jpg";
// import ReactCardFlip from "react-card-flip";
const FlipCards = ({ images , handleChoice, flipped , disabled}) => {
  const handleClick =()=>{
    if(!disabled)
    {
      handleChoice(images)

    }

  }
  return (
    <>
      <div key={images.id} className="card-img" >
      <div className={flipped ? "flipped" : ""}>
        <img src={images.img} alt="front" className="front"/>
        <img src={back} alt="back" className="back" onClick={handleClick} />
      </div>
      </div>
    </>
  );
};  

export default FlipCards;
