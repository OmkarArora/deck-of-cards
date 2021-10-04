import { useState } from "react";
import "./App.css";
import { PlayCard } from "./components/PlayCard/PlayCard";
import { cards } from "./data";

function App() {
  const [cardsData, setCardsdata] = useState(cards);

  function shuffleCards() {
    let shuffled = cardsData
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCardsdata(shuffled);
  }

  return (
    <div className="App">
      <div className="container-cards">
        {cardsData &&
          cardsData.length > 0 &&
          cardsData.map((card) => <PlayCard {...card} />)}
      </div>
      <div className="container-actions">
        <button className="btn-action" onClick={shuffleCards}>
          Shuffle
        </button>
        <button className="btn-action">Pick 5 Cards</button>
      </div>
    </div>
  );
}

export default App;
