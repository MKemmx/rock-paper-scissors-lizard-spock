import React, { useState } from "react";
import "./Advance.css";

// BG IMAGE
import pentagon from "../../images/bg-pentagon.svg";

// CHOICES IMAGE
import rockImage from "../../images/icon-rock.svg";
import paperImage from "../../images/icon-paper.svg";
import scissorsImage from "../../images/icon-scissors.svg";
import lizardImage from "../../images/icon-lizard.svg";
import spockImage from "../../images/icon-spock.svg";

const Advance = () => {
  const [winner, setWinner] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [myChoice, setMyChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [myScore, setMyScore] = useState(0);

  // GAME ADVANCE
  const game2 = [
    {
      name: "rock",
      image: rockImage,
    },
    {
      name: "paper",
      image: paperImage,
    },
    {
      name: "scissors",
      image: scissorsImage,
    },
    {
      name: "lizard",
      image: lizardImage,
    },
    {
      name: "spock",
      image: spockImage,
    },
  ];

  const chekcWinnerGame2 = (myString) => {
    setGameStart(true);
    const myChoice = myString.name.toLowerCase();
    const computerChoiceData = game2[Math.floor(Math.random() * game2.length)];
    const computerChoice = computerChoiceData.name;

    // Setting choices to state
    setMyChoice(myString);

    setTimeout(() => {
      setComputerChoice(computerChoiceData);

      if (computerChoice === myChoice) {
        return setWinner("tie");
      }

      if (
        (computerChoice === "scissors" &&
          (myChoice === "paper" || myChoice === "lizard")) ||
        (computerChoice === "paper" &&
          (myChoice === "rock" || myChoice === "spock")) ||
        (computerChoice === "rock" &&
          (myChoice === "lizard" || myChoice === "scissors")) ||
        (computerChoice === "lizard" &&
          (myChoice === "spock" || myChoice === "paper")) ||
        (computerChoice === "spock" &&
          (myChoice === "scissors" || myChoice === "rock"))
      ) {
        return setWinner("Computer");
      }

      // Win
      setMyScore(myScore + 1);
      return setWinner("human");
    }, 1000);
  };

  // ! RESET GAME
  const resetGame = () => {
    setGameStart(false);
    setWinner(null);
    setComputerChoice(null);
  };

  return (
    <>
      <header>
        {/* CHOICE */}
        <div className="choice-container">
          <h2> ROCK </h2>
          <h2> PAPER </h2>
          <h2> SCISSORS </h2>
          <h2> LIZARD </h2>
          <h2> SPOCK</h2>
        </div>
        {/* SCORE BOARD */}
        <div className="score-container">
          <p> SCORE </p>
          <h1> {myScore} </h1>
        </div>
      </header>
      {/* GAME PICKED */}
      {gameStart ? (
        <div className="gamePicked">
          <div className="item-container">
            <h1> YOU PICKED </h1>
            <div className={`item-image-container ${myChoice?.name}`}>
              <img loading="lazy" src={myChoice?.image} alt={myChoice?.name} />
            </div>
          </div>

          {winner !== null && (
            <div className="play-again-container">
              {winner === "tie" ? (
                <h1> IT'S A TIE </h1>
              ) : winner === "human" ? (
                <h1> YOU WIN </h1>
              ) : (
                <h1> YOU LOSE </h1>
              )}
              <button onClick={resetGame} className="playAgainBtn">
                PLAY AGAIN
              </button>
            </div>
          )}

          <div className="item-container">
            <h1> THE HOUSE PICKED </h1>
            <div className={`item-image-container ${computerChoice?.name}`}>
              <img src={computerChoice?.image} alt={computerChoice?.name} />
            </div>
          </div>
        </div>
      ) : (
        <div className="app">
          <img className="pentagon-bg" src={pentagon} alt="" />
          {game2.map((choice) => (
            <div
              onClick={() => {
                chekcWinnerGame2(choice);
              }}
              key={choice.name}
              className={`${choice.name}-div`}
            >
              <img
                className={choice.name}
                src={choice.image}
                alt={choice.name}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Advance;
