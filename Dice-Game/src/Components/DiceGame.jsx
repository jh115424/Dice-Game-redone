import React from "react";
import "./diceGame.css";
import Die from "./Die";

export default function DiceGame() {
  return (
    <>
      <div className="diceGameContainer">
        <div className="diceGameBody">
          <h2 className="title">🎲 Jenny's Dice Game 🎲</h2>

          <div className="dice-grid">
            <Die />
            <Die />
            <Die />
            <Die />
          </div>
        </div>

        <div className="sessionArea">
            
        </div>
      </div>
    </>
  );
}
