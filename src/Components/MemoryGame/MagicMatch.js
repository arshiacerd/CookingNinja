import React, { useState, useEffect } from "react";

import FlipCards from "./FlipCards";
import "./FlipCards.css";
import back from "../assets/back.jpg";

import bottle from "../assets/bottle.jpg";
import magnify from "../assets/magnify.png";
import shield from "../assets/shield.jpg";
import sword from "../assets/sword.jpg";
import torch from "../assets/torch.jpg";
import scroll from "../assets/scroll.jpg";

const MagicMatch = () => {
  const [cards, setCard] = useState([]);
  const [turns, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const imgData = [
    {
      img: bottle,
      matched: false,
    },
    {
      img: magnify,
      matched: false,
    },
    {
      img: shield,
      matched: false,
    },
    {
      img: sword,
      matched: false,
    },
    {
      img: torch,
      matched: false,
    },
    {
      img: scroll,
      matched: false,
    },
  ];
  const shuffleCards = () => {
    const shuffleCards = [...imgData, ...imgData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCard(shuffleCards);
    setTurn(0);
    console.log("shuffleCards", shuffleCards);
  };
  useEffect(() => {
    shuffleCards();
  }, []);
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.img === choiceTwo.img) {
        setCard((prevCards) => {
          return prevCards.map((card) => {
            if (card.img === choiceOne.img) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        console.log("those cards match");
        // resetTurns();
      } else {
        console.log("cards do not match");
        setTimeout(() => resetTurns(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);
  const handleChoice = (images) => {
    console.log("images", images);

    choiceOne ? setChoiceTwo(images) : setChoiceOne(images);
  };
  const resetTurns = () => {
    setChoiceOne("");
    setChoiceTwo("");
    setTurn((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  return (
    <>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} className="btn">New Game</button>

      <div className="cards">
        {cards.map((images, index) => (
          <FlipCards
            images={images}
            key={index}
            handleChoice={handleChoice}
            flipped={
              images === choiceOne || images === choiceTwo || images.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
      <p className="turns">Turns: {turns}</p>
    </>
  );
};

export default MagicMatch;
