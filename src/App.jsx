import { useState } from "react";
import { PlayCard } from "./components/PlayCard/PlayCard";
import { cards } from "./data";
import "./App.css";

function App() {
  const [cardsData, setCardsData] = useState(cards);
  const [pickedCards, setPickedCards] = useState(null);

  function shuffleCards() {
    let shuffled = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCardsData(shuffled);
    setPickedCards(null);
  }

  function pickCards(numOfElements) {
    let selectedCards = [];
    for (let i = 0; i < numOfElements; i++) {
      let element = cards[Math.floor(Math.random() * cards.length)];
      selectedCards.push(element);
    }
    let remainingCards = cards.filter((card) => {
      for (let i = 0; i < selectedCards.length; i++) {
        if (
          card.value === selectedCards[i].value &&
          card.suit === selectedCards[i].suit
        )
          return false;
      }
      return true;
    });
    setPickedCards(selectedCards);
    setCardsData(remainingCards);
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
