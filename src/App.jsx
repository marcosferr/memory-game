import { useState } from "react";
import Card from "./Componentes/Card";
import { Flipper, Flipped } from "react-flip-toolkit";
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
  const restart = () => {
    setScore(0);
    setClickedCards([]);
    shuffleData();
  };
  const shuffleData = () => {
    const newCardSet = [...cardSet];
    setCardSet(newCardSet.sort(() => Math.random() - 0.5));
  };

  return (
    <>
      {score === 12 && <WinModal restart={restart} />}
      <h1>Memory Game</h1>
      <div className="scoreDisplay">
        <div>Current Score: {score} </div>
        <div>Best Score: {bestScore}</div>
      </div>
      <div>
        Get points by clicking on an image but don't click on any more than
        once!
      </div>
      <Flipper flipKey={cardSet} className="card-container">
        {cardSet.map((card) => (
          <Flipped key={card.id} flipId={card.id}>
            <Card
              id={card.id}
              name={card.name}
              imageUrl={card.imageUrl}
              handleClick={handleClick}
            />
          </Flipped>
        ))}
      </Flipper>
    </>
  );
}

const WinModal = ({ restart }) => {
  return (
    <div className="win-modal">
      <div>You Win!</div>
      <button onClick={restart}>Play Again</button>
    </div>
  );
};
export default App;
