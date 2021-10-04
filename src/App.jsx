import { useState } from "react";
import "./App.css";
import { PlayCard } from "./components/PlayCard/PlayCard";
import { cards } from "./data";

function App() {
  const [cardsData, setCardsdata] = useState(cards);
  const [pickedCards, setPickedCards] = useState(null);

  function shuffleCards() {
    let shuffled = cardsData
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCardsdata(shuffled);
    setPickedCards(null);
  }

  function pickCards(numOfElements) {
    let selectedCards = [];
    for (let i = 0; i < numOfElements; i++) {
      let element = cardsData[Math.floor(Math.random() * cardsData.length)];
      selectedCards.push(element);
    }
    setPickedCards(selectedCards);
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
        <button className="btn-action" onClick={() => pickCards(5)}>
          Pick 5 Cards
        </button>
      </div>
      <div className="container-pickedCards">
        {pickedCards &&
          pickedCards.length > 0 &&
          pickedCards.map((card) => <PlayCard {...card} />)}
      </div>
    </div>
  );
}

export default App;
