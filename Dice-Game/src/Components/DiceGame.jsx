/* eslint-disable react-hooks/purity */
import React, { useState } from "react";
import "./diceGame.css";
import Die from "./Die";

export default function DiceGame() {
  const [diceRoll, setDiceRoll] = useState([1, 2, 3, 4]);
  const [rollCount, setRollCount] = useState(0);

  const [totalValue, setTotalValue] = useState(0);

  const randomDiceRoll = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };
  const rollHandleClick = () => {
    const die1 = randomDiceRoll(6);
    const die2 = randomDiceRoll(6);
    const die3 = randomDiceRoll(6);
    const die4 = randomDiceRoll(6);
    setDiceRoll([die1, die2, die3, die4]);

    setRollCount(rollCount + 1);

    const diceTotal = die1 + die2 + die3 + die4;
    setTotalValue(diceTotal);

    console.log([die1, die2, die3, die4]);
  };

  return (
    <>
      <div className="diceGameContainer">
        <div className="diceGameBody">
          <h2 className="title">🎲 Jenny's Dice Game 🎲</h2>

          <div className="dice-grid">
            <Die value={diceRoll[0]} />
            <Die value={diceRoll[1]} />
            <Die value={diceRoll[2]} />
            <Die value={diceRoll[3]} />
          </div>

          <div className="scoreSection">
            <div className="sectionParts">
              <p className="yourRoll">Your Roll</p>
              <p className="bigNum">{totalValue}</p>
              <p className="rollsThisSes">Rolls this session: {rollCount}</p>
            </div>
          </div>

          <div className="rolls">
            <button
              type="button"
              onClick={rollHandleClick}
              className="rollButton"
            >
              Roll Dice
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
