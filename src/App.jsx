import { useState } from "react";
import Card from "./Componentes/Card";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import data from "./data.json";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardSet, setCardSet] = useState(data);
  const [clickedCards, setClickedCards] = useState([]);
  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
      if (score > bestScore) {
        setBestScore(score);
      }
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, id]);
    }

    shuffleData();
  };
  const shuffleData = () => {
    const newCardSet = [...cardSet];
    setCardSet(newCardSet.sort(() => Math.random() - 0.5));
  };

  return (
    <>
      <h1>Memory Game</h1>
      <div className="scoreDisplay">
        <div>Current Score: {score} </div>
        <div>Best Score: {bestScore}</div>
      </div>
      <div>
        Get points by clicking on an image but don't click on any more than
        once!
      </div>
      <div className="card-container">
        {cardSet.map((item) => (
          <Card key={item.id} {...item} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
}

export default App;
